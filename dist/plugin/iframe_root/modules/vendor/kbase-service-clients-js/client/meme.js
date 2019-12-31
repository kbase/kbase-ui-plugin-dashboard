define(["jquery","bluebird"],(function(t,_){"use strict";return function(o,e,i){
if("string"!=typeof o)throw new Error("Service url was not provided");this.url=o
;var n=o,s=!1;function r(){if(!s){if(s=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var m=e||{token:"",user_id:""},c=i;function f(o,e,i,s,r){var f=t.Deferred()
;"function"==typeof s&&f.done(s),"function"==typeof r&&f.fail(r);var l={
params:e,method:o,version:"1.1",id:String(Math.random()).slice(2)
},u=null,h=c&&"function"==typeof c?c():m.token?m.token:null
;null!==h&&(u=function(t){t.setRequestHeader("Authorization",h)})
;var w=jQuery.ajax({url:n,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(l),beforeSend:u,success:function(t,_,o){var e;try{
var s=JSON.parse(t);e=1===i?s.result[0]:s.result}catch(r){return void f.reject({
status:503,error:r,url:n,resp:t})}f.resolve(e)},error:function(t,_,o){var e
;if(t.responseText)try{e=JSON.parse(t.responseText).error}catch(i){
e="Unknown error - "+t.responseText}else e="Unknown Error";f.reject({status:500,
error:e})}}),a=f.promise();return a.xhr=w,_.resolve(a)}
this.find_motifs_with_meme=function(t,_,o,e){
return f("MEME.find_motifs_with_meme",[t,_],1,o,e)
},this.find_motifs_with_meme_async=function(t,_,o,e){
return r(),f("MEME.find_motifs_with_meme",[t,_],1,o,e)
},this.find_motifs_with_meme_from_ws=function(t,_,o,e){
return f("MEME.find_motifs_with_meme_from_ws",[t,_],1,o,e)
},this.find_motifs_with_meme_from_ws_async=function(t,_,o,e){
return r(),f("MEME.find_motifs_with_meme_from_ws",[t,_],1,o,e)
},this.find_motifs_with_meme_job_from_ws=function(t,_,o,e){
return f("MEME.find_motifs_with_meme_job_from_ws",[t,_],1,o,e)
},this.find_motifs_with_meme_job_from_ws_async=function(t,_,o,e){
return r(),f("MEME.find_motifs_with_meme_job_from_ws",[t,_],1,o,e)
},this.compare_motifs_with_tomtom=function(t,_,o,e,i){
return f("MEME.compare_motifs_with_tomtom",[t,_,o],1,e,i)
},this.compare_motifs_with_tomtom_async=function(t,_,o,e,i){
return r(),f("MEME.compare_motifs_with_tomtom",[t,_,o],1,e,i)
},this.compare_motifs_with_tomtom_by_collection=function(t,_,o,e,i){
return f("MEME.compare_motifs_with_tomtom_by_collection",[t,_,o],1,e,i)
},this.compare_motifs_with_tomtom_by_collection_async=function(t,_,o,e,i){
return r(),f("MEME.compare_motifs_with_tomtom_by_collection",[t,_,o],1,e,i)
},this.compare_motifs_with_tomtom_by_collection_from_ws=function(t,_,o,e){
return f("MEME.compare_motifs_with_tomtom_by_collection_from_ws",[t,_],1,o,e)
},this.compare_motifs_with_tomtom_by_collection_from_ws_async=function(t,_,o,e){
return r(),
f("MEME.compare_motifs_with_tomtom_by_collection_from_ws",[t,_],1,o,e)
},this.compare_motifs_with_tomtom_job_by_collection_from_ws=function(t,_,o,e){
return f("MEME.compare_motifs_with_tomtom_job_by_collection_from_ws",[t,_],1,o,e)
},
this.compare_motifs_with_tomtom_job_by_collection_from_ws_async=function(t,_,o,e){
return r(),
f("MEME.compare_motifs_with_tomtom_job_by_collection_from_ws",[t,_],1,o,e)
},this.find_sites_with_mast=function(t,_,o,e,i){
return f("MEME.find_sites_with_mast",[t,_,o],1,e,i)
},this.find_sites_with_mast_async=function(t,_,o,e,i){
return r(),f("MEME.find_sites_with_mast",[t,_,o],1,e,i)
},this.find_sites_with_mast_by_collection=function(t,_,o,e,i){
return f("MEME.find_sites_with_mast_by_collection",[t,_,o],1,e,i)
},this.find_sites_with_mast_by_collection_async=function(t,_,o,e,i){
return r(),f("MEME.find_sites_with_mast_by_collection",[t,_,o],1,e,i)
},this.find_sites_with_mast_by_collection_from_ws=function(t,_,o,e){
return f("MEME.find_sites_with_mast_by_collection_from_ws",[t,_],1,o,e)
},this.find_sites_with_mast_by_collection_from_ws_async=function(t,_,o,e){
return r(),f("MEME.find_sites_with_mast_by_collection_from_ws",[t,_],1,o,e)
},this.find_sites_with_mast_job_by_collection_from_ws=function(t,_,o,e){
return f("MEME.find_sites_with_mast_job_by_collection_from_ws",[t,_],1,o,e)
},this.find_sites_with_mast_job_by_collection_from_ws_async=function(t,_,o,e){
return r(),f("MEME.find_sites_with_mast_job_by_collection_from_ws",[t,_],1,o,e)
},this.get_pspm_collection_from_meme_result=function(t,_,o){
return f("MEME.get_pspm_collection_from_meme_result",[t],1,_,o)
},this.get_pspm_collection_from_meme_result_async=function(t,_,o){
return r(),f("MEME.get_pspm_collection_from_meme_result",[t],1,_,o)
},this.get_pspm_collection_from_meme_result_from_ws=function(t,_,o,e){
return f("MEME.get_pspm_collection_from_meme_result_from_ws",[t,_],1,o,e)
},this.get_pspm_collection_from_meme_result_from_ws_async=function(t,_,o,e){
return r(),f("MEME.get_pspm_collection_from_meme_result_from_ws",[t,_],1,o,e)
},this.get_pspm_collection_from_meme_result_job_from_ws=function(t,_,o,e){
return f("MEME.get_pspm_collection_from_meme_result_job_from_ws",[t,_],1,o,e)
},this.get_pspm_collection_from_meme_result_job_from_ws_async=function(t,_,o,e){
return r(),
f("MEME.get_pspm_collection_from_meme_result_job_from_ws",[t,_],1,o,e)}}}));