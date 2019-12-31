define(["underscore"],(function(t){"use strict";function e(e){
var r=e&&e.data||{};return{setItem:function(t,e){
if("string"==typeof t&&(t=t.split(".")),0!==t.length){
for(var n,i=t.pop(),o=r;t.length>0;)void 0===o[n=t.shift()]&&(o[n]={}),o=o[n]
;return o[i]=e,e}},hasItem:function(t){"string"==typeof t&&(t=t.split("."))
;var e,n=r;for(e=0;e<t.length;e+=1){
if(void 0===n||"object"!=typeof n||null===n)return!1;n=n[t[e]]}return void 0!==n
},getItem:function(e,n){
if("string"==typeof e)e=e.split(".");else if(!t.isArray(e))throw new TypeError("Invalid type for key: "+typeof e)
;var i,o=r;for(i=0;i<e.length;i+=1){
if(void 0===o||"object"!=typeof o||null===o)return n;o=o[e[i]]}
return void 0===o?n:o},incrItem:function(e,n){
if("string"==typeof e&&(e=e.split(".")),0!==e.length){n=void 0===n?1:n
;for(var i,o=e.pop(),f=r;e.length>0;)void 0===f[i=e.shift()]&&(f[i]={}),f=f[i]
;if(void 0===f[o])f[o]=n;else{
if(!t.isNumber(f[o]))throw new Error("Can only increment a number");f[o]+=n}
return f[o]}},deleteItem:function(t){
if("string"==typeof t&&(t=t.split(".")),0!==t.length){
for(var e,n=t.pop(),i=r;t.length>0;){if(void 0===i[e=t.shift()])return!1;i=i[e]}
return delete i[n],!0}},debug:function(){return r}}}return{create:function(){
return e()},make:function(t){return e(t)}}}));