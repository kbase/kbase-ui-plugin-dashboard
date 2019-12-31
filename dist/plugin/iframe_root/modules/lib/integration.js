define(["./windowChannel","./runtime"],(t,n)=>{"use strict";return class{
constructor({rootWindow:n}){
this.rootWindow=n,this.container=n.document.body,this.hostParams=this.getParamsFromIFrame(),
this.hostChannelId=this.hostParams.channelId,
this.pluginParams=this.hostParams.params,
this.authorized=null,this.channel=new t.BidirectionalWindowChannel({
on:this.rootWindow,host:document.location.origin,to:this.hostChannelId})}
getParamsFromIFrame(){
if(!this.rootWindow.frameElement.hasAttribute("data-params"))throw new Error("No params found in window!!")
;return JSON.parse(decodeURIComponent(this.rootWindow.frameElement.getAttribute("data-params")))
}start(){this.channel.start(),this.channel.on("start",t=>{try{
const{token:e,username:a,config:s,realname:i,email:o}=t;this.authorization=e?{
token:e,username:a,realname:i,email:o
}:null,this.token=e,this.username=a,this.config=s,
this.authorized=!!e,this.runtime=new n({config:s,token:e,username:a,realname:i,
email:o})}catch(e){this.channel.send("start-error",{message:e.message})}
this.channel.send("started")}),window.document.addEventListener("click",()=>{
this.channel.send("clicked",{})}),this.channel.send("ready",{
channelId:this.channel.id,channelHost:this.channel.host})}stop(){}}});