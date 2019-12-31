define(["bluebird","./objectWidgetAdapter","kb_lib/merge"],(function(e,t,i){
"use strict";return class{constructor(e){
if(!e||!e.baseWidgetConfig)throw new Error('WidgetManager requires a baseWidgetConfig argument; pass as "baseWidgetConfig"')
;this.baseWidgetConfig=e.baseWidgetConfig,this.widgets={}}addWidget(e){
if(e.id&&(e.name=e.id),
this.widgets[e.name])throw new Error("Widget "+e.name+" is already registered")
;this.widgets[e.name]=e}getWidget(e){return this.widgets[e]}
makeFactoryWidget(t,i){return new e((e,r)=>{var s=[t.module]
;t.css&&s.push("css!"+t.module+".css"),require(s,s=>{
if(void 0!==s)if(void 0!==s.make)try{e(s.make(i))}catch(a){r(a)
}else r('Factory widget does not have a "make" method: '+t.name+", "+t.module);else r({
message:"Factory widget maker is undefined for "+t.module,data:{widget:t}})
},e=>{r(e)})})}makeES6Widget(t,i){return new e((e,r)=>{var s=[t.module]
;t.css&&s.push("css!"+t.module+".css"),require(s,s=>{let a
;if(a=s.Widget?s.Widget:s,void 0!==a)try{e(new a(i))}catch(d){r(d)}else r({
message:"Widget class is undefined for "+t.module,data:{widget:t}})},e=>{r(e)})
})}makeObjectWidget(r,s){return e.try(()=>{
const e=new i.ShallowMerger({}).mergeIn(s).value()
;return e.widgetDef=r,e.initConfig=s,new t(e)})}validateWidget(e,t){var i
;if("object"!=typeof e&&(i="Invalid widget after making: "+t),
i)throw console.error(i),console.error(e),new Error(i)}makeWidget(e,t){
const i=this.widgets[e];if(!i)throw new Error("Widget "+e+" not found");let r
;const s=Object.assign({},t,this.baseWidgetConfig);switch(t=t||{},i.type){
case"factory":r=this.makeFactoryWidget(i,s);break;case"es6":
r=this.makeES6Widget(i,s);break;case"object":r=this.makeObjectWidget(i,s);break
;default:throw new Error("Unsupported widget type "+i.type)}
return r.then(t=>(this.validateWidget(t,e),t))}}}));