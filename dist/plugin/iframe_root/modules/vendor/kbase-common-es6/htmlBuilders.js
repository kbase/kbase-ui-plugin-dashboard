define(["./html"],(function(e){"use strict"
;const t=e.tag,a=t("div"),n=t("span"),r=t("table"),s=t("thead"),l=t("tbody"),c=t("tr"),o=t("th"),i=t("td"),u=t("ul"),f=t("li"),p=t("a")
;function m(e,t){return a({class:"panel panel-default"},[a({
class:"panel-heading"},[n({class:"panel-title"},e)]),a({class:"panel-body"
},[t])])}function b(e){return e.charAt(0).toUpperCase()+e.slice(1)}
return Object.freeze({makeTable:function(t){let a
;(t=t||{}).id?a=t.id:(a=e.genId(),t.generated={id:a});const n={id:a}
;return t.class?n.class=t.class:t.classes&&(n.class=t.classes.join(" ")),
r(n,[s(c(t.columns.map(e=>o(e)))),l(t.rows.map((function(e){
return c(e.map((function(e){return i(e)})))})))])},makeTableRotated:function(t){
function a(e){let t;if("string"==typeof e)t=e;else{if(e.label)return e.label
;t=e.key}
return t.replace(/(id|Id)/g,"ID").split(/_/g).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")
}const n={id:e.genId()}
;return t.class?n.class=t.class:t.classes&&(n.class=t.classes.join(" ")),
r(n,t.columns.map((e,n)=>c([o(a(e)),t.rows.map((function(t){
return i(function(e,t){if("string"==typeof t)return e
;if(t.format)return t.format(e);if(t.type)switch(t.type){case"bool":
return e?"True":"False";default:return e}return e}(t[n],e))}))])))},
makeRotatedTable:function(e,t){function a(e){let t
;return e.label?e.label:(t="string"==typeof e?e:e.key,
t.replace(/(id|Id)/g,"ID").split(/_/g).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "))
}return r({class:"table table-stiped table-bordered"
},t.map(t=>c([o(a(t)),e.map(e=>i(function(e,t){const a=e[t.key]
;if(t.format)return t.format(a);if(t.type)switch(t.type){case"bool":
return a?"True":"False";default:return a}return a}(e,t)))])))},
makeObjectTable:function(e,t){function a(e){let t
;return e.label?e.label:(t="string"==typeof e?e:e.key,
t.replace(/(id|Id)/g,"ID").split(/_/g).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "))
}function n(e,t){const a=e[t.key];if(t.format)return t.format(a)
;if(t.type)switch(t.type){case"bool":return a?"True":"False";default:return a}
return a}var s,l
;return t?t.columns?s=t.columns:(s=t,t={}):t={},s=s?s.map(e=>"string"==typeof e?{
key:e}:e):Object.keys(e).map(e=>({key:e
})),l=t.classes?t.classes:["table-striped","table-bordered"],r({
class:"table "+l.join(" ")},s.map(t=>c([o(a(t)),i(n(e,t))])))},
makeObjTable:function(e,t){
const a=e instanceof Array&&e||[e],n=t&&t.columns||Object.keys(a[0]).map((function(e){
return{key:e,label:b(e)}})),s=t&&t.classes||["table-striped","table-bordered"]
;function l(e,t){const a=e[t.key];if(t.format)return t.format(a)
;if(t.type)switch(t.type){case"bool":return a?"True":"False";default:return a}
return a}return t&&t.rotated?r({class:"table "+s.join(" ")},n.map((function(e){
return c([o(e.label),a.map(t=>i({dataElement:e.key},l(t,e)))])}))):r({
class:"table "+s.join(" ")
},[c(n.map(e=>o(e.label)))].concat(a.map(e=>c(n.map(t=>i({dataElement:t.key
},l(e,t)))))))},bsPanel:m,panel:m,makePanel:function(e){
const t=e.class||"default";return a({class:"panel panel-"+t},[a({
class:"panel-heading"},[n({class:"panel-title"},e.title)]),a({class:"panel-body"
},[e.content])])},loading:function(e,t){let a;e&&(a=e+"... &nbsp &nbsp")
;var r="fa-2x";if(t)switch(t){case"normal":r=null;break;case"large":r="fa-2x"
;break;case"extra-large":r="fa-3x"}return n([a,n({
class:"fa fa-spinner fa-pulse fa-fw margin-bottom"+(r?" "+r:"")})])},
makeList:function(e){return e.items instanceof Array?u(e.items.map((function(e){
return f(e)}))):"Sorry, cannot make a list from that"},makeTabs:function(t){
const n=t.id,r={},s={};let l,c;return n&&(r.id=n),t.tabs.forEach((function(t){
t.id=e.genId()
})),t.alignRight?(l=t.tags.reverse(),s.float="right",c=l.length-1):(l=t.tabs,
c=0),a(r,[u({class:["nav","nav-tabs"].join(" "),role:"tablist"},l.map((e,t)=>{
var a={role:"presentation"};return t===c&&(a.class="active"),a.style=s,f(a,p({
href:"#"+e.id,ariaControls:"home",role:"tab",dataToggle:"tab"},e.label))})),a({
class:"tab-content"},t.tabs.map((e,t)=>{var n={role:"tabpanel",class:"tab-pane",
id:e.id}
;return e.name&&(n["data-name"]=e.name),0===t&&(n.class+=" active"),a(n,e.content)
}))])},safeText:function(e){const t=document.createElement("div")
;return t.textContent=e,t.innerHTML}})}));