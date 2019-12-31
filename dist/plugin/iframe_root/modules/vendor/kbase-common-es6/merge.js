define([],(function(){"use strict";function e(e){var t=typeof e
;return"object"===t?null===e?"null":e.pop&&e.push?"array":"object":t}class t{
constructor(e){this.dest=e}value(){return this.dest}mergeIn(t){if(!t)return this
;switch(e(t)){case"string":case"integer":case"boolean":case"null":
throw new TypeError("Can't merge a '"+typeof t+"'");case"object":
this.mergeObject(t);break;case"array":this.mergeArray(t);break;default:
throw new TypeError("Can't merge a '"+typeof t+"'")}return this}mergeObject(s){
for(var r=Object.keys(s),a=0;a<r.length;a++){var i=r[a],n=s[i];switch(e(n)){
case"string":case"number":case"boolean":case"null":case"function":this.dest[i]=n
;break;case"object":
this.dest[i]||(this.dest[i]={}),this.dest[i]=new t(this.dest[i]).mergeObject(s[i]).value()
;break;case"array":
this.dest[i],this.dest[i]=[],this.dest[i]=new t(this.dest[i]).mergeArray(s[i]).value()
;break;case"undefined":this.dest[i]&&delete this.dest[i]}}return this}
mergeArray(s){for(var r=0;r<s.length;r++){var a=s[r];switch(e(a)){case"string":
case"number":case"boolean":case"null":case"function":this.dest[r]=a;break
;case"object":
this.dest[r]||(this.dest[r]={}),this.dest[r]=new t(this.dest[r]).mergeObject(s[r]).value()
;break;case"array":
this.dest[r]||(this.dest[r]=[]),this.dest[r]=new t(this.dest[r]).mergeArray(s[r]).value()
;break;case"undefined":this.dest[r]&&(this.dest[r]=void 0)}}return this}}return{
DeepMerger:t,ShallowMerger:class{constructor(e){this.dest=e}value(){
return this.dest}mergeIn(e){return e?(Object.keys(e).forEach(t=>{
this.dest[t]=e[t]}),this):this}}}}));