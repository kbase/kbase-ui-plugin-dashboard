define([],()=>{"use strict";return class{constructor(e){
this.queue=[],this.queuePauseTime=e&&e.queuePauseTime||0,
this.itemId=0,this.timer=null}processQueue(){const e=this.queue.shift()
;if(e)try{e.onRun()}catch(t){if(e.onError)try{e.onError(t)}catch(r){
console.error("ERROR running onerror"),console.error(t)
}else console.error("Error processing queue item"),console.error(t)}finally{
this.start()}}start(){this.timer=window.setTimeout(()=>{this.processQueue()
},this.queuePauseTime)}stop(){window.clearTimeout(this.timer),this.timer=null}
addItem(e){this.itemId+=1,e.id=this.itemId,this.queue.push(e),this.start()}}});