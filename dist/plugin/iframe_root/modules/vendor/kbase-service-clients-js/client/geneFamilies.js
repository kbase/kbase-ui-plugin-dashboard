define(["jquery","bluebird"],(function(e,r){"use strict";return function(n,t,s){
if("string"!=typeof n)throw new Error("Service url was not provided");this.url=n
;var o=n,i=!1;function a(){if(!i){if(i=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var u=t||{token:"",user_id:""},c=s;function f(n,t,s,i,a){var f=e.Deferred()
;"function"==typeof i&&f.done(i),"function"==typeof a&&f.fail(a);var l={
params:t,method:n,version:"1.1",id:String(Math.random()).slice(2)
},d=null,h=c&&"function"==typeof c?c():u.token?u.token:null
;null!==h&&(d=function(e){e.setRequestHeader("Authorization",h)})
;var v=jQuery.ajax({url:o,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(l),beforeSend:d,success:function(e,r,n){var t;try{
var i=JSON.parse(e);t=1===s?i.result[0]:i.result}catch(a){return void f.reject({
status:503,error:a,url:o,resp:e})}f.resolve(t)},error:function(e,r,n){var t
;if(e.responseText)try{t=JSON.parse(e.responseText).error}catch(s){
t="Unknown error - "+e.responseText}else t="Unknown Error";f.reject({status:500,
error:t})}}),m=f.promise();return m.xhr=v,r.resolve(m)}
this.search_domains=function(e,r,n){
return f("KBaseGeneFamilies.search_domains",[e],1,r,n)
},this.search_domains_async=function(e,r,n){
return a(),f("KBaseGeneFamilies.search_domains",[e],1,r,n)
},this.version=function(e,r){return f("KBaseGeneFamilies.version",[],1,e,r)
},this.version_async=function(e,r){
return a(),f("KBaseGeneFamilies.version",[],1,e,r)}}}));