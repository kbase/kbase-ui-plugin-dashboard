define(["./jsonRpc-native"],(function(t){"use strict";return class{
constructor({module:t,token:e,auth:o,url:r,timeout:i,rpcContext:n}){
if(!r)throw new Error("The service url was not provided")
;if(this.url=r,!t)throw new Error("The service module was not provided")
;this.module=t,this.token=e||(o?o.token:null),this.timeout=i,this.rpcContext=n}
callFunc(e,o){return t.request(this.url,this.module,e,o,{timeout:this.timeout,
authorization:this.token,rpcContext:this.context})}}}));