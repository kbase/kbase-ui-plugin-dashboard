define(["bluebird","kb_common/utils","./utils","./client/workspace"],(function(e,t,n,r){
"use strict";return Object.create({},{init:{value:function(e){
if(!e.url)throw"The workspace client url is not defined"
;return this.workspaceClient=new r(e.url,{token:e.authToken}),this}},
isValidNarrative:{value:function(e){
return!(!e.metadata.narrative||!/^\d+$/.test(e.metadata.narrative)||"true"===e.metadata.is_temporary)
}},applyNarrativeFilter:{value:function(e,t){return!0}},getNarratives:{
value:function(t){return new e(function(r,a){
e.resolve(this.workspaceClient.list_workspace_info(t.params)).then(function(i){
var o,s,c=[]
;for(o=0;o<i.length;o+=1)s=n.workspace_metadata_to_object(i[o]),this.isValidNarrative(s)&&this.applyNarrativeFilter(t.filter)&&c.push(s)
;var l=c.map((function(e){return{ref:e.id+"/"+e.metadata.narrative}}))
;e.resolve(this.workspaceClient.get_object_info_new({objects:l,ignoreErrors:1,
includeMetadata:1})).then(function(e){var t,a=[]
;for(t=0;t<e.length;t+=1)if(e[t]){var i=n.object_info_to_object(e[t])
;"Narrative"===i.typeName?a.push({workspace:c[t],object:i
}):console.log("WARNING: workspace "+i.wsid+" object "+i.id+" is not a valid Narrative object")
}else console.log("WARNING: workspace "+a[t].workspace.id+" does not contain a matching narrative object")
;r(a)}.bind(this)).catch((function(e){a(e)}))}.bind(this)).catch((function(e){
a(e)}))}.bind(this))}},getPermissions:{value:function(n){
return new e(function(r,a,i){var o=n.map(function(t){
return e.resolve(this.workspaceClient.get_permissions({id:t.workspace.id}))
}.bind(this)),s=R.getUsername();e.all(o).then(function(e){var a,i
;for(a=0;a<e.length;a+=1)(i=n[a]).permissions=t.object_to_array(e[a],"username","permission").filter((function(e){
return e.username!==s&&"*"!==e.username&&e.username!==i.workspace.owner
})).sort((function(e,t){
return e.username<t.username?-1:e.username>t.username?1:0}));r(n)
}.bind(this)).catch((function(e){a(e)}))}.bind(this))}},getObject:{
value:function(t,r){return new e(function(a,i){var o=[{ref:t+"/"+r}]
;e.resolve(this.workspaceClient.get_object_info_new({objects:o,ignoreErrors:1,
includeMetadata:1})).then(function(e){
if(0!==e.length)if(e.length>1)i("Too many ("+e.length+") objects found.");else{
if(null===e[0])return i("Null object returned"),void console.log(e)
;var t=n.object_info_to_object(e[0]);a(t)}else i("Object not found")
}.bind(this)).catch((function(e){i(e)}))}.bind(this))}},translateRefs:{
value:function(t,n){return new e(function(n,r){var a=t.map((function(e){return{
ref:e}}));e.resolve(this.workspaceClient.get_object_info_new({objects:a,
ignoreErrors:1,includeMetadata:1})).then((function(e){var r,a={}
;for(r=0;r<e.length;r+=1){
var i,o=e[r],s=o[2],c=(s.split(".")[0],s.slice(s.indexOf(".")+1).split("-")[0]),l=o[7]+"/"+o[1]
;switch(c){case"FBA":"fbas/";break;case"FBAModel":"models/";break;case"Media":
i="media/";break;case"Genome":i="genomes/";break;case"MetabolicMap":i="maps/"
;break;case"PhenotypeSet":i="phenotype/"}var u='<a href="#/'+i+l+'">'+l+"</a>"
;a[t[r]]={link:u,label:l}}n(a)})).catch((function(e){
console.log("ERROR"),console.log(e),r(e)}))}.bind(this))}}})}));