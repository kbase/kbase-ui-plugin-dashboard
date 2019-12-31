define([],(function(){"use strict";function e(e){
return document.getElementById(e)}function n(e,n){
return void 0===n&&(n=e,e=document),e.querySelector(n)}function t(e,t){var r
;if("string"==typeof e){
if(null===(r=n(e)))throw new Error('No node found for selector "'+e+'"')
}else r=e;return r.innerHTML=t,r}return{createElement:function(e){
return document.createElement(e)},appendRoot:function(e){document.appendChild(e)
},append:function(e,n){return e.appendChild(n)},remove:function(e,n){
return e.removeChild(n)},setHTML:t,setHtml:t,findById:e,nodeForId:function(e){
return document.getElementById(e)},getById:e,qs:n,qsa:function(e,n){
void 0===n&&(n=e,e=document);var t=e.querySelectorAll(n)
;return null===t?[]:Array.prototype.slice.call(t)}}}));