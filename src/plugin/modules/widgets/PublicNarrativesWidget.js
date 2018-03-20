define([
    'jquery',
    './DashboardWidget',
    'kb_widget/widgets/buttonBar',
    'bootstrap'
], function($, DashboardWidget, Buttonbar) {
    'use strict';
    var widget = Object.create(DashboardWidget, {
        init: {
            value: function(cfg) {
                cfg.name = 'PublicNarrativesWidget';
                cfg.title = 'Public Narratives';
                this.DashboardWidget_init(cfg);

                // TODO: get this from somewhere, allow user to configure this.
                this.params.limit = 10;

                this.view = 'slider';
            }
        },
        getAppName: {
            value: function(name) {
                return this.getState(['appsMap', name, 'name'], name);
            }
        },
        getMethodName: {
            value: function(name) {
                return this.getState(['methodsMap', name, 'name'], name);
            }
        },
        renderLayout: {
            value: function() {
                this.container.html(this.renderTemplate('layout'));
                this.places = {
                    title: this.container.find('[data-placeholder="title"]'),
                    alert: this.container.find('[data-placeholder="alert"]'),
                    content: this.container.find('[data-placeholder="content"]')
                };

            }
        },
        setupUI: {
            value: function() {
                if (this.hasState('narratives') && this.getState('narratives').length > 0) {
                    this.buttonbar = Object.create(Buttonbar).init({
                        container: this.container.find('[data-placeholder="buttonbar"]')
                    });
                    this.buttonbar
                        .clear()

                    /*.addRadioToggle({
                     buttons: [
                     {
                     label: 'Slider',
                     active: true,
                     class: 'btn-kbase',
                     callback: function (e) {
                     this.view = 'slider';
                     this.refresh();
                     }.bind(this)
                     },
                     {
                     label: 'Table',
                     class: 'btn-kbase',
                     callback: function (e) {
                     this.view = 'table';
                     this.refresh();
                     }.bind(this)
                     }]
                     })
                     */
                        .addInput({
                            placeholder: 'Search',
                            place: 'end',
                            onkeyup: function(e) {
                            // little hack to make sure the public narratives is opened up.
                                var collapse = this.places.title,
                                    id;
                                if (collapse.hasClass('collapsed')) {
                                    id = collapse.attr('data-target');
                                    $(id).collapse('show');
                                }

                                this.filterState({
                                    search: $(e.target).val()
                                });
                            }.bind(this)
                        });
                }
            }
        },
        render: {
            value: function() {
                // Generate initial view based on the current state of this widget.
                // Head off at the pass -- if not logged in, can't show profile.
                if (this.error) {
                    this.renderError();
                } else if (this.runtime.getService('session').isLoggedIn()) {
                    this.places.title.html(this.widgetTitle);
                    this.places.content.html(this.renderTemplate(this.view));
                } else {
                    // no profile, no basic aaccount info
                    this.places.title.html(this.widgetTitle);
                    this.places.content.html(this.renderTemplate('unauthorized'));
                }
                var that = this;
                that.container.find('[data-toggle="popover"]').popover();
                that.container.find('[data-toggle="tooltip"]').tooltip();
                //this.container.find('[data-toggle="popover"]').popover();
                //this.container.find('[data-toggle="tooltip"]').tooltip();
                return this;
            }
        },
        filterState: {
            value: function(options) {
                if (!options.search || options.search.length === 0) {
                    this.setState('narrativesFiltered', this.getState('narratives'));
                    return;
                }
                var searchRe = new RegExp(options.search, 'i'),
                    nar = this.getState('narratives').filter(function(x) {
                        if (
                            x.workspace.metadata.narrative_nice_name.match(searchRe)

                            ||

                            x.workspace.owner.match(searchRe)

                            ||

                            (x.object.metadata.cellInfo &&
                                (function(apps) {
                                    for (var i in apps) {
                                        var app = apps[i];
                                        if (app.match(searchRe) || this.getAppName(app).match(searchRe)) {
                                            return true;
                                        }
                                    }
                                }.bind(this))(Object.keys(x.object.metadata.cellInfo.app)))

                            ||

                            (x.object.metadata.cellInfo &&
                                (function(methods) {
                                    for (var i in methods) {
                                        var method = methods[i];
                                        if (method.match(searchRe) || this.getMethodName(method).match(searchRe)) {
                                            return true;
                                        }
                                    }
                                }.bind(this))(Object.keys(x.object.metadata.cellInfo.method)))

                        ) {
                            return true;
                        } else {
                            return false;
                        }
                    }.bind(this));
                this.setState('narrativesFiltered', nar);
            }
        },
        onStateChange: {
            value: function() {
                var count = this.doState('narratives', function(x) {
                    return x.length;
                }, null);
                var filtered = this.doState('narrativesFiltered', function(x) {
                    return x.length;
                }, null);

                this.viewState.setItem('publicNarratives', {
                    count: count,
                    filtered: filtered
                });
                /*Postal
                 .channel('dashboard.metrics')
                 .publish('update.sharedNarratives', {
                 count: count
                 }
                 );
                 */
            }
        },
        setInitialState: {
            value: function() {
                return this.getNarratives({
                    type : 'public'
                })
                    .then(function(narratives) {
                        narratives = narratives.filter(function(x) {
                            // Show only narratives which are public, no matter the
                            // other conditions (e.g. may be owned by this user,
                            // may be shared with this user as well.)
                            if (x.workspace.globalread === 'r') {
                                return true;
                            }
                            return false;
                        }.bind(this));
                        this.setState('narratives', narratives);
                        this.setState('narrativesFiltered', narratives);
                    }.bind(this));
            }
        }
    });
    return widget;
});
