define(["underscore","./props"],(function(e,t){"use strict";function r(r){
var n=t.make({data:r.typeDefs}),i={type:"fontAwesome",classes:["fa-file-o"]}
;function o(e){
var t,r=0,n=["#F44336","#E91E63","#9C27B0","#3F51B5","#2196F3","#673AB7","#FFC107","#0277BD","#00BCD4","#009688","#4CAF50","#33691E","#2E7D32","#AEEA00","#03A9F4","#FF9800","#FF5722","#795548","#006064","#607D8B"]
;for(t=0;t<e.name.length;t+=1)r+=e.name.charCodeAt(t);return n[r%n.length]}
return Object.freeze({getIcon:function(e){
var t=n.getItem(["types",e.type.module,e.type.name,"icon"])||i,r=t.classes.map((function(e){
return e}));switch(t.type){case"kbase":if(r.push("icon"),e.size)switch(e.size){
case"small":r.push("icon-sm");break;case"medium":r.push("icon-md");break
;case"large":r.push("icon-lg")}break;case"fontAwesome":r.push("fa")}if(r)return{
classes:r,type:t.type,color:t.color||o(e.type),
html:'<span class="'+r.join(" ")+'"></span>'}},setIcon:function(e,t){
var r=n.getItem(["types",e.module,e.name])
;null==r?n.setItem(["types",e.module,e.name],{icon:t
}):n.setItem(["types",e.module,e.name,"icon"],t)},getViewer:function(t){
if(t.id)return function(e){
var t=n.getItem(["types",e.type.module,e.type.name,"viewersById",e.id])
;if(!t)throw new Error("Viewer not found with this id "+e.id+" for "+e.type.module+"."+e.type.name)
;return t}(t);var r=n.getItem(["types",t.type.module,t.type.name,"viewers"])
;if(r&&0!==r.length){if(1===r.length)return r[0];var i=r.filter((function(e){
return!!e.default}));if(1===i.length){var o=e.extend({},i[0])
;return delete o.default,o}
if(0===i.length)throw new Error("Multiple viewers defined for this type, but none are set as default")
;throw new Error("Multiple default viewers defined for this type")}},
getDefault:function(e){return n.getItem(["defaults",e])},makeTypeId:function(e){
return e.module+"."+e.name+"-"+e.version.major+"."+e.version.minor},
parseTypeId:function(e){var t=e.match(/^(.+?)\.(.+?)-(.+?)\.(.+)$/)
;if(!t)throw new Error("Invalid data type "+e)
;if(5!==t.length)throw new Error("Invalid data type "+e);return{module:t[1],
name:t[2],version:{major:t[3],minor:t[4]}}},makeType:function(){
if(1===arguments.length){var e=arguments[0];if(e.version){
var t=e.version.split(".");return{module:e.module,name:e.name,version:{
major:t[0],minor:t[1]}}}}},makeVersion:function(e){
return e.version.major+"."+e.version.minor},addViewer:function(e,t){
void 0===n.getItem(["types",e.module,e.name])&&n.setItem(["types",e.module,e.name],{
viewers:[]});var r=n.getItem(["types",e.module,e.name,"viewers"])
;if(r||(r=[],n.setItem(["types",e.module,e.name,"viewers"],r)),r.push(t),t.id){
var i=n.getItem(["types",e.module,e.name,"viewersById"])
;if(i||(i={},n.setItem(["types",e.module,e.name,"viewersById"],i)),
i[t.id])throw new Error("Viewer with this id already registered "+t.id)
;i[t.id]=t}},hasType:function(e){return!!n.hasItem(["types",e.module,e.name])},
checkViewers:function(){var e=n.getItem("types"),t=[]
;return Object.keys(e).forEach((function(r){var n=e[r]
;Object.keys(n).forEach((function(e){var i=n[e],o=!1
;i.viewers?(i.viewers.forEach((function(n){n.default&&(o&&t.push({
severity:"error",type:"duplicate-default",
message:"There is already a default viewer established "+r+"."+e,info:{module:r,
type:e}}),o=!0)})),o||t.push({severity:"error",type:"no-default",
message:"There is no default viewer for this type: "+r+"."+e,info:{module:r,
type:e}})):t.push({severity:"warning",type:"no-viewers",
message:"A registered type has no viewers: "+r+"."+e,info:{module:r,type:e}})}))
})),t}})}return{make:function(e){return r(e)}}}));