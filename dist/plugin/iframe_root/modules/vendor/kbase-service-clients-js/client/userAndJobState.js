define(["jquery","bluebird"],(function(t,e){"use strict";return function(n,r,s){
if("string"!=typeof n)throw new Error("Service url was not provided");this.url=n
;var o=n,a=!1;function _(){if(!a){if(a=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var i=r||{token:"",user_id:""},u=s;function c(n,r,s,a,_){var c=t.Deferred()
;"function"==typeof a&&c.done(a),"function"==typeof _&&c.fail(_);var b={
params:r,method:n,version:"1.1",id:String(Math.random()).slice(2)
},d=null,h=u&&"function"==typeof u?u():i.token?i.token:null
;null!==h&&(d=function(t){t.setRequestHeader("Authorization",h)})
;var f=jQuery.ajax({url:o,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(b),beforeSend:d,success:function(t,e,n){var r;try{
var a=JSON.parse(t);r=1===s?a.result[0]:a.result}catch(_){return void c.reject({
status:503,error:_,url:o,resp:t})}c.resolve(r)},error:function(t,e,n){var r
;if(t.responseText)try{r=JSON.parse(t.responseText).error}catch(s){
r="Unknown error - "+t.responseText}else r="Unknown Error";c.reject({status:500,
error:r})}}),j=c.promise();return j.xhr=f,e.resolve(j)}this.ver=function(t,e){
return c("UserAndJobState.ver",[],1,t,e)},this.ver_async=function(t,e){
return _(),c("UserAndJobState.ver",[],1,t,e)
},this.set_state=function(t,e,n,r,s){
return c("UserAndJobState.set_state",[t,e,n],0,r,s)
},this.set_state_async=function(t,e,n,r,s){
return _(),c("UserAndJobState.set_state",[t,e,n],0,r,s)
},this.set_state_auth=function(t,e,n,r,s){
return c("UserAndJobState.set_state_auth",[t,e,n],0,r,s)
},this.set_state_auth_async=function(t,e,n,r,s){
return _(),c("UserAndJobState.set_state_auth",[t,e,n],0,r,s)
},this.get_state=function(t,e,n,r,s){
return c("UserAndJobState.get_state",[t,e,n],1,r,s)
},this.get_state_async=function(t,e,n,r,s){
return _(),c("UserAndJobState.get_state",[t,e,n],1,r,s)
},this.has_state=function(t,e,n,r,s){
return c("UserAndJobState.has_state",[t,e,n],1,r,s)
},this.has_state_async=function(t,e,n,r,s){
return _(),c("UserAndJobState.has_state",[t,e,n],1,r,s)
},this.get_has_state=function(t,e,n,r,s){
return c("UserAndJobState.get_has_state",[t,e,n],2,r,s)
},this.get_has_state_async=function(t,e,n,r,s){
return _(),c("UserAndJobState.get_has_state",[t,e,n],2,r,s)
},this.remove_state=function(t,e,n,r){
return c("UserAndJobState.remove_state",[t,e],0,n,r)
},this.remove_state_async=function(t,e,n,r){
return _(),c("UserAndJobState.remove_state",[t,e],0,n,r)
},this.remove_state_auth=function(t,e,n,r){
return c("UserAndJobState.remove_state_auth",[t,e],0,n,r)
},this.remove_state_auth_async=function(t,e,n,r){
return _(),c("UserAndJobState.remove_state_auth",[t,e],0,n,r)
},this.list_state=function(t,e,n,r){
return c("UserAndJobState.list_state",[t,e],1,n,r)
},this.list_state_async=function(t,e,n,r){
return _(),c("UserAndJobState.list_state",[t,e],1,n,r)
},this.list_state_services=function(t,e,n){
return c("UserAndJobState.list_state_services",[t],1,e,n)
},this.list_state_services_async=function(t,e,n){
return _(),c("UserAndJobState.list_state_services",[t],1,e,n)
},this.create_job=function(t,e){return c("UserAndJobState.create_job",[],1,t,e)
},this.create_job_async=function(t,e){
return _(),c("UserAndJobState.create_job",[],1,t,e)
},this.start_job=function(t,e,n,r,s,o,a,_){
return c("UserAndJobState.start_job",[t,e,n,r,s,o],0,a,_)
},this.start_job_async=function(t,e,n,r,s,o,a,i){
return _(),c("UserAndJobState.start_job",[t,e,n,r,s,o],0,a,i)
},this.create_and_start_job=function(t,e,n,r,s,o,a){
return c("UserAndJobState.create_and_start_job",[t,e,n,r,s],1,o,a)
},this.create_and_start_job_async=function(t,e,n,r,s,o,a){
return _(),c("UserAndJobState.create_and_start_job",[t,e,n,r,s],1,o,a)
},this.update_job_progress=function(t,e,n,r,s,o,a){
return c("UserAndJobState.update_job_progress",[t,e,n,r,s],0,o,a)
},this.update_job_progress_async=function(t,e,n,r,s,o,a){
return _(),c("UserAndJobState.update_job_progress",[t,e,n,r,s],0,o,a)
},this.update_job=function(t,e,n,r,s,o){
return c("UserAndJobState.update_job",[t,e,n,r],0,s,o)
},this.update_job_async=function(t,e,n,r,s,o){
return _(),c("UserAndJobState.update_job",[t,e,n,r],0,s,o)
},this.get_job_description=function(t,e,n){
return c("UserAndJobState.get_job_description",[t],5,e,n)
},this.get_job_description_async=function(t,e,n){
return _(),c("UserAndJobState.get_job_description",[t],5,e,n)
},this.get_job_status=function(t,e,n){
return c("UserAndJobState.get_job_status",[t],7,e,n)
},this.get_job_status_async=function(t,e,n){
return _(),c("UserAndJobState.get_job_status",[t],7,e,n)
},this.complete_job=function(t,e,n,r,s,o,a){
return c("UserAndJobState.complete_job",[t,e,n,r,s],0,o,a)
},this.complete_job_async=function(t,e,n,r,s,o,a){
return _(),c("UserAndJobState.complete_job",[t,e,n,r,s],0,o,a)
},this.get_results=function(t,e,n){
return c("UserAndJobState.get_results",[t],1,e,n)
},this.get_results_async=function(t,e,n){
return _(),c("UserAndJobState.get_results",[t],1,e,n)
},this.get_detailed_error=function(t,e,n){
return c("UserAndJobState.get_detailed_error",[t],1,e,n)
},this.get_detailed_error_async=function(t,e,n){
return _(),c("UserAndJobState.get_detailed_error",[t],1,e,n)
},this.get_job_info=function(t,e,n){
return c("UserAndJobState.get_job_info",[t],1,e,n)
},this.get_job_info_async=function(t,e,n){
return _(),c("UserAndJobState.get_job_info",[t],1,e,n)
},this.list_jobs=function(t,e,n,r){
return c("UserAndJobState.list_jobs",[t,e],1,n,r)
},this.list_jobs_async=function(t,e,n,r){
return _(),c("UserAndJobState.list_jobs",[t,e],1,n,r)
},this.list_job_services=function(t,e){
return c("UserAndJobState.list_job_services",[],1,t,e)
},this.list_job_services_async=function(t,e){
return _(),c("UserAndJobState.list_job_services",[],1,t,e)
},this.share_job=function(t,e,n,r){
return c("UserAndJobState.share_job",[t,e],0,n,r)
},this.share_job_async=function(t,e,n,r){
return _(),c("UserAndJobState.share_job",[t,e],0,n,r)
},this.unshare_job=function(t,e,n,r){
return c("UserAndJobState.unshare_job",[t,e],0,n,r)
},this.unshare_job_async=function(t,e,n,r){
return _(),c("UserAndJobState.unshare_job",[t,e],0,n,r)
},this.get_job_owner=function(t,e,n){
return c("UserAndJobState.get_job_owner",[t],1,e,n)
},this.get_job_owner_async=function(t,e,n){
return _(),c("UserAndJobState.get_job_owner",[t],1,e,n)
},this.get_job_shared=function(t,e,n){
return c("UserAndJobState.get_job_shared",[t],1,e,n)
},this.get_job_shared_async=function(t,e,n){
return _(),c("UserAndJobState.get_job_shared",[t],1,e,n)
},this.delete_job=function(t,e,n){
return c("UserAndJobState.delete_job",[t],0,e,n)
},this.delete_job_async=function(t,e,n){
return _(),c("UserAndJobState.delete_job",[t],0,e,n)
},this.force_delete_job=function(t,e,n,r){
return c("UserAndJobState.force_delete_job",[t,e],0,n,r)
},this.force_delete_job_async=function(t,e,n,r){
return _(),c("UserAndJobState.force_delete_job",[t,e],0,n,r)}}}));