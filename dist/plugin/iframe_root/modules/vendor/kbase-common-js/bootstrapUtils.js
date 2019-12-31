define(["jquery","./html","bootstrap"],(function(e,t){"use strict"
;var a=t.tag,n=a("div"),l=a("span"),s=a("table"),i=a("tr"),r=a("td"),o=a("th"),c=a("ul"),d=a("li"),u=a("a")
;function p(e){var t=["fa"],a={verticalAlign:"middle"}
;return t.push("fa-"+e.name),
e.rotate&&t.push("fa-rotate-"+String(e.rotate)),e.flip&&t.push("fa-flip-"+e.flip),
e.size&&("number"==typeof e.size?t.push("fa-"+String(e.size)+"x"):t.push("fa-"+e.size)),
e.classes&&e.classes.forEach((function(e){t.push(e)
})),e.style&&Object.keys(e.style).forEach((function(t){a[t]=e.style[t]
})),e.color&&(a.color=e.color),l({dataElement:"icon",style:a,class:t.join(" ")})
}return Object.freeze({buildPresentableJson:function e(t){switch(typeof t){
case"string":return function(e){var t=document.createElement("div")
;return t.innerText=e,t.innerHTML}(t);case"number":case"boolean":
return String(t);case"object":return null===t?"NULL":s({
class:"table table-striped"},t instanceof Array?t.map((function(t,a){
return i([o(String(a)),r(e(t))])})).join("\n"):Object.keys(t).map((function(a){
return i([o(a),r(e(t[a]))])})).join("\n"));default:
return"Not representable: "+typeof t}},buildPanel:function(e){
var t,a=["panel","panel-"+(e.type||"primary")]
;e.hidden&&a.push("hidden"),e.classes&&(a=a.concat(e.classes)),
e.class&&a.push(e.class),e.icon&&(t=[" ",p(e.icon)]);var l={class:a.join(" "),
dataElement:e.name,id:e.id}
;return e.attributes&&Object.keys(e.attributes).forEach((function(t){
if(t in l)throw new Error("Key already defined in attributes: "+t)
;l[t]=e.attributes[t]})),n(l,[function(){if(e.title)return n({
class:"panel-heading"},[n({class:"panel-title",dataElement:"title"
},[e.title,t])])}(),n({class:"panel-body",dataElement:"body"},[e.body])])},
buildCollapsiblePanel:function(e){
var a,s=t.genId(),i=["panel","panel-"+(e.type||"primary")],r=["panel-collapse collapse"],o=[],c=e.style||{}
;return e.hidden&&i.push("hidden"),e.collapsed?o.push("collapsed"):r.push("in"),
e.classes&&(i=i.concat(e.classes)),e.icon&&(a=[" ",p(e.icon)]),n({
class:i.join(" "),dataElement:e.name,style:c},[n({class:"panel-heading"},[n({
class:"panel-title"},l({dataElement:"title",class:o.join(" "),
dataToggle:"collapse",dataTarget:"#"+s,style:{cursor:"pointer"}
},[e.title,a]))]),n({id:s,class:r.join(" ")},n({class:"panel-body",
dataElement:"body"},[e.body]))])},collapsePanel:function(e){if(e){
var t=e.querySelector('[data-toggle="collapse"]'),a=t.getAttribute("data-target"),n=e.querySelector(a)
;t.classList.add("collapsed"),
t.setAttribute("aria-expanded","false"),n.classList.remove("in"),
n.setAttribute("aria-expanded","false")}},expandPanel:function(e){if(e){
var t=e.querySelector('[data-toggle="collapse"]'),a=t.getAttribute("data-target"),n=e.querySelector(a)
;t.classList.remove("collapsed"),
t.setAttribute("aria-expanded","true"),n.classList.add("in"),
n.setAttribute("aria-expanded","true")}},buildIcon:p,buildTabs:function(e){
var a,s,i=e.id,r={},o={},f=e.tabs.filter((function(e){return!!e
})),b=e.initialTab||0,y=[],h={},m=["tab-pane"]
;return e.fade&&m.push("fade"),i&&(r.id=i),f.forEach((function(e,a){
e.panelId=t.genId(),
e.tabId=t.genId(),e.name&&(h[e.name]=e.tabId),!0===e.selected&&void 0===b&&(b=a),
e.events&&e.events.forEach((function(t){y.push({id:e.tabId,jquery:!0,
type:t.type+".bs.tab",handler:t.handler})}))})),e.alignRight?(s=function(e){
var t,a=[];for(t=e.length-1;t>=0;t-=1)a.push(e[t]);return a}(f),o.float="right",
void 0!==b&&(a=f.length-1-b)):(s=f,void 0!==b&&(a=b)),{content:n(r,[c({
class:["nav","nav-tabs"].join(" "),role:"tablist"},s.map((function(e,t){
var n,s={role:"presentation"},i={href:"#"+e.panelId,dataElement:"tab",
ariaControls:e.panelId,role:"tab",id:e.tabId,dataPanelId:e.panelId,
dataToggle:"tab"},r=l({dataElement:"label"},e.label||e.title)
;return n=e.icon?p({name:e.icon
}):"",e.name&&(i.dataName=e.name),t===a&&(s.class="active"),
s.style=o,d(s,u(i,[n,r].join(" ")))}))),n({class:"tab-content"
},f.map((function(t,a){var l={role:"tabpanel",class:m.join(" "),id:t.panelId,
style:e.style||{}}
;return t.name&&(l.dataName=t.name),0===a&&(l.class+=" active"),
n(l,t.content||t.body)})))]),events:y,map:h}},activateTooltips:function(t,a){
e(t).find('[data-toggle="tooltip"]').tooltip(a)}})}));