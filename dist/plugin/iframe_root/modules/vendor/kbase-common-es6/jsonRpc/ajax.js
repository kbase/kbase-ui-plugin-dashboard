define(["bluebird","./exceptions"],(function(e,t){"use strict";return{
get:function(r){const s=r.timeout||6e4,n=new Date;return new e((e,o)=>{
const a=new XMLHttpRequest;a.onload=()=>{
a.status>=400&&a.status<500&&o(new t.ClientError(a.status,a.statusText,a)),
a.status>=500&&o(new t.ServerError(a.status,a.statusText,a)),
a.status>=300&&a.status<400&&o(new Error("Redirects not currently supported"))
;try{e(a.response)}catch(r){o(r)}},a.ontimeout=()=>{const e=new Date-n
;o(new t.TimeoutError(s,e,"Request timeout",a))},a.onerror=()=>{
o(new t.ConnectionError("General request error",a))},a.onabort=()=>{
o(new t.AbortError("Request was aborted",a))
},r.responseType&&(a.responseType=r.responseType);try{a.open("GET",r.url,!0)
}catch(u){o(new t.GeneralError("Error opening request",a))}try{
a.timeout=r.timeout||6e4,r.header&&Object.keys(r.header).forEach(e=>{
a.setRequestHeader(e,r.header[e])
}),a.withCredentials=r.withCredentials||!1,a.send()}catch(u){
o(new t.GeneralError("Error sending data in request",a))}})},post:function(r){
const s=r.timeout||6e4,n=new Date;return new e((e,o,a)=>{
const u=new XMLHttpRequest;u.onload=()=>{
if(u.status>=300&&u.status<400)o(new t.RedirectError(u.status,u.statusText,u));else if(u.status>=400&&u.status<500)o(new t.ClientError(u.status,u.statusText,u));else if(u.status>=500)o(new t.ServerError(u.status,u.statusText,u));else try{
e(u.response)}catch(r){o(r)}},u.ontimeout=()=>{const e=new Date-n
;o(new t.TimeoutError(s,e,"Request timeout",u))},u.onerror=()=>{
o(new t.ConnectionError("Request signaled error",u))},u.onabort=()=>{
o(new t.AbortError("Request was aborted",u))},a&&a(()=>{u.abort()
}),r.responseType&&(u.responseType=r.responseType);try{u.open("POST",r.url,!0)
}catch(i){o(new t.GeneralError("Error opening request",u))}try{
u.timeout=r.timeout||6e4,r.header&&Object.keys(r.header).forEach(e=>{
u.setRequestHeader(e,r.header[e])
}),u.withCredentials=r.withCredentials||!1,"string"==typeof r.data?u.send(r.data):r.data instanceof Array?u.send(new Uint8Array(r.data)):o(new Error("Invalid type of data to send"))
}catch(i){o(new t.GeneralError("Error sending data in request",u))}})}}}));