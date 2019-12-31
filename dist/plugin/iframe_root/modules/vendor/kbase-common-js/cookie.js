define([],(function(){"use strict";return Object.create({},{init:{
value:function(e){return this.doc=e.doc||document,this}},importCookies:{
value:function(){var e=this.doc.cookie;return e?e.split(";").map((function(e){
var t=e.split("="),n=t[0].trim(" "),i=t[1].trim(" ");return{name:n,
value:decodeURIComponent(i)}})):[]}},getCookies:{value:function(){
return this.importCookies()}},findCookie:{value:function(e){
return this.importCookies().filter((function(t){if(t.name===e)return!0}))}},
getItem:{value:function(e){if(!e)return null;var t=this.findCookie(e)
;if(t.length>1)throw new Error("Too many cookies returned, expected 1")
;return 0!==t.length?t[0].value:void 0}},getItems:{value:function(e){
return e?this.findCookie(e).map((function(e){return e.value})):null}},setItem:{
value:function(e,t,n,i,o,r,u){
if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var a,c
;if(n)switch(n.constructor){case Number:
n===1/0?a=new Date("9999-12-31T23:59:59Z").toUTCString():(c=n,
a=new Date((new Date).getTime()+1e3*n).toUTCString());break;case String:a=n
;break;case Date:a=n.toUTCString()}var s={name:e,value:t,expires:a,"max-age":c,
domain:o,path:i,secure:r,noEncode:u};return this.setCookie(s),!0}},setCookie:{
value:function(e){var t,n,i
;t=["domain","path","secure","expires","max-age"].map((function(t){
if(e[t])return{key:t,value:e[t]}})).filter((function(e){if(e)return!0
})),e.noEncode?(n=t.map((function(e){return[e.key,e.value].join("=")
})).join(";"),i=[e.key,[e.value,n].join(";")].join("=")):(n=t.map((function(e){
return[e.key,e.value].join("=")
})).join(";"),i=[encodeURIComponent(e.name),[encodeURIComponent(e.value),n].join(";")].join("=")),
this.doc.cookie=i}},removeItem:{value:function(e,t,n){this.setCookie({name:e,
value:"*",domain:n,path:t,expires:new Date("1970-01-01T00:00:00Z").toUTCString()
})}},hasItem:{value:function(e){return!!this.importCookies()[e]}},keys:{
value:function(){var e=this.importCookies();return Object.keys(e)}}})}));