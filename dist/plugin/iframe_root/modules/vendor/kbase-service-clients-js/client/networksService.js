define(["jquery","bluebird"],(function(t,e){"use strict";return function(r,s,n){
if("string"!=typeof r)throw new Error("Service url was not provided");this.url=r
;var a=r,o=!1;function i(){if(!o){if(o=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var u=s||{token:"",user_id:""},_=n;function l(r,s,n,o,i){var l=t.Deferred()
;"function"==typeof o&&l.done(o),"function"==typeof i&&l.fail(i);var d={
params:s,method:r,version:"1.1",id:String(Math.random()).slice(2)
},c=null,f=_&&"function"==typeof _?_():u.token?u.token:null
;null!==f&&(c=function(t){t.setRequestHeader("Authorization",f)})
;var w=jQuery.ajax({url:a,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(d),beforeSend:c,success:function(t,e,r){var s;try{
var o=JSON.parse(t);s=1===n?o.result[0]:o.result}catch(i){return void l.reject({
status:503,error:i,url:a,resp:t})}l.resolve(s)},error:function(t,e,r){var s
;if(t.responseText)try{s=JSON.parse(t.responseText).error}catch(n){
s="Unknown error - "+t.responseText}else s="Unknown Error";l.reject({status:500,
error:s})}}),h=l.promise();return h.xhr=w,e.resolve(h)}
this.all_datasets=function(t,e){return l("KBaseNetworks.all_datasets",[],1,t,e)
},this.all_datasets_async=function(t,e){
return i(),l("KBaseNetworks.all_datasets",[],1,t,e)
},this.all_dataset_sources=function(t,e){
return l("KBaseNetworks.all_dataset_sources",[],1,t,e)
},this.all_dataset_sources_async=function(t,e){
return i(),l("KBaseNetworks.all_dataset_sources",[],1,t,e)
},this.all_network_types=function(t,e){
return l("KBaseNetworks.all_network_types",[],1,t,e)
},this.all_network_types_async=function(t,e){
return i(),l("KBaseNetworks.all_network_types",[],1,t,e)
},this.dataset_source2datasets=function(t,e,r){
return l("KBaseNetworks.dataset_source2datasets",[t],1,e,r)
},this.dataset_source2datasets_async=function(t,e,r){
return i(),l("KBaseNetworks.dataset_source2datasets",[t],1,e,r)
},this.taxon2datasets=function(t,e,r){
return l("KBaseNetworks.taxon2datasets",[t],1,e,r)
},this.taxon2datasets_async=function(t,e,r){
return i(),l("KBaseNetworks.taxon2datasets",[t],1,e,r)
},this.network_type2datasets=function(t,e,r){
return l("KBaseNetworks.network_type2datasets",[t],1,e,r)
},this.network_type2datasets_async=function(t,e,r){
return i(),l("KBaseNetworks.network_type2datasets",[t],1,e,r)
},this.entity2datasets=function(t,e,r){
return l("KBaseNetworks.entity2datasets",[t],1,e,r)
},this.entity2datasets_async=function(t,e,r){
return i(),l("KBaseNetworks.entity2datasets",[t],1,e,r)
},this.build_first_neighbor_network=function(t,e,r,s,n){
return l("KBaseNetworks.build_first_neighbor_network",[t,e,r],1,s,n)
},this.build_first_neighbor_network_async=function(t,e,r,s,n){
return i(),l("KBaseNetworks.build_first_neighbor_network",[t,e,r],1,s,n)
},this.build_first_neighbor_network_limted_by_strength=function(t,e,r,s,n,a){
return l("KBaseNetworks.build_first_neighbor_network_limted_by_strength",[t,e,r,s],1,n,a)
},
this.build_first_neighbor_network_limted_by_strength_async=function(t,e,r,s,n,a){
return i(),
l("KBaseNetworks.build_first_neighbor_network_limted_by_strength",[t,e,r,s],1,n,a)
},this.build_internal_network=function(t,e,r,s,n){
return l("KBaseNetworks.build_internal_network",[t,e,r],1,s,n)
},this.build_internal_network_async=function(t,e,r,s,n){
return i(),l("KBaseNetworks.build_internal_network",[t,e,r],1,s,n)
},this.build_internal_network_limited_by_strength=function(t,e,r,s,n,a){
return l("KBaseNetworks.build_internal_network_limited_by_strength",[t,e,r,s],1,n,a)
},this.build_internal_network_limited_by_strength_async=function(t,e,r,s,n,a){
return i(),
l("KBaseNetworks.build_internal_network_limited_by_strength",[t,e,r,s],1,n,a)}}
}));