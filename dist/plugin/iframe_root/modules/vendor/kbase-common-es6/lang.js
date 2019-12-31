define([],(function(){"use strict";class e extends Error{
constructor({type:e,reason:t,message:n,blame:r,code:s,suggestion:o}){
super(n),this.type=e,this.reason=t,this.blame=r,this.code=s,this.suggestion=o}}
return{isEqual:function(e,t){const n=[];return function e(t,r){
const s=typeof t,o=typeof r;if(s!==o)return!1;switch(s){case"string":
case"number":case"boolean":if(t!==r)return!1;break;case"undefined":
if("undefined"!==o)return!1;break;case"object":if(t instanceof Array){
if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++){
if(n.push(s),!e(t[s],r[s]))return!1;n.pop()}}else if(null===t){
if(null!==r)return!1}else{if(null===r)return!1;{
const s=Object.keys(t).sort(),o=Object.keys(r).sort()
;if(s.length!==o.length)return!1;for(let u=0;u<s.length;u++){
if(n.push(s[u]),!e(t[s[u]],r[s[u]]))return!1;n.pop()}}}}return!0}(e,t)},
objectToArray:function(e,t,n){const r=Object.keys(e),s=[];for(const o in r){
const u={};u[t]=r[o],u[n]=e[r[o]],s.push(u)}return s},UIError:e}}));