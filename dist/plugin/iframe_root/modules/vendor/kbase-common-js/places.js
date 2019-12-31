define(["./html"],(function(n){"use strict";return{make:function(e){
return function(e){e.root;var r={};function t(n){var e=r[n]
;if(void 0===e)throw new Error("Place not defined: "+n);return e}function o(n){
var e=t(n)
;if(e.node||(e.node=document.getElementById(e.id)),!e.node)throw new Error("Place does not exist in the DOM: "+e+" : "+e.id)
;return e.node}return{add:function(e){
if(r[e])throw new Error("Place already defined: "+e);var t=n.genId()
;return r[e]={id:t},t},get:t,getNode:o,setContent:function(n,e){o(n).innerHTML=e
}}}(e)}}}));