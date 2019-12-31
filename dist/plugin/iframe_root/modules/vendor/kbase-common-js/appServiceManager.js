define(["bluebird"],(function(e){"use strict";function r(e,r,t){
this.type=e,this.message=r,this.suggestion=t}
return r.prototype=Object.create(Error.prototype),
r.prototype.constructor=r,r.prototype.name="AppServiceError",{make:function(t){
var n={},o=t.moduleBasePath
;if(!o)throw new TypeError("moduleBasePath not provided to factory")
;function i(r){return new e((function(e,t){var i=n[r],s=[o,i.module].join("/")
;require([s],(function(t){var o=t.make(n[r].config);n[r].instance=o,e()
}),(function(e){t(e)}))}))}return{addService:function(e,r){n[e.name]={
name:e.name,module:e.module,config:r}},getService:function(e){var t=n[e]
;if(!t)throw new r({type:"UndefinedService",
message:'The requested service "'+e+'" has not been registered',
suggestion:"This is a system configuration issue. The requested service should be installed or the client code programmed to check for its existence first (with hasService)"
});return t.instance},loadService:i,hasService:function(e){return!!n[e]},
loadServices:function(){var r=Object.keys(n).map((function(e){return i(e)}))
;return e.all(r)},startServices:function(){
var r=Object.keys(n).map((function(e){var r=n[e].instance
;if(!r)throw console.warn("Warning: no service started for "+e),
new Error("No service started for "+e);if(r.start)return r.start()
;console.warn("Warning: no start method for "+e)}));return e.all(r)},
stopServices:function(){var r=Object.keys(n).map((function(e){var r=n[e]
;if(r&&r.instance&&r.instance.stop)return r.instance.stop()}));return e.all(r)},
dumpServices:function(){return n}}},AppServiceErrror:r}}));