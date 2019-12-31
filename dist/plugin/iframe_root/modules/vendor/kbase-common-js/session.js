define(["jquery","bluebird","./cookie"],(function(e,n,r){"use strict"
;function t(t){
var s,o="0.2.0",i=t||{},u=i.cookieName,a=i.cookieMaxAge||36e3,c=i.loginUrl,l=i.extraCookies,f=Object.create(r).init({
doc:document});function m(e){var n,r,t,s,o=e.split("|"),i={}
;for(n=0;n<o.length;n+=1)t=(r=o[n].split("="))[0],s=r[1],i[t]=s;return i}
function d(e){
return void 0===e&&(e=e),!!e&&(!!(e.sessionId&&e.username&&e.token&&e.tokenObject)&&!function(e){
var n=e.tokenObject.expiry
;return!!n&&(n=parseInt(n,10),!isNaN(n)&&new Date(1e3*n)-new Date<=0)}(e))}
function k(){if(s){var e=function(){var e=""
;return e+="un="+s.username,e+="|kbase_sessionid="+s.sessionId,
e+="|user_id="+s.username,
e+="|token="+s.token.replace(/=/g,"EQUALSSIGN").replace(/\|/g,"PIPESIGN")}()
;f.setItem(u,e,a,"/"),l&&l.forEach((function(n){
f.setItem(n.name,e,a,"/",n.domain)})),p().success=1}}function g(){return b(_()),
s}function p(){return s?{un:s.username,user_id:s.username,name:s.realname,
token:s.token,kbase_sessionid:s.sessionId}:null}function I(){
var e=f.getCookies();f.removeItem(u,"/"),l&&l.forEach((function(e){
f.removeItem(e.name,e.path||"/",e.domain)})),e.forEach((function(e){
f.removeItem(e.name,"/")})),s=null}function b(e){s=d(e)?e:null}function _(){
var e=f.getItems(u);if(!e||0===e.length)return null;var n=m(e[0])
;if(!(n.kbase_sessionid&&n.un&&n.user_id&&n.token))return I(),null
;n.token=n.token.replace(/PIPESIGN/g,"|").replace(/EQUALSSIGN/g,"=");var r={
username:n.user_id,token:n.token,tokenObject:m(n.token),
sessionId:n.kbase_sessionid};return d(r)?r:null}return{getVersion:function(){
return o},login:function(r){return new n((function(n,t){
if(r.username&&0!==r.username.length)if(r.password&&0!==r.password.length){
r.username=r.username.toLowerCase();var o={user_id:r.username,
password:r.password,fields:"un,token,user_id,kbase_sessionid,name",status:1}
;e.support.cors=!0,e.ajax({type:"POST",url:c,data:o,dataType:"json",
crossDomain:!0,xhrFields:{withCredentials:!0},beforeSend:function(e){
e.withCredentials=!0},success:function(e){e.kbase_sessionid?(b(function(e){
if(!(e.kbase_sessionid&&e.user_id&&e.token))return I(),null;var n={
username:e.user_id,realname:e.name,token:e.token,tokenObject:m(e.token),
sessionId:e.kbase_sessionid};return d(n)?n:null
}(e)),r.disableCookie||k(),n(p())):t(new Error(e.error_msg))},
error:function(e,n){
var r=n,o="The login attempt failed: Username &amp; Password combination are incorrect"
;e.status&&401===e.status?r=o:e.responseJSON&&(e.responseJSON.error_msg&&(r=e.responseJSON.error_msg),
"LoginFailure: Authentication failed."===r&&(r=o)),
"error"===r&&(r="Internal Error: Error connecting to the login server"),
s=null,t(new Error(r))}})
}else t("Password is empty: It is required for login");else t("Username is empty: It is required for login")
}))},logout:function(){return new n((function(e){I(),e()}))},
getUsername:function(){if(g(),s)return s.username},getRealname:function(){
if(g(),s)return s.realname},getSessionId:function(){if(g(),s)return s.sessionId
},getAuthToken:function(){if(g(),s)return s.token},isLoggedIn:function(){
return g(),!(!s||!s.token)},importFromCookie:_,setSession:b,
getKbaseSession:function(){return g(),s?p():null}}}return{make:function(e){
return t(e)}}}));