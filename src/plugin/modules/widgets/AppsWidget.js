/*global define */
/*jslint white: true */
define([
    'bluebird',
    'kb_service_narrativeMethodStore',
    'kb_service_api',
    'kb_common_logger',
    'kb_common_html',
    'kb_widgetBases_dataWidget',
    'bootstrap'
],
    function (Promise, NarrativeMethodStore, fServiceApi, Logger, html, DataWidget) {
        'use strict';


        function factory(config) {
            var div = html.tag('div'),
                span = html.tag('span'),
                table = html.tag('table'),
                tr = html.tag('tr'),
                td = html.tag('td'),
                th = html.tag('th'),
                a = html.tag('a'),
                i = html.tag('i'),
                h4 = html.tag('h4');

            function renderPanel(content) {
                return div({class: 'panel panel-default dashboardAppsWidget', dataWidget: 'dashboardApps'}, [
                    div({class: 'panel-heading'}, [
                        div({class: 'kb-row'}, [
                            div({class: '-col -span-8'}, [
                                span({class: 'fa fa-cubes pull-left', style: {fontSize: '150%', paddingRight: '10px'}}),
                                span({class: 'panel-title', style: {verticalAlign: 'middle'}, dataPlaceholder: 'title'}, [
                                    content.title
                                ])
                            ]),
                            div({class: '-col -span-4', style: {textAlign: 'right'}}, [
                                div({class: 'btn-group', dataPlaceholder: 'buttons'})
                            ])
                        ])
                    ]),
                    div({class: 'panel-body'}, [
                        div({dataPlaceholder: 'alert'}),
                        div({dataPlaceholder: 'content'}, content.content)
                    ])
                ]);
            }

            function renderApps(w, type) {
                var apps = w.get('appOwnership')[type];
                if (apps.length === 0) {
                    return div({style: {font: 'italic', textAlign: 'center'}}, [
                        'No Apps found.'
                    ]);
                }
                return apps.map(function (app) {
                    return  table({class: 'table table-borderless hoverable'}, [
                        tr([
                            td({valign: 'baseline', style: {verticalAlign: 'top'}}, [
                                a({href: '#narrativestore/app/' + app.app.id, target: '_blank'}, app.app.name)
                            ]),
                            td({width: '30px', valign: 'baseline', style: {verticalAlign: 'top'}}, [
                                div({class: '-switchable'}, [
                                    div({class: '-if-inactive'}, [
                                        span({class: '-appcount'}, app.count)
                                    ]),
                                    div({class: '-if-active'}, [
                                        a({href: '#narrativemanager/new?app=' + app.app.id, class: 'btn btn-default btn-link', target: '_blank', dataToggle: 'tooltip', dataPlacement: 'auto', title: 'Create a new Narrative using this App', dataContainer: 'body'}, [
                                            span({class: '-icon'}, [
                                                span({class: 'fa-stack'}, [
                                                    i({class: 'fa fa-file fa-stack-2x'}),
                                                    i({class: 'fa fa-plus fa-inverse fa-stack-1x', style: {marginTop: '3px'}})
                                                ])
                                            ])
                                        ])
                                    ])
                                ])
                            ])
                        ])
                    ]);
                });
            }

            function renderData(w) {
                return table({class: 'apps'}, [
                    tr([
                        th(h4('Your Favorites')),
                        th(h4("Collaborator's Favorites")),
                        th(h4('Public Favorites'))
                    ]),
                    tr([
                        td(renderApps(w, 'owned')),
                        td(renderApps(w, 'shared')),
                        td(renderApps(w, 'public'))
                    ])
                ]);
            }

            return DataWidget.make({
                runtime: config.runtime,
                title: 'KBase Apps',
                on: {
                    initialContent: function () {
                        return html.loading();
                    },
                    fetch: function (params) {
                        var widget = this,
                            methodStore = new NarrativeMethodStore(widget.getConfig('services.narrative_method_store.url'), {
                            token: widget.runtime.service('session').getAuthToken()
                        }),
                            kbService = fServiceApi.make({runtime: widget.runtime}),
                            appMap = {};
                        if (!widget.runtime.service('session').isLoggedIn()) {
                            widget.set('apps', null);
                            return;
                        }
                        this.set('ready', false);
                        return methodStore.list_apps_full_info({})
                            .then(function (allApps) {
                                allApps.forEach(function (x) {
                                    appMap[x.id] = {
                                        owned: {
                                            count: 0,
                                            narratives: {}
                                        },
                                        shared: {
                                            count: 0,
                                            narratives: {}
                                        },
                                        public: {
                                            count: 0,
                                            narratives: {}
                                        }
                                    };
                                });
                                return [allApps, kbService.getNarratives({
                                        params: {showDeleted: 0}
                                    })];
                            })
                            .spread(function (allApps, narratives) {
                                // Now we have all the narratives this user can see.
                                // now bin them by app.
                                var appList, appOwnership;
                                narratives.forEach(function (narrative) {
                                    var apps, methods, bin;
                                    if (narrative.object.metadata.methods) {
                                        methods = JSON.parse(narrative.object.metadata.methods);
                                        apps = methods.app;

                                        if (narrative.workspace.owner === widget.runtime.service('session').getUsername()) {
                                            bin = 'owned';
                                        } else if (narrative.workspace.globalread === 'n') {
                                            bin = 'shared';
                                        } else {
                                            bin = 'public';
                                        }
                                        Object.keys(apps).forEach(function (app) {
                                            // simple object, don't need to check.
                                            if (!appMap[app]) {
                                                Logger.logWarning({
                                                    source: 'AppsWidget',
                                                    title: 'Skipped App',
                                                    message: 'The app "' + app + '" was skipped because it is not in the Apps Store'
                                                });
                                            } else {
                                                appMap[app][bin].count += 1;
                                                appMap[app][bin].narratives[narrative.workspace.id] = 1;
                                            }
                                        });
                                    }
                                });
                                

                                allApps.forEach(function (x) {
                                    x.narrativeCount = appMap[x.id];
                                });
                                appList = allApps.sort(function (a, b) {
                                    if (a.name < b.name) {
                                        return -1;
                                    }
                                    if (a.name > b.name) {
                                        return 1;
                                    }
                                    return 0;
                                });
                                widget.set('appList', appList);

                                // Now twist this and get narrative count per app by ownership category.
                                appOwnership = {owned: [], shared: [], public: []};
                                allApps.forEach(function (app) {
                                    ['owned', 'shared', 'public'].forEach(function (ownerType) {
                                        if (app.narrativeCount[ownerType].count > 0) {
                                            appOwnership[ownerType].push({
                                                count: app.narrativeCount[ownerType].count,
                                                app: app
                                            });
                                        }
                                    });
                                });
                                widget.set('appOwnership', appOwnership);
                                widget.set('ready', true);
                            });
                    },
                    render: function () {
                        // just test for now...
                        if (!this.get('ready')) {
                            return;
                        }
                        return renderPanel({
                            title: 'KBase Apps',
                            content: renderData(this)
                        });
                    }
                },
                events: [
                    {
                        type: 'mouseenter',
                        selector: 'table.hoverable tr',
                        handler: function (e) {
                            e.target.classList.add('-active');
                        },
                        capture: true
                    },
                    {
                        type: 'mouseleave',
                        selector: 'table.hoverable tr',
                        handler: function (e) {
                            e.target.classList.remove('-active');
                        },
                        capture: true
                    }
                ]
            });
        }

        return {
            make: function (config) {
                return factory(config);
            }
        };
    });