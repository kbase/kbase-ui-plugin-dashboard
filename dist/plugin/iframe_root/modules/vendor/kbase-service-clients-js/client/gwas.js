define(["jquery","bluebird"],(function(e,t){"use strict";return function(n,r,i){
if("string"!=typeof n)throw new Error("Service url was not provided");this.url=n
;var s=n,o=!1;function a(){if(!o){if(o=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var u=r||{token:"",user_id:""},c=i;function _(n,r,i,o,a){var _=e.Deferred()
;"function"==typeof o&&_.done(o),"function"==typeof a&&_.fail(a);var l={
params:r,method:n,version:"1.1",id:String(Math.random()).slice(2)
},f=null,h=c&&"function"==typeof c?c():u.token?u.token:null
;null!==h&&(f=function(e){e.setRequestHeader("Authorization",h)})
;var p=jQuery.ajax({url:s,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(l),beforeSend:f,success:function(e,t,n){var r;try{
var o=JSON.parse(e);r=1===i?o.result[0]:o.result}catch(a){return void _.reject({
status:503,error:a,url:s,resp:e})}_.resolve(r)},error:function(e,t,n){var r
;if(e.responseText)try{r=JSON.parse(e.responseText).error}catch(i){
r="Unknown error - "+e.responseText}else r="Unknown Error";_.reject({status:500,
error:r})}}),w=_.promise();return w.xhr=p,t.resolve(w)}
this.prepare_variation=function(e,t,n){
return _("GWAS.prepare_variation",[e],1,t,n)
},this.prepare_variation_async=function(e,t,n){
return a(),_("GWAS.prepare_variation",[e],1,t,n)
},this.calculate_kinship_matrix=function(e,t,n){
return _("GWAS.calculate_kinship_matrix",[e],1,t,n)
},this.calculate_kinship_matrix_async=function(e,t,n){
return a(),_("GWAS.calculate_kinship_matrix",[e],1,t,n)
},this.run_gwas=function(e,t,n){return _("GWAS.run_gwas",[e],1,t,n)
},this.run_gwas_async=function(e,t,n){return a(),_("GWAS.run_gwas",[e],1,t,n)
},this.variations_to_genes=function(e,t,n){
return _("GWAS.variations_to_genes",[e],1,t,n)
},this.variations_to_genes_async=function(e,t,n){
return a(),_("GWAS.variations_to_genes",[e],1,t,n)
},this.genelist_to_networks=function(e,t,n){
return _("GWAS.genelist_to_networks",[e],1,t,n)
},this.genelist_to_networks_async=function(e,t,n){
return a(),_("GWAS.genelist_to_networks",[e],1,t,n)
},this.gwas_genelist_to_networks=function(e,t,n){
return _("GWAS.gwas_genelist_to_networks",[e],1,t,n)
},this.gwas_genelist_to_networks_async=function(e,t,n){
return a(),_("GWAS.gwas_genelist_to_networks",[e],1,t,n)}}}));