define(["bluebird"],(function(e){"use strict";function t(e,r,n){
if(!(this instanceof t))return new t(e,r,n)
;this.code=e,this.xhr=n,this.message=r,this.content=n.responseText}
function r(e,t,n){if(!(this instanceof r))return new r(e,t,n)
;this.code=e,this.xhr=n,this.message=t,this.content=n.responseText}
function n(e,t,r){
this.code=e,this.xhr=r,this.message=t,this.content=r.responseText}
function o(e,t,r,n){this.timeout=e,this.elapsed=t,this.xhr=n,this.message=r}
function s(e,t){this.xhr=t,this.message=e}function i(e,t){
this.xhr=t,this.message=e}
return t.prototype=Object.create(Error.prototype),t.prototype.toString=function(){
return this.message?this.message:"redirection"
},t.prototype.constructor=t,r.prototype=Object.create(Error.prototype),
r.prototype.toString=function(){return this.message?this.message:"client error"
},
r.prototype.constructor=r,n.prototype=Object.create(Error),n.prototype.toString=function(){
return this.message?this.message:"client error"
},n.prototype.constructor=n,o.prototype=Object.create(Error),
o.prototype.constructor=o,
s.prototype=Object.create(Error),s.prototype.constructor=s,
i.prototype=Object.create(Error),i.prototype.constructor=i,{get:function(t){
var a=t.timeout||6e4,c=new Date;return new e((function(e,u){
var p=new XMLHttpRequest;p.onload=function(){
p.status>=400&&p.status<500&&u(new r(p.status,"Client Error",p)),
p.status>=500&&u(new n(p.status,"Server Error",p));try{e(p.response)}catch(t){
u(t)}},p.ontimeout=function(){var e=new Date-c;u(new o(a,e,"Request timeout",p))
},p.onerror=function(){u(new s("General request error",p))
},p.onabort=function(){u(new i("Request was aborted",p))
},p.timeout=t.timeout||6e4;try{p.open("GET",t.url,!0)}catch(h){
u(new s("Error opening request",p))}try{
t.header&&Object.keys(t.header).forEach((function(e){
p.setRequestHeader(e,t.header[e])
})),t.responseType&&(p.responseType=t.responseType),
p.withCredentials=t.withCredentials||!1,p.send()}catch(h){
u(new s("Error sending data in request",p))}}))},post:function(a){
var c=a.timeout||6e4,u=new Date;return new e((function(e,p){
var h=new XMLHttpRequest;h.onload=function(){
h.status>=300&&h.status<400&&p(new t(h.status,"Redirection",h)),
h.status>=400&&h.status<500&&p(new r(h.status,"Client Error",h)),
h.status>=500&&p(new n(h.status,"Server Error",h));try{e(h.response)}catch(o){
p(o)}},h.ontimeout=function(){var e=new Date-u;p(new o(c,e,"Request timeout",h))
},h.onerror=function(){p(new s("General request error",h))
},h.onabort=function(){p(new i("Request was aborted",h))
},a.responseType&&(h.responseType=a.responseType);try{h.open("POST",a.url,!0)
}catch(d){p(new s("Error opening request",h))}try{
h.timeout=a.timeout||6e4,a.header&&Object.keys(a.header).forEach((function(e){
h.setRequestHeader(e,a.header[e])
})),h.withCredentials=a.withCredentials||!1,"string"==typeof a.data?h.send(a.data):a.data instanceof Array?h.send(new Uint8Array(a.data)):void 0===a.data||null===a.data?h.send():p(new Error("Invalid type of data to send"))
}catch(d){p(new s("Error sending data in request",h))}}))},GeneralException:s,
AbortException:i,TimeoutException:o,ServerException:n,ClientException:r}}));