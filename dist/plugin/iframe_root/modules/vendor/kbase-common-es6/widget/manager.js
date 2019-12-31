define(["bluebird","./adapters/objectWidget","./adapters/kbWidget","../merge"],(function(e,t,r,i){
"use strict";return{WidgetManager:class{constructor({runtime:e}){
if(!e)throw new Error('WidgetManager requires a runtime argument; pass as "runtime"')
;this.runtime=e,this.widgets={}}addWidget(e){
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
})}makeKbWidget(t,a){return e.try(()=>{
const e=new i.ShallowMerger({}).mergeIn(a).value();return e.widget={
module:t.module,jquery_object:t.config&&t.config.jqueryName||a.jqueryName,
panel:a.panel,title:t.title},new r.KBWidgetAdapter(e)})}makeObjectWidget(r,a){
return e.try(()=>{const e=new i.ShallowMerger({}).mergeIn(a).value()
;return e.widgetDef=r,e.initConfig=a,new t.ObjectWidgetAdapter(e)})}
validateWidget(e,t){var r
;if("object"!=typeof e&&(r="Invalid widget after making: "+t),
r)throw console.error(r),console.error(e),new Error(r)}makeWidget(e,t){
const r=this.widgets[e];if(!r)throw new Error("Widget "+e+" not found")
;const a=new i.DeepMerger({}).mergeIn(t).value();let d
;switch(a.runtime=this.runtime,t=t||{},r.type){case"factory":
d=this.makeFactoryWidget(r,a);break;case"es6":d=this.makeES6Widget(r,a);break
;case"object":d=this.makeObjectWidget(r,a);break;case"kbwidget":
d=this.makeKbWidget(r,a);break;default:
throw new Error("Unsupported widget type "+r.type)}
return d.then(t=>(this.validateWidget(t,e),t))}}}}));