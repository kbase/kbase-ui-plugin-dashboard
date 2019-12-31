define(["bluebird","./adapters/objectWidget","kb_lib/merge"],(function(e,t,r){
"use strict";return{WidgetManager:class{constructor(e){
if(!runtime)throw new Error('WidgetManager requires a runtime argument; pass as "runtime"')
;this.runtime=runtime,this.widgets={}}addWidget(e){
if(e.id&&(e.name=e.id),this.widgets[e.name])throw new Error("Widget "+e.name+" is already registered")
;this.widgets[e.name]=e}getWidget(e){return this.widgets[e]}
makeFactoryWidget(t,r){return new e((e,i)=>{var a=[t.module]
;t.css&&a.push("css!"+t.module+".css"),require(a,a=>{
if(void 0!==a)if(void 0!==a.make)try{e(a.make(r))}catch(d){i(d)
}else i('Factory widget does not have a "make" method: '+t.name+", "+t.module);else i({
message:"Factory widget maker is undefined for "+t.module,data:{widget:t}})
},e=>{i(e)})})}makeES6Widget(t,r){return new e((e,i)=>{var a=[t.module]
;t.css&&a.push("css!"+t.module+".css"),require(a,a=>{let d
;if(d=a.Widget?a.Widget:a,void 0!==d)try{e(new d(r))}catch(s){i(s)}else i({
message:"Widget class is undefined for "+t.module,data:{widget:t}})},e=>{i(e)})
})}makeObjectWidget(i,a){return e.try(()=>{
const e=new r.ShallowMerger({}).mergeIn(a).value()
;return e.widgetDef=i,e.initConfig=a,new t.ObjectWidgetAdapter(e)})}
validateWidget(e,t){var r
;if("object"!=typeof e&&(r="Invalid widget after making: "+t),
r)throw console.error(r),console.error(e),new Error(r)}makeWidget(e,t){
const i=this.widgets[e];if(!i)throw new Error("Widget "+e+" not found");let a
;const d=new r.DeepMerger({}).mergeIn(t).value()
;switch(d.runtime=this.runtime,t=t||{},i.type){case"factory":
a=this.makeFactoryWidget(i,d);break;case"es6":a=this.makeES6Widget(i,d);break
;case"object":a=this.makeObjectWidget(i,d);break;default:
throw new Error("Unsupported widget type "+i.type)}
return a.then(t=>(this.validateWidget(t,e),t))}}}}));