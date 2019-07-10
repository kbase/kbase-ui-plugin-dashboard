(() => {
    'use strict';
    // TODO: needs to not be hard coded here.
    const pluginPath = '/modules/plugins/dashboard/iframe_root';
    require.config({
        baseUrl: pluginPath + '/modules',
        paths: {
            bluebird: 'vendor/bluebird/bluebird',
            bootstrap: 'vendor/bootstrap/bootstrap',
            bootstrap_css: 'vendor/bootstrap/css/bootstrap',
            css: 'vendor/require-css/css',
            datatables: 'vendor/datatables/jquery.dataTables',
            datatables_css: 'vendor/datatables/jquery.dataTables',
            datatables_bootstrap_css: 'vendor/datatables-bootstrap3-plugin/datatables-bootstrap3',
            datatables_bootstrap: 'vendor/datatables-bootstrap3-plugin/datatables-bootstrap3',
            font_awesome: 'vendor/font-awesome/css/font-awesome',
            jquery: 'vendor/jquery/jquery',
            'js-yaml': 'vendor/js-yaml/js-yaml',
            kb_common: 'vendor/kbase-common-js',
            kb_lib: 'vendor/kbase-common-es6',
            kb_service: 'vendor/kbase-service-clients-js',
            nunjucks: 'vendor/nunjucks/nunjucks',
            md5: 'vendor/spark-md5/spark-md5',
            text: 'vendor/requirejs-text/text',
            yaml: 'vendor/requirejs-yaml/yaml',
            uuid: 'vendor/pure-uuid/uuid'
        },
        shim: {
            bootstrap: {
                deps: ['jquery', 'css!bootstrap_css']
            }
        }
    });

    require([
        'bluebird',
        'lib/runtime',
        'lib/integration',
        'yaml!./config.yml',
        'dashboardPanel',
        'bootstrap',
        'css!font_awesome'
    ], (Promise, Runtime, Integration, pluginConfig, dashboardPanel) => {
        Promise.try(() => {
            const integration = new Integration({
                rootWindow: window
            });
            try {
                integration.start();
            } catch (ex) {
                console.error('Error starting main: ', ex.message);
            }

            const {
                params: { config, token, username }
            } = integration.getParamsFromIFrame();

            const runtime = new Runtime({
                config,
                token,
                username
            });

            const widgets = pluginConfig.install.widgets;
            widgets.forEach((widgetDef) => {
                runtime.widgetManager.addWidget(widgetDef);
            });

            // Now start the one and only panel.
            const rootNode = document.getElementById('root');

            const panel = dashboardPanel.make({ runtime });

            runtime
                .start()
                .then(() => {
                    return panel.attach(rootNode);
                })
                .then(() => {
                    panel.start();
                });
        }).catch((err) => {
            console.error('ERROR', err);
        });
    });
})();
