define([], () => {
    'use strict';

    /*
     * Following the widget API in case anything goes wrong.
     * But this should be mostly a no-op that just redirects to the correct route.
     */
    const widget = (config) => {
        const path = '/dashboard-redesign';
        window.top.location.href = path;

        let container,
            mount;
        const runtime = config.runtime;

        // API
        function attach(node) {
            return Promise.try(function () {
                mount = node;
                container = document.createElement('div');
                mount.appendChild(container);
                runtime.send('ui', 'setTitle', 'Your Narratives');
                container.innerHTML = `This should redirect to ${path}`;
            });
        }

        function start() {
            return Promise.all(() => {});
        }

        function run() {
            return Promise.all(() => {});
        }

        function stop() {
            return Promise.all(() => {});
        }

        function detach() {
            return Promise.all(() => {
                container.innerHTML = '';
            });
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
        make: (config) => widget(config)
    };
});
