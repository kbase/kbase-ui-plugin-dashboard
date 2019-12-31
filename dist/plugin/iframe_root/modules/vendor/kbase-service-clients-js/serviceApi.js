define(["bluebird","kb_common/utils","./utils","./client/workspace","./client/userProfile","./client/narrativeMethodStore","kb_common/jsonRpc/dynamicServiceClient"],(function(e,r,t,n,a,s,o){
"use strict";return{make:function(i){return function(i){
var c=i.runtime,u=new n(c.getConfig("services.workspace.url"),{
token:c.getService("session").getAuthToken()
}),l=new a(c.getConfig("services.user_profile.url"),{
token:c.getService("session").getAuthToken()
}),m=new s(c.getConfig("services.narrative_method_store.url"),{
token:c.getService("session").getAuthToken()}),f=new o({
module:"NarrativeService",url:c.config("services.service_wizard.url"),
token:c.service("session").getAuthToken()});function p(e){
var r,t=e.split(/\//).filter((function(e){return e.length>0}))
;if(1===t.length)r={id:t[0]};else if(3===t.length)r={module:t[0],id:t[1],
commitHash:t[2]};else{
if(2!==t.length)throw console.error("ERROR"),console.error("parts"),
new Error("Invalid method metadata");r={module:t[0],id:t[1]}}return r}
function h(t){return e.try((function(){if(0===t.length)return[]
;var n=t.map((function(e){return{id:e.workspace.id}
})),a=c.service("session").getUsername();const s=Math.ceil(n.length/1e3),o=[]
;for(let e=0;e<s;e+=1){
const s=n.slice(1e3*e,1e3*e+1e3),i=u.get_permissions_mass({workspaces:s
}).then(n=>{const s=n.perms;for(let o=0;o<s.length;o++){const n=t[1e3*e+o]
;n.permissions=r.object_to_array(s[o],"username","permission").filter(e=>!(e.username===a||"*"===e.username||e.username===n.workspace.owner)).sort((e,r)=>e.username<r.username?-1:e.username>r.username?1:0)
}return t});o.push(i)}return e.all(o).then(()=>t)}))}return{
getNarratives:function(e){var r={narratorial:"narratorials",mine:"narratives",
public:"narratives",shared:"narratives"},n={narratorial:"list_narratorials",
mine:"list_narratives",public:"list_narratives",shared:"list_narratives"
}[e.params.type],a={type:e.params.type}
;return f.callFunc(n,[a]).then((function(n){
for(var a=n[0][r[e.params.type]],s=[],o=0;o<a.length;o+=1){
var i=a[o],c=t.workspaceInfoToObject(i.ws);if("true"!==c.metadata.is_temporary){
var u=t.object_info_to_object(i.nar),l={app:0,markdown:0,code:0},m=[],f=[]
;u.metadata&&(u.metadata.job_info&&(u.metadata.jobInfo=JSON.parse(u.metadata.job_info)),
u.metadata.methods&&(u.metadata.cellInfo=JSON.parse(u.metadata.methods)),
u.metadata.cellInfo&&(u.metadata.cellInfo.app&&Object.keys(u.metadata.cellInfo.app).forEach((function(e){
m.push(p(e))
})),u.metadata.cellInfo.method&&Object.keys(u.metadata.cellInfo.method).forEach((function(e){
f.push(p(e))}))),Object.keys(u.metadata).forEach((function(e){var r=e.split(".")
;switch(r[0]){case"method":case"app":m.push(p(r[1])),l.app+=1;break
;case"ipython":case"jupyter":var t=r[1];l[t]+=parseInt(u.metadata[e])}
}))),s.push({workspace:c,object:u,apps:m,methods:f,cellTypes:l})}}return s}))},
getCollaborators:function(n){var a=n&&n.users?n.users:[]
;return a.push(c.getService("session").getUsername()),
e.all([f.callFunc("list_narratives",[{type:"mine"
}]),f.callFunc("list_narratives",[{type:"shared"}])]).then((function(e){
return e.reduce((function(e,r){return e.concat(r[0].narratives)
}),[]).map((function(e){
return e.object=t.object_info_to_object(e.nar),e.workspace=t.workspaceInfoToObject(e.ws),
e}))})).then((function(e){return h(e)})).then((function(e){var t,n,s={}
;for(t=0;t<e.length;t+=1){if(n=e[t].permissions,!a.some((function(r){
return!(e[t].workspace.owner===r||n.some((function(e){return e.username===r})))
})))n.filter((function(e){return!(a.indexOf(e.username)>=0||"*"===e.username)
})).forEach((function(e){r.incrProp(s,e.username)}))}
var o=r.object_to_array(s,"username","count"),i=o.map((function(e){
return e.username}));return[o,i,l.get_user_profile(i)]
})).spread((function(e,r,t){var n
;for(n=0;n<t.length;n+=1)t[n]&&t[n].user?e[n].realname=t[n].user.realname:console.warn("WARNING: user "+r[n]+" is a sharing partner but has no profile.")
;return e=e.filter((function(e){return!!e.realname}))}))},getPermissions:h,
getApps:function(){return m.list_apps({})},getMethods:function(){
return m.list_methods({})}}}(i)}}}));