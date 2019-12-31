define([],(function(){"use strict";return{Database:class{constructor(){
this.collections={}}addCollection(t,e){
if(t in this.collections)throw new Error("Collection already exists: "+t)
;this.collections[t]=e}removeCollection(t){const e=this.collections[t]
;delete this.collections[t],e.stop()}},Collection:class{constructor(t){
this.name=t,this.objectIndex={},this.objects=[]}start(){}stop(){}add(t){
const e=this.createKey(t)
;if(e in this.objectIndex)throw new Error("Object already exists in this collection: "+e)
;this.objectIndex[e]=t,this.objects.push(t)}get(t,e){const s=this.createKey(t)
;return s in this.objectIndex?this.objectIndex[s]:e}}}}));