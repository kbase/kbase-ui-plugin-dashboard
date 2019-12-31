define(["./utils","./asyncQueue","bluebird"],(function(t,e,n){"use strict"
;return{make:function(r){return function(){var r={},u={},o=e.make()
;function a(e,n){"function"==typeof n&&(n={onSet:n});var o=t.getProp(r,e)
;if(o)if(n.hear){if(n.hear(o.value),n.oneTime)return}else switch(o.status){
case"set":n.onSet(o.value);break;case"error":n.onError(o.error);break;default:
throw"Invalid status: "+o.status}void 0===u[e]&&(u[e]=[]),u[e].push(n)}return{
setItem:function(e,n){var a=t.getProp(r,e),i=[]
;return u[e]&&(u[e].forEach((function(t){o.addItem({onRun:function(t,e,n){
return function(){try{t(e,n)}catch(r){}}}(t.onSet,n,a&&a.value)
}),t.oneTime||i.push(t)})),u[e]=i),t.setProp(r,e,{status:"set",value:n,
time:new Date}),this},modifyItem:function(e,n){
var a=t.getProp(r,e),i=n(a.value),s=[];return u[e]&&(u[e].forEach((function(t){
o.addItem({onRun:function(t,e,n){return function(){try{t(e,n)}catch(r){}}
}(t.onSet,i,a&&a.value)}),t.oneTime||s.push(t)})),u[e]=s),t.setProp(r,e,{
status:"set",value:i,time:new Date}),this},getItem:function(e,n){
var u=t.getProp(r,e);return void 0!==u&&"set"===u.status?u.value:n},
listen:function(t,e){return a(t,e)},listenForItem:a,whenItem:function(e,u){
var o=new n((function(n,u){if(t.hasProp(r,e)){var o=t.getProp(r,e)
;"error"===o.status?u(o.error):n(o.value)}else a(e,{oneTime:!0,
addedAt:(new Date).getTime(),onSet:function(t){n(t)},onError:function(t){u(t)}})
}));return u?o.timeout(u):o},hasItem:function(e){return t.hasProp(r,e)}}}()}}
}));