define(["./dom","./html"],(function(e,t){"use strict";return{make:function(n){
return function(n){var r=[],c=[];return Object.freeze({
addEvent:function(e,n,c,a){c||(c=t.genId());var o={type:e,selector:"#"+c,
handler:n};return r.push(o),c},addEvents:function(e){var n=t.genId()
;return e.forEach((function(e){r.push({type:e.type,selector:"#"+n,
handler:e.handler})})),n},attachEvent:function(e,t,n){var c
;c="string"==typeof e?{type:e,selector:n,handler:t}:e,r.push(c)},
attachEvents:function(){r.forEach((function(t){
e.qsa(t.selector).forEach((function(e){c.push({type:t.type,selector:t.selector,
node:e,handler:t.handler,
listener:e.addEventListener(t.type,t.handler,t.capture||!1)})}))})),r=[]},
detachEvents:function(){c.forEach((function(e){
e.listener&&(e.node.removeEventListener(e.type,e.handler),delete e.listener)})),
c=[]}})}()}}}));