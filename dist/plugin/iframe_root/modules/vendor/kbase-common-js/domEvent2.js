define(["jquery","kb_common/html"],(function(e,n){"use strict";return{
make:function(r){return function(r){var t=[],o=(r=r||{}).node;return{
addEvent:function(e){var r,o
;return e.id?(o=e.id,r="#"+e.id):e.selector?(o=n.genId(),
r=e.selector):r="#"+(o=n.genId()),t.push({type:e.type,selector:r,
jquery:e.jquery,handler:function(n){e.handler(n)}}),o},addEvents:function(e){
var r,o
;return e.id?(o=e.id,r="#"+e.id):e.selector?(o=n.genId(),r=e.selector):(o=n.genId(),
r="#"+o),e.events.forEach((function(e){t.push({type:e.type,selector:r,
handler:function(n){e.handler(n)}})})),o},attachEvents:function(n){var r=o||n
;t.forEach((function(n){var t=r.querySelector(n.selector)
;if(!t)throw new Error("could not find node for "+n.selector)
;n.jquery?e(t).on(n.type,n.handler):t.addEventListener(n.type,n.handler)})),t=[]
}}}(r)}}}));