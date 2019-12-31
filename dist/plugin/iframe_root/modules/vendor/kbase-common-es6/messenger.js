define(["bluebird","./asyncQueue","./lang"],(e,s,r)=>{"use strict";class n{
constructor(){this.channels={},this.listeners={},this.subId=0,this.queue=new s}
nextSubId(){return this.subId+=1,"sub_"+this.subId}static fail(e){
throw new Error(e)}receive(e){
const s=e.chan||e.channel||"default",r=e.msg||e.message||n.fail("Message is required for a sub")
;let t=this.channels[s];t||(t={messages:{}},this.channels[s]=t)
;let a=t.messages[r];a||(a={listeners:[],byId:{}},t.messages[r]=a)
;const i=this.nextSubId();return e.subId=i,a.byId[i]=e,a.listeners.push(e),{
chan:s,msg:r,id:i}}drop(e){return this.unreceive(e)}unreceive(e){
const s=this.channels[e.chan];if(!s)return!1;const r=s.messages[e.msg]
;return!!r&&(!!r.byId[e.id]&&(delete r.byId[e.id],
r.listeners=r.listeners.filter(s=>s.subId!==e.id),!0))}send(e){
const s=e.chan||e.channel,n=e.msg||e.message,t=this.channels[s];if(!t)return
;const a=t.messages[n];a&&a.listeners.forEach(s=>{this.queue.addItem({
onRun:()=>{try{s.handler(e.data)}catch(t){throw console.error(t),new r.UIError({
type:"RuntimeError",reason:"MessageHandlerError",
message:"Exception running message "+n+", sub "+s.subId,data:t,
suggestion:"This is an application error, not your fault"})}}})})}
sendPromise(s){const n=s.chan||s.channel,t=s.msg||s.message,a=this.channels[n]
;if(!a&&s.propogate)return[e.resolve()];const i=a.messages[t]
;if(!i&&s.propogate)return[e.resolve()];const o=i.listeners
;return e.all(o.map(n=>new e((e,a)=>{this.queue.addItem({onRun:()=>{try{
e(n.handler(s.data))}catch(i){console.error(i),a(new r.UIError({
type:"RuntimeError",reason:"MessageHandlerError",
message:"Exception running message "+t+", sub "+s.subId,data:i,
suggestion:"This is an application error, not your fault"}))}},onError:e=>{a(e)}
})})).map(e=>e.reflect()))}}return n});