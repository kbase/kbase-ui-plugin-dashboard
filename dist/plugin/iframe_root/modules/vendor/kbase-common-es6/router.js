define([],()=>{"use strict";function t(t){
this.name="NotFoundException",this.original=t.original,
this.path=t.path,this.params=t.params,this.request=t.request}function e(t){
const e=t.split(/[?&]/),r={};return e.forEach(t=>{if(t.length>0){
const[e,a]=t.split("=")
;e.length>0&&(r[decodeURIComponent(e)]=decodeURIComponent(a))}}),r}
function r(t){
return Object.keys(t).map(e=>e+"="+encodeURIComponent(t[e])).join("&")}
t.prototype=Object.create(Error.prototype),t.prototype.constructor=t;return{
NotFoundException:t,Router:class{constructor(t){
if(!t.defaultRoute)throw new Error("The defaultRoute must be provided")
;this.routes=[],this.defaultRoute=t.defaultRoute}addRoute(t){let e=t.path
;"string"==typeof e&&(e=[e]),t.path=e.map(t=>{if("string"==typeof t)return{
type:"literal",value:t};if("object"==typeof t)return t instanceof Array?{
type:"options",value:t}:(t.type||(t.type="param"),t)
;throw new Error("Unsupported route path element")}),this.routes.push(t)}
getCurrentRequest(){let t,r,a=[],o={};const n=function(){
const t=window.location.search;return t&&1!==t.length?e(t.substr(1)):{}}()
;return window.location.hash&&window.location.hash.length>1&&(t=window.location.hash.substr(1),
r=t.split("?",2),2===r.length&&(o=e(r[1]),Object.keys(o).forEach(t=>{n[t]=o[t]
})),a=r[0].split("/").filter(t=>t.length>0).map(t=>decodeURIComponent(t))),{
original:t,path:a,query:n}}findRoute(e){let r,a,o,n,i,s
;if(0===e.path.length&&0===Object.keys(e.query).length)return{request:e,
params:{},route:this.defaultRoute};t:for(let t=0;t<this.routes.length;t+=1){
o=this.routes[t],n={};const h=o.captureExtraPath
;if(o.path.length>e.path.length){
const t=o.path.slice(e.path.length).every(t=>t.optional),r=h,a="rest"===o.path[o.path.length-1].type
;if(!(t||r||a))continue t
}else if(o.path.length<e.path.length&&!h&&"rest"!==o.path[o.path.length-1].type)continue t
;e:for(a=0;a<e.path.length;a+=1){if(s=o.path[a],i=e.path[a],!s&&h){
n.rest=e.path.slice(a-1);break}switch(s.type){case"literal":
if(s.value!==i)continue t;break;case"options":if(!s.value.some(t=>{
if(i===t)return!0}))continue t;break;case"param":n[s.name]=i;break;case"regexp":
try{if(!new RegExp(s.regexp).test(i))continue t}catch(p){
console.warn("invalid route with regexp element",p);continue t}break;case"rest":
const t=s.name||"rest";if(a<o.path.length-1){
console.warn("rest parameter used before final route element"),
console.warn("  being treated as regular param"),n[t]=i;continue}
s.joinWith?n[t]=e.path.slice(a).join(s.joinWith):n[t]=e.path.slice(a);break e
;default:console.warn("invalid route: type not recognized",s);continue t}}r={
request:e,params:n,route:o};break t}if(!r)throw new t({request:e,params:n,
route:null,original:e.original,path:e.path});{
const t=Object.keys(e.query),a=r.route.queryParams||{}
;Object.keys(a).forEach(o=>{const n=a[o]
;if(!0===n)r.params[o]=e.query[o];else if(n.literal)r.params[o]=n.literal;else{
if(void 0===e.query[o])return;r.params[o]=e.query[o]}delete t[o]
}),r.route.captureExtraSearch&&t.forEach(t=>{r.params[t]=e.query[t]
}),r.route.params&&Object.assign(r.params,r.route.params)}return r}
findCurrentRoute(){const t=this.getCurrentRequest();return this.findRoute(t)}
listRoutes(){return this.routes.map(t=>t.path)}navigateToPath(t){let e,a,o
;if("string"==typeof t.path)e=t.path.split("/");else{
if("object"!=typeof t.path||"function"!=typeof t.path.push)throw console.error("Invalid path in location",typeof t.path,t.path instanceof Array,JSON.parse(JSON.stringify(t))),
new Error("Invalid path in location");e=t.path}
const n=e.filter(t=>!(!t||"string"!=typeof t)).join("/")
;t.params&&(a=r(t.params)),
t.query&&(a=r(t.query)),o=a?n+"?"+a:n,t.external?(o="/"+o,
t.replace?this.replacePath(o):window.location.href=o):t.replace?this.replacePath("#"+o):window.location.hash="#"+o
}navigateTo(t){if(t||(t=this.defaultRoute),"string"==typeof t&&(t={path:t
}),void 0!==t.path)this.navigateToPath(t);else{
if("string"!=typeof t.redirect)throw new Error("Invalid navigation location -- no path")
;this.redirectTo(t.redirect)}}replacePath(t){window.location.replace(t)}
redirectTo(t,e){e?window.open(t):window.location.replace(t)}}}});