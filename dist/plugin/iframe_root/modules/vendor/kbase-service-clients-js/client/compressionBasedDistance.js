define(["jquery","bluebird"],(function(e,r){"use strict";return function(t,n,o){
if("string"!=typeof t)throw new Error("Service url was not provided");this.url=t
;var i=t,s=!1,u=n||{token:"",user_id:""},a=o;function c(t,n,o,s,c){
var l=e.Deferred()
;"function"==typeof s&&l.done(s),"function"==typeof c&&l.fail(c);var f={
params:n,method:t,version:"1.1",id:String(Math.random()).slice(2)
},d=null,p=a&&"function"==typeof a?a():u.token?u.token:null
;null!==p&&(d=function(e){e.setRequestHeader("Authorization",p)})
;var h=jQuery.ajax({url:i,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(f),beforeSend:d,success:function(e,r,t){var n;try{
var s=JSON.parse(e);n=1===o?s.result[0]:s.result}catch(u){return void l.reject({
status:503,error:u,url:i,resp:e})}l.resolve(n)},error:function(e,r,t){var n
;if(e.responseText)try{n=JSON.parse(e.responseText).error}catch(o){
n="Unknown error - "+e.responseText}else n="Unknown Error";l.reject({status:500,
error:n})}}),v=l.promise();return v.xhr=h,r.resolve(v)}
this.build_matrix=function(e,r,t){
return c("CompressionBasedDistance.build_matrix",[e],1,r,t)
},this.build_matrix_async=function(e,r,t){return function(){if(!s){
if(s=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}(),c("CompressionBasedDistance.build_matrix",[e],1,r,t)}}}));