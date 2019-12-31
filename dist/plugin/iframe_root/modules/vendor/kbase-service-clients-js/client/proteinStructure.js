define(["jquery","bluebird"],(function(e,r){"use strict";return function(t,o,n){
if("string"!=typeof t)throw new Error("Service url was not provided");this.url=t
;var u=t,i=!1;function s(){if(!i){if(i=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var a=o||{token:"",user_id:""},c=n;function d(t,o,n,i,s){var d=e.Deferred()
;"function"==typeof i&&d.done(i),"function"==typeof s&&d.fail(s);var f={
params:o,method:t,version:"1.1",id:String(Math.random()).slice(2)
},l=null,p=c&&"function"==typeof c?c():a.token?a.token:null
;null!==p&&(l=function(e){e.setRequestHeader("Authorization",p)})
;var _=jQuery.ajax({url:u,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(f),beforeSend:l,success:function(e,r,t){var o;try{
var i=JSON.parse(e);o=1===n?i.result[0]:i.result}catch(s){return void d.reject({
status:503,error:s,url:u,resp:e})}d.resolve(o)},error:function(e,r,t){var o
;if(e.responseText)try{o=JSON.parse(e.responseText).error}catch(n){
o="Unknown error - "+e.responseText}else o="Unknown Error";d.reject({status:500,
error:o})}}),y=d.promise();return y.xhr=_,r.resolve(y)}
this.lookup_pdb_by_md5=function(e,r,t){
return d("KBaseProteinStructure.lookup_pdb_by_md5",[e],1,r,t)
},this.lookup_pdb_by_md5_async=function(e,r,t){
return s(),d("KBaseProteinStructure.lookup_pdb_by_md5",[e],1,r,t)
},this.lookup_pdb_by_fid=function(e,r,t){
return d("KBaseProteinStructure.lookup_pdb_by_fid",[e],1,r,t)
},this.lookup_pdb_by_fid_async=function(e,r,t){
return s(),d("KBaseProteinStructure.lookup_pdb_by_fid",[e],1,r,t)}}}));