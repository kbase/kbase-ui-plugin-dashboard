define(["jquery","bluebird"],(function(e,r){"use strict";return function(t,n,o){
if("string"!=typeof t)throw new Error("Service url was not provided");this.url=t
;var i=t,s=!1;function u(){if(!s){if(s=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var a=n||{token:"",user_id:""},c=o;function l(t,n,o,s,u){var l=e.Deferred()
;"function"==typeof s&&l.done(s),"function"==typeof u&&l.fail(u);var f={
params:n,method:t,version:"1.1",id:String(Math.random()).slice(2)
},d=null,v=c&&"function"==typeof c?c():a.token?a.token:null
;null!==v&&(d=function(e){e.setRequestHeader("Authorization",v)})
;var h=jQuery.ajax({url:i,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(f),beforeSend:d,success:function(e,r,t){var n;try{
var s=JSON.parse(e);n=1===o?s.result[0]:s.result}catch(u){return void l.reject({
status:503,error:u,url:i,resp:e})}l.resolve(n)},error:function(e,r,t){var n
;if(e.responseText)try{n=JSON.parse(e.responseText).error}catch(o){
n="Unknown error - "+e.responseText}else n="Unknown Error";l.reject({status:500,
error:n})}}),p=l.promise();return p.xhr=h,r.resolve(p)}
this.GetAll=function(e,r,t,n,o,i,s){
return l("ERDB_Service.GetAll",[e,r,t,n,o],1,i,s)
},this.GetAll_async=function(e,r,t,n,o,i,s){
return u(),l("ERDB_Service.GetAll",[e,r,t,n,o],1,i,s)
},this.runSQL=function(e,r,t,n){return l("ERDB_Service.runSQL",[e,r],1,t,n)
},this.runSQL_async=function(e,r,t,n){
return u(),l("ERDB_Service.runSQL",[e,r],1,t,n)}}}));