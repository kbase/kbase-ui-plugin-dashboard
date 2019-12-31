define(["jquery","bluebird"],(function(r,n){"use strict";return function(e,t,o){
if("string"!=typeof e)throw new Error("Service url was not provided");this.url=e
;var s=e,i=!1;function u(){if(!i){if(i=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var a=t||{token:"",user_id:""},c=o;function f(e,t,o,i,u){var f=r.Deferred()
;"function"==typeof i&&f.done(i),"function"==typeof u&&f.fail(u);var d={
params:t,method:e,version:"1.1",id:String(Math.random()).slice(2)
},l=null,h=c&&"function"==typeof c?c():a.token?a.token:null
;null!==h&&(l=function(r){r.setRequestHeader("Authorization",h)})
;var v=jQuery.ajax({url:s,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(d),beforeSend:l,success:function(r,n,e){var t;try{
var i=JSON.parse(r);t=1===o?i.result[0]:i.result}catch(u){return void f.reject({
status:503,error:u,url:s,resp:r})}f.resolve(t)},error:function(r,n,e){var t
;if(r.responseText)try{t=JSON.parse(r.responseText).error}catch(o){
t="Unknown error - "+r.responseText}else t="Unknown Error";f.reject({status:500,
error:t})}}),m=f.promise();return m.xhr=v,n.resolve(m)}
this.version=function(r,n){return f("Transform.version",[],1,r,n)
},this.version_async=function(r,n){return u(),f("Transform.version",[],1,r,n)
},this.methods=function(r,n,e){return f("Transform.methods",[r],1,n,e)
},this.methods_async=function(r,n,e){return u(),f("Transform.methods",[r],1,n,e)
},this.upload=function(r,n,e){return f("Transform.upload",[r],1,n,e)
},this.upload_async=function(r,n,e){return u(),f("Transform.upload",[r],1,n,e)},
this.download=function(r,n,e){return f("Transform.download",[r],1,n,e)
},this.download_async=function(r,n,e){
return u(),f("Transform.download",[r],1,n,e)},this.convert=function(r,n,e){
return f("Transform.convert",[r],1,n,e)},this.convert_async=function(r,n,e){
return u(),f("Transform.convert",[r],1,n,e)}}}));