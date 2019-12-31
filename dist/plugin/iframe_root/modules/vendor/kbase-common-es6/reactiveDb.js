define(["./props","./lang","uuid"],(t,s,r)=>{"use strict";return{DB:class{
constructor(){
this.db=new t.Props,this.subscriptions={},this.queries={},this.timer=null,
this.timerInterval=100}runOnce(){
this.timer||0!==Object.keys(this.subscriptions).length&&(this.timer=window.setTimeout(()=>{
this.runSubscriptions(),this.timer=null},this.timerInterval))}runQuery(t){
const s=this.db.getItem(t.path);if(void 0!==s)return t.filter?t.filter(s):s}
runSubscriptions(){Object.entries(this.subscriptions).forEach(([,t])=>{try{
const r=this.runQuery(t.query);if(void 0===r)return
;void 0!==t.lastValue&&s.isEqual(t.lastValue,r)||(t.lastValue=r,t.fun(r))
}catch(r){console.error("Error running subscription."),t.errorCount+=1}})}
set(t,s){this.db.setItem(t,s),this.runOnce()}get(t,s){
return this.db.getItem(t,s)}subscribe(t,s){const e={query:t,fun:s,errorCount:0,
lastValue:void 0},i=new r(4).format();return this.subscriptions[i]=e,i}
remove(t){this.db.deleteItem(t),this.runOnce()}unsubscribe(t){
delete this.subscriptions[t]}toJSON(){return this.db.getRaw()}}}});