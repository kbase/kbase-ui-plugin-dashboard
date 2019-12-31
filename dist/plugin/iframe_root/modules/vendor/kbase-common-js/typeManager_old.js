define(["underscore","./props"],(function(e,t){"use strict";return{
make:function(n){return function(n){var r=t.make({data:n.typeDefs}),o={
type:"fontAwesome",classes:["fa-file-o"]};return{getIcon:function(e){
var t=r.getItem(["types",e.type.module,e.type.name,"icon"])||o,n=t.classes.map((function(e){
return e}));switch(t.type){case"kbase":if(n.push("icon"),e.size)switch(e.size){
case"small":n.push("icon-sm");break;case"medium":n.push("icon-md");break
;case"large":n.push("icon-lg")}break;case"fontAwesome":n.push("fa")}if(n)return{
classes:n,type:t.type,html:'<span class="'+n.join(" ")+'"></span>'}},
setIcon:function(e,t){var n=r.getItem(["types",e.module,e.name])
;null==n?r.setItem(["types",e.module,e.name],{icon:t
}):r.setItem(["types",e.module,e.name,"icon"],t)},getViewer:function(t){
if(!r.hasItem(["types",t.type.module,t.type.name]))throw{type:"ArgumentError",
reason:"TypeNotRegistered",
message:"The type identified by module "+t.type.module+", name "+t.type.name+" is not registered"
};if(!r.hasItem(["types",t.type.module,t.type.name,"viewers"]))throw{
type:"ArgumentError",reason:"NoViewersFound",
message:"No viewers registered for the type identified by module "+t.type.module+", name "+t.type.name+"."
};var n=r.getItem(["types",t.type.module,t.type.name,"viewers"])
;if(1===n.length)return n[0];var o=n.filter((function(e){return!!e.default}))
;if(1===o.length){var s=e.extend({},o[0]);return delete s.default,s}
throw 0===o.length?new Error("No viewer defined for this type"):new Error("Multiple default viewers defined for this widget")
},getDefault:function(e){return r.getItem(["defaults",e])},
makeTypeId:function(e){
return e.module+"."+e.name+"-"+e.version.major+"."+e.version.minor},
parseTypeId:function(e){var t=e.match(/^(.+?)\.(.+?)-(.+?)\.(.+)$/)
;if(!t)throw new Error("Invalid data type "+e)
;if(5!==t.length)throw new Error("Invalid data type "+e);return{module:t[1],
name:t[2],version:{major:t[3],minor:t[4]}}},makeType:function(){
if(1===arguments.length){var e=arguments[0];if(e.version){
var t=e.version.split(".");return{module:e.module,name:e.name,version:{
major:t[0],minor:t[1]}}}}},makeVersion:function(e){
return e.version.major+"."+e.version.minor},addViewer:function(e,t){
void 0===r.getItem(["types",e.module,e.name])&&r.setItem(["types",e.module,e.name],{
viewers:[]});var n=r.getItem(["types",e.module,e.name,"viewers"])
;n||(n=[],r.setItem(["types",e.module,e.name,"viewers"],n)),
t.default&&n.forEach((function(e){e.default=!1})),n.push(t)}}}(n)}}}));