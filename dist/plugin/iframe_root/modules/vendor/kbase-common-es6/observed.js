define(["./props","./asyncQueue","bluebird"],(t,e,s)=>{"use strict"
;return class{constructor(){this.state={},this.listeners={},this.queue=new e}
setItem(e,s){var r=t.getProp(this.state,e),i=[]
;return this.listeners[e]&&(this.listeners[e].forEach(t=>{this.queue.addItem({
onRun:((t,e,s)=>()=>{try{t(e,s)}catch(r){}})(t.onSet,s,r&&r.value)
}),t.oneTime||i.push(t)}),this.listeners[e]=i),t.setProp(this.state,e,{
status:"set",value:s,time:new Date}),this}modifyItem(e,s){
var r=t.getProp(this.state,e),i=s(r.value),a=[]
;return this.listeners[e]&&(this.listeners[e].forEach(t=>{this.queue.addItem({
onRun:((t,e,s)=>()=>{try{t(e,s)}catch(r){}})(t.onSet,i,r&&r.value)
}),t.oneTime||a.push(t)}),this.listeners[e]=a),t.setProp(this.state,e,{
status:"set",value:i,time:new Date}),this}getItem(e,s){
var r=t.getProp(this.state,e);return void 0!==r&&"set"===r.status?r.value:s}
hasItem(e){return t.hasProp(t.state,e)}setError(e,s){var r=[]
;this.listeners[e]&&(this.listeners[e].forEach(t=>{this.queue.addItem({
onRun:((t,e)=>()=>{try{t(e)}catch(s){}})(t.onError,s)}),t.oneTime||r.push(t)
}),this.listeners[e]=r),t.setProp(this.state,e,{status:"error",error:s,
time:new Date})}hasError(e){var s=t.getProp(this.state,e)
;return!(!s||"error"!==s.status)}delItem(e){
t.hasProp(this.state,e)&&t.deleteProp(this.state,e)}listen(t,e){
return this.listenForItem(t,e)}listenForItem(e,s){"function"==typeof s&&(s={
onSet:s});var r=t.getProp(this.state,e);if(r)if(s.hear){
if(s.hear(r.value),s.oneTime)return}else switch(r.status){case"set":
s.onSet(r.value);break;case"error":s.onError(r.error);break;default:
throw"Invalid status: "+r.status}
void 0===this.listeners[e]&&(this.listeners[e]=[]),this.listeners[e].push(s)}
whenItem(e,r){var i=new s((s,r)=>{if(t.hasProp(this.state,e)){
var i=t.getProp(this.state,e);"error"===i.status?r(i.error):s(i.value)
}else this.listenForItem(e,{oneTime:!0,addedAt:(new Date).getTime(),onSet:t=>{
s(t)},onError:t=>{r(t)}})});return r?i.timeout(r):i}}});