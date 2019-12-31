define(["jquery","bluebird"],(function(t,e){"use strict"
;return function(n,r,o,i,a,f){
if("string"!=typeof n)throw new Error("Service url was not provided");this.url=n
;var c=n;this.timeout=i;var u=i
;this.async_job_check_time_ms=a,this.async_job_check_time_ms||(this.async_job_check_time_ms=100),
this.async_job_check_time_scale_percent=150,
this.async_job_check_max_time_ms=3e5,this.service_version=f;var s=r||{token:"",
user_id:""},h=o;function l(n,r,o,i,a,f,c,l){
l||(l=t.Deferred()),"function"==typeof a&&l.done(a),
"function"==typeof f&&l.fail(f);var m={params:o,method:r,version:"1.1",
id:String(Math.random()).slice(2)};c&&(m.context=c)
;var _=null,p=h&&"function"==typeof h?h():s.token?s.token:null
;null!==p&&(_=function(t){t.setRequestHeader("Authorization",p)})
;var y=jQuery.ajax({url:n,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(m),beforeSend:_,timeout:u,success:function(t,e,r){var o;try{
var a=JSON.parse(t);o=1===i?a.result[0]:a.result}catch(f){return void l.reject({
status:503,error:f,url:n,resp:t})}l.resolve(o)},error:function(t,e,n){var r
;if(t.responseText)try{r=JSON.parse(t.responseText).error}catch(o){
r="Unknown error - "+t.responseText}else r="Unknown Error";l.reject({status:500,
error:r})}}),d=l.promise();return d.xhr=y,e.resolve(d)}
this.list_objects_with_sets=function(t,e,n){
if("function"==typeof t)throw"Argument params can not be a function"
;if(e&&"function"!=typeof e)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return l(c,"NarrativeService.list_objects_with_sets",[t],1,e,n)
},this.copy_narrative=function(t,e,n){
if("function"==typeof t)throw"Argument params can not be a function"
;if(e&&"function"!=typeof e)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return l(c,"NarrativeService.copy_narrative",[t],1,e,n)
},this.create_new_narrative=function(t,e,n){
if("function"==typeof t)throw"Argument params can not be a function"
;if(e&&"function"!=typeof e)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return l(c,"NarrativeService.create_new_narrative",[t],1,e,n)
},this.copy_object=function(t,e,n){
if("function"==typeof t)throw"Argument params can not be a function"
;if(e&&"function"!=typeof e)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return l(c,"NarrativeService.copy_object",[t],1,e,n)
},this.list_available_types=function(t,e,n){
if("function"==typeof t)throw"Argument params can not be a function"
;if(e&&"function"!=typeof e)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return l(c,"NarrativeService.list_available_types",[t],1,e,n)
},this.status=function(t,e){
if(t&&"function"!=typeof t)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>2)throw"Too many arguments ("+arguments.length+" instead of 2)"
;return l(c,"NarrativeService.status",[],1,t,e)}}}));