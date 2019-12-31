define(["jquery","./DashboardWidget","lib/widget/buttonBar","bootstrap"],(function(t,e,a){
"use strict";return Object.create(e,{init:{value:function(t){
return t.name="NarrativesWidget",
t.title="Your Narratives",this.DashboardWidget_init(t),this}},getViewTemplate:{
value:function(){
return this.error?"error":this.runtime.getService("session").isLoggedIn()?"slider":"unauthorized"
}},render:{value:function(){
return this.places.title.html(this.widgetTitle),this.places.content.html(this.renderTemplate(this.getViewTemplate())),
this.container.find('[data-toggle="popover"]').popover(),
this.container.find('[data-toggle="tooltip"]').tooltip(),this}},setupUI:{
value:function(){
this.hasState("narratives")&&this.getState("narratives").length>0&&(this.buttonbar=Object.create(a).init({
container:this.container.find('[data-placeholder="buttonbar"]')
}),this.buttonbar.clear().addButton({name:"newnarrative",label:"New Narrative",
icon:"plus-circle",style:"primary",class:"btn-kbase",
url:"/#narrativemanager/new",external:!0}).addInput({
placeholder:"Search Your Narratives",place:"end",onkeyup:function(e){
this.setParam("filter",t(e.target).val())}.bind(this)}))}},filterNarratives:{
value:function(){var t,e=this.getParam("filter"),a=new RegExp(e,"i")
;e&&0!==e.length?(t=this.getState("narratives").filter(function(t){
return!!(t.workspace.metadata.narrative_nice_name.match(a)||t.object.metadata.cellInfo&&function(t){
for(var e in t){var i=t[e];if(i.match(a)||this.getAppName(i).match(a))return!0}
}.bind(this)(Object.keys(t.object.metadata.cellInfo.app))||t.object.metadata.cellInfo&&function(t){
for(var e in t){var i=t[e]
;if(i.match(a)||this.getMethodName(i).match(a))return!0}
}.bind(this)(Object.keys(t.object.metadata.cellInfo.method)))
}.bind(this)),this.setState("narrativesFiltered",t)):this.setState("narrativesFiltered",this.getState("narratives"))
}},onParamChange:{value:function(){this.filterNarratives()}},onStateChange:{
value:function(){var t=this.doState("narratives",(function(t){return t.length
}),null),e=this.doState("narrativesFiltered",(function(t){return t.length
}),null),a=this.doState("narratives",(function(t){if(!t)return 0
;for(var e=0,a=0;a<t.length;a++){t[a].permissions.length>0&&e++}return e}))
;this.hasState("narratives")&&this.viewState.setItem("narratives",{count:t,
sharingCount:a,filtered:e})}},setInitialState:{value:function(){
return this.getNarratives({type:"mine"}).then(function(t){
this.setState("narratives",t),this.filterNarratives()}.bind(this))}}})}));