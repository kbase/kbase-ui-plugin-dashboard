define([],(function(){"use strict";var e=Object.create({});e.version="0.0.2"
;var t=function(){var e=0;return{current:function(){return e},next:function(){
return"oid_"+(e+=1)}}}(),s=Object.create({},{id:{value:null,writable:!0},
broadcast:{value:!1,writable:!0},init:{value:function(e){
return e&&(this.id=e.id,
this.from=e.from,this.to=e.to,this.data=e.data,this.broadcast=e.broadcast,
this.oid=t.next()),this}}});e.Message=s;var i=Object.create({},{init:{
value:function(){return this.targets={},this.listeners=[],this}},addTarget:{
value:function(e){
return e.id&&(this.targets[e.id]||(this.targets[e.id]=e)),this.listeners.push(e),
this}},removeTarget:{value:function(){}},clearTargets:{value:function(){
this.targets=[]}},getTargets:{value:function(){return this.targets}}})
;e.MessageHandler=i;var r=Object.create({},{sendRate:{value:60,writable:!0},
lastMessageTime:{value:null,writable:!0},messageProcessedCount:{value:0,
writable:!0},timer:{value:null,writable:!0},init:{value:function(e){
return this.messages=[],this.app=e.app,this}},addMessage:{value:function(e){
return this.messages.unshift(e),this.ensureTimer(),this}},handleError:{
value:function(e,t,s,i){
alert("Error is "+e+" for message: "+t.id+", target "+s+", fun "+i)}},
processMessage:{value:function(e){var t=this.app.getMessageHandler(e.id)
;if(t)if(e.broadcast){var s,i
;for(s=0;s<t.listeners.length;s+=1)if((r=t.listeners[s])&&(i=!0),
r.filter&&i&&(i=!1,
r.filter.from&&(i=r.filter.from===e.from),r.filter.to&&(i=r.filter.to===e.to),
r.filter.source&&(i=r.filter.source===e.source)),i)try{r.receive(e)}catch(n){
this.handleError(n,e,s,r.receive)}finally{
this.lastMessageTime=(new Date).getTime(),this.messageProcessedCount+=1}}else{
var r,a=e.to;if(!(r=t.targets[a]))return;if(r.receive)try{r.receive(e)}catch(n){
this.handleError(n,e,a,r.receive)}finally{
this.lastMessageTime=(new Date).getTime(),this.messageProcessedCount++}}
return this}},processQueue:{value:function(){
if(this.sendRate)this.messages.length>0&&this.processMessage(this.messages.pop()),
this.checkTimer();else{
for(;this.messages.length>0;)this.processMessage(this.messages.pop())
;this.checkTimer()}}},getMessages:{value:function(){return this.messages}},
clearQueue:{value:function(){return this.messages=[],this}},cancelTimer:{
value:function(){
return this.timer&&(window.clearTimeout(this.timer),delete this.timer),this}},
startTimer:{value:function(e){var t
;return t=this.sendRate?this.sendRate/1e3:0,this.timer=window.setTimeout(e,t),
this}},isTimer:{value:function(){return!!this.timer}},ensureTimer:{
value:function(){if(this.messages.length>0){if(!this.isTimer()){var e=this
;this.startTimer((function(){e.handleMessageTimer()}))}}else this.cancelTimer()
;return this}},checkTimer:{value:function(){if(this.messages.length>0){
this.cancelTimer();var e=this;this.startTimer((function(){e.handleMessageTimer()
}))}else this.cancelTimer();return this}},handleMessageTimer:{value:function(){
return this.processQueue(),this}}});e.MessageQueue=r;var a=Object.create({},{
init:{value:function(e){
return void 0===e&&(e={}),this.messageQueue=Object.create(r).init({app:this,
timerInterval:e.interval}),this.messageHandlers={},this}},start:{
value:function(){return this}},stop:{value:function(){return this}},
setMessageQueue:{value:function(e){this.messageQueue=e}},on:{
value:function(e,t){var s=this.messageHandlers[e];if(s||(s=Object.create(i,{id:{
value:e}
}).init(),this.messageHandlers[e]=s),!t)throw new Error("No message handler supplied")
;if("function"==typeof t)t={receive:t
};else if(!t.receive)throw new Error("Missing message handler configuration")
;s.addTarget(t)}},getMessageHandler:{value:function(e){
return this.messageHandlers[e]}},broadcast:{value:function(e,t,i){var r
;"string"==typeof e?r=Object.create(s).init({id:e,from:i,broadcast:!0,data:t
}):(r=e).broadcast=!0,this.messageQueue.addMessage(r)}},send:{
value:function(e,t,i){var r;r="string"==typeof e?Object.create(s).init({id:e,
from:i,to:t}):e,this.messageQueue.addMessage(r)}}});return e.MessageManager=a,e
}));