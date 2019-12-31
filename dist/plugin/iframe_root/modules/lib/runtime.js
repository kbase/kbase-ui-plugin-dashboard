define(["bluebird","kb_lib/props","kb_lib/messenger","lib/widget/manager"],(e,t,s,r)=>{
"use strict";return class{constructor({token:e,username:i,config:n}){
this.token=e,this.username=i,this.widgetManager=new r({baseWidgetConfig:{
runtime:this}}),this.configDb=new t.Props({data:n
}),this.pluginPath="/modules/plugins/dashboard/iframe_root",
this.messenger=new s,this.heartbeatTimer=null}config(e,t){
return this.configDb.getItem(e,t)}getConfig(e,t){return this.config(e,t)}
service(e){switch(e){case"session":return{getAuthToken:()=>this.token,
getUsername:()=>this.username,isLoggedIn:()=>!!this.token}}}getService(e){
return this.service(e)}send(e,t,s){this.messenger.send({channel:e,message:t,
data:s})}receive(e,t,s){return this.messenger.receive({channel:e,message:t,
handler:s})}recv(e,t,s){return this.receive(e,t,s)}drop(e){
this.messenger.drop(e)}start(){return e.try(()=>{
this.heartbeatTimer=window.setInterval(()=>{this.send("app","heartbeat",{
time:(new Date).getTime()})},1e3)})}stop(){return e.try(()=>{
window.clearInterval(this.heartbeatTimer)})}}});