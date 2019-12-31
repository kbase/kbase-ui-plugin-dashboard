define([],(function(){"use strict";function t(){}function r(){}
function o(t,r,o){
this.code=t,this.xhr=o,this.message=r,this.stack=(new Error).stack}
function e(t,r,o){
this.code=t,this.xhr=o,this.message=r,this.stack=(new Error).stack}
function s(t,r,o){
this.code=t,this.xhr=o,this.message=r,this.stack=(new Error).stack}
function p(t,r,o,e){
this.timeout=t,this.elapsed=r,this.xhr=e,this.message=o,this.stack=(new Error).stack
}function c(t,r){this.xhr=r,this.message=t,this.stack=(new Error).stack}
function n(t,r){this.xhr=r,this.message=t,this.stack=(new Error).stack}
function i(t,r){this.xhr=r,this.message=t,this.stack=(new Error).stack}
function a(){}function h(t,r,o){
this.originalError=t,this.url=r,this.responseData=o,this.stack=(new Error).stack
}function y(t,r,o,e){
this.url=o,this.message=e,this.statusCode=t,this.statusText=r,
this.stack=(new Error).stack}function u(t,r,o,e,s,p){
this.module=t,this.func=r,this.params=o,this.message=s,this.processingMessage=p,
this.respose=e,this.stack=(new Error).stack}function E(t,r,o,e,s){var p
;if(this.module=t,
this.func=r,this.params=o,this.url=e,this.originalError=s,s.message)p=s.message;else{
var c=s.error;if("string"==typeof c)p=c.split("\n")[0]||""}
this.message=p,this.detail=s.error,
this.type=s.name,this.code=s.code,this.stack=(new Error).stack}
function m(t,r,o,e,s){
this.module=t,this.func=r,this.params=o,this.url=e,this.data=s,
this.stack=(new Error).stack}function f(t,r,o){
this.module=t,this.func=r,this.originalError=o,this.stack=(new Error).stack}
return t.prototype=Object.create(Error.prototype),
t.prototype.constructor=t,t.prototype.name="CustomError",
r.prototype=Object.create(t.prototype),
r.prototype.constructor=r,r.prototype.name="AjaxError",
o.prototype=Object.create(r.prototype),
o.prototype.constructor=o,o.prototype.name="RedirectError",
e.prototype=Object.create(r.prototype),
e.prototype.constructor=e,e.prototype.name="ClientError",
s.prototype=Object.create(r.prototype),
s.prototype.constructor=s,s.prototype.name="ServerError",
p.prototype=Object.create(r.prototype),
p.prototype.constructor=p,p.prototype.name="TimeoutError",
c.prototype=Object.create(r.prototype),
c.prototype.constructor=c,c.prototype.name="ConnectionError",
n.prototype=Object.create(r.prototype),
n.prototype.constructor=n,n.prototype.name="GeneralError",
i.prototype=Object.create(r.prototype),
i.prototype.constructor=i,i.prototype.name="AbortError",
a.prototype=Object.create(t.prototype),
a.prototype.constructor=a,a.prototype.name="RpcError",
h.prototype=Object.create(a.prototype),
h.prototype.constructor=h,h.prototype.name="InvalidResponseError",
y.prototype=Object.create(a.prototype),
y.prototype.constructor=y,y.prototype.name="RequestError",
u.prototype=Object.create(a.prototype),
u.prototype.constructor=u,u.prototype.name="ResponseValueError",
E.prototype=Object.create(a.prototype),
E.prototype.constructor=E,E.prototype.name="JsonRpcError",
m.prototype=Object.create(a.prototype),
m.prototype.constructor=m,m.prototype.name="JsonRpcNonconformingError",
f.prototype=Object.create(a.prototype),
f.prototype.constructor=f,f.prototype.name="AttributeError",Object.freeze({
CustomError:t,AjaxError:r,RedirectError:o,ClientError:e,ServerError:s,
TimeoutError:p,GeneralError:n,ConnectionError:c,AbortError:i,RpcError:a,
InvalidResponseError:h,RequestError:y,ResponseValueError:u,JsonRpcError:E,
JsonRpcNonconformingError:m,AttributeError:f})}));