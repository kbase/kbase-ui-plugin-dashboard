define(["uuid"],(function(e){"use strict";function t(){
return"id_"+new e(4).format()}return{DOMEvents:class{constructor({node:e}){
this.root=e,this.events=[]}addEvent(e){let r,n
;return e.id?(n=e.id,r="#"+e.id):e.selector?(n=t(),
r=e.selector):(n=t(),r="#"+n),this.events.push({type:e.type,selector:r,
handler:t=>{e.handler(t)}}),n}addEvents(e){let r,n
;return e.id?(n=e.id,r="#"+e.id):e.selector?(n=t(),
r=e.selector):(n=t(),r="#"+n),e.events.forEach(e=>{this.events.push({
type:e.type,selector:r,handler:t=>{e.handler(t)}})}),n}attachEvents(){
this.events.forEach(e=>{var t=this.root.querySelector(e.selector)
;if(e.node=t,!t)throw new Error("could not find node for "+e.selector)
;t.addEventListener(e.type,e.handler)}),this.events=[]}detachEvents(){
this.events.forEach(e=>{e.node.removeEventListener(e.type,e.handler)})}},
DOMEvent:class{constructor({type:e,handler:t}){this.type=e,this.handler=t}}}}));