define(["jquery","bluebird"],(function(e,r){"use strict";return function(t,n,o){
if("string"!=typeof t)throw new Error("Service url was not provided");this.url=t
;var s=t,i=!1;function u(){if(!i){if(i=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var c=n||{token:"",user_id:""},a=o;function f(t,n,o,i,u){var f=e.Deferred()
;"function"==typeof i&&f.done(i),"function"==typeof u&&f.fail(u);var l={
params:n,method:t,version:"1.1",id:String(Math.random()).slice(2)
},_=null,d=a&&"function"==typeof a?a():c.token?c.token:null
;null!==d&&(_=function(e){e.setRequestHeader("Authorization",d)})
;var p=jQuery.ajax({url:s,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(l),beforeSend:_,success:function(e,r,t){var n;try{
var i=JSON.parse(e);n=1===o?i.result[0]:i.result}catch(u){return void f.reject({
status:503,error:u,url:s,resp:e})}f.resolve(n)},error:function(e,r,t){var n
;if(e.responseText)try{n=JSON.parse(e.responseText).error}catch(o){
n="Unknown error - "+e.responseText}else n="Unknown Error";f.reject({status:500,
error:n})}}),h=f.promise();return h.xhr=p,r.resolve(h)}
this.filter_genes=function(e,r,t){
return f("CoExpression.filter_genes",[e],1,r,t)
},this.filter_genes_async=function(e,r,t){
return u(),f("CoExpression.filter_genes",[e],1,r,t)
},this.const_coex_net_clust=function(e,r,t){
return f("CoExpression.const_coex_net_clust",[e],1,r,t)
},this.const_coex_net_clust_async=function(e,r,t){
return u(),f("CoExpression.const_coex_net_clust",[e],1,r,t)}}}));