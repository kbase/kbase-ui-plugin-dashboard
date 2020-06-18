define(['jquery', './DashboardWidget', 'kbaseUI/widget/buttonBar', 'bootstrap'], function ($, DashboardWidget, ButtonBar) {
    'use strict';
    var widget = Object.create(DashboardWidget, {
        init: {
            value: function (cfg) {
                cfg.name = 'NarrativesWidget';
                cfg.title = 'Your Narratives';
                this.DashboardWidget_init(cfg);

                return this;
            }
        },
        getViewTemplate: {
            value: function () {
                if (this.error) {
                    return 'error';
                }
                if (this.runtime.getService('session').isLoggedIn()) {
                    return 'slider';
                }
                return 'unauthorized';
            }
        },
        render: {
            value: function () {
                // Generate initial view based on the current state of this widget.
                // Head off at the pass -- if not logged in, can't show profile.
                this.places.title.html(this.widgetTitle);
                this.places.content.html(this.renderTemplate(this.getViewTemplate()));
                // NB this only applies to this widget.
                this.container.find('[data-toggle="popover"]').popover();
                this.container.find('[data-toggle="tooltip"]').tooltip();
                return this;
            }
        },
        setupUI: {
            value: function () {
                if (this.hasState('narratives') && this.getState('narratives').length > 0) {
                    this.buttonbar = Object.create(ButtonBar).init({
                        container: this.container.find('[data-placeholder="buttonbar"]')
                    });
                    this.buttonbar
                        .clear()
                        .addButton({
                            name: 'newnarrative',
                            label: 'New Narrative',
                            icon: 'plus-circle',
                            style: 'primary',
                            class: 'btn-kbase',
                            url: '/#narrativemanager/new',
                            external: true
                        })
                        .addInput({
                            placeholder: 'Search Your Narratives',
                            place: 'end',
                            onkeyup: function (e) {
                                this.setParam('filter', $(e.target).val());
                            }.bind(this)
                        });
                }
            }
        },
        filterNarratives: {
            value: function () {
                var search = this.getParam('filter'),
                    searchRe = new RegExp(search, 'i'),
                    nar;
                if (!search || search.length === 0) {
                    this.setState('narrativesFiltered', this.getState('narratives'));
                    return;
                }
                nar = this.getState('narratives').filter(
                    function (x) {
                        if (
                            x.workspace.metadata.narrative_nice_name.match(searchRe) ||
                            (x.object.metadata.cellInfo &&
                                function (apps) {
                                    for (var i in apps) {
                                        var app = apps[i];
                                        if (app.match(searchRe) || this.getAppName(app).match(searchRe)) {
                                            return true;
                                        }
                                    }
                                }.bind(this)(Object.keys(x.object.metadata.cellInfo.app))) ||
                            (x.object.metadata.cellInfo &&
                                function (methods) {
                                    for (var i in methods) {
                                        var method = methods[i];
                                        if (method.match(searchRe) || this.getMethodName(method).match(searchRe)) {
                                            return true;
                                        }
                                    }
                                }.bind(this)(Object.keys(x.object.metadata.cellInfo.method)))
                        ) {
                            return true;
                        } else {
                            return false;
                        }
                    }.bind(this)
                );
                this.setState('narrativesFiltered', nar);
            }
        },
        onParamChange: {
            value: function () {
                this.filterNarratives();
            }
        },
        onStateChange: {
            value: function () {
                // Need to filter narratives?

                var count = this.doState(
                    'narratives',
                    function (x) {
                        return x.length;
                    },
                    null
                );
                var filtered = this.doState(
                    'narrativesFiltered',
                    function (x) {
                        return x.length;
                    },
                    null
                );

                var sharingCount = this.doState('narratives', function (narratives) {
                    if (!narratives) {
                        return 0;
                    }
                    var sharingCount = 0;
                    for (var i = 0; i < narratives.length; i++) {
                        var nar = narratives[i];
                        if (nar.permissions.length > 0) {
                            sharingCount++;
                        }
                    }
                    return sharingCount;
                });

                if (this.hasState('narratives')) {
                    this.viewState.setItem('narratives', {
                        count: count,
                        sharingCount: sharingCount,
                        filtered: filtered
                    });
                }
            }
        },
        setInitialState: {
            value: function () {
                return this.getNarratives({
                    type: 'mine'
                }).then(
                    function (narratives) {
                        this.setState('narratives', narratives);
                        this.filterNarratives();
                    }.bind(this)
                );
            }
        }
    });

    return widget;
});
