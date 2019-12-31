define(["bluebird","./jsonRpc-native"],(function(e,t){"use strict"
;var i=new class{
constructor({itemLifetime:e,monitoringFrequency:t,waiterTimeout:i,waiterFrequency:r}={}){
this.cache={},
this.cacheLifetime=e||18e5,this.monitoringFrequency=t||6e4,this.waiterTimeout=i||3e4,
this.waiterFrequency=r||100,this.monitoring=!1}runMonitor(){
this.monitoring||(this.monitoring=!0,window.setTimeout(()=>{const e={};let t=!1
;Object.keys(this.cache).forEach(i=>{const r=this.cache[i]
;this.isExpired(r)||(e[i]=r,t=!0)
}),this.cache=e,this.monitoring=!1,t&&this.runMonitor()
},this.monitoringFrequency))}isExpired(e){
return(new Date).getTime()-e.createdAt>this.cacheLifetime}isReserved(e){
return e.reserved}getItem(e){if(void 0===this.cache[e])return null
;const t=this.cache[e];if(!this.isExpired(t))return t;delete this.cache[e]}
reserveWaiter(t){return new e((e,i)=>{const r=(new Date).getTime(),s=()=>{
window.setTimeout(()=>{if(!this.cache[t.id])return this.reserveAndFetch({
id:t.id,fetch:t.fetch}).then(()=>{e(this.cache[t.id])}).catch(e=>{i(e)})
;if(t.reserved){const e=(new Date).getTime()-r
;e>this.waiterTimeout?(delete this.cache[t.id],
i(new Error("Timed-out waiting for cache item to become available; timeout "+this.waiterTimeout+", waited "+e))):s()
}else e(t)},this.waiterFrequency)};s()})}reserveAndFetch({id:e,fetch:t}){
this.reserveItem(e,t);const i=t().then(i=>(this.setItem(e,i,t),i)).finally(()=>{
i.isCancelled()&&delete this.cache[e]});return i}
getItemWithWait({id:t,fetch:i}){return e.try(()=>{const e=this.cache[t];if(e){
if(!this.isExpired(e))return this.isReserved(e)?this.reserveWaiter(e).then(e=>e.value):e.value
;delete this.cache[t]}return this.reserveAndFetch({id:t,fetch:i})})}
reserveItem(e,t){this.cache[e]={id:e,createdAt:(new Date).getTime(),reserved:!0,
fetch:t}}setItem(e,t,i){let r=this.cache[e]
;r.reserved?delete r.reserved:r={},r.id=e,
r.value=t,r.createdAt=(new Date).getTime(),r.fetch=i,this.runMonitor()}}({})
;return class{
constructor({token:e,auth:t,url:i,module:r,version:s,timeout:h,rpcContext:n}){
if(this.token=e||(t?t.token:null),
this.timeout=h,this.rpcContext=n,!i)throw new Error("The service discovery url was not provided")
;if(this.url=i,!r)throw new Error("The module was not provided")
;this.module=r,this.version=s||null,"auto"===s&&(this.version=null)}options(){
return{timeout:this.timeout,authorization:this.token,rpcContext:this.rpcContext}
}moduleId(){let e
;return e=this.version?this.module+":"+this.version:this.module+":auto",e}
getCached(e){return i.getItemWithWait({id:this.moduleId(),fetch:e})}
setCached(e){i.set(this.moduleId(),e)}lookupModule(){return this.getCached(()=>{
const e=[{module_name:this.module,version:this.version}]
;return t.request(this.url,"ServiceWizard","get_service_status",e,this.options())
})}callFunc(e,i){
return this.lookupModule().spread(r=>t.request(r.url,this.module,e,i,this.options()))
}}}));