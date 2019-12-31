define(["jquery","bluebird"],(function(t,n){"use strict";return function(e,a,r){
if("string"!=typeof e)throw new Error("Service url was not provided");this.url=e
;var o=e,s=!1;function i(){if(!s){if(s=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var u=a||{token:"",user_id:""},_=r;function f(e,a,r,s,i){var f=t.Deferred()
;"function"==typeof s&&f.done(s),"function"==typeof i&&f.fail(i);var c={
params:a,method:e,version:"1.1",id:String(Math.random()).slice(2)
},m=null,l=_&&"function"==typeof _?_():u.token?u.token:null
;null!==l&&(m=function(t){t.setRequestHeader("Authorization",l)})
;var d=jQuery.ajax({url:o,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(c),beforeSend:m,success:function(t,n,e){var a;try{
var s=JSON.parse(t);a=1===r?s.result[0]:s.result}catch(i){return void f.reject({
status:503,error:i,url:o,resp:t})}f.resolve(a)},error:function(t,n,e){var a
;if(t.responseText)try{a=JSON.parse(t.responseText).error}catch(r){
a="Unknown error - "+t.responseText}else a="Unknown Error";f.reject({status:500,
error:a})}}),g=f.promise();return g.xhr=d,n.resolve(g)}
this.get_dataset_names=function(t,n){
return f("KmerAnnotationByFigfam.get_dataset_names",[],1,t,n)
},this.get_dataset_names_async=function(t,n){
return i(),f("KmerAnnotationByFigfam.get_dataset_names",[],1,t,n)
},this.get_default_dataset_name=function(t,n){
return f("KmerAnnotationByFigfam.get_default_dataset_name",[],1,t,n)
},this.get_default_dataset_name_async=function(t,n){
return i(),f("KmerAnnotationByFigfam.get_default_dataset_name",[],1,t,n)
},this.annotate_proteins=function(t,n,e,a){
return f("KmerAnnotationByFigfam.annotate_proteins",[t,n],1,e,a)
},this.annotate_proteins_async=function(t,n,e,a){
return i(),f("KmerAnnotationByFigfam.annotate_proteins",[t,n],1,e,a)
},this.annotate_proteins_fasta=function(t,n,e,a){
return f("KmerAnnotationByFigfam.annotate_proteins_fasta",[t,n],1,e,a)
},this.annotate_proteins_fasta_async=function(t,n,e,a){
return i(),f("KmerAnnotationByFigfam.annotate_proteins_fasta",[t,n],1,e,a)
},this.call_genes_in_dna=function(t,n,e,a){
return f("KmerAnnotationByFigfam.call_genes_in_dna",[t,n],1,e,a)
},this.call_genes_in_dna_async=function(t,n,e,a){
return i(),f("KmerAnnotationByFigfam.call_genes_in_dna",[t,n],1,e,a)
},this.estimate_closest_genomes=function(t,n,e,a){
return f("KmerAnnotationByFigfam.estimate_closest_genomes",[t,n],1,e,a)
},this.estimate_closest_genomes_async=function(t,n,e,a){
return i(),f("KmerAnnotationByFigfam.estimate_closest_genomes",[t,n],1,e,a)}}
}));