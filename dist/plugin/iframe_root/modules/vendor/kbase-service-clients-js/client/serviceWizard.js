define(["jquery","bluebird"],(function(t,e){"use strict"
;return function(n,o,i,r,f,u){
if("string"!=typeof n)throw new Error("Service url was not provided");this.url=n
;var c=n;this.timeout=r;var a=r
;this.async_job_check_time_ms=f,this.async_job_check_time_ms||(this.async_job_check_time_ms=5e3),
this.async_version=u;var s=o||{token:"",user_id:""},h=i;function l(n,o,i,r,f,u){
var l=t.Deferred()
;"function"==typeof r&&l.done(r),"function"==typeof f&&l.fail(f);var m={
params:o,method:n,version:"1.1",id:String(Math.random()).slice(2)}
;u&&(m.context=u);var d=null,g=h&&"function"==typeof h?h():s.token?s.token:null
;null!==g&&(d=function(t){t.setRequestHeader("Authorization",g)})
;var _=jQuery.ajax({url:c,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(m),beforeSend:d,timeout:a,success:function(t,e,n){var o;try{
var r=JSON.parse(t);o=1===i?r.result[0]:r.result}catch(f){return void l.reject({
status:503,error:f,url:c,resp:t})}l.resolve(o)},error:function(t,e,n){var o
;if(t.responseText)try{o=JSON.parse(t.responseText).error}catch(i){
o="Unknown error - "+t.responseText}else o="Unknown Error";l.reject({status:500,
error:o})}}),y=l.promise();return y.xhr=_,e.resolve(y)}
this._check_job=function(t,e,n){
if("function"==typeof t)throw"Argument job_id can not be a function"
;if(e&&"function"!=typeof e)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return l("ServiceWizard._check_job",[t],1,e,n)},this.version=function(t,e){
if(t&&"function"!=typeof t)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>2)throw"Too many arguments ("+arguments.length+" instead of 2)"
;return l("ServiceWizard.version",[],1,t,e)},this.start=function(t,e,n){
if("function"==typeof t)throw"Argument service can not be a function"
;if(e&&"function"!=typeof e)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return l("ServiceWizard.start",[t],1,e,n)},this.stop=function(t,e,n){
if("function"==typeof t)throw"Argument service can not be a function"
;if(e&&"function"!=typeof e)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return l("ServiceWizard.stop",[t],1,e,n)
},this.list_service_status=function(t,e,n){
if("function"==typeof t)throw"Argument params can not be a function"
;if(e&&"function"!=typeof e)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return l("ServiceWizard.list_service_status",[t],1,e,n)
},this.get_service_status=function(t,e,n){
if("function"==typeof t)throw"Argument service can not be a function"
;if(e&&"function"!=typeof e)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return l("ServiceWizard.get_service_status",[t],1,e,n)
},this.get_service_status_without_restart=function(t,e,n){
if("function"==typeof t)throw"Argument service can not be a function"
;if(e&&"function"!=typeof e)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return l("ServiceWizard.get_service_status_without_restart",[t],1,e,n)
},this.get_service_log=function(t,e,n){
if("function"==typeof t)throw"Argument params can not be a function"
;if(e&&"function"!=typeof e)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return l("ServiceWizard.get_service_log",[t],1,e,n)
},this.get_service_log_web_socket=function(t,e,n){
if("function"==typeof t)throw"Argument params can not be a function"
;if(e&&"function"!=typeof e)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return l("ServiceWizard.get_service_log_web_socket",[t],1,e,n)}}}));