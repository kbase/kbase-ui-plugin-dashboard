define([
    'jquery',
    'bluebird',
    './DashboardWidget',
    'kb_common/jsonRpc/dynamicServiceClient',
    'kb_common/dynamicTable',
], function($, Promise, DashboardWidget, DynamicService, DynamicTable) {
    'use strict';
    return Object.create(DashboardWidget, {

        numHours : { value : 48 },

        init: {
            value: function(cfg) {
                cfg.name = 'JobsWidget';
                cfg.title = 'Jobs run in last ' + this.numHours + ' hours';
                this.DashboardWidget_init(cfg);

                return this;
            }
        },
        setup: {
            value: function() {
                return this;
            }
        },

        /* takes a timestamp and turns it into a locale string. If no timestamp is present, then it'll put in ...
           atm, the only place this should happen is the finish_time on an unfinished job. */
        reformatDate : { value : function(date) {
          var timestamp = parseInt(date, 10);
          if (Number.isNaN(timestamp)) {
            return '...';
          }
          else {
            return new Date(timestamp).toLocaleString();
          }
        }},

        reformatInterval : { value : function(interval) {
          var timestamp = parseInt(interval, 10) / 1000;
          if (Number.isNaN(timestamp)) {
            return '...';
          }
          else {
            return this.getNiceDuration(timestamp);
          }
        }},

        getNiceDuration: { value : function (seconds) {
          var hours = Math.floor(seconds / 3600);
          seconds = seconds - (hours * 3600);
          var minutes = Math.floor(seconds / 60);
          seconds = seconds - (minutes * 60);

          var duration = '';
          if (hours > 0) {
              duration = hours + 'h ' + minutes + 'm';
          } else if (minutes > 0) {
              duration = minutes + 'm ' + Math.round(seconds) + 's';
          } else {
              duration = (Math.round(seconds * 100) / 100) + 's';
          }
          return duration;

        }},

        getUserJobs: {
          value : function(){
            var self = this;

            var seconds = (new Date().getTime() / 1000) - 172800;

            var now  = self.nowDate  || (new Date()).getTime();
            var then = self.thenDate || now - self.numHours * 60 * 60 * 1000;

            var userJobs = [];

            var token = this.runtime.service('session').getAuthToken();
            this.metricsClient = new DynamicService({
              url: this.runtime.getConfig('services.service_wizard.url'),
              token: token,
              version : 'dev',
              module : 'kb_Metrics',
            });

            return self.metricsClient.callFunc('get_app_metrics', [{epoch_range : [then, now], user_ids : ['thomasoniii']}]).then(function(data) {
              var jobs = data[0].job_states;

              jobs.forEach( function( job, idx ) {

                // various tidying up and re-formatting of the results which came back from the service.
                job.user_id = '<a href="#people/' + job.user + '" target="_blank">' + job.user + '</a>'

                if (job.app_id) {
                  var appModule = job.app_id.split('/');
                  job.app_id           = '<a href="#catalog/apps/'    + appModule[0] + '/' + appModule[1] + '" target="_blank">' + appModule[1] + '</a>';
                  job.app_module_name  = '<a href="#catalog/modules/' + appModule[0] + '" target="_blank">' + appModule[0] + '</a>';
                }
                else if (job.method) {
                  var methodPieces = job.method.split('.');
                  job.app_id = '(API):' + methodPieces[1];
                  job.app_module_name  = '<a href="#catalog/modules/' + methodPieces[0] + '" target="_blank">' + methodPieces[0] + '</a>';
                }
                else {
                  job.app_id = 'Unknown';
                  job.app_module_name = 'Unknown';
                }

                if (job.error) {
                  job.result = '<span class="label label-danger">Error</span>';
                }
                else if (!job.finish_time) {
                  job.result = job.exec_start_time
                    ? '<span class="label label-warning">Running</span>'
                    : '<span class="label label-warning">Queued</span>';
                }
                else {
                  job.result = '<span class="label label-success">Success</span>';
                }

                job.creation_time   = self.reformatDate(job.creation_time);
                job.exec_start_time = self.reformatDate(job.exec_start_time);
                job.finish_time     = self.reformatDate(job.finish_time);

                job.run_time        = self.reformatInterval(job.run_time);

                if (job.finish_time) {
                // XXX this doesn't work yet...it lacks the wiring in the template to bring up the link. Help?
                //  job.result += ' <button class="btn btn-default btn-xs" data-job-id="' + job.job_id + '"> <i class="fa fa-file-text"></i></button>';
                }

                userJobs.push(job);

              });

              userJobs = userJobs.sort( function(a,b) {
                var aX = a.creation_time;
                var bX = b.creation_time;
                       if ( aX < bX ) { return 1 }
                  else if ( aX > bX ) { return -1 }
                  else                { return 0 }
              });

              /*
                user
                app_id (SPLIT ON slashes - has module)
                job_id
                app_id (SPLIT ON slashes - has app_id)
                creation_time
                exec_start_time
                finish_time
                run_time
                status
              */
              return userJobs;
            })
            .catch(function(xhr) {
              console.log("FAILED : ", xhr, [xhr.type, xhr.message].join(':') );
            });//*/

          }
        },

        setInitialState: {
            value: function(options) {

                return new Promise(function(resolve, reject) {
                    Promise.all([
                            this.getUserJobs(),
                        ])
                        .then(function(data) {
                            this.setState('user_jobs', data[0]);
                            resolve();
                        }.bind(this))
                        .catch(function(err) {
                            reject(err);
                        });
                }.bind(this));
            }
        }
    });
});
