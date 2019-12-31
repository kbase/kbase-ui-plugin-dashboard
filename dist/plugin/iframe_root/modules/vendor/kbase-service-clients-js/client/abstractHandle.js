define(["jquery","bluebird"],(function(t,n){"use strict";return function(e,a,r){
if("string"!=typeof e)throw new Error("Service url was not provided");this.url=e
;var s=e,i=!1;function d(){if(!i){if(i=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var l=a||{token:"",user_id:""},o=r;function c(e,a,r,i,d){var c=t.Deferred()
;"function"==typeof i&&c.done(i),"function"==typeof d&&c.fail(d);var u={
params:a,method:e,version:"1.1",id:String(Math.random()).slice(2)
},h=null,_=o&&"function"==typeof o?o():l.token?l.token:null
;null!==_&&(h=function(t){t.setRequestHeader("Authorization",_)})
;var f=jQuery.ajax({url:s,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(u),beforeSend:h,success:function(t,n,e){var a;try{
var i=JSON.parse(t);a=1===r?i.result[0]:i.result}catch(d){return void c.reject({
status:503,error:d,url:s,resp:t})}c.resolve(a)},error:function(t,n,e){var a
;if(t.responseText)try{a=JSON.parse(t.responseText).error}catch(r){
a="Unknown error - "+t.responseText}else a="Unknown Error";c.reject({status:500,
error:a})}}),b=c.promise();return b.xhr=f,n.resolve(b)}
this.new_handle=function(t,n){return c("AbstractHandle.new_handle",[],1,t,n)
},this.new_handle_async=function(t,n){
return d(),c("AbstractHandle.new_handle",[],1,t,n)
},this.localize_handle=function(t,n,e,a){
return c("AbstractHandle.localize_handle",[t,n],1,e,a)
},this.localize_handle_async=function(t,n,e,a){
return d(),c("AbstractHandle.localize_handle",[t,n],1,e,a)
},this.initialize_handle=function(t,n,e){
return c("AbstractHandle.initialize_handle",[t],1,n,e)
},this.initialize_handle_async=function(t,n,e){
return d(),c("AbstractHandle.initialize_handle",[t],1,n,e)
},this.persist_handle=function(t,n,e){
return c("AbstractHandle.persist_handle",[t],1,n,e)
},this.persist_handle_async=function(t,n,e){
return d(),c("AbstractHandle.persist_handle",[t],1,n,e)
},this.upload=function(t,n,e){return c("AbstractHandle.upload",[t],1,n,e)
},this.upload_async=function(t,n,e){
return d(),c("AbstractHandle.upload",[t],1,n,e)
},this.download=function(t,n,e,a){
return c("AbstractHandle.download",[t,n],0,e,a)
},this.download_async=function(t,n,e,a){
return d(),c("AbstractHandle.download",[t,n],0,e,a)
},this.upload_metadata=function(t,n,e,a){
return c("AbstractHandle.upload_metadata",[t,n],0,e,a)
},this.upload_metadata_async=function(t,n,e,a){
return d(),c("AbstractHandle.upload_metadata",[t,n],0,e,a)
},this.download_metadata=function(t,n,e,a){
return c("AbstractHandle.download_metadata",[t,n],0,e,a)
},this.download_metadata_async=function(t,n,e,a){
return d(),c("AbstractHandle.download_metadata",[t,n],0,e,a)
},this.ids_to_handles=function(t,n,e){
return c("AbstractHandle.ids_to_handles",[t],1,n,e)
},this.ids_to_handles_async=function(t,n,e){
return d(),c("AbstractHandle.ids_to_handles",[t],1,n,e)
},this.hids_to_handles=function(t,n,e){
return c("AbstractHandle.hids_to_handles",[t],1,n,e)
},this.hids_to_handles_async=function(t,n,e){
return d(),c("AbstractHandle.hids_to_handles",[t],1,n,e)
},this.are_readable=function(t,n,e){
return c("AbstractHandle.are_readable",[t],1,n,e)
},this.are_readable_async=function(t,n,e){
return d(),c("AbstractHandle.are_readable",[t],1,n,e)
},this.is_readable=function(t,n,e){
return c("AbstractHandle.is_readable",[t],1,n,e)
},this.is_readable_async=function(t,n,e){
return d(),c("AbstractHandle.is_readable",[t],1,n,e)
},this.list_handles=function(t,n){
return c("AbstractHandle.list_handles",[],1,t,n)
},this.list_handles_async=function(t,n){
return d(),c("AbstractHandle.list_handles",[],1,t,n)
},this.delete_handles=function(t,n,e){
return c("AbstractHandle.delete_handles",[t],0,n,e)
},this.delete_handles_async=function(t,n,e){
return d(),c("AbstractHandle.delete_handles",[t],0,n,e)
},this.give=function(t,n,e,a,r){return c("AbstractHandle.give",[t,n,e],0,a,r)
},this.give_async=function(t,n,e,a,r){
return d(),c("AbstractHandle.give",[t,n,e],0,a,r)
},this.ids_to_handles=function(t,n,e){
return c("AbstractHandle.ids_to_handles",[t],1,n,e)
},this.ids_to_handles_async=function(t,n,e){
return d(),c("AbstractHandle.ids_to_handles",[t],1,n,e)}}}));