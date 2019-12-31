define(["uuid"],(function(e){"use strict";const t={};function n(e){
return e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}function s(e){
return e?Object.keys(e).map(t=>{const s=e[t],r=n(t)
;return"string"==typeof s?r+": "+s:""}).filter(e=>!!e).join("; "):""}
function r(e){
return e.match(/'.*'/)?e:e.match(/".*"/)?e.replace(/"/g,"'"):e.match(/-/)?"'"+e+"'":e
}function o(e){return e?Object.keys(e).map(t=>{const n=e[t]
;return(t=r(t))+": "+function e(t){switch(typeof t){case"object":
return t instanceof Array?"["+t.map(t=>e(t)).join(",")+"]":null===t?"null":"{"+Object.keys(t).map(n=>{
const s=t[n];return(n=r(n))+":"+e(s)}).filter(e=>!!e).join(",")+"}"
;case"function":return t.toString();case"string":return t.replace(/"/g,"'")
;case"number":case"boolean":return String(t);default:
throw new Error("Type not supported for data-bind attribute: "+typeof t)}}(n)
}).filter(e=>!!e).join(","):""}function c(e,t){function n(e){
return!("object"!=typeof e||null===e||e instanceof Array)}
return function e(t,s){return Object.keys(s).forEach(r=>{
n(t)&&n(s)&&(t[r]=e(t[r],s[r])),t[r]=s[r]}),t}(e,t)}function i(e,r){let i
;if(r=r||{},t[e]&&!r.ignoreCache)return t[e];const u=function(t,u){let a="<"+e
;if(t instanceof Array)u=t,
t=null;else if("string"==typeof t)u=t,t=null;else if(null==t)u||(u="");else if("object"==typeof t)r.attribs&&(t=c(c({},r.attribs),t));else if("number"==typeof t)u=String(t),
t=null;else{if("boolean"!=typeof t)throw"Cannot make tag "+e+" from a "+typeof t
;u=t?"true":"false",t=null}return(t=t||r.attribs)&&(i=function(e){let t
;return e?Object.keys(e).map(r=>{let c=e[r];const i=n(r)
;if("object"==typeof c)if(null===c)c=!1;else if(c instanceof Array)c=c.join(" ");else switch(i){
case"style":c=s(c);break;case"data-bind":c=o(c);break;default:c=!1}
return"string"==typeof c?(t=c.replace(/"/g,"&quot;"),
i+'="'+t+'"'):"boolean"==typeof c?!!c&&i:"number"==typeof c&&i+'="'+String(c)+'"'
}).filter(e=>!!e).join(" "):""
}(t),i&&i.length>0&&(a+=" "+i)),a+=">",!1!==r.close&&(a+=function e(t){
return t?"string"==typeof t?t:"number"==typeof t?String(t):t instanceof Array?t.map(t=>e(t)).join(""):void 0:""
}(u),a+="</"+e+">"),a};return r.ignoreCache||(t[e]=u),u}function u(){
return"kb_html_"+new e(4).format()}return Object.freeze({html:function e(t){
const n=typeof t;let s
;return"string"===n?t:"boolean"===n?t?"true":"false":"number"===n?String(t):"object"===n&&t.push?(s="",
t.forEach(t=>{s+=e(t)
}),s):"object"===n?(s="",s+="<"+n.tag,t.attributes&&t.attributes.keys().forEach(e=>{
s+=e+'="'+t.attributes[e]+'"'
}),s+=">",t.children&&(s+=e(t.children)),s+="</"+t.tag+">",s):void 0},tag:i,
tags:function(e){return e.map(e=>i(e))},genId:u,flatten:function e(t){
if("string"==typeof t)return t
;if(t instanceof Array)return t.map(t=>e(t)).join("")
;throw new Error("Not a valid html representation -- must be string or list")},
safeString:function(e){const t=document.createElement("div")
;return t.innerText=e,t.textContent||t.innerText||""},
embeddableString:function(e){return e.replace(/</,"&lt;").replace(/>/,"&gt;")},
makeStyles:function(e){const t={},n=i("style"),r={};function o(e){
return r[e]||(r[e]=e+"_"+u()),r[e]}let c,a
;e.classes?(c=e.classes||{},a=e.rules||{}):(c=e,
a={}),Object.keys(c).forEach(e=>{const n=e+"_"+u();t[e]=n,c[e].css||(c[e]={
css:c[e]}),c[e].id=n});const f=[];return Object.keys(c).forEach(e=>{const t=c[e]
;f.push([".",t.id," {",s(t.css),"}"].join("")),
t.pseudo&&(t.pseudoClasses=t.pseudo),
t.pseudoClasses&&Object.keys(t.pseudoClasses).forEach(e=>{
f.push([".",t.id+":"+e,"{",s(t.pseudoClasses[e]),"}"].join(""))
}),t.pseudoElements&&Object.keys(t.pseudoElements).forEach(e=>{
f.push([".",t.id+"::"+e,"{",s(t.pseudoElements[e]),"}"].join(""))
}),t.scopes&&Object.keys(t.scopes).forEach(e=>{const n=o(e)
;f.push([".",n," .",t.id,"{",s(t.scopes[e]),"}"].join(""))
}),t.modifiers&&Object.keys(t.modifiers).forEach(e=>{
const n=o(e),r=t.modifiers[e]
;r.css||(r.css=r),f.push([".",t.id,".",n,"{",s(r.css),"}"].join("")),
r.pseudo&&(r.pseudoClasses=r.pseudo),
r.pseudoClasses&&Object.keys(r.pseudoClasses).forEach(e=>{
f.push([".",t.id,".",n+":"+e,"{",s(r.pseudoClasses[e]),"}"].join(""))})
}),t.inner&&Object.keys(t.inner).forEach(e=>{const n=t.inner[e]
;n.css||(n.css=n),
f.push([".",t.id," ",e,"{",s(n.css),"}"].join("")),n.scopes&&Object.keys(n.scopes).forEach(r=>{
const c=o(r);f.push([".",c," .",t.id," ",e,"{",s(n.scopes[r]),"}"].join(""))})})
}),Object.keys(a).forEach(e=>{const t=a[e];Object.keys(t).forEach(n=>{
const r=t[n]
;f.push(["@"+e+" "+n,"{",Object.keys(r).map(e=>e+" { "+s(r[e])+" } ").join(""),"}"].join(""))
})}),{classes:t,def:e,sheet:n({type:"text/css"},f.join("\n")),scopes:r}}})}));