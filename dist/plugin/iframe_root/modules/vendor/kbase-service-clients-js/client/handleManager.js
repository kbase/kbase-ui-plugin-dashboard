define(["jquery","bluebird"],(function(e,r){"use strict";return function(n,t,a){
if("string"!=typeof n)throw new Error("Service url was not provided");this.url=n
;var o=n,s=!1;function i(){if(!s){if(s=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var u=t||{token:"",user_id:""},d=a;function c(n,t,a,s,i){var c=e.Deferred()
;"function"==typeof s&&c.done(s),"function"==typeof i&&c.fail(i);var l={
params:t,method:n,version:"1.1",id:String(Math.random()).slice(2)
},f=null,h=d&&"function"==typeof d?d():u.token?u.token:null
;null!==h&&(f=function(e){e.setRequestHeader("Authorization",h)})
;var _=jQuery.ajax({url:o,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(l),beforeSend:f,success:function(e,r,n){var t;try{
var s=JSON.parse(e);t=1===a?s.result[0]:s.result}catch(i){return void c.reject({
status:503,error:i,url:o,resp:e})}c.resolve(t)},error:function(e,r,n){var t
;if(e.responseText)try{t=JSON.parse(e.responseText).error}catch(a){
t="Unknown error - "+e.responseText}else t="Unknown Error";c.reject({status:500,
error:t})}}),p=c.promise();return p.xhr=_,r.resolve(p)}
this.is_readable=function(e,r,n,t){
return c("HandleMngr.is_readable",[e,r],1,n,t)
},this.is_readable_async=function(e,r,n,t){
return i(),c("HandleMngr.is_readable",[e,r],1,n,t)
},this.add_read_acl=function(e,r,n,t){
return c("HandleMngr.add_read_acl",[e,r],0,n,t)
},this.add_read_acl_async=function(e,r,n,t){
return i(),c("HandleMngr.add_read_acl",[e,r],0,n,t)}}}));