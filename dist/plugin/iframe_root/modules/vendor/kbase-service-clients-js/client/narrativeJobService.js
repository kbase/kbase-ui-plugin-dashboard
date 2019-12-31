define(["jquery","bluebird"],(function(t,n){"use strict"
;return function(e,o,i,r,f,a){
if("string"!=typeof e)throw new Error("Service url was not provided");this.url=e
;var u=e;this.timeout=r;var c=r
;this.async_job_check_time_ms=f,this.async_job_check_time_ms||(this.async_job_check_time_ms=100),
this.async_job_check_time_scale_percent=150,
this.async_job_check_max_time_ms=3e5,this.service_version=a;var s=o||{token:"",
user_id:""},h=i;function m(e,o,i,r,f,a,u,m){
m||(m=t.Deferred()),"function"==typeof f&&m.done(f),
"function"==typeof a&&m.fail(a);var b={params:i,method:o,version:"1.1",
id:String(Math.random()).slice(2)};u&&(b.context=u)
;var l=null,d=h&&"function"==typeof h?h():s.token?s.token:null
;null!==d&&(l=function(t){t.setRequestHeader("Authorization",d)})
;var g=jQuery.ajax({url:e,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(b),beforeSend:l,timeout:c,success:function(t,n,o){var i;try{
var f=JSON.parse(t);i=1===r?f.result[0]:f.result}catch(a){return void m.reject({
status:503,error:a,url:e,resp:t})}m.resolve(i)},error:function(t,n,e){var o
;if(t.responseText)try{o=JSON.parse(t.responseText).error}catch(i){
o="Unknown error - "+t.responseText}else o="Unknown Error";m.reject({status:500,
error:o})}}),_=m.promise();return _.xhr=g,n.resolve(_)}
this.list_config=function(t,n){
if(t&&"function"!=typeof t)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>2)throw"Too many arguments ("+arguments.length+" instead of 2)"
;return m(u,"NarrativeJobService.list_config",[],1,t,n)},this.ver=function(t,n){
if(t&&"function"!=typeof t)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>2)throw"Too many arguments ("+arguments.length+" instead of 2)"
;return m(u,"NarrativeJobService.ver",[],1,t,n)},this.status=function(t,n){
if(t&&"function"!=typeof t)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>2)throw"Too many arguments ("+arguments.length+" instead of 2)"
;return m(u,"NarrativeJobService.status",[],1,t,n)
},this.run_job=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(u,"NarrativeJobService.run_job",[t],1,n,e)
},this.get_job_params=function(t,n,e){
if("function"==typeof t)throw"Argument job_id can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(u,"NarrativeJobService.get_job_params",[t],2,n,e)
},this.update_job=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(u,"NarrativeJobService.update_job",[t],1,n,e)
},this.add_job_logs=function(t,n,e,o){
if("function"==typeof t)throw"Argument job_id can not be a function"
;if("function"==typeof n)throw"Argument lines can not be a function"
;if(e&&"function"!=typeof e)throw"Argument _callback must be a function if defined"
;if(o&&"function"!=typeof o)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>4)throw"Too many arguments ("+arguments.length+" instead of 4)"
;return m(u,"NarrativeJobService.add_job_logs",[t,n],1,e,o)
},this.get_job_logs=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(u,"NarrativeJobService.get_job_logs",[t],1,n,e)
},this.finish_job=function(t,n,e,o){
if("function"==typeof t)throw"Argument job_id can not be a function"
;if("function"==typeof n)throw"Argument params can not be a function"
;if(e&&"function"!=typeof e)throw"Argument _callback must be a function if defined"
;if(o&&"function"!=typeof o)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>4)throw"Too many arguments ("+arguments.length+" instead of 4)"
;return m(u,"NarrativeJobService.finish_job",[t,n],0,e,o)
},this.check_job=function(t,n,e){
if("function"==typeof t)throw"Argument job_id can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(u,"NarrativeJobService.check_job",[t],1,n,e)
},this.check_jobs=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(u,"NarrativeJobService.check_jobs",[t],1,n,e)
},this.cancel_job=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(u,"NarrativeJobService.cancel_job",[t],0,n,e)
},this.check_job_canceled=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(u,"NarrativeJobService.check_job_canceled",[t],1,n,e)}}}));