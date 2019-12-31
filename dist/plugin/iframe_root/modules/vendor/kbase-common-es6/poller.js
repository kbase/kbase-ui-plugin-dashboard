define(["bluebird"],(function(t){"use strict";class n{constructor(t){
this.description=t.description}getDescription(){return this.description}run(){
throw new Error("Must override the run method")}}class r{constructor(t){
this.runInitially=t.runInitially,
this.interval=t.interval,this.lastRun=null,this.jobs=[]}getInterval(){
return this.interval}setInterval(t){this.interval=t}getRunInitially(){
return this.runInitially}getLastRun(){return this.lastRun}doContinue(){return!0}
addJob(t){this.jobs.push(t)}reset(){this.lastRun=null}run(){
return t.all(this.jobs.map(t=>{try{return t.run()}catch(n){
throw new Error("Error running poller task job: "+n.message)}}))}}class i{
constructor(t){t=t||{},this.running=!1,this.task=t.task||null,this.currentPoll={
id:null,timer:null,cancelled:!1},this.lastId=0}addTask(t){this.task=t}nextId(){
return this.lastId+=1,this.lastId}start(){
if(!this.task)throw new Error("No task defined for this poller")
;if(this.task.reset(),this.running=!0,this.task.runInitially){
if(this.task.doContinue&&!this.task.doContinue())return void stop()
;this.runTask().then(()=>{this.poll()})}else this.poll()}stop(){this.running=!1}
timestamp(){return(new Date).toLocaleString()}runTask(){
return this.task.run().catch(t=>{
console.error(this.timestamp()+": Error while running task",t)}).finally(()=>{})
}poll(){this.running&&(this.currentPoll.timer||(this.currentPoll={timer:null,
id:this.nextId(),cancelled:!1},this.currentPoll.timer=window.setTimeout(()=>{
const t=this.currentPoll
;t.cancelled&&console.warn("poll cancelled! "+t.id),!this.task.doContinue||this.task.doContinue()?this.runTask().finally(()=>{
t.timer=null,this.poll()}):this.stop()},this.task.getInterval())))}
cancelCurrentPoll(){
this.currentPoll.timer&&(window.clearTimeout(this.currentPoll.timer),
this.currentPoll.timer=null,this.currentPoll.cancelled=!0)}force(){
this.running?this.cancelCurrentPoll():this.running=!0,this.runTask().then(()=>{
this.poll()})}restart(){
this.running?this.cancelCurrentPoll():this.running=!0,this.poll()}update(t){
t.interval&&t.interval!==this.task.getInterval()&&(this.task.setInterval(t.interval),
this.restart())}}return{Poller:i,Task:r,Job:n,makePoller:function(t){
const s=new class extends n{constructor(){super({description:t.description})}
run(){t.fun()}},e=new r({interval:t.interval});return e.addJob(s),new i({task:e
})}}}));