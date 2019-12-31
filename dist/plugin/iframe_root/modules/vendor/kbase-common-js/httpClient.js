define(["bluebird","./httpUtils"],(function(t,e){"use strict";function r(t,e,o){
if(!(this instanceof r))return new r(t,e,o)
;this.code=t,this.xhr=o,this.message=e,this.content=o.responseText}
function o(t,e,r){if(!(this instanceof o))return new o(t,e,r)
;this.code=t,this.xhr=r,this.message=e,this.content=r.responseText}
function n(t,e,r){
this.code=t,this.xhr=r,this.message=e,this.content=r.responseText}
function s(t,e,r,o){this.timeout=t,this.elapsed=e,this.xhr=o,this.message=r}
function i(t,e){this.xhr=e,this.message=t}function c(t,e){
this.xhr=e,this.message=t}function a(t){var e={},r=t.getAllResponseHeaders()
;if(!r)return e;var o=r.split(/\n/);return o.pop(),o.forEach((function(t){
var r=t.indexOf(":",0),o=t.substr(0,r).trim(),n=t.substr(r+1).trim();e[o]=n})),e
}
return r.prototype=Object.create(Error.prototype),r.prototype.toString=function(){
return this.message?this.message:"redirection"
},r.prototype.constructor=r,o.prototype=Object.create(Error.prototype),
o.prototype.toString=function(){return this.message?this.message:"client error"
},
o.prototype.constructor=o,n.prototype=Object.create(Error),n.prototype.toString=function(){
return this.message?this.message:"client error"
},n.prototype.constructor=n,s.prototype=Object.create(Error),
s.prototype.constructor=s,
i.prototype=Object.create(Error),i.prototype.constructor=i,
c.prototype=Object.create(Error),c.prototype.constructor=c,{request:function(r){
var o=r.timeout||6e4,n=new Date;return new t((function(t,p){
var u=new XMLHttpRequest;u.onload=function(){t({status:u.status,
response:u.response,header:a(u)})},u.ontimeout=function(){var t=new Date-n
;p(new s(o,t,"Request timeout",u))},u.onerror=function(){
p(new i("General request error",u))},u.onabort=function(){
p(new c("Request was aborted",u))};var h=new URL(r.url)
;r.query&&(h.search=e.encodeQuery(r.query)),u.timeout=r.timeout||6e4;try{
u.open(r.method,h.toString(),!0)}catch(d){p(new i("Error opening request",u))}
try{r.header&&Object.keys(r.header).forEach((function(t){
u.setRequestHeader(t,r.header[t])
})),r.responseType&&(u.responseType=r.responseType),
u.withCredentials=r.withCredentials||!1,
"string"==typeof r.data?u.send(r.data):void 0===r.data||null===r.data?u.send():p(new Error("Invalid type of data to send"))
}catch(d){p(new i("Error sending data in request",u))}}))},GeneralException:i,
AbortException:c,TimeoutException:s,ServerException:n,ClientException:o}}));