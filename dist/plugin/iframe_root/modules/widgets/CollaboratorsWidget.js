define(["./DashboardWidget","kb_service/serviceApi","bluebird"],(function(e,t,i){
"use strict";return Object.create(e,{init:{value:function(e){
return e.name="CollaboratorsWidget",
e.title="Common Collaborator Network",this.DashboardWidget_init(e),this}},
setup:{value:function(){
this.runtime.service("session").isLoggedIn()?this.serviceApi=t.make({
runtime:this.runtime}):this.userProfileClient=null}},setInitialState:{
value:function(){return new i((e,t)=>{
this.runtime.getService("session").isLoggedIn()?this.serviceApi.getCollaborators().then(t=>{
this.setState("collaborators",t),e()}).catch(e=>{t(e)}):e()})}}})}));