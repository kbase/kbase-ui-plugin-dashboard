define(["jquery","bluebird","./html","bootstrap"],(function(e,t,a){"use strict"
;var n=a.tag,l=n("div"),o=n("p"),s=n("span"),i=n("ol"),r=n("ul"),c=n("li"),d=n("a"),u=n("button"),m=n("table"),p=n("tr"),b=n("th"),f=n("td"),y=n("i")
;function h(){return s({style:{fontStyle:"italic",color:"orange"}},"NA")}
function v(n){var o,i,r,c=function(e,t,a){return l({class:"modal fade",
tabindex:"-1",role:"dialog"},[l({class:"modal-dialog"},[l({class:"modal-content"
},[l({class:"modal-header"},[u({type:"button",class:"close",dataDismiss:"modal",
ariaLabel:a},[s({ariaHidden:"true"},"&times;")]),s({class:"modal-title"
},e)]),l({class:"modal-body"},[t]),l({class:"modal-footer"},[u({type:"button",
class:"btn btn-default",dataDismiss:"modal",dataElement:"ok"},a)])])])])
}(n.title,n.body,n.okLabel||"OK"),d=a.genId(),m=document.createElement("div")
;return m.id=d,
m.innerHTML=c,(o=document.querySelector('[data-element="kbase"]'))||((o=document.createElement("div")).setAttribute("data-element","kbase"),
document.body.appendChild(o)),
(i=o.querySelector('[data-element="modal"]'))||((i=document.createElement("div")).setAttribute("data-element","modal"),
o.appendChild(i)),
i.appendChild(m),r=i.querySelector(".modal"),e(r).modal("show"),
new t((function(e){
r.querySelector('[data-element="ok"]').addEventListener("click",(function(){
m.parentElement.removeChild(m),e(!1)
})),r.addEventListener("hide.bs.modal",(function(){e(!1)}))}))}function g(n){
n.buttons=n.buttons||[];var o,i,r,c=function(e,t,a,n,o){var i={}
;return o&&o.width&&(i.width=o.width),l({class:"modal fade",tabindex:"-1",
role:"dialog"},[l({class:"modal-dialog",style:i},[l({class:"modal-content"},[l({
class:"modal-header"},[u({type:"button",class:"close",dataDismiss:"modal",
ariaLabel:a},[s({ariaHidden:"true"},"&times;")]),s({class:"modal-title kb-title"
},e)]),l({class:"modal-body"},[t]),l({class:"modal-footer"},n.map((function(e){
return u({type:"button",class:"btn btn-"+(e.type||"default"),
dataElement:e.action},e.label)})).concat([u({type:"button",
class:"btn btn-default",dataDismiss:"modal",dataElement:"cancel"},a)]))])])])
}(n.title,n.body,n.cancelLabel||"Cancel",n.buttons,n.options),d=a.genId(),m=document.createElement("div")
;return m.id=d,
m.innerHTML=c,(o=document.querySelector('[data-element="kbase"]'))||((o=document.createElement("div")).setAttribute("data-element","kbase"),
document.body.appendChild(o)),
(i=o.querySelector('[data-element="modal"]'))||((i=document.createElement("div")).setAttribute("data-element","modal"),
o.appendChild(i)),
i.appendChild(m),r=i.querySelector(".modal"),e(r).modal("show"),
new t((function(t,a){
r.querySelector('[data-element="cancel"]').addEventListener("click",(function(e){
m.parentElement.removeChild(m),t({action:"cancel"})
})),n.buttons.forEach((function(n){
r.querySelector('[data-element="'+n.action+'"]').addEventListener("click",(function(l){
try{var o=n.handler(l);o&&(e(r).modal("hide"),m.parentElement.removeChild(m),t({
action:n.action,result:o}))}catch(s){a(s)}}))
})),r.addEventListener("hide.bs.modal",(function(e){t({action:"cancel"})}))}))}
function E(E){var L=E.node,k=E.bus;function S(e){
if("string"==typeof e&&(e=e.split(".")),0===e.length)return L
;var t=e.map((function(e){return'[data-element="'+e+'"]'})).join(" ")
;return L.querySelector(t)}function w(e,t){
return Array.prototype.slice.call(e.querySelectorAll(t,0))}function j(e){
"string"==typeof e&&(e=e.split("."));var t=e.map((function(e){
return'[data-element="'+e+'"]'})).join(" ");return w(L,t)}function C(e){
if("string"!=typeof e)throw new Error("Currently only a single string supported to get a button")
;var t='[data-button="'+e+'"]',a=L.querySelector(t)
;if(!a)throw new Error("Button "+e+" not found");return a}function q(e,t,a){
return e.addEvent({type:"click",handler:function(e){k.send({event:e,
button:e.target,data:a},{key:{type:t}})}})}function T(e){
var t,a=["panel","panel-"+(e.type||"primary")]
;return e.hidden&&a.push("hidden"),
e.classes&&(a=a.concat(e.classes)),e.icon&&(t=[" ",I(e.icon)]),l({
class:a.join(" "),dataElement:e.name},[function(){if(e.title)return l({
class:"panel-heading"},[l({class:"panel-title",dataElement:"title"
},[e.title,t])])}(),l({class:"panel-body",dataElement:"body"},[e.body])])}
function A(e,t){j(e).forEach((function(e){e.innerHTML=t}))}function I(e){
var t=["fa"],a={verticalAlign:"middle"}
;return t.push("fa-"+e.name),e.rotate&&t.push("fa-rotate-"+String(e.rotate)),
e.flip&&t.push("fa-flip-"+e.flip),
e.size&&("number"==typeof e.size?t.push("fa-"+String(e.size)+"x"):t.push("fa-"+e.size)),
e.classes&&e.classes.forEach((function(e){t.push(e)
})),e.style&&Object.keys(e.style).forEach((function(t){a[t]=e.style[t]
})),e.color&&(a.color=e.color),s({dataElement:"icon",style:a,class:t.join(" ")})
}function B(e){return l({},[T({title:"Message",body:e.message,
classes:["kb-panel-light"]}),e.fileName?T({title:"File",body:e.fileName,
classes:["kb-panel-light"]}):"",e.lineNumber?T({title:"Line number",
body:e.lineNumber,classes:["kb-panel-light"]}):"",e.columnNumber?T({
title:"Column number",body:e.columnNumber,classes:["kb-panel-light"]}):""])}
function x(e){
return e.replace(/&/,"&amp;").replace(/'/,"&#039;").replace(/"/,"&quot;").replace(/</,"&lt;").replace(/>/,"&gt;")
}function D(e){return l([i({},e.stack.split(/\n/).map((function(e){return c({
style:{marginTop:"6px"}},[x(e)])})))])}return Object.freeze({getElement:S,
getElements:j,getButton:C,getNode:function(e){"string"==typeof e&&(e=[e])
;var t=e.map((function(e){return"[data-"+e.type+'="'+e.name+'"]'})).join(" ")
;return L.querySelector(t)},makeButton:function(e,t,a){
var n=a.type||"default",l=a.events;return u({type:"button",
class:["btn","btn-"+n].join(" "),dataButton:t,id:q(l,t)},e)},
buildButton:function(e){
var t,a,n=["btn","btn-"+(e.type||"default")],l=e.events,o=e.title||e.tip||e.label
;return e.icon&&(e.icon.classes||(e.icon.classes=[]),
t=I(e.icon)),e.hidden&&n.push("hidden"),
e.classes&&(n=n.concat(e.classes)),e.event||(e.event={}),a={type:"button",
class:n.join(" "),title:o,dataButton:e.name,
id:q(l,e.event.type||e.name,e.event.data),style:e.style
},e.features&&e.features.forEach((function(e){a["data-feature-"+e]=!0
})),u(a,[t,s({style:{verticalAlign:"middle"}},e.label)].join("&nbsp;"))},
enableButton:function(e){var t=C(e)
;t.classList.remove("hidden"),t.classList.remove("disabled"),
t.removeAttribute("disabled")},disableButton:function(e){var t=C(e)
;t.classList.remove("hidden"),
t.classList.add("disabled"),t.setAttribute("disabled",!0)},
activateButton:function(e){C(e).classList.add("active")},
deactivateButton:function(e){C(e).classList.remove("active")},
hideButton:function(e){C(e).classList.add("hidden")},showButton:function(e){
C(e).classList.remove("hidden")},setButtonLabel:function(e,t){C(e).innerHTML=t},
confirmDialog:function(e,t,a){return window.confirm(e)},hideElement:function(e){
var t=S(e);t&&t.classList.add("hidden")},showElement:function(e){var t=S(e)
;t&&t.classList.remove("hidden")},makePanel:function(e,t){return l({
class:"panel panel-primary"},[l({class:"panel-heading"},[l({class:"panel-title"
},e)]),l({class:"panel-body"},[l({dataElement:t,class:"container-fluid"})])])},
buildPanel:T,makeCollapsiblePanel:function(e,t){var n=a.genId();return l({
class:"panel panel-default"},[l({class:"panel-heading"},[l({class:"panel-title"
},s({class:"collapsed",dataToggle:"collapse",dataTarget:"#"+n,style:{
cursor:"pointer"}},e))]),l({id:n,class:"panel-collapse collapse"},l({
class:"panel-body"},[l({dataElement:t,class:"container-fluid"})]))])},
buildCollapsiblePanel:function(e){
var t,n=a.genId(),o=["panel","panel-"+(e.type||"primary")],i=["panel-collapse collapse"],r=[]
;return e.hidden&&o.push("hidden"),e.collapsed?r.push("collapsed"):i.push("in"),
e.classes&&(o=o.concat(e.classes)),e.icon&&(t=[" ",I(e.icon)]),l({
class:o.join(" "),dataElement:e.name},[l({class:"panel-heading"},[l({
class:"panel-title"},s({dataElement:"title",class:r.join(" "),
dataToggle:"collapse",dataTarget:"#"+n,style:{cursor:"pointer"}
},[e.title,t]))]),l({id:n,class:i.join(" ")},l({class:"panel-body",
dataElement:"body"},[e.body]))])},collapsePanel:function(e){var t=S(e);if(t){
var a=t.querySelector('[data-toggle="collapse"]'),n=a.getAttribute("data-target"),l=t.querySelector(n)
;a.classList.add("collapsed"),
a.setAttribute("aria-expanded","false"),l.classList.remove("in"),
l.setAttribute("aria-expanded","false")}},expandPanel:function(e){var t=S(e)
;if(t){
var a=t.querySelector('[data-toggle="collapse"]'),n=a.getAttribute("data-target"),l=t.querySelector(n)
;a.classList.remove("collapsed"),
a.setAttribute("aria-expanded","true"),l.classList.add("in"),
l.setAttribute("aria-expanded","true")}},createNode:function(e){
var t=document.createElement("div");return t.innerHTML=e,t.firstChild},
setContent:A,na:h,showConfirmDialog:function(n){var o,i,r,c=function(e){
var t=e.yesLabel||"Yes",a=e.noLabel||"No";return l({class:"modal fade",
tabindex:"-1",role:"dialog"},[l({class:"modal-dialog"},[l({class:"modal-content"
},[l({class:"modal-header"},[u({type:"button",class:"close",dataDismiss:"modal",
ariaLabel:a},[s({ariaHidden:"true"},"&times;")]),s({class:"modal-title"
},e.title)]),l({class:"modal-body"},[e.body]),l({class:"modal-footer"},[u({
type:"button",class:"btn btn-default",dataDismiss:"modal",dataElement:"no"
},a),u({type:"button",class:"btn btn-primary",dataElement:"yes"},t)])])])])
}(n),d=a.genId(),m=document.createElement("div")
;return m.id=d,m.innerHTML=c,(o=document.querySelector('[data-element="kbase"]'))||((o=document.createElement("div")).setAttribute("data-element","kbase"),
document.body.appendChild(o)),
(i=o.querySelector('[data-element="modal"]'))||((i=document.createElement("div")).setAttribute("data-element","modal"),
o.appendChild(i)),
i.appendChild(m),r=i.querySelector(".modal"),e(r).modal("show"),
new t((function(t){
r.querySelector('[data-element="yes"]').addEventListener("click",(function(){
e(r).modal("hide"),m.parentElement.removeChild(m),t(!0)
})),r.addEventListener("keyup",(function(a){13===a.keyCode&&(e(r).modal("hide"),
m.parentElement.removeChild(m),t(!0))
})),r.querySelector('[data-element="no"]').addEventListener("click",(function(){
m.parentElement.removeChild(m),t(!1)
})),r.addEventListener("hide.bs.modal",(function(){t(!1)}))}))},
showInfoDialog:v,showDialog:g,buildButtonToolbar:function(e){return l({
class:["btn-toolbar"].concat(e.classes||[])},[l({class:"btn-group"},e.buttons)])
},buildIcon:I,addClass:function(e,t){var a=S(e)
;a&&(a.classList.contains(t)||a.classList.add(t))},removeClass:function(e,t){
var a=S(e);a&&a.classList.remove(t)},buildTabs:function(e){
var t,n,o=e.id,i={},u={},m=e.tabs.filter((function(e){return!!e
})),p=[],b=!1,f={},y=["tab-pane"]
;return e.fade&&y.push("fade"),"number"==typeof e.initialTab&&(b=!0),
o&&(i.id=o),m.forEach((function(e){
e.panelId=a.genId(),e.tabId=a.genId(),e.name&&(f[e.name]=e.tabId),
e.events&&e.events.forEach((function(t){p.push({id:e.tabId,jquery:!0,
type:t.type+".bs.tab",handler:t.handler})}))})),e.alignRight?(n=function(e){
var t,a=[];for(t=e.length-1;t>=0;t-=1)a.push(e[t]);return a}(m),u.float="right",
b&&(t=m.length-1-e.initialTab)):(n=m,b&&(t=e.initialTab)),{content:l(i,[r({
class:["nav","nav-tabs"].join(" "),role:"tablist"},n.map((function(e,a){
var n,l={role:"presentation"},o={href:"#"+e.panelId,dataElement:"tab",
ariaControls:e.panelId,role:"tab",id:e.tabId,dataPanelId:e.panelId,
dataToggle:"tab"},i=s({dataElement:"label"},e.label);return n=e.icon?I({
name:e.icon
}):"",e.name&&(o.dataName=e.name),b&&a===t&&(l.class="active"),l.style=u,
c(l,d(o,[n,i].join(" ")))}))),l({class:"tab-content"},m.map((function(t,a){
var n={role:"tabpanel",class:y.join(" "),id:t.panelId,style:e.style||{}}
;return t.name&&(n.dataName=t.name),0===a&&(n.class+=" active"),l(n,t.content)
})))]),events:p,map:f}},enableTooltips:function(t){var a=S(t)
;a&&w(a,'[data-toggle="tooltip"]').forEach((function(t){e(t).tooltip()}))},
updateTab:function(e,t,a){if(document.getElementById(e)){var n=function(e){
var t=e.map((function(e){return Object.keys(e).map((function(t){
return"[data-"+t+'="'+e[t]+'"]'})).join("")})).join(" ")
;return L.querySelector(t)}([{element:"tab",name:t}]);if(a.label){
var l=n.querySelector('[data-element="label"]');l&&(l.innerHTML=a.label)}
if(a.icon){var o=n.querySelector('[data-element="icon"]');if(o){
for(var s=o.classList,i=s.length;s>0;s-=1)"fa-"===s.item[i].substring(0,3)&&s.remove(s.item[i])
;o.classList.add("fa-"+a.icon)}}a.color&&(n.style.color=a.color),a.select}},
buildGridTable:function(e){return e.table.map((function(t){return l({
class:"row",style:e.row.style},e.cols.map((function(e,a){return l({
class:"col-md-"+String(e.width),style:e.style},t[a])})))}))},
updateFromViewModel:function e(t,a){a||(a=[]);var n=S(a)
;n&&("string"==typeof t?A(a,t):"number"==typeof t?A(a,String(t)):null===t?A(a,""):Object.keys(t).forEach((function(l){
var o=t[l];"_attrib"===l?Object.keys(o).forEach((function(e){var t=o[e]
;switch(e){case"hidden":t?n.classList.add("hidden"):n.classList.remove("hidden")
;break;case"style":Object.keys(t).forEach((function(e){n.style[function(e){
return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()}))}(e)]=t[e]}))
}})):e(o,a.concat(l))})))},buildPresentableJson:function e(t){switch(typeof t){
case"string":return t;case"number":case"boolean":return String(t);case"object":
return null===t?"NULL":m({class:"table table-striped"
},t instanceof Array?t.map((function(t,a){return p([b(String(a)),f(e(t))])
})).join("\n"):Object.keys(t).map((function(a){return p([b(a),f(e(t[a]))])
})).join("\n"));default:return"Not representable: "+typeof t}},
buildErrorTabs:function(e){return a.makeTabs({tabs:[{label:"Summary",
name:"summary",content:l({style:{marginTop:"10px"}
},[e.preamble,o(e.error.message)])},{label:"Details",name:"details",content:l({
style:{marginTop:"10px"}},[B(e.error)])},{label:"Stack Trace",name:"stacktrace",
content:l({style:{marginTop:"10px"}},[T({title:"Javascript Stack Trace",
body:D(e.error),classes:["kb-panel-light"]})])}]})},htmlEncode:x,
loading:function(e){var t,a
;e.message&&(t=e.message+"... &nbsp &nbsp"),e.size&&(a="fa-"+e.size);var n={}
;return e.color&&(n.color=e.color),s([t,y({
class:["fa","fa-spinner","fa-pulse",a,"fa-fw","margin-bottom"].join(" "),style:n
})])},buildAlert:function(e){
var t,a=n("div"),l=n("button"),o=n("span"),s=["alert"]
;return e.type?s.push("alert-"+e.type):s.push("alert-info"),
e.dismissable&&(s.push("alert-dismissable"),t=l({type:"button",class:"close",
dataDismissx:"alert",ariaLabel:"Close",id:e.events.addEvent({type:"click",
handler:e.on.close})},[o({ariaHidden:"true"},"&times;")])),a({class:s
},[t,e.content])}})}return{make:function(e){return E(e)},na:h,showInfoDialog:v,
showDialog:g}}));