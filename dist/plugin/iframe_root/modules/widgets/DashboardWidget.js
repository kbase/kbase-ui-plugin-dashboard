define(["nunjucks","jquery","bluebird","kb_common/html","kb_common/utils","kb_service/serviceApi","kb_service/client/narrativeMethodStore","kb_common/logger","kb_common/gravatar","module"],(function(t,e,i,s,n,r,a,o,h,l){
"use strict";return Object.create({},{DashboardWidget_init:{value:function(i){
if(this._generatedId=0,
this.localConfig={},this.initConfig=i||{},this.setupConfig(),
this.params={},this.runtime=i.runtime,!this.runtime)throw{type:"ArgumentError",
reason:"RuntimeMissing",
message:"The runtime is required for a dashboard widget."}
;this.container=e(i.container),
n.isBlank(i.userId)?this.runtime.getService("session").isLoggedIn()&&(this.params.userId=this.runtime.getService("session").getUsername()):this.params.userId=i.userId,
this.setupAuth(),
this.setupCoreApp(),this.setup(),this.messages=[],this.error=null,this.state={},
this.stateMeta={status:"none",timestamp:new Date
},this.createListMaps(),this.templates={}
;var s=[new t.WebLoader(this.runtime.pluginPath+"/resources/"+this.widgetName+"/templates",!0),new t.WebLoader(this.runtime.pluginPath+"/resources/DashboardWidget/templates",!0)]
;return this.templates.env=new t.Environment(s,{autoescape:!0
}),this.templates.env.addFilter("roleLabel",function(t){
return this.listMaps.userRoles[t]?this.listMaps.userRoles[t].label:t
}.bind(this)),this.templates.env.addFilter("userClassLabel",function(t){
return this.listMaps.userClasses[t]?this.listMaps.userClasses[t].label:t
}.bind(this)),this.templates.env.addFilter("titleLabel",function(t){
return this.listMaps.userTitles[t]?this.listMaps.userTitles[t].label:t
}.bind(this)),this.templates.env.addFilter("permissionLabel",function(t){
return this.listMaps.permissionFlags[t]?this.listMaps.permissionFlags[t].label:t
}.bind(this)),this.templates.env.addFilter("length2",function(t){if(t){
if(t instanceof Array)return t.length
;if(t instanceof Object)return Object.keys(t).length}
}.bind(this)),this.templates.env.addFilter("gravatar",function(t,e,i,s){
return h.make().makeGravatarUrl(t,e,i,s)
}.bind(this)),this.templates.env.addFilter("kbmarkup",(function(t){
return t?t.replace(/\n/g,"<br>"):""
})),this.templates.env.addFilter("unixNiceTime",(function(t){if(t){
var e=parseInt(t,10);if(e&&!isNaN(e))return n.niceElapsedTime(1e3*e)}
})),this.templates.env.addFilter("dateFormat",function(t){
return n.niceElapsedTime(t)
}.bind(this)),this.templates.env.addFilter("jsDatestring",function(t){
return n.iso8601ToDate(t).toISOString()
}.bind(this)),this.templates.env.addFilter("niceRuntime",function(t){
if(!t)return"";var e=t/1e3,i=Math.floor(e/60);e%=60;var s=Math.floor(i/60);i%=60
;var n=Math.floor(s/24);s%=24
;return n?(n?n+"d":"")+(s?" "+s+"h":""):s?(s?" "+s+"h":"")+(i?" "+i+"m":""):i?" "+i+"m":""
}.bind(this)),this.templates.env.addFilter("defaultDash",(function(t){
return null==t||"string"==typeof t&&0===t.length?"-":t
})),this.templates.env.addFilter("isBlank",(function(t){
return null==t||"string"==typeof t&&0===t.length
})),this.templates.env.addFilter("isEmpty",(function(t){
return null==t||"string"==typeof t&&0===t.length||(!(!t.push||!t.pop||0!==t.length)||0===Object.keys(t).length)
})),this.templates.env.addFilter("sort",(function(t,e){
return"object"==typeof t&&t.pop&&t.push?t.sort((function(t,i){return e&&(t=t[e],
i=i[e]),t<i?-1:t>i?1:0})):t
})),this.templates.env.addFilter("plural",(function(t,e){
return"number"==typeof t&&1!==t?e||"s":""
})),this.templates.env.addGlobal("randomNumber",(function(t,e){
return Math.floor(t+Math.random()*(e-t))
})),this.templates.env.addGlobal("getConfig",function(t){
return this.runtime.getConfig(t)
}.bind(this)),this.templates.env.addFilter("methodPath",(function(t){var e=[]
;return t.namespace?e.push(t.namespace):e.push("l.m"),
t.id&&e.push(t.id),t.tag&&e.push(t.tag),e.join("/")
})),this.templates.cache={},this.context={},this.context.env={
pluginPath:this.runtime.pluginPath+"/resources/",widgetTitle:this.widgetTitle,
widgetName:this.widgetName,docsite:this.runtime.getConfig("docsite"),
getConfig:function(t){return this.runtime.getConfig(t)}.bind(this)
},this.context.state=this.state,
this.context.params=this.params,this.refreshEnabled=!1,this.refreshInterval=6e4,
this.refreshLastTime=null,this.status="new",this}},setupConfig:{
value:function(){
if(this.configs=[{},this.initConfig,this.localConfig],!this.hasConfig("container"))throw"A container is required by this Widget, but was not provided."
;if(!this.hasConfig("name"))throw"Widget name is required"
;if(!this.hasConfig("title"))throw"Widget title is required"}},setupCoreApp:{
value:function(){
if(this.widgetName=this.getConfig("name"),this.widgetTitle=this.getConfig("title"),
this.instanceId=this.genId(),
!this.hasConfig("viewState"))throw"The View State was not provided in "+this.widgetName
;this.viewState=this.getConfig("viewState")}},setupAuth:{value:function(){}},
getTag:{value:function(){
return"prod"===this.runtime.config("deploy.environment")?"release":"dev"}},
getApps:{value:function(){
var t=new a(this.runtime.getConfig("services.narrative_method_store.url"),{
token:this.runtime.service("session").getAuthToken()}),e=this.getTag()
;return i.all([t.list_methods({tag:e})]).spread(function(t){var i={}
;return t.forEach((function(t){i[t.id]={info:t,tag:e}})),i}.bind(this))}},
getNarratives:{value:function(t){return i.all([this.kbservice.getNarratives({
params:t}),this.getApps()]).spread(function(t,e){return t.forEach((function(t){
t.methods=t.methods.map((function(t){return{
id:t.module?[t.module,t.id].join("/"):t.id,name:t.id,view:{state:"error",
title:"Pre-SDK methods not supported"}}}))})),t.forEach(function(t){
t.apps=t.apps.map(function(t){if(!t.module)return{name:t.id,view:{state:"error",
title:"Pre-SDK apps not supported"}};var i=t.module+"/"+t.id,s=e[i];return s?{
id:i,info:s.info,name:s.info.name,tag:this.getTag()}:{id:i,name:i,info:{},view:{
state:"error",title:"App not found"},tag:this.getTag()}}.bind(this))
}.bind(this)),this.kbservice.getPermissions(t)}.bind(this)).then((function(t){
return t.sort((function(t,e){
return e.object.saveDate.getTime()-t.object.saveDate.getTime()}))}))}},
getAppName:{value:function(t){return this.getState(["appsMap",t,"name"],t)}},
getMethodName:{value:function(t){return this.getState(["methodsMap",t,"name"],t)
}},go:{value:function(){
return this.renderUI(),this.renderWaitingView(),this.setInitialState().then(function(){
this.status="dirty",this.setupUI()}.bind(this)).catch(function(t){
this.setError(t)}.bind(this)).finally(function(){
this.startSubscriptions(),this.afterStart&&this.afterStart()}.bind(this)),this}
},startSubscriptions:{value:function(){
this.subscriptions=[],this.subscriptions.push(this.runtime.recv("session","login.success",function(t){
this.onLoggedIn(t.session)
}.bind(this))),this.subscriptions.push(this.runtime.recv("session","logout.success",function(){
this.onLoggedOut()
}.bind(this))),this.subscriptions.push(this.runtime.recv("app","heartbeat",function(t){
this.handleHeartbeat(t)}.bind(this)))}},stopSubscriptions:{value:function(){
this.subscriptions&&(this.subscriptions.forEach(function(t){this.runtime.drop(t)
}.bind(this)),this.subscriptions=[])}},stop:{value:function(){
this.stopSubscriptions(),this.onStop&&this.onStop()}},handleHeartbeat:{
value:function(t){if(this.refreshEnabled){var e=(new Date).getTime()
;this.refreshLastTime||(this.refreshLastTime=e),
e-this.refreshLastTime>=this.refreshInterval&&this.onRefreshbeat&&(this.refreshLastTime=e,
this.onRefreshbeat(t))}this.onHeartbeat&&this.onHeartbeat(t)}},onHeartbeat:{
value:function(){switch(this.status){case"dirty":
this.status="clean",this.refresh().catch(function(t){this.setError(t)
}.bind(this));break;case"error":this.status="errorshown",this.renderError()}}},
onRefreshbeat:{value:function(){return this.setInitialState().catch(function(t){
this.setError(t)}.bind(this)),this}},setup:{value:function(){
return this.kbservice=r.make({runtime:this.runtime}),this}},renderUI:{
value:function(){return this.renderLayout(),this}},destroy:{value:function(){}},
getConfig:{value:function(t,e){var i
;for(i=0;i<this.configs.length;i++)if(void 0!==n.getProp(this.configs[i],t))return n.getProp(this.configs[i],t)
;return e}},setConfig:{value:function(t,e){n.setProp(this.configs[0],t,e)}},
hasConfig:{value:function(t){
for(var e=0;e<this.configs.length;e++)if(void 0!==n.getProp(this.configs[e],t))return!0
;return!1}},setParam:{value:function(t,e){
n.setProp(this.params,t,e),this.onParamChange&&this.onParamChange()}},getParam:{
value:function(t,e){return n.getProp(this.params,t,e)}},onParamChange:{
value:function(){this.filterState&&this.filterState()}},refresh:{
value:function(){return new i(function(t){this.render(),t()}.bind(this))}},
setState:{value:function(t,e){
n.isEqual(n.getProp(this.state,t),e)||(n.setProp(this.state,t,e),
this.onStateChange(),this.status="dirty")}},onStateChange:{value:function(){}},
hasState:{value:function(t){return n.hasProp(this.state,t)}},isState:{
value:function(t){return!(!n.hasProp(this.state,t)||!n.getProp(this.state,t))}},
getState:{value:function(t,e){return n.getProp(this.state,t,e)}},deleteState:{
value:function(){this.state={},this.status="dirty"}},doState:{
value:function(t,e,i){
return n.hasProp(this.state,t)?e(n.getProp(this.state,t)):i}},setError:{
value:function(t){o.logError({source:"Dashboard/"+this.widgetName,
title:"ERROR in "+this.widgetName,data:t}),this.status="error",this.error=t}},
checkState:{value:function(t){return this.stateMeta.status===t}},
setInitialState:{value:function(){return new i((function(t){t()}))}},
onLoggedIn:{value:function(){
this.setupAuth(),this.setup(),this.setInitialState({force:!0}).then(function(){
this.status="dirty"}.bind(this)).catch(function(t){this.setError(t)
}.bind(this)).done()}},onLoggedOut:{value:function(){
this.setupAuth(),this.setup(),this.setInitialState({force:!0}).then(function(){
this.status="dirty"}.bind(this)).catch(function(t){this.setError(t)
}.bind(this)).done()}},getTemplate:{value:function(t){
return void 0===this.templates.cache[t]&&(this.templates.cache[t]=this.templates.env.getTemplate(t+".html")),
this.templates.cache[t]}},createTemplateContext:{value:function(t){let e
;if(this.context.env.generatedId=this.genId(),
this.context.env.loggedIn=this.runtime.getService("session").isLoggedIn(),
this.runtime.service("session").isLoggedIn()?this.context.env.loggedInUser=this.runtime.getService("session").getUsername():delete this.context.env.loggedInUser,
this.context.env.instanceId=this.instanceId,t){var i=n.merge({},this.context)
;e=n.merge(i,t)}else e=this.context
;return this.onCreateTemplateContext?this.onCreateTemplateContext(e):e}},
renderTemplate:{value:function(t,e){var i=this.getTemplate(t)
;if(!i)throw"Template "+t+" not found";return e=e||this.createTemplateContext(),
i.render(e)}},genId:{value:function(){
return"gen_"+this.widgetName+"_"+this._generatedId++}},renderError:{
value:function(){this.renderErrorView(this.error)}},renderErrorView:{
value:function(t){let e;t?"string"==typeof t?e={title:"Error",message:t
}:"object"==typeof t&&(e=t instanceof Error?{title:"Error",message:t.message
}:t.status&&t.error?{title:"Service Error "+t.status,message:t.error}:{
title:"Unknown Error",message:""+t}):e={title:"Unknown Error",message:""}
;var i=this.createTemplateContext({error:e})
;this.places.content.html(this.getTemplate("error").render(i))}},render:{
value:function(){try{
return this.runtime.getService("session").isLoggedIn()?(this.setTitle(this.widgetTitle),
this.places.content.html(this.renderTemplate("authorized"))):(this.setTitle(this.widgetTitle),
this.places.content.html(this.renderTemplate("unauthorized"))),
this.afterRender&&this.afterRender(),this}catch(t){this.setError(t)}}},
renderLayout:{value:function(){
this.container.html(this.getTemplate("layout").render(this.createTemplateContext())),
this.places={title:this.container.find('[data-placeholder="title"]'),
alert:this.container.find('[data-placeholder="alert"]'),
content:this.container.find('[data-placeholder="content"]')}}},setupUI:{
value:function(){}},renderWaitingView:{value:function(){
this.places.content.html(s.loading())}},setTitle:{value:function(){
this.places.title.html(this.widgetTitle)}},clearButtons:{value:function(){}},
addButton:{value:function(){}},renderMessages:{value:function(){
if(this.places.alert){this.places.alert.empty()
;for(var t=0;t<this.messages.length;t++){var e=this.messages[t],i="default"
;switch(e.type){case"success":i="success";break;case"info":i="info";break
;case"warning":i="warning";break;case"danger":case"error":i="danger"}
this.places.alert.append('<div class="alert alert-dismissible alert-'+i+'" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>'+e.title+"</strong> "+e.message+"</div>")
}}}},clearMessages:{value:function(){this.messages=[],this.renderMessages()}},
addSuccessMessage:{value:function(t,e){
void 0===e&&(e=t,t=""),this.messages.push({type:"success",title:t,message:e
}),this.renderMessages()}},addWarningMessage:{value:function(t,e){
void 0===e&&(e=t,t=""),this.messages.push({type:"warning",title:t,message:e
}),this.renderMessages()}},addErrorMessage:{value:function(t,e){
void 0===e&&(e=t,t=""),this.messages.push({type:"error",title:t,message:e
}),this.renderMessages()}},logNotice:{value:function(t,e){
console.warn("NOTICE: ["+t+"] "+e)}},logDeprecation:{value:function(t,e){
console.warn("DEPRECATION: ["+t+"] "+e)}},logWarning:{value:function(t,e){
console.warn("WARNING: ["+t+"] "+e)}},logError:{value:function(t,e){
console.error("ERROR: ["+t+"] "+e)}},createListMaps:{value:function(){
for(var t in this.listMaps={},this.lists){var e=this.lists[t]
;for(var i in this.listMaps[t]={},e)this.listMaps[t][e[i].id]=e[i]}}},lists:{
value:{permissionFlags:[{id:"r",label:"Read",description:"Read Only"},{id:"w",
label:"Write",description:"Read and Write"},{id:"a",label:"Admin",
description:"Read, Write, and Share"},{id:"n",label:"None",
description:"No Access"}],userRoles:[{id:"pi",label:"Principal Investigator"},{
id:"gradstudent",label:"Graduate Student"},{id:"developer",label:"Developer"},{
id:"tester",label:"Tester"},{id:"documentation",label:"Documentation"},{
id:"general",label:"General Interest"}],userClasses:[{id:"pi",
label:"Principal Investigator"},{id:"gradstudent",label:"Graduate Student"},{
id:"kbase-internal",label:"KBase Staff"},{id:"kbase-test",
label:"KBase Test/Beta User"},{id:"commercial",label:"Commercial User"}],
userTitles:[{id:"mr",label:"Mr."},{id:"ms",label:"Ms."},{id:"dr",label:"Dr."},{
id:"prof",label:"Prof."}],gravatarDefaults:[{id:"mm",
label:"Mystery Man - simple, cartoon-style silhouetted outline"},{
id:"identicon",label:"Identicon - a geometric pattern based on an email hash"},{
id:"monsterid",
label:'MonsterID - generated "monster" with different colors, faces, etc'},{
id:"wavatar",
label:"Wavatar - generated faces with differing features and backgrounds"},{
id:"retro",label:"Retro - 8-bit arcade-style pixelated faces"},{id:"blank",
label:"Blank - A Blank Space"}]}}})}));