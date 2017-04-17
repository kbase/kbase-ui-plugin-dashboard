define([
    'bluebird',
    'kb_service/client/narrativeMethodStore',
    'kb_service/serviceApi',
    'kb_common/logger',
    'kb_common/html',
    'kb_widget/bases/dataWidget',
    'bootstrap'
], function(Promise, NarrativeMethodStore, fServiceApi, Logger, html, DataWidget) {
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
            return div({ class: 'panel panel-default dashboardAppsWidget', dataWidget: 'dashboardApps' }, [
                div({ class: 'panel-heading' }, [
                    div({ class: 'kb-row' }, [
                        div({ class: '-col -span-8' }, [
                            span({ class: 'fa fa-cubes pull-left', style: { fontSize: '150%', paddingRight: '10px' } }),
                            span({ class: 'panel-title', style: { verticalAlign: 'middle' }, dataPlaceholder: 'title' }, [
                                content.title
                            ])
                        ]),
                        div({ class: '-col -span-4', style: { textAlign: 'right' } }, [
                            div({ class: 'btn-group', dataPlaceholder: 'buttons' })
                        ])
                    ])
                ]),
                div({ class: 'panel-body' }, [
                    div({ dataPlaceholder: 'alert' }),
                    div({ dataPlaceholder: 'content' }, content.content)
                ])
            ]);
        }

        function renderApp(app) {
            return tr([
                td([
                    a({ href: '#narrativestore/app/' + app.app.id }, app.app.name),
                    span({ style: { color: 'silver' } }, [' [', app.type.charAt(0), ']'])
                ]),
                td([
                    div({ class: '-switchable', style: { display: 'inline-block', textAlign: 'right' } }, [
                        div({ class: '-if-inactive' }, [
                            span({ class: '-appcount' }, app.count)
                        ]),
                        div({ class: '-if-active' }, [
                            a({
                                href: '#narrativemanager/new?app=' + app.app.id,
                                class: 'btn btn-default btn-link',
                                target: '_blank',
                                dataToggle: 'tooltip',
                                dataPlacement: 'auto',
                                title: 'Create a new Narrative using this App',
                                dataContainer: 'body'
                            }, [
                                span({ class: '-icon' }, [
                                    span({ class: 'fa-stack' }, [
                                        i({ class: 'fa fa-file fa-stack-2x' }),
                                        i({ class: 'fa fa-plus fa-inverse fa-stack-1x', style: { marginTop: '3px' } })
                                    ])
                                ])
                            ])
                        ])
                    ])
                ])
            ]);
        }

        function is(value) {
            if (value) {
                return true;
            }
        }

        function makePath(pathList, query) {
            var path = pathList
                .map(function(pathElement) {
                    return encodeURIComponent(pathElement);
                })
                .join('/'),
                queryString;
            if (query) {
                queryString = Object.keys(query).map(function(key) {
                    return [key, query[key]].map(function(el) {
                        return encodeURIComponent(el);
                    }).join('=');
                }).join('&');
            }
            return [path, queryString].filter(is).join('?');

        }

        function makeHashPath(pathList, query) {
            return '#' + makePath(pathList, query);
        }

        function normalizeMethodId(methodId) {
            if (!methodId || (typeof methodId !== 'string') || methodId.length === 0) {
                throw new Error('Invalid method id: empty');
            }
            var parts = methodId.split(/\//);
            if (parts.length === 1) {
                return {
                    module: 'l.m',
                    id: methodId
                };
            }
            return {
                module: parts[0],
                id: parts[1]
            };
        }

        function renderMethod(method) {
            var fullMethodId = normalizeMethodId(method.method.id),
                methodViewPath = makeHashPath(['appcatalog', 'app', fullMethodId.module, fullMethodId.id, method.tags[0]]),
                newNarrativePath = makeHashPath(['narrativemanager', 'new'], { method: method.method.id, tag: method.tags[0] }),
                legacyFlag = method.legacy ? span({ style: { color: 'red' } }, '*') : '';
            return tr([
                td([
                    a({ href: methodViewPath }, method.method.name),
                    legacyFlag,
                    span({ style: { color: 'silver' } }, [
                        ' [',
                        method.type.charAt(0),
                        '(',
                        method.tags.map(function(tag) {
                            return tag.charAt(0);
                        }).join(', '),
                        ')]'
                    ])
                ]),
                td([
                    div({ class: '-switchable', style: { display: 'inline-block', textAlign: 'right' } }, [
                        div({ class: '-if-inactive' }, [
                            span({ class: '-appcount' }, method.count)
                        ]),
                        div({ class: '-if-active' }, [
                            a({
                                href: newNarrativePath,
                                class: 'btn btn-default btn-link',
                                target: '_blank',
                                dataToggle: 'tooltip',
                                dataPlacement: 'auto',
                                title: 'Create a new Narrative using this Method',
                                dataContainer: 'body'
                            }, [
                                span({ class: '-icon' }, [
                                    span({ class: 'fa-stack' }, [
                                        i({ class: 'fa fa-file fa-stack-2x' }),
                                        i({ class: 'fa fa-plus fa-inverse fa-stack-1x', style: { marginTop: '3px' } })
                                    ])
                                ])
                            ])
                        ])
                    ])
                ])
            ]);
        }

        function renderApps(w, type) {
            var apps = w.get('appOwnership')[type];
            if (apps.length === 0) {
                return div({ style: { font: 'italic', textAlign: 'center' } }, [
                    'No Apps found.'
                ]);
            }
            return table({ class: 'table table-borderless hoverable app-category' },
                apps
                .sort(function(a, b) {
                    if (a.count < b.count) {
                        return 1;
                    } else if (a.count > b.count) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    } else if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                })
                .map(function(app) {
                    if (app.app) {
                        return renderApp(app);
                    } else if (app.method) {
                        return renderMethod(app);
                    }
                })
            );
        }

        function renderData(w) {
            return table({ class: 'apps' }, [
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

        function getApps(widget) {
            var appMap = {},
                methodStore = new NarrativeMethodStore(widget.getConfig('services.narrative_method_store.url'), {
                    token: widget.runtime.service('session').getAuthToken()
                }),
                kbService = fServiceApi.make({ runtime: widget.runtime });
            return methodStore.list_apps_full_info({})
                .then(function(allApps) {
                    allApps.forEach(function(app) {
                        appMap[app.id] = {
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
                            },
                            type: 'app',
                            id: app.id,
                            name: app.name
                        };
                    });
                    return [allApps, kbService.getNarratives({
                        params: { showDeleted: 0 }
                    })];
                })
                .spread(function(allApps, narratives) {
                    // Now we have all the narratives this user can see.
                    // now bin them by app.
                    var appOwnership = { owned: [], shared: [], public: [] },
                        username = widget.runtime.service('session').getUsername();
                    narratives.forEach(function(narrative) {
                        var bin;
                        if (narrative.workspace.owner === username) {
                            bin = 'owned';
                        } else if (narrative.workspace.globalread === 'n') {
                            bin = 'shared';
                        } else {
                            bin = 'public';
                        }
                        if (narrative.apps) {
                            narrative.apps.forEach(function(app) {
                                if (!appMap[app]) {
                                    Logger.logWarning({
                                        source: 'AppsWidget',
                                        title: 'Skipped App',
                                        message: 'The app "' + app + '" was skipped because it is not in the Apps Store'
                                    });
                                    //                                        appMap[app] = {
                                    //                                            owned: {
                                    //                                                count: 0,
                                    //                                                narratives: {}
                                    //                                            },
                                    //                                            shared: {
                                    //                                                count: 0,
                                    //                                                narratives: {}
                                    //                                            },
                                    //                                            public: {
                                    //                                                count: 0,
                                    //                                                narratives: {}
                                    //                                            },
                                    //                                            type: 'unknownApp',
                                    //                                            id: app,
                                    //                                            name: app
                                    //                                        };
                                } else {
                                    appMap[app][bin].count += 1;
                                    appMap[app][bin].narratives[narrative.workspace.id] = 1;
                                }
                            });
                        }
                    });

                    // Now twist this and get narrative count per app by ownership category.
                    Object.keys(appMap).forEach(function(appId) {
                        var app = appMap[appId];
                        ['owned', 'shared', 'public'].forEach(function(ownerType) {
                            if (app[ownerType].count > 0) {
                                appOwnership[ownerType].push({
                                    count: app[ownerType].count,
                                    type: app.type,
                                    name: app.name,
                                    app: {
                                        id: appId,
                                        name: app.name
                                    }
                                });
                            }
                        });
                    });
                    return appOwnership;
                });
        }

        function getMethods(widget) {
            var methodMap = {},
                methodStore = new NarrativeMethodStore(widget.getConfig('services.narrative_method_store.url'), {
                    token: widget.runtime.service('session').getAuthToken()
                }),
                kbService = fServiceApi.make({ runtime: widget.runtime });
            return Promise.all([
                    methodStore.list_methods_full_info({ tag: 'dev' }),
                    methodStore.list_methods_full_info({ tag: 'beta' }),
                    methodStore.list_methods_full_info({ tag: 'release' })
                ])
                .spread(function(devMethods, betaMethods, releaseMethods) {
                    releaseMethods.forEach(function(method) {
                        methodMap[method.id] = {
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
                            },
                            type: 'method',
                            tags: ['release'],
                            id: method.id,
                            name: method.name
                        };
                    });
                    betaMethods.forEach(function(method) {
                        if (!methodMap[method.id]) {
                            //    methodMap[method.id].tags.push('beta');
                            //} else {
                            methodMap[method.id] = {
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
                                },
                                type: 'method',
                                tags: ['beta'],
                                id: method.id,
                                name: method.name
                            };
                        }
                    });
                    devMethods.forEach(function(method) {
                        if (!methodMap[method.id]) {
                            //    methodMap[method.id].tags.push('release');
                            //} else {
                            methodMap[method.id] = {
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
                                },
                                type: 'method',
                                tags: ['dev'],
                                id: method.id,
                                name: method.name
                            };
                        }
                    });
                    return kbService.getNarratives({
                        params: { showDeleted: 0 }
                    });
                })
                .then(function(narratives) {
                    return [narratives, methodStore.list_methods_full_info({})];
                })
                .spread(function(narratives, allMethods) {
                    allMethods.forEach(function(method) {
                        if (!methodMap[method.id]) {
                            methodMap[app.id] = {
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
                                },
                                type: 'method',
                                legacy: true,
                                id: method.id,
                                name: method.name
                            };
                        }
                    });
                    return narratives;
                })
                .then(function(narratives) {
                    // Now we have all the narratives this user can see.
                    // now bin them by method.
                    var methodOwnership = { owned: [], shared: [], public: [] },
                        username = widget.runtime.service('session').getUsername();
                    narratives.forEach(function(narrative) {
                        var bin;
                        if (narrative.workspace.owner === username) {
                            bin = 'owned';
                        } else if (narrative.workspace.globalread === 'n') {
                            bin = 'shared';
                        } else {
                            bin = 'public';
                        }
                        if (narrative.methods) {
                            narrative.methods.forEach(function(method) {
                                if (!methodMap[method]) {
                                    Logger.logWarning({
                                        source: 'AppsWidget',
                                        title: 'Skipped Method',
                                        message: 'The mehod "' + method + '" was skipped because it is not in the Methods Store'
                                    });
                                    //                                        methodMap[method] = {
                                    //                                            owned: {
                                    //                                                count: 0,
                                    //                                                narratives: {}
                                    //                                            },
                                    //                                            shared: {
                                    //                                                count: 0,
                                    //                                                narratives: {}
                                    //                                            },
                                    //                                            public: {
                                    //                                                count: 0,
                                    //                                                narratives: {}
                                    //                                            },
                                    //                                            type: 'unknownMethod',
                                    //                                            tags: [],
                                    //                                            id: method,
                                    //                                            name: method
                                    //                                        };
                                } else {
                                    methodMap[method][bin].count += 1;
                                    methodMap[method][bin].narratives[narrative.workspace.id] = 1;
                                    if (methodMap[method][bin].legacy) {
                                        console.log('LEGACY');
                                    }
                                }
                            });
                        }
                    });


                    // Now twist this and get narrative count per method by ownership category.
                    Object.keys(methodMap).forEach(function(methodId) {
                        var method = methodMap[methodId];
                        ['owned', 'shared', 'public'].forEach(function(ownerType) {
                            if (method[ownerType].count > 0) {
                                methodOwnership[ownerType].push({
                                    count: method[ownerType].count,
                                    type: method.type,
                                    tags: method.tags,
                                    legacy: method.legacy,
                                    name: method.name,
                                    method: {
                                        id: methodId,
                                        name: method.name
                                    }
                                });
                            }
                        });
                    });
                    return methodOwnership;
                });
        }

        return DataWidget.make({
            runtime: config.runtime,
            title: 'KBase Apps and Methods',
            class: 'dashboardAppsWidget',
            icon: 'cubes',
            on: {
                initialContent: function() {
                    return html.loading();
                },
                fetch: function(params) {
                    var widget = this;

                    // Should never get here
                    if (!widget.runtime.service('session').isLoggedIn()) {
                        widget.set('apps', null);
                        return;
                    }
                    this.set('ready', false);
                    return Promise.all([
                            getApps(widget),
                            getMethods(widget)
                        ])
                        .spread(function(apps, methods) {
                            // Now combine them.
                            var combined = {
                                owned: [],
                                shared: [],
                                public: []
                            };

                            Object.keys(apps).forEach(function(ownershipType) {
                                apps[ownershipType].forEach(function(app) {
                                    combined[ownershipType].push(app);
                                });
                            });

                            Object.keys(methods).forEach(function(ownershipType) {
                                methods[ownershipType].forEach(function(method) {
                                    combined[ownershipType].push(method);
                                });
                            });

                            widget.set('appOwnership', combined);
                            widget.set('ready', true);
                        });

                },
                render: function() {
                    // just test for now...
                    if (!this.get('ready')) {
                        return;
                    }
                    return renderData(this);
                    //return renderPanel({
                    //    title: 'KBase Apps and Methods',
                    //    content: renderData(this)
                    //});
                }
            },
            events: [{
                    type: 'mouseenter',
                    selector: 'table.hoverable tr',
                    handler: function(e) {
                        e.target.classList.add('-active');
                    }
                },
                {
                    type: 'mouseleave',
                    selector: 'table.hoverable tr',
                    handler: function(e) {
                        e.target.classList.remove('-active');
                    }
                }
            ],
            xevents: [{
                    type: 'mouseenter',
                    selector: 'table.hoverable tr',
                    handler: function(e) {
                        e.target.classList.add('-active');
                    },
                    capture: true
                },
                {
                    type: 'mouseleave',
                    selector: 'table.hoverable tr',
                    handler: function(e) {
                        e.target.classList.remove('-active');
                    },
                    capture: true
                }
            ]
        });
    }

    return {
        make: function(config) {
            return factory(config);
        }
    };
});