define(["uuid"],(function(e){"use strict";class t{constructor(e){
this.name=e.name,this.onSuccess=e.onSuccess,this.onError=e.onError}}class s{
constructor(t){
this.name=t.name,this.payload=t.payload,this.id=new e(4).format(),
this.created=new Date,this.channel=t.channel}getMessage(){return{envelope:{
id:this.id,created:this.created,channel:this.channel},name:this.name,
payload:this.payload}}}class n extends t{constructor(e){
super(e),this.started=new Date,this.timeout=e.timeout||5e3}}return{
Channel:class{constructor(t){
this.window=t.window||window,this.host=t.host||document.location.origin,
this.id=t.channelId||new e(4).format(),
this.awaitingResponse={},this.waitingListeners={},
this.listeners={},this.lastId=0,
this.sentCount=0,this.receivedCount=0,this.unwelcomeReceivedCount=0,
this.unwelcomeReceivedCountThreshhold=100,this.unwelcomeReceiptWarning=!0}
genId(){return this.lastId+=1,"msg_"+String(this.lastId)}receiveMessage(e){
const t=e.data
;if(!t)return this.unwelcomeReceivedCount++,void(this.unwelcomeReceiptWarning&&console.warn("No message data; message ignored",e))
;if(!t.envelope)return this.unwelcomeReceivedCount++,
void(this.unwelcomeReceiptWarning&&console.warn("No message envelope, not from KBase; message ignored",e))
;if(!t.envelope.channelId===this.id)return this.unwelcomeReceivedCount++,
void(this.unwelcomeReceiptWarning&&console.warn("Message envelope does not match this channel's id",e))
;if(this.unwelcomeReceiptWarningCount>this.unwelcomeReceivedCountThreshhold&&(this.unwelcomeReceiptWarning=!1,
console.warn("Unwelcome message warning disabled after "+this.unwelcomeReceiptWarningCount+" instances.")),
t.envelope.id&&this.awaitingResponse[t.envelope.id])try{
const e=this.awaitingResponse[t.envelope.id]
;delete this.awaitingResponse[t.envelope.id],e.handler(t.payload)}catch(s){
console.error("Error handling response for message ",t,s)}
if(this.waitingListeners[t.name]){const e=this.waitingListeners[t.name]
;delete this.waitingListeners[t.name],e.forEach(e=>{try{e.onSuccess(t.payload)
}catch(s){
console.error("Error handling listener for message",t,s),e.onError&&e.onError(s)
}})}this.listeners[t.name]&&this.listeners[t.name].forEach(e=>{
e.onSuccess||console.warn("no handler for listener!",e);try{
e.onSuccess(t.payload)}catch(s){
console.error("Error handling listener for message",t,s),e.onError&&e.onError(s)
}})}listen(e){
this.listeners[e.name]||(this.listeners[e.name]=[]),this.listeners[e.name].push(e)
}on(e,s,n){this.listen(new t({name:e,onSuccess:s,onError:n}))}sendMessage(e){
this.window.postMessage(e.getMessage(),this.host)}send(e,t){const n=new s({
name:e,payload:t,channel:this.id});this.sendMessage(n)}sendRequest(e,t){
this.awaitingResponse[e.id]={started:new Date,handler:t},this.sendMessage(e)}
request(e,t){return new Promise((n,i)=>{try{this.sendRequest(new s({name:e,
payload:t,channel:this.id}),e=>{n(e)})}catch(r){i(r)}})}startMonitor(){
window.setTimeout(()=>{const e=(new Date).getTime()
;Object.keys(this.waitingListeners).forEach(t=>{
0===this.waitingListeners[t].filter(s=>{if(s.timeout){
const i=e-s.started.getTime();if(i>s.timeout){try{
s.onError&&s.onError(new Error("timout after "+i))}catch(n){
console.error("Error calling error handler",t,n)}return!1}return!0}return!0
}).length&&delete this.waitingListeners[t]
}),Object.keys(this.waitingListeners).some(e=>this.waitingListeners[e].some(e=>!!e.timeout))&&this.startMonitor()
},100)}listenOnce(e){
this.waitingListeners[e.name]||(this.waitingListeners[e.name]=[]),
this.waitingListeners[e.name].push(e),e.timeout&&this.startMonitor()}
once(e,t,s){this.listenOnce(new n({name:e,onSuccess:t,onError:s}))}when(e,t){
return new Promise((s,i)=>this.listenOnce(new n({name:e,timeout:t,onSuccess:e=>{
s(e)},onError:e=>{i(e)}})))}stats(){return{sent:this.sentCount,
received:this.receivedCount}}attach(e){this.window=e}start(){
this.currentListener=e=>{this.receiveMessage(e)
},this.window.addEventListener("message",this.currentListener,!1)}stop(){
this.currentListener&&this.window.removeEventListener("message",this.currentListener,!1)
}},Message:s}}));