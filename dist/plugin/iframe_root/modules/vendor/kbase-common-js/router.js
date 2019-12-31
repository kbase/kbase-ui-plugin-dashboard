define([],(function(){"use strict";function t(t){
this.name="NotFoundException",this.original=t.original,
this.path=t.path,this.params=t.params,this.request=t.request}function e(e){
var n=[],r=e.defaultRoute
;if(!r)throw new Error("The defaultRoute must be provided");function o(t){
var e=t.split(/[?&]/),n={};return e.forEach((function(t){if(t.length>0){
var e=t.split("=")
;e[0].length>0&&(n[decodeURIComponent(e[0])]=decodeURIComponent(e[1]))}})),n}
function i(){var t,e,n,r=[],i={};return t=function(){
var t=window.location.search;return t&&1!==t.length?o(t.substr(1)):{}
}(),window.location.hash&&window.location.hash.length>1&&(2===(n=(e=window.location.hash.substr(1)).split("?",2)).length&&(i=o(n[1]),
Object.keys(i).forEach((function(e){t[e]=i[e]
}))),r=n[0].split("/").filter((function(t){return t.length>0
})).map((function(t){return decodeURIComponent(t)}))),{original:e,path:r,query:t
}}function a(e){var o,i,a,u,p,c,h,l
;if(0===e.path.length&&0===Object.keys(e.query).length)return{request:e,
params:{},route:r};t:for(i=0;i<n.length;i+=1){
if(p={},(u=n[i]).path.length>e.path.length){
if(!e.path.slice(u.path.length).every((function(t){return t.optional
})))continue t}else if(u.path.length<e.path.length)continue t
;for(a=0;a<e.path.length;a+=1)switch(h=u.path[a],c=e.path[a],h.type){
case"literal":if(h.value!==c)continue t;break;case"options":
if(!h.value.some((function(t){if(c===t)return!0})))continue t;break;case"param":
p[h.name]=c}o={request:e,params:p,route:u};break t}if(!o)throw new t({request:e,
params:p,route:null,original:e.original,path:e.path})
;return l=o.route.queryParams||{},Object.keys(e.query).forEach((function(t){
l[t]&&(o.params[t]=e.query[t])})),o}function u(t){
return Object.keys(t).map((function(e){return e+"="+encodeURIComponent(t[e])
})).join("&")}function p(t){window.location.replace(t)}function c(t,e){
e?window.open(t):window.location.replace(t)}return{addRoute:function(t){
var e=t.path;"string"==typeof e&&(e=[e]),t.path=e.map((function(t){
if("string"==typeof t)return{type:"literal",value:t}
;if("object"==typeof t)return t instanceof Array?{type:"options",value:t
}:(t.type||(t.type="param"),t);throw new Error("Unsupported route path element")
})),n.push(t)},listRoutes:function(){return n.map((function(t){return t.path}))
},findCurrentRoute:function(){return a(i())},getCurrentRequest:i,findRoute:a,
navigateTo:function(t){if(t||(t=r),"string"==typeof t&&(t={path:t
}),void 0!==t.path)!function(t){var e,n,r,o
;if("string"==typeof t.path)e=t.path.split("/");else{
if(!(t.path instanceof Array))throw console.error("Invalid path in location",t),
new Error("Invalid path in location");e=t.path}n=e.filter((function(t){
return!(!t||"string"!=typeof t)
})).join("/"),t.params&&(r=u(t.params)),t.query&&(r=u(t.query)),
o=r?n+"?"+r:n,t.external?(o="/"+o,
t.replace?p(o):window.location.href=o):t.replace?p("#"+o):window.location.hash="#"+o
}(t);else{
if("string"!=typeof t.redirect)throw new Error("Invalid navigation location -- no path")
;c(t.redirect)}},redirectTo:c}}
return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,{
NotFoundException:t,make:function(t){return e(t)}}}));