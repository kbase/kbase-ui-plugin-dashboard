define(["jquery","bluebird"],(function(e,r){"use strict";return function(t,n,o){
if("string"!=typeof t)throw new Error("Service url was not provided");this.url=t
;var i=t,s=!1;function a(){if(!s){if(s=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var u=n||{token:"",user_id:""},c=o;function f(t,n,o,s,a){var f=e.Deferred()
;"function"==typeof s&&f.done(s),"function"==typeof a&&f.fail(a);var m={
params:n,method:t,version:"1.1",id:String(Math.random()).slice(2)
},p=null,_=c&&"function"==typeof c?c():u.token?u.token:null
;null!==_&&(p=function(e){e.setRequestHeader("Authorization",_)})
;var l=jQuery.ajax({url:i,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(m),beforeSend:p,success:function(e,r,t){var n;try{
var s=JSON.parse(e);n=1===o?s.result[0]:s.result}catch(a){return void f.reject({
status:503,error:a,url:i,resp:e})}f.resolve(n)},error:function(e,r,t){var n
;if(e.responseText)try{n=JSON.parse(e.responseText).error}catch(o){
n="Unknown error - "+e.responseText}else n="Unknown Error";f.reject({status:500,
error:n})}}),d=f.promise();return d.xhr=l,r.resolve(d)}this.ver=function(e,r){
return f("KBaseDataImport.ver",[],1,e,r)},this.ver_async=function(e,r){
return a(),f("KBaseDataImport.ver",[],1,e,r)
},this.get_ncbi_genome_names=function(e,r){
return f("KBaseDataImport.get_ncbi_genome_names",[],1,e,r)
},this.get_ncbi_genome_names_async=function(e,r){
return a(),f("KBaseDataImport.get_ncbi_genome_names",[],1,e,r)
},this.import_ncbi_genome=function(e,r,t){
return f("KBaseDataImport.import_ncbi_genome",[e],0,r,t)
},this.import_ncbi_genome_async=function(e,r,t){
return a(),f("KBaseDataImport.import_ncbi_genome",[e],0,r,t)}}}));