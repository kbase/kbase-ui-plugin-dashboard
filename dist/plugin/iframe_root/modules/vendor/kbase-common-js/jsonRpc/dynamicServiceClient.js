define(["bluebird","./jsonRpc-native"],(function(e,t){"use strict"
;var n=function(t){
var n={},r=(t=t||{}).itemLifetime||18e5,i=t.monitoringFrequency=6e4,u=t.waiterTimeout||3e4,o=t.waiterFrequence||100,c=!1
;function d(e){return(new Date).getTime()-e.createdAt>r}function a(e){
!function(e,t){n[e]={id:e,createdAt:(new Date).getTime(),reserved:!0,fetch:t}
}(e.id,e.fetch);var t=e.fetch().then((function(t){return f(e.id,t,e.fetch),t
})).finally((function(){t.isCancelled()&&delete n[e.id]}));return t}
function f(e,t,r){var u=n[e];u.reserved?delete u.reserved:u={},u.id=e,u.value=t,
u.createdAt=(new Date).getTime(),u.fetch=r,function e(){
c||(c=!0,window.setTimeout((function(){var t={},r=!1
;Object.keys(n).forEach((function(e){var i=n[e];d(i)||(t[e]=i,r=!0)})),n=t,c=!1,
r&&e()}),i))}()}return{get:function(e){if(void 0===n[e])return null;var t=n[e]
;if(!d(t))return t;delete n[e]},getWait:function(t){return e.try((function(){
var r=n[t.id];if(r){if(!d(r))return function(e){return e.reserved
}(r)?function(t){return new e((function(e,r){var i=(new Date).getTime(),c=!0
;!function d(){c&&window.setTimeout((function(){if(!n[t.id])return a({id:t.id,
fetch:t.fetch}).then((function(){e(n[t.id])})).catch((function(e){r(e)}))
;if(t.reserved){var o=(new Date).getTime()-i
;o>u?(delete n[t.id],r(new Error("Timedout waiting for cache item to become available; timeout "+u+", waited "+o))):d()
}else e(t)}),o)}()}))}(r).then((function(e){return e.value})):r.value
;delete n[t.id]}return a(t)}))},set:f}}();return function(e){
var r=e.token||(e.auth?e.auth.token:null)
;if(!e.url)throw new Error("The service discovery url was not provided")
;if(!e.module)throw new Error("The module was not provided")
;var i=e.version||null;function u(){return{timeout:e.timeout,authorization:r,
rpcContext:e.rpcContext}}"auto"===e.version&&(i=null),this.moduleId=function(){
return i?e.module+":"+i:e.module+":auto"},this.getCached=function(e){
return n.getWait({id:this.moduleId(),fetch:e})},this.setCached=function(e){
n.set(this.moduleId(),e)},this.lookupModule=function(){
return this.getCached((function(){var n=[{module_name:e.module,version:i}]
;return t.request(e.url,"ServiceWizard","get_service_status",n,u())}))
},this.callFunc=function(n,r){return this.lookupModule().spread((function(i){
return t.request(i.url,e.module,n,r,u())}))}}}));