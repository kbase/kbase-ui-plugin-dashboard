define(['bluebird', 'kb_lib/html', 'kb_lib/observed', 'kbaseUI/widget//widgetSet', 'bootstrap'], function (
    Promise,
    html,
    Observed,
    WidgetSet
) {
    'use strict';

    var t = html.tag,
        div = t('div');

    function widget(config) {
        var mount,
            container;
        const runtime = config.runtime;
        const widgetSet = new WidgetSet({
            runtime,
            widgetManager: runtime.service('widget').getWidgetManager()
        });
        const viewState = new Observed();

        function buildPanel() {
            return div(
                {},
                div(
                    {
                        class: 'kbase-view kbase-dashboard-view container-fluid',
                        dataKbaseView: 'social',
                        dataKBTesthookPlugin: 'dashboard'
                    },
                    [
                        div({ class: 'row' }, [
                            div({ class: 'col-sm-12' }, [
                                div({
                                    id: widgetSet.addWidget('dashboardNarratives', {
                                        viewState: viewState
                                    })
                                }),
                                div({
                                    id: widgetSet.addWidget('dashboardNarratorials', {
                                        viewState: viewState
                                    })
                                }),
                                div({
                                    id: widgetSet.addWidget('dashboardSharedNarratives', {
                                        viewState: viewState
                                    })
                                }),
                                div({
                                    id: widgetSet.addWidget('dashboardPublicNarratives', {
                                        viewState: viewState
                                    })
                                }),
                                div({
                                    id: widgetSet.addWidget('dashboardCollaborators', {
                                        viewState: viewState
                                    })
                                })
                            ])
                        ])
                    ]
                )
            );
        }

        // API
        function attach(node) {
            return Promise.try(function () {
                mount = node;
                container = document.createElement('div');
                mount.appendChild(container);
                container.innerHTML = buildPanel();
                runtime.send('ui', 'setTitle', 'Your Dashboard');
                // create widgets.
                return widgetSet.init().then(function () {
                    return widgetSet.attach(container);
                });
            });
        }

        function start(params) {
            return widgetSet.start(params);
        }

        function run(params) {
            return widgetSet.run(params);
        }

        function stop() {
            return widgetSet.stop();
        }

        function detach() {
            return widgetSet.detach();
        }
        return {
            attach: attach,
            start: start,
            run: run,
            stop: stop,
            detach: detach
        };
    }

    return {
        make: function (config) {
            return widget(config);
        }
    };
});
