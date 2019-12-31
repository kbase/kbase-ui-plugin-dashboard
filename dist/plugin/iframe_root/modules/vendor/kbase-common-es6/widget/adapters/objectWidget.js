define(["bluebird","jquery","../../merge"],(function(e,t,i){"use strict";return{
ObjectWidgetAdapter:class{constructor(e){if(!e.runtime)throw{
type:"ArgumentError",reason:"RuntimeMissing",
message:"The runtime factory construction property is required but not provided"
}
;this.runtime=e.runtime,this.module=e.widgetDef.module,this.initConfig=new i.ShallowMerger({}).mergeIn(e.initConfig).value(),
this.widget=null,this.hostNode=null,this.container=null}init(t){
return new e((e,r)=>{require([this.module],n=>{
n?(this.initConfig=new i.DeepMerger(this.initConfig).mergeIn(t).value(),
this.widget=Object.create(n),
e()):r(new Error("Widget module did not load properly (undefined) for "+this.module))
},e=>{r(e)})})}attach(e){
this.hostNode=e,this.container=this.hostNode.appendChild(document.createElement("div"))
}start(r){return e.try(()=>{var e=new i.ShallowMerger(this.initConfig).mergeIn({
container:t(this.container),runtime:this.runtime,params:r}).value()
;return this.widget.init(e)}).then(()=>this.widget.go())}stop(){}detach(){
this.hostNode&&this.container&&this.hostNode.removeChild(this.container)}
destroy(){}}}}));