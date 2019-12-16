define([
    './DashboardWidget',
    'kb_service/serviceApi',
    'bluebird'
], function (DashboardWidget, ServiceApi, Promise) {
    'use strict';
    const Widget = Object.create(DashboardWidget, {
        init: {
            value: function (cfg) {
                cfg.name = 'CollaboratorsWidget';
                cfg.title = 'Common Collaborator Network';
                this.DashboardWidget_init(cfg);
                return this;
            }
        },

        setup: {
            value: function () {
                // Set up workspace client
                if (this.runtime.service('session').isLoggedIn()) {
                    this.serviceApi = ServiceApi.make({ runtime: this.runtime });
                } else {
                    this.userProfileClient = null;
                }
            }
        },

        setInitialState: {
            value: function () {
                return new Promise((resolve, reject) => {
                    if (!this.runtime.getService('session').isLoggedIn()) {
                        resolve();
                    } else {
                        this.serviceApi.getCollaborators()
                            .then((collaborators) => {
                                this.setState('collaborators', collaborators);
                                resolve();
                            })
                            .catch((err) => {
                                reject(err);
                            });
                    }
                });
            }
        }
    });

    return Widget;
});
