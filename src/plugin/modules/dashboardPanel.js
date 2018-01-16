define([
    'promise',
    'kb_common/html',
    'kb_common/observed',
    'kb_widget/widgetSet'
], function (Promise, html, observed, fWidgetSet) {
    'use strict';

    function widget(config) {
        var mount, container, runtime = config.runtime,
            widgetSet = fWidgetSet.make({ runtime: runtime }),
            viewState = observed.make();

        function renderPanel() {
            return new Promise(function (resolve) {
                // View stat is a local state machine for this view.
                var div = html.tag('div'),
                    panel = div(
                        div({ class: 'kbase-view kbase-dashboard-view container-fluid', 'data-kbase-view': 'social' }, [
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
                                        id: widgetSet.addWidget('dashboardMetrics', {
                                            viewState: viewState
                                        })
                                    }),
                                    div({
                                        id: widgetSet.addWidget('dashboardCollaborators', {
                                            viewState: viewState
                                        })
                                    }),
                                    div({
                                        id: widgetSet.addWidget('dashboardJobs', {
                                            viewState: viewState
                                        })
                                    })
                                ])
                            ])
                        ]));
                resolve({
                    title: 'Your Dashboard',
                    content: panel
                });
            });
        }

        // API
        function attach(node) {
            return Promise.try(function () {
                mount = node;
                container = document.createElement('div');
                mount.appendChild(container);
                return renderPanel()
                    .then(function (rendered) {
                        container.innerHTML = rendered.content;
                        runtime.send('ui', 'setTitle', rendered.title);
                        // create widgets.
                        return widgetSet.init();
                    })
                    .then(function () {
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
