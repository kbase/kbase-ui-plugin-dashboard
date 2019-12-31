define(["./jsonRpc-native"],(function(t){"use strict";return function(e){
var r=e.module,n=e.token||(e.auth?e.auth.token:null)
;if(!e.url)throw new Error("The service url was not provided")
;if(!r)throw new Error("The service module was not provided")
;this.callFunc=function(o,u){return t.request(e.url,r,o,u,{timeout:e.timeout,
authorization:n,rpcContext:e.rpcContext})}}}));