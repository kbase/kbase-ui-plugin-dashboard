define(["bluebird","./exceptions"],(function(e,t){"use strict";return{
get:function(r){var n=r.timeout||6e4,s=new Date;return new e((function(e,o){
var a=new XMLHttpRequest;a.onload=function(r){
a.status>=400&&a.status<500&&o(new t.ClientError(a.status,a.statusText,a)),
a.status>=500&&o(new t.ServerError(a.status,a.statusText,a)),
a.status>=300&&a.status<400&&o(new Error("Redirects not currently supported"))
;try{e(a.response)}catch(n){o(n)}},a.ontimeout=function(){var e=new Date-s
;o(new t.TimeoutError(n,e,"Request timeout",a))},a.onerror=function(){
o(new t.ConnectionError("General request error",a))},a.onabort=function(){
o(new t.AbortError("Request was aborted",a))
},r.responseType&&(a.responseType=r.responseType);try{a.open("GET",r.url,!0)
}catch(u){o(new t.GeneralError("Error opening request",a))}try{
a.timeout=r.timeout||6e4,r.header&&Object.keys(r.header).forEach((function(e){
a.setRequestHeader(e,r.header[e])
})),a.withCredentials=r.withCredentials||!1,a.send()}catch(u){
o(new t.GeneralError("Error sending data in request",a))}}))},post:function(r){
var n=r.timeout||6e4,s=new Date;return new e((function(e,o,a){
var u=new XMLHttpRequest;u.onload=function(){
if(u.status>=300&&u.status<400)o(new t.RedirectError(u.status,u.statusText,u));else if(u.status>=400&&u.status<500)o(new t.ClientError(u.status,u.statusText,u));else if(u.status>=500)o(new t.ServerError(u.status,u.statusText,u));else try{
e(u.response)}catch(r){o(r)}},u.ontimeout=function(){var e=new Date-s
;o(new t.TimeoutError(n,e,"Request timeout",u))},u.onerror=function(){
o(new t.ConnectionError("Request signaled error",u))},u.onabort=function(){
o(new t.AbortError("Request was aborted",u))},a&&a((function(){u.abort()
})),r.responseType&&(u.responseType=r.responseType);try{u.open("POST",r.url,!0)
}catch(i){o(new t.GeneralError("Error opening request",u))}try{
u.timeout=r.timeout||6e4,r.header&&Object.keys(r.header).forEach((function(e){
u.setRequestHeader(e,r.header[e])
})),u.withCredentials=r.withCredentials||!1,"string"==typeof r.data?u.send(r.data):r.data instanceof Array?u.send(new Uint8Array(r.data)):o(new Error("Invalid type of data to send"))
}catch(i){o(new t.GeneralError("Error sending data in request",u))}}))}}}));