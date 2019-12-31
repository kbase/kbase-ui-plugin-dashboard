define(["jquery","./DashboardWidget","lib/widget/buttonBar","bluebird","bootstrap"],(function(t,e,i,a){
"use strict";return Object.create(e,{init:{value:function(t){
t.name="SharedNarrativesWidget",
t.title="Narratives Shared with You",this.DashboardWidget_init(t),
this.params.limit=10,this.view="slider"}},getAppName:{value:function(t){
return this.getState(["appsMap",t,"name"],t)}},getMethodName:{value:function(t){
return this.getState(["methodsMap",t,"name"],t)}},setupUI:{value:function(){
this.hasState("narratives")&&this.getState("narratives").length>0&&(this.buttonbar=Object.create(i).init({
container:this.container.find('[data-placeholder="buttonbar"]')
}),this.buttonbar.clear().addInput({placeholder:"Search",place:"end",
onkeyup:function(e){this.setParam("filter",t(e.target).val())}.bind(this)}))}},
render:{value:function(){
return this.error?this.renderError():this.runtime.getService("session").isLoggedIn()?(this.places.title.html(this.widgetTitle),
this.places.content.html(this.renderTemplate(this.view))):(this.places.title.html(this.widgetTitle),
this.places.content.html(this.renderTemplate("unauthorized"))),
this.container.find('[data-toggle="popover"]').popover(),
this.container.find('[data-toggle="tooltip"]').tooltip(),this}},filterState:{
value:function(){var t=this.getParam("filter");if(t&&0!==t.length){try{
var e=new RegExp(t,"i")}catch(a){}
var i=this.getState("narratives").filter(function(t){
return!!(t.workspace.metadata.narrative_nice_name.match(e)||t.workspace.owner.match(e)||t.object.metadata.cellInfo&&function(t){
for(var i in t){var a=t[i];if(a.match(e)||this.getAppName(a).match(e))return!0}
}.bind(this)(Object.keys(t.object.metadata.cellInfo.app))||t.object.metadata.cellInfo&&function(t){
for(var i in t){var a=t[i]
;if(a.match(e)||this.getMethodName(a).match(e))return!0}
}.bind(this)(Object.keys(t.object.metadata.cellInfo.method)))}.bind(this))
;this.setState("narrativesFiltered",i)
}else this.setState("narrativesFiltered",this.getState("narratives"))}},
onStateChange:{value:function(){var t=this.doState("narratives",(function(t){
return t.length}),null),e=this.doState("narrativesFiltered",(function(t){
return t.length}),null);this.viewState.setItem("sharedNarratives",{count:t,
filtered:e})}},getAppsx:{value:function(){
var t=new NarrativeMethodStore(this.runtime.getConfig("services.narrative_method_store.url"),{
token:this.runtime.service("session").getAuthToken()})
;return a.all([t.list_apps({})]).spread((function(t){var e={}
;return t.forEach((function(t){e[t.id]=t})),e}))}},setInitialState:{
value:function(t){return this.getNarratives({type:"shared"}).then(function(t){
var e=this.runtime.getService("session").getUsername();t=t.filter(function(t){
return t.workspace.owner!==e&&"n"!==t.workspace.user_permission
}.bind(this)),this.setState("narratives",t),this.filterState()}.bind(this))}}})
}));