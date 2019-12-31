define(["jquery","./DashboardWidget","lib/widget/buttonBar","bootstrap"],(function(t,e,a){
"use strict";return Object.create(e,{init:{value:function(t){
t.name="PublicNarrativesWidget",
t.title="Public Narratives",this.DashboardWidget_init(t),
this.params.limit=10,this.view="slider"}},getAppName:{value:function(t){
return this.getState(["appsMap",t,"name"],t)}},getMethodName:{value:function(t){
return this.getState(["methodsMap",t,"name"],t)}},renderLayout:{
value:function(){
this.container.html(this.renderTemplate("layout")),this.places={
title:this.container.find('[data-placeholder="title"]'),
alert:this.container.find('[data-placeholder="alert"]'),
content:this.container.find('[data-placeholder="content"]')}}},setupUI:{
value:function(){
this.hasState("narratives")&&this.getState("narratives").length>0&&(this.buttonbar=Object.create(a).init({
container:this.container.find('[data-placeholder="buttonbar"]')
}),this.buttonbar.clear().addInput({placeholder:"Search",place:"end",
onkeyup:function(e){var a,i=this.places.title
;i.hasClass("collapsed")&&(a=i.attr("data-target"),
t(a).collapse("show")),this.filterState({search:t(e.target).val()})}.bind(this)
}))}},render:{value:function(){
this.error?this.renderError():this.runtime.getService("session").isLoggedIn()?(this.places.title.html(this.widgetTitle),
this.places.content.html(this.renderTemplate(this.view))):(this.places.title.html(this.widgetTitle),
this.places.content.html(this.renderTemplate("unauthorized")))
;return this.container.find('[data-toggle="popover"]').popover(),
this.container.find('[data-toggle="tooltip"]').tooltip(),this}},filterState:{
value:function(t){if(t.search&&0!==t.search.length){
var e=new RegExp(t.search,"i"),a=this.getState("narratives").filter(function(t){
return!!(t.workspace.metadata.narrative_nice_name.match(e)||t.workspace.owner.match(e)||t.object.metadata.cellInfo&&function(t){
for(var a in t){var i=t[a];if(i.match(e)||this.getAppName(i).match(e))return!0}
}.bind(this)(Object.keys(t.object.metadata.cellInfo.app))||t.object.metadata.cellInfo&&function(t){
for(var a in t){var i=t[a]
;if(i.match(e)||this.getMethodName(i).match(e))return!0}
}.bind(this)(Object.keys(t.object.metadata.cellInfo.method)))}.bind(this))
;this.setState("narrativesFiltered",a)
}else this.setState("narrativesFiltered",this.getState("narratives"))}},
onStateChange:{value:function(){var t=this.doState("narratives",(function(t){
return t.length}),null),e=this.doState("narrativesFiltered",(function(t){
return t.length}),null);this.viewState.setItem("publicNarratives",{count:t,
filtered:e})}},setInitialState:{value:function(){return this.getNarratives({
type:"public"}).then(function(t){t=t.filter(function(t){
return"r"===t.workspace.globalread
}.bind(this)),this.setState("narratives",t),this.setState("narrativesFiltered",t)
}.bind(this))}}})}));