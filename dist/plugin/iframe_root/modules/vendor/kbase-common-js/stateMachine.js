define(["./utils","./asyncQueue","bluebird"],(function(t,e,s){"use strict"
;return Object.create({},{version:{value:"0.0.2",writable:!1},init:{
value:function(t){
return this.state={},this.listeners={},this.queue=Object.create(e).init(),this}
},setItem:{value:function(e,s){var r=t.getProp(this.state,e)
;if(this.listeners[e]){var i=[];this.listeners[e].forEach(function(t){
this.queue.addItem({onRun:function(t,e,s,r){return function(){try{t(e,s,r)
}catch(i){}}}(t.onSet,s,r&&r.value,this)}),t.oneTime||i.push(t)
}.bind(this)),this.listeners[e]=i}return t.setProp(this.state,e,{status:"set",
value:s,time:new Date}),this}},getItem:{value:function(e,s){
var r=t.getProp(this.state,e);return void 0!==r&&"set"===r.status?r.value:s}},
hasItem:{value:function(e){return t.hasProp(this.state,e)}},setError:{
value:function(e,s){if(this.listeners[e]){var r=[]
;this.listeners[e].forEach(function(t){this.queue.addItem({onRun:function(t,e){
return function(){try{t(e)}catch(s){}}}(t.onError,s)}),t.oneTime||r.push(t)
}.bind(this)),this.listeners[e]=r}t.setProp(this.state,e,{status:"error",
error:s,time:new Date})}},hasError:{value:function(e){
var s=t.getProp(this.state,e);return!(!s||"error"!==s.status)}},delItem:{
value:function(e){t.hasProp(this.state,e)&&t.deleteProp(this.state,e)}},listen:{
value:function(t,e){return this.listenForItem(t,e)}},listenForItem:{
value:function(e,s){"function"==typeof s&&(s={onSet:s})
;var r=t.getProp(this.state,e);if(r)if(s.hear){
if(s.hear(r.value),s.oneTime)return}else switch(r.status){case"set":
s.onSet(r.value);break;case"error":s.onError(r.error);break;default:
throw"Invalid status: "+r.status}
return void 0===this.listeners[e]&&(this.listeners[e]=[]),
this.listeners[e].push(s),this}},whenItem:{value:function(e,r){
var i=new s(function(s,r){if(t.hasProp(this.state,e)){
var i=t.getProp(this.state,e);"error"===i.status?r(i.error):s(i.value)
}else this.listenForItem(e,{oneTime:!0,addedAt:(new Date).getTime(),
onSet:function(t){s(t)},onError:function(t){r(t)}})}.bind(this))
;return r?i.timeout(r):i}}})}));