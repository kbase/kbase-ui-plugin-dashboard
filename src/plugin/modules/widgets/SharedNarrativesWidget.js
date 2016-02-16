/*global
 define, require
 */
/*jslint
 browser: true,
 white: true
 */
define([
    'jquery',
    'kb_dashboard_widget_base',
    'kb/widget/widgets/buttonBar',
    'bluebird',
    'bootstrap'
],
    function ($, DashboardWidget, Buttonbar, Promise) {
        "use strict";
        var widget = Object.create(DashboardWidget, {
            init: {
                value: function (cfg) {
                    cfg.name = 'SharedNarrativesWidget';
                    cfg.title = 'Narratives Shared with You';
                    this.DashboardWidget_init(cfg);

                    // TODO: get this from somewhere, allow user to configure this.
                    this.params.limit = 10;

                    this.view = 'slider';
                }
            },
            getAppName: {
                value: function (name) {
                    return this.getState(['appsMap', name, 'name'], name);
                }
            },
            getMethodName: {
                value: function (name) {
                    return this.getState(['methodsMap', name, 'name'], name);
                }
            },
            setupUI: {
                value: function () {
                    if (this.hasState('narratives') && this.getState('narratives').length > 0) {
                        this.buttonbar = Object.create(Buttonbar).init({
                            container: this.container.find('[data-placeholder="buttonbar"]')
                        });
                        this.buttonbar
                            .clear()
                            .addInput({
                                placeholder: 'Search',
                                place: 'end',
                                onkeyup: function (e) {
                                    this.setParam('filter', $(e.target).val());
                                }.bind(this)
                            });
                    }
                }
            },
            render: {
                value: function () {
                    // Generate initial view based on the current state of this widget.
                    // Head off at the pass -- if not logged in, can't show profile.
                    if (this.error) {
                        this.renderError();
                    } else if (this.runtime.getService('session').isLoggedIn()) {
                        //if (this.initialStateSet) {
                        this.places.title.html(this.widgetTitle);
                        this.places.content.html(this.renderTemplate(this.view));
                        //}
                    } else {
                        //if (this.initialStateSet) {
                        // no profile, no basic aaccount info
                        this.places.title.html(this.widgetTitle);
                        this.places.content.html(this.renderTemplate('unauthorized'));
                        //}
                    }
                    this.container.find('[data-toggle="popover"]').popover();
                    this.container.find('[data-toggle="tooltip"]').tooltip();
                    return this;
                }
            },
            filterState: {
                value: function () {
                    var search = this.getParam('filter');
                    if (!search || search.length === 0) {
                        this.setState('narrativesFiltered', this.getState('narratives'));
                        return;
                    }
                    try {
                        var searchRe = new RegExp(search, 'i');
                    } catch (ex) {
                        // User entered invalid search expression. How to give the user feedback?
                    }
                    var nar = this.getState('narratives').filter(function (x) {
                        if (x.workspace.metadata.narrative_nice_name.match(searchRe) ||
                            (x.object.metadata.cellInfo &&
                                (function (apps) {
                                    for (var i in apps) {
                                        var app = apps[i];
                                        if (app.match(searchRe) || this.getAppName(app).match(searchRe)) {
                                            return true;
                                        }
                                    }
                                }.bind(this))(Object.keys(x.object.metadata.cellInfo.app))) ||
                            (x.object.metadata.cellInfo &&
                                (function (methods) {
                                    for (var i in methods) {
                                        var method = methods[i];
                                        if (method.match(searchRe) || this.getMethodName(method).match(searchRe)) {
                                            return true;
                                        }
                                    }
                                }.bind(this))(Object.keys(x.object.metadata.cellInfo.method))))
                        {
                            return true;
                        } else {
                            return false;
                        }
                    }.bind(this));
                    this.setState('narrativesFiltered', nar);
                }
            },
            onStateChange: {
                value: function () {
                    var count = this.doState('narratives', function (x) {
                        return x.length
                    }, null);
                    var filtered = this.doState('narrativesFiltered', function (x) {
                        return x.length
                    }, null);

                    this.viewState.setItem('sharedNarratives', {
                        count: count,
                        filtered: filtered
                    });
                }
            },
            getAppsx: {
                value: function () {
                    var methodStore = new NarrativeMethodStore(this.runtime.getConfig('services.narrative_method_store.url'), {
                        token: this.runtime.service('session').getAuthToken()
                    });
                    return Promise.all([
                        methodStore.list_apps({}),
                    ])
                        .spread(function (apps) {
                            var appMap = {};
                            apps.forEach(function (app) {
                                appMap[app.id] = app;
                            });
                            return appMap;
                        });
                }
            },
            setInitialState: {
                value: function (options) {

                    return this.getNarratives({
                        showDeleted: 0
                    })
                        .then(function (narratives) {
                            var username = this.runtime.getService('session').getUsername();
                            narratives = narratives
                                .filter(function (narrative) {
                                    if (narrative.workspace.owner === username ||
                                        narrative.workspace.user_permission === 'n') {
                                        return false;
                                    }
                                    return true;
                                }.bind(this));
                            
                            this.setState('narratives', narratives);
                            this.filterState();
                        }.bind(this));

                }
            }
        });

        return widget;
    });