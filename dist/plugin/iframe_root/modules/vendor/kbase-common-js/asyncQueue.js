define(["promise"],(function(r){"use strict";function n(r){
var n=[],o=r&&r.queuePauseItme||0,e=0;function t(){
window.setTimeout((function(){!function(){var r=n.shift();if(r)try{r.onRun()
}catch(o){if(r.onError)try{r.onError(o)}catch(e){
console.error("ERROR running onerror"),console.error(o)
}else console.error("Error processing queue item"),console.error(o)}finally{t()}
}()}),o)}return{addItem:function(r){e+=1,r.id=e,n.push(r),t()}}}return{
make:function(r){return n(r)}}}));