define(["jquery","bluebird"],(function(e,r){"use strict";return function(t,i,n){
if("string"!=typeof t)throw new Error("Service url was not provided");this.url=t
;var s=t,o=!1;function a(){if(!o){if(o=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var _=i||{token:"",user_id:""},u=n;function d(t,i,n,o,a){var d=e.Deferred()
;"function"==typeof o&&d.done(o),"function"==typeof a&&d.fail(a);var c={
params:i,method:t,version:"1.1",id:String(Math.random()).slice(2)
},l=null,f=u&&"function"==typeof u?u():_.token?_.token:null
;null!==f&&(l=function(e){e.setRequestHeader("Authorization",f)})
;var v=jQuery.ajax({url:s,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(c),beforeSend:l,success:function(e,r,t){var i;try{
var o=JSON.parse(e);i=1===n?o.result[0]:o.result}catch(a){return void d.reject({
status:503,error:a,url:s,resp:e})}d.resolve(i)},error:function(e,r,t){var i
;if(e.responseText)try{i=JSON.parse(e.responseText).error}catch(n){
i="Unknown error - "+e.responseText}else i="Unknown Error";d.reject({status:500,
error:i})}}),I=d.promise();return I.xhr=v,r.resolve(I)}
this.kbase_ids_to_external_ids=function(e,r,t){
return d("IDServerAPI.kbase_ids_to_external_ids",[e],1,r,t)
},this.kbase_ids_to_external_ids_async=function(e,r,t){
return a(),d("IDServerAPI.kbase_ids_to_external_ids",[e],1,r,t)
},this.external_ids_to_kbase_ids=function(e,r,t,i){
return d("IDServerAPI.external_ids_to_kbase_ids",[e,r],1,t,i)
},this.external_ids_to_kbase_ids_async=function(e,r,t,i){
return a(),d("IDServerAPI.external_ids_to_kbase_ids",[e,r],1,t,i)
},this.register_ids=function(e,r,t,i,n){
return d("IDServerAPI.register_ids",[e,r,t],1,i,n)
},this.register_ids_async=function(e,r,t,i,n){
return a(),d("IDServerAPI.register_ids",[e,r,t],1,i,n)
},this.allocate_id_range=function(e,r,t,i){
return d("IDServerAPI.allocate_id_range",[e,r],1,t,i)
},this.allocate_id_range_async=function(e,r,t,i){
return a(),d("IDServerAPI.allocate_id_range",[e,r],1,t,i)
},this.register_allocated_ids=function(e,r,t,i,n){
return d("IDServerAPI.register_allocated_ids",[e,r,t],0,i,n)
},this.register_allocated_ids_async=function(e,r,t,i,n){
return a(),d("IDServerAPI.register_allocated_ids",[e,r,t],0,i,n)
},this.get_identifier_prefix=function(e,r){
return d("IDServerAPI.get_identifier_prefix",[],1,e,r)
},this.get_identifier_prefix_async=function(e,r){
return a(),d("IDServerAPI.get_identifier_prefix",[],1,e,r)}}}));