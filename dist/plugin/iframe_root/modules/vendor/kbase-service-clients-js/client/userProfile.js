define(["jquery","bluebird"],(function(e,r){"use strict";return function(t,s,o){
if("string"!=typeof t)throw new Error("Service url was not provided");this.url=t
;var n=t,u=!1;function i(){if(!u){if(u=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var f=s||{token:"",user_id:""},l=o;function a(t,s,o,u,i){var a=e.Deferred()
;"function"==typeof u&&a.done(u),"function"==typeof i&&a.fail(i);var c={
params:s,method:t,version:"1.1",id:String(Math.random()).slice(2)
},_=null,p=l&&"function"==typeof l?l():f.token?f.token:null
;null!==p&&(_=function(e){e.setRequestHeader("Authorization",p)})
;var h=jQuery.ajax({url:n,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(c),beforeSend:_,success:function(e,r,t){var s;try{
var u=JSON.parse(e);s=1===o?u.result[0]:u.result}catch(i){return void a.reject({
status:503,error:i,url:n,resp:e})}a.resolve(s)},error:function(e,r,t){var s
;if(e.responseText)try{s=JSON.parse(e.responseText).error}catch(o){
s="Unknown error - "+e.responseText}else s="Unknown Error";a.reject({status:500,
error:s})}}),d=a.promise();return d.xhr=h,r.resolve(d)}this.ver=function(e,r){
return a("UserProfile.ver",[],1,e,r)},this.ver_async=function(e,r){
return i(),a("UserProfile.ver",[],1,e,r)},this.filter_users=function(e,r,t){
return a("UserProfile.filter_users",[e],1,r,t)
},this.filter_users_async=function(e,r,t){
return i(),a("UserProfile.filter_users",[e],1,r,t)
},this.get_user_profile=function(e,r,t){
return a("UserProfile.get_user_profile",[e],1,r,t)
},this.get_user_profile_async=function(e,r,t){
return i(),a("UserProfile.get_user_profile",[e],1,r,t)
},this.set_user_profile=function(e,r,t){
return a("UserProfile.set_user_profile",[e],0,r,t)
},this.set_user_profile_async=function(e,r,t){
return i(),a("UserProfile.set_user_profile",[e],0,r,t)
},this.update_user_profile=function(e,r,t){
return a("UserProfile.update_user_profile",[e],0,r,t)
},this.update_user_profile_async=function(e,r,t){
return i(),a("UserProfile.update_user_profile",[e],0,r,t)
},this.lookup_globus_user=function(e,r,t){
return a("UserProfile.lookup_globus_user",[e],1,r,t)
},this.lookup_globus_user_async=function(e,r,t){
return i(),a("UserProfile.lookup_globus_user",[e],1,r,t)}}}));