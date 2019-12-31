define([],(function(){"use strict";function e(e,t,r){
if("string"==typeof t)t=t.split(".");else if(!(t instanceof Array))throw new TypeError("Invalid type for key: "+typeof t)
;for(let n=0;n<t.length;n+=1){
if(void 0===e||"object"!=typeof e||null===e)return r;e=e[t[n]]}
return void 0===e?r:e}function t(e,t){
if("string"==typeof t)t=t.split(".");else if(!(t instanceof Array))throw new TypeError("Invalid type for key: "+typeof t)
;for(let r=0;r<t.length;r+=1){
if(void 0===e||"object"!=typeof e||null===e)return!1;e=e[t[r]]}return void 0!==e
}function r(e,t,r){
if("string"==typeof t)t=t.split(".");else if(!(t instanceof Array))throw new TypeError("Invalid type for key: "+typeof t)
;if(0===t.length)return;const n=t[t.length-1];let o
;for(let i=0;i<t.length-1;i+=1)o=t[i],void 0===e[o]&&(e[o]={}),e=e[o]
;return e[n]=r,r}function n(e,t,r){
if("string"==typeof t)t=t.split(".");else if(!(t instanceof Array))throw new TypeError("Invalid type for key: "+typeof t)
;if(0===t.length)return;r=void 0===r?1:r;const n=t[t.length-1]
;for(let o=0;o<t.length-1;o+=1){const r=t[o];void 0===e[r]&&(e[r]={}),e=e[r]}
if(void 0===e[n])e[n]=r;else{
if("number"!=typeof e[n])throw new Error("Can only increment a number");e[n]+=r}
return e[n]}function o(e,t){
if("string"==typeof t)t=t.split(".");else if(!(t instanceof Array))throw new TypeError("Invalid type for key: "+typeof t)
;if(0===t.length)return!1;const r=t[t.length-1];for(let n=0;n<t.length-1;n+=1){
const r=t[n];if(void 0===e[r])return!1;e=e[r]}
return void 0!==e[r]&&(delete e[r],!0)}return Object.freeze({Props:class{
constructor(e={}){this.obj=e.data||{}}getItem(t,r){return e(this.obj,t,r)}
hasItem(e){return t(this.obj,e)}setItem(e,t){return r(this.obj,e,t)}
incrItem(e,t){return n(this.obj,e,t)}deleteItem(e){return o(this.obj,e)}
getRaw(){return this.obj}},getProp:e,hasProp:t,setProp:r,incrProp:n,deleteProp:o
})}));