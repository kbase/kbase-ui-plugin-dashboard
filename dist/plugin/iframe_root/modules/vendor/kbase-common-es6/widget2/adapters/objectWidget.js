define(["bluebird","kb_lib/merge"],(function(e,t){"use strict";return{
ObjectWidgetAdapter:class{constructor(e){if(!e.runtime)throw{
type:"ArgumentError",reason:"RuntimeMissing",
message:"The runtime factory construction property is required but not provided"
}
;this.runtime=e.runtime,this.module=e.widgetDef.module,this.initConfig=new t.ShallowMerger({}).mergeIn(e.initConfig).value(),
this.widget=null,this.hostNode=null,this.container=null}init(i){
return new e((e,r)=>{require([this.module],n=>{
n?(this.initConfig=new t.DeepMerger(this.initConfig).mergeIn(i).value(),
this.widget=Object.create(n),
e()):r(new Error("Widget module did not load properly (undefined) for "+this.module))
},e=>{r(e)})})}attach(e){
this.hostNode=e,this.container=this.hostNode.appendChild(document.createElement("div"))
}start(i){return e.try(()=>{var e=new t.ShallowMerger(this.initConfig).mergeIn({
container:this.container,runtime:this.runtime,params:i}).value()
;return this.widget.init(e)}).then(()=>this.widget.go())}stop(){}detach(){
this.hostNode&&this.container&&this.hostNode.removeChild(this.container)}
destroy(){}}}}));