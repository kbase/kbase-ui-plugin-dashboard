define([], function () {
    'use strict';
    require.config({
        baseUrl: './modules',
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
            kb_common_ts: 'vendor/kbase-common-ts',
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
});
