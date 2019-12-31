define(["uuid"],(function(e){"use strict";var t={};function n(e){
return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()}))}
function r(e){return e?Object.keys(e).map((function(t){var r=e[t],a=n(t)
;return"string"==typeof r?a+": "+r:""})).filter((function(e){return!!e
})).join("; "):""}function a(e){
return e.match(/'.*'/)?e:e.match(/".*"/)?e.replace(/"/g,"'"):e.match(/-/)?"'"+e+"'":e
}function s(e){return e?Object.keys(e).map((function(t){var n=e[t]
;return(t=a(t))+": "+function e(t){switch(typeof t){case"object":
return t instanceof Array?"["+t.map((function(t){return e(t)
})).join(",")+"]":null===t?"null":"{"+Object.keys(t).map((function(n){var r=t[n]
;return(n=a(n))+":"+e(r)})).filter((function(e){return!!e})).join(",")+"}"
;case"function":return t.toString();case"string":return t.replace(/"/g,"'")
;case"number":case"boolean":return String(t);default:
throw new Error("Type not supported for data-bind attribute: "+typeof t)}}(n)
})).filter((function(e){return!!e})).join(","):""}function o(e,t){function n(e){
return!("object"!=typeof e||null===e||e instanceof Array)}
return function e(t,r){return Object.keys(r).forEach((function(a){
n(t)&&n(r)&&(t[a]=e(t[a],r[a])),t[a]=r[a]})),t}(e,t)}function i(e,a){var i
;if(a=a||{},t[e]&&!a.ignoreCache)return t[e];var u=function(t,u){var c="<"+e
;if(t instanceof Array)u=t,
t=null;else if("string"==typeof t)u=t,t=null;else if(null==t)u||(u="");else if("object"==typeof t)a.attribs&&(t=o(o({},a.attribs),t));else if("number"==typeof t)u=String(t),
t=null;else{if("boolean"!=typeof t)throw"Cannot make tag "+e+" from a "+typeof t
;u=t?"true":"false",t=null}return(t=t||a.attribs)&&(i=function(e){
return e?Object.keys(e).map((function(t){var a=e[t],o=n(t)
;if("object"==typeof a)if(null===a)a=!1;else if(a instanceof Array)a=a.join(" ");else switch(o){
case"style":a=r(a);break;case"data-bind":a=s(a);break;default:a=!1}
return"string"==typeof a?o+'="'+a.replace(/"/g,"&quot;")+'"':"boolean"==typeof a?!!a&&o:"number"==typeof a&&o+'="'+String(a)+'"'
})).filter((function(e){return!!e})).join(" "):""
}(t))&&i.length>0&&(c+=" "+i),c+=">",!1!==a.close&&(c+=function e(t){
return t?"string"==typeof t?t:"number"==typeof t?String(t):t instanceof Array?t.map((function(t){
return e(t)})).join(""):void 0:""}(u),c+="</"+e+">"),c}
;return a.ignoreCache||(t[e]=u),u}function u(){
return"kb_html_"+new e(4).format()}function c(e,t){var n=i("div");return n({
class:"panel panel-default"},[n({class:"panel-heading"},[i("span")({
class:"panel-title"},e)]),n({class:"panel-body"},[t])])}function l(e){
return e.charAt(0).toUpperCase()+e.slice(1)}return Object.freeze({
html:function e(t){var n,r=typeof t
;return"string"===r?t:"boolean"===r?t?"true":"false":"number"===r?String(t):"object"===r&&t.push?(n="",
t.forEach((function(t){n+=e(t)
})),n):"object"===r?(n="",n+="<"+r.tag,t.attributes&&t.attributes.keys().forEach((function(e){
n+=e+'="'+t.attributes[e]+'"'
})),n+=">",t.children&&(n+=e(t.children)),n+="</"+t.tag+">"):void 0},tag:i,
tags:function(e){return e.map((function(e){return i(e)}))},
makeTable:function(e){
var t,n,r=i("table"),a=i("thead"),s=i("tbody"),o=i("tr"),c=i("th"),l=i("td")
;return(e=e||{}).id?t=e.id:(t=u(),e.generated={id:t}),n={id:t
},e.class?n.class=e.class:e.classes&&(n.class=e.classes.join(" ")),
r(n,[a(o(e.columns.map((function(e){return c(e)})))),s(e.rows.map((function(e){
return o(e.map((function(e){return l(e)})))})))])},makeTableRotated:function(e){
function t(e){var t;if("string"==typeof e)t=e;else{if(e.label)return e.label
;t=e.key}return t.replace(/(id|Id)/g,"ID").split(/_/g).map((function(e){
return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}
var n=i("table"),r=i("tr"),a=i("th"),s=i("td"),o={id:u()}
;return e.class?o.class=e.class:e.classes&&(o.class=e.classes.join(" ")),
n(o,e.columns.map((function(n,o){return r([a(t(n)),e.rows.map((function(e){
return s(function(e,t){if("string"==typeof t)return e
;if(t.format)return t.format(e);if(t.type)switch(t.type){case"bool":
return e?"True":"False";default:return e}return e}(e[o],n))}))])})))},
makeRotatedTable:function(e,t){function n(e){
return e.label?e.label:("string"==typeof e?e:e.key).replace(/(id|Id)/g,"ID").split(/_/g).map((function(e){
return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}
var r=i("table"),a=i("tr"),s=i("th"),o=i("td");return r({
class:"table table-stiped table-bordered"},t.map((function(t){
return a([s(n(t)),e.map((function(e){return o(function(e,t){var n=e[t.key]
;if(t.format)return t.format(n);if(t.type)switch(t.type){case"bool":
return n?"True":"False";default:return n}return n}(e,t))}))])})))},
makeObjectTable:function(e,t){function n(e){
return e.label?e.label:("string"==typeof e?e:e.key).replace(/(id|Id)/g,"ID").split(/_/g).map((function(e){
return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}function r(e,t){
var n=e[t.key];if(t.format)return t.format(n);if(t.type)switch(t.type){
case"bool":return n?"True":"False";default:return n}return n}var a,s
;t?t.columns?a=t.columns:(a=t,t={}):t={},a=a?a.map((function(e){
return"string"==typeof e?{key:e}:e})):Object.keys(e).map((function(e){return{
key:e}})),s=t.classes?t.classes:["table-striped","table-bordered"]
;var o=i("table"),u=i("tr"),c=i("th"),l=i("td");return o({
class:"table "+s.join(" ")},a.map((function(t){return u([c(n(t)),l(r(e,t))])})))
},makeObjTable:function(e,t){
var n=e instanceof Array&&e||[e],r=t&&t.columns||Object.keys(n[0]).map((function(e){
return{key:e,label:l(e)}
})),a=t&&t.classes||["table-striped","table-bordered"],s=i("table"),o=i("tr"),u=i("th"),c=i("td")
;function f(e,t){var n=e[t.key];if(t.format)return t.format(n)
;if(t.type)switch(t.type){case"bool":return n?"True":"False";default:return n}
return n}return t&&t.rotated?s({class:"table "+a.join(" ")},r.map((function(e){
return o([u(e.label),n.map((function(t){return c({dataElement:e.key},f(t,e))
}))])}))):s({class:"table "+a.join(" ")},[o(r.map((function(e){return u(e.label)
})))].concat(n.map((function(e){return o(r.map((function(t){return c({
dataElement:t.key},f(e,t))})))}))))},genId:u,bsPanel:c,panel:c,
makePanel:function(e){var t=i("div"),n=i("span");return t({
class:"panel panel-"+(e.class||"default")},[t({class:"panel-heading"},[n({
class:"panel-title"},e.title)]),t({class:"panel-body"},[e.content])])},
loading:function(e,t){var n,r=i("span"),a=i("i");e&&(n=e+"... &nbsp &nbsp")
;var s="fa-2x";if(t)switch(t){case"normal":s=null;break;case"large":s="fa-2x"
;break;case"extra-large":s="fa-3x"}return r([n,a({
class:"fa fa-spinner fa-pulse fa-fw margin-bottom"+(s?" "+s:"")})])},
flatten:function e(t){if("string"==typeof t)return t
;if(t instanceof Array)return t.map((function(t){return e(t)})).join("")
;throw new Error("Not a valid html representation -- must be string or list")},
makeList:function(e){if(e.items instanceof Array){var t=i("ul"),n=i("li")
;return t(e.items.map((function(e){return n(e)})))}
return"Sorry, cannot make a list from that"},makeTabs:function(e){
var t,n,r=i("ul"),a=i("li"),s=i("a"),o=i("div"),c=e.id,l={},f={}
;return c&&(l.id=c),e.tabs.forEach((function(e){e.id=u()
})),e.alignRight?(t=function(e){var t,n=[]
;for(t=e.length-1;t>=0;t-=1)n.push(e[t]);return n
}(e.tabs),f.float="right",n=t.length-1):(t=e.tabs,n=0),o(l,[r({
class:["nav","nav-tabs"].join(" "),role:"tablist"},t.map((function(e,t){var r={
role:"presentation"};return t===n&&(r.class="active"),r.style=f,a(r,s({
href:"#"+e.id,ariaControls:"home",role:"tab",dataToggle:"tab"},e.label))}))),o({
class:"tab-content"},e.tabs.map((function(e,t){var n={role:"tabpanel",
class:"tab-pane",id:e.id}
;return e.name&&(n["data-name"]=e.name),0===t&&(n.class+=" active"),
o(n,e.content)})))])},safeString:function(e){var t=document.createElement("div")
;return t.innerText=e,t.textContent||t.innerText||""},
embeddableString:function(e){return e.replace(/</,"&lt;").replace(/>/,"&gt;")},
makeStyles:function(e){var t,n,a={},s=i("style"),o={};function c(e){
return o[e]||(o[e]=e+"_"+u()),o[e]}
e.classes?(t=e.classes||{},n=e.rules||{}):(t=e,
n={}),Object.keys(t).forEach((function(e){var n=e+"_"+u()
;a[e]=n,t[e].css||(t[e]={css:t[e]}),t[e].id=n}));var l=[]
;return Object.keys(t).forEach((function(e){var n=t[e]
;l.push([".",n.id," {",r(n.css),"}"].join("")),
n.pseudo&&(n.pseudoClasses=n.pseudo),
n.pseudoClasses&&Object.keys(n.pseudoClasses).forEach((function(e){
l.push([".",n.id+":"+e,"{",r(n.pseudoClasses[e]),"}"].join(""))
})),n.pseudoElements&&Object.keys(n.pseudoElements).forEach((function(e){
l.push([".",n.id+"::"+e,"{",r(n.pseudoElements[e]),"}"].join(""))
})),n.scopes&&Object.keys(n.scopes).forEach((function(e){var t=c(e)
;l.push([".",t," .",n.id,"{",r(n.scopes[e]),"}"].join(""))
})),n.modifiers&&Object.keys(n.modifiers).forEach((function(e){var t=c(e)
;l.push([".",n.id,".",t,"{",r(n.modifiers[e]),"}"].join(""))
})),n.inner&&Object.keys(n.inner).forEach((function(e){var t=n.inner[e]
;t.css||(t.css=t),
l.push([".",n.id," ",e,"{",r(t.css),"}"].join("")),t.scopes&&Object.keys(t.scopes).forEach((function(a){
var s=c(a);l.push([".",s," .",n.id," ",e,"{",r(t.scopes[a]),"}"].join(""))}))}))
})),Object.keys(n).forEach((function(e){var t=n[e]
;Object.keys(t).forEach((function(n){var a=t[n]
;l.push(["@"+e+" "+n,"{",Object.keys(a).map((function(e){
return e+" { "+r(a[e])+" } "})).join(""),"}"].join(""))}))})),{classes:a,def:e,
sheet:s({type:"text/css"},l.join("\n")),scopes:o}}})}));