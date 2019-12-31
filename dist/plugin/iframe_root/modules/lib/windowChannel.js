define([],(function(){"use strict";function e(){
return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{
const t=16*Math.random()|0;return"x"===e?t.toString(16):(3&t|8).toString(16)})}
class t{constructor(e){
this.name=e.name,this.onSuccess=e.onSuccess,this.onError=e.onError}}class n{
constructor({from:t,to:n}){
this.from=t,this.to=n,this.id=e(),this.created=new Date}toJSON(){return{
from:this.from,to:this.to,id:this.id,created:this.created.getTime()}}}class s{
constructor({name:e,payload:t,from:s,to:i}){
this.name=e,this.payload=t,this.envelope=new n({from:s,to:i})}toJSON(){return{
envelope:this.envelope.toJSON(),name:this.name,payload:this.payload}}}
class i extends t{constructor(e){
super(e),this.started=new Date,this.timeout=e.timeout||5e3}}return{
BidirectionalWindowChannel:class{constructor({on:t,host:n,to:s}){
this.window=t,this.host=n||document.location.origin,
this.channelId=e(),this.partnerId=s,
this.awaitingResponse={},this.waitingListeners={},
this.listeners={},this.lastId=0,
this.sentCount=0,this.receivedCount=0,this.unwelcomeReceivedCount=0,
this.unwelcomeReceivedCountThreshhold=100,this.unwelcomeReceiptWarning=!0}
setPartner(e){this.partnerId=e}setWindow(e){this.window=e}genId(){
return this.lastId+=1,"msg_"+String(this.lastId)}receiveMessage(e){
const t=e.data
;if(!t)return this.unwelcomeReceivedCount++,void(this.unwelcomeReceiptWarning&&console.warn("No message data; message ignored",e))
;if(!t.envelope)return this.unwelcomeReceivedCount++,
void(this.unwelcomeReceiptWarning&&console.warn("No message envelope, not from KBase; message ignored",e))
;if(!t.envelope.to===this.channelId)return this.unwelcomeReceivedCount++,
void(this.unwelcomeReceiptWarning&&console.warn("Message envelope does not match this channel's id",e))
;if(this.unwelcomeReceiptWarningCount>this.unwelcomeReceivedCountThreshhold&&(this.unwelcomeReceiptWarning=!1,
console.warn("Unwelcome message warning disabled after "+this.unwelcomeReceiptWarningCount+" instances.")),
t.envelope.id&&this.awaitingResponse[t.envelope.id])try{
const e=this.awaitingResponse[t.envelope.id]
;delete this.awaitingResponse[t.envelope.id],e.handler(t.payload)}catch(n){
console.error("Error handling response for message ",t,n)}
if(this.waitingListeners[t.name]){const e=this.waitingListeners[t.name]
;delete this.waitingListeners[t.name],e.forEach(e=>{try{e.onSuccess(t.payload)
}catch(n){
console.error("Error handling listener for message",t,n),e.onError&&e.onError(n)
}})}this.listeners[t.name]&&this.listeners[t.name].forEach(e=>{
e.onSuccess||console.warn("no handler for listener!",e);try{
e.onSuccess(t.payload)}catch(n){
console.error("Error handling listener for message",t,n),e.onError&&e.onError(n)
}})}listen(e){
this.listeners[e.name]||(this.listeners[e.name]=[]),this.listeners[e.name].push(e)
}on(e,n,s){this.listen(new t({name:e,onSuccess:n,onError:s}))}sendMessage(e){
this.window.postMessage(e.toJSON(),this.host)}send(e,t){const n=new s({name:e,
payload:t,from:this.channelId,to:this.partnerId});this.sendMessage(n)}
sendRequest(e,t){this.awaitingResponse[e.id]={started:new Date,handler:t
},this.sendMessage(e)}request(e,t){return new Promise((n,i)=>{try{
this.sendRequest(new s({name:e,payload:t,from:this.channelId}),e=>{n(e)})
}catch(r){i(r)}})}startMonitor(){window.setTimeout(()=>{
const e=(new Date).getTime();Object.keys(this.waitingListeners).forEach(t=>{
0===this.waitingListeners[t].filter(n=>{if(n.timeout){
const i=e-n.started.getTime();if(i>n.timeout){try{
n.onError&&n.onError(new Error("timout after "+i))}catch(s){
console.error("Error calling error handler",t,s)}return!1}return!0}return!0
}).length&&delete this.waitingListeners[t]
}),Object.keys(this.waitingListeners).some(e=>this.waitingListeners[e].some(e=>!!e.timeout))&&this.startMonitor()
},100)}listenOnce(e){
this.waitingListeners[e.name]||(this.waitingListeners[e.name]=[]),
this.waitingListeners[e.name].push(e),e.timeout&&this.startMonitor()}
once(e,t,n){this.listenOnce(new i({name:e,onSuccess:t,onError:n}))}when(e,t){
return new Promise((n,s)=>this.listenOnce(new i({name:e,timeout:t,onSuccess:e=>{
n(e)},onError:e=>{s(e)}})))}stats(){return{sent:this.sentCount,
received:this.receivedCount}}attach(e){this.window=e}start(){
this.currentListener=e=>{this.receiveMessage(e)
},this.window.addEventListener("message",this.currentListener,!1)}stop(){
this.currentListener&&this.window.removeEventListener("message",this.currentListener,!1)
}},SendOnlyWindowChannel:class{constructor({on:t,host:n,to:s}){
this.window=t,this.host=n||document.location.origin,
this.channelId=e(),this.partnerId=s,this.lastId=0,this.sentCount=0}
setPartner(e){this.partnerId=e}setWindow(e){this.window=e}genId(){
return this.lastId+=1,"msg_"+String(this.lastId)}sendMessage(e){
this.window.postMessage(e.toJSON(),this.host)}send(e,t){const n=new s({name:e,
payload:t,from:this.channelId,to:this.partnerId});this.sendMessage(n)}stats(){
return{sent:this.sentCount}}attach(e){this.window=e}start(){}stop(){}},
ReceiveOnlyWindowChannel:class{constructor({on:t,host:n,to:s}){
this.window=t,this.host=n||document.location.origin,
this.channelId=e(),this.partnerId=s,
this.awaitingResponse={},this.waitingListeners={},
this.listeners={},this.lastId=0,
this.sentCount=0,this.receivedCount=0,this.unwelcomeReceivedCount=0,
this.unwelcomeReceivedCountThreshhold=100,this.unwelcomeReceiptWarning=!0}
setPartner(e){this.partnerId=e}setWindow(e){this.window=e}genId(){
return this.lastId+=1,"msg_"+String(this.lastId)}receiveMessage(e){
const t=e.data
;if(!t)return this.unwelcomeReceivedCount++,void(this.unwelcomeReceiptWarning&&console.warn("No message data; message ignored",e))
;if(!t.envelope)return this.unwelcomeReceivedCount++,
void(this.unwelcomeReceiptWarning&&console.warn("No message envelope, not from KBase; message ignored",e))
;if(!t.envelope.to===this.channelId)return this.unwelcomeReceivedCount++,
void(this.unwelcomeReceiptWarning&&console.warn("Message envelope does not match this channel's id",e))
;if(this.unwelcomeReceiptWarningCount>this.unwelcomeReceivedCountThreshhold&&(this.unwelcomeReceiptWarning=!1,
console.warn("Unwelcome message warning disabled after "+this.unwelcomeReceiptWarningCount+" instances.")),
t.envelope.id&&this.awaitingResponse[t.envelope.id])try{
const e=this.awaitingResponse[t.envelope.id]
;delete this.awaitingResponse[t.envelope.id],e.handler(t.payload)}catch(n){
console.error("Error handling response for message ",t,n)}
if(this.waitingListeners[t.name]){const e=this.waitingListeners[t.name]
;delete this.waitingListeners[t.name],e.forEach(e=>{try{e.onSuccess(t.payload)
}catch(n){
console.error("Error handling listener for message",t,n),e.onError&&e.onError(n)
}})}this.listeners[t.name]&&this.listeners[t.name].forEach(e=>{
e.onSuccess||console.warn("no handler for listener!",e);try{
e.onSuccess(t.payload)}catch(n){
console.error("Error handling listener for message",t,n),e.onError&&e.onError(n)
}})}listen(e){
this.listeners[e.name]||(this.listeners[e.name]=[]),this.listeners[e.name].push(e)
}on(e,n,s){this.listen(new t({name:e,onSuccess:n,onError:s}))}startMonitor(){
window.setTimeout(()=>{const e=(new Date).getTime()
;Object.keys(this.waitingListeners).forEach(t=>{
0===this.waitingListeners[t].filter(n=>{if(n.timeout){
const i=e-n.started.getTime();if(i>n.timeout){try{
n.onError&&n.onError(new Error("timout after "+i))}catch(s){
console.error("Error calling error handler",t,s)}return!1}return!0}return!0
}).length&&delete this.waitingListeners[t]
}),Object.keys(this.waitingListeners).some(e=>this.waitingListeners[e].some(e=>!!e.timeout))&&this.startMonitor()
},100)}listenOnce(e){
this.waitingListeners[e.name]||(this.waitingListeners[e.name]=[]),
this.waitingListeners[e.name].push(e),e.timeout&&this.startMonitor()}
once(e,t,n){this.listenOnce(new i({name:e,onSuccess:t,onError:n}))}when(e,t){
return new Promise((n,s)=>this.listenOnce(new i({name:e,timeout:t,onSuccess:e=>{
n(e)},onError:e=>{s(e)}})))}stats(){return{sent:this.sentCount,
received:this.receivedCount}}attach(e){this.window=e}start(){
this.currentListener=e=>{this.receiveMessage(e)
},this.window.addEventListener("message",this.currentListener,!1)}stop(){
this.currentListener&&this.window.removeEventListener("message",this.currentListener,!1)
}},Message:s}}));