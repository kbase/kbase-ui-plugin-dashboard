define(["jquery","bluebird"],(function(e,n){"use strict";return function(o,r,t){
if("string"!=typeof o)throw new Error("Service url was not provided");this.url=o
;var s=o,i=!1;function a(){if(!i){if(i=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var u=r||{token:"",user_id:""},m=t;function c(o,r,t,i,a){var c=e.Deferred()
;"function"==typeof i&&c.done(i),"function"==typeof a&&c.fail(a);var _={
params:r,method:o,version:"1.1",id:String(Math.random()).slice(2)
},f=null,p=m&&"function"==typeof m?m():u.token?u.token:null
;null!==p&&(f=function(e){e.setRequestHeader("Authorization",p)})
;var l=jQuery.ajax({url:s,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(_),beforeSend:f,success:function(e,n,o){var r;try{
var i=JSON.parse(e);r=1===t?i.result[0]:i.result}catch(a){return void c.reject({
status:503,error:a,url:s,resp:e})}c.resolve(r)},error:function(e,n,o){var r
;if(e.responseText)try{r=JSON.parse(e.responseText).error}catch(t){
r="Unknown error - "+e.responseText}else r="Unknown Error";c.reject({status:500,
error:r})}}),h=c.promise();return h.xhr=l,n.resolve(h)}
this.blast_proteomes=function(e,n,o){
return c("GenomeComparison.blast_proteomes",[e],1,n,o)
},this.blast_proteomes_async=function(e,n,o){
return a(),c("GenomeComparison.blast_proteomes",[e],1,n,o)
},this.annotate_genome=function(e,n,o){
return c("GenomeComparison.annotate_genome",[e],1,n,o)
},this.annotate_genome_async=function(e,n,o){
return a(),c("GenomeComparison.annotate_genome",[e],1,n,o)
},this.get_ncbi_genome_names=function(e,n){
return c("GenomeComparison.get_ncbi_genome_names",[],1,e,n)
},this.get_ncbi_genome_names_async=function(e,n){
return a(),c("GenomeComparison.get_ncbi_genome_names",[],1,e,n)
},this.import_ncbi_genome=function(e,n,o){
return c("GenomeComparison.import_ncbi_genome",[e],0,n,o)
},this.import_ncbi_genome_async=function(e,n,o){
return a(),c("GenomeComparison.import_ncbi_genome",[e],0,n,o)}}}));