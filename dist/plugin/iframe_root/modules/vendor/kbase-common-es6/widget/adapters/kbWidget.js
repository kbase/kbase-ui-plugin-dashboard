define(["jquery","underscore","bluebird","kb_common/html"],(function(e,t,n,r){
"use strict";return{KBWidgetAdapter:class{constructor(e){this.runtime=e.runtime,
this.module=e.widget.module,
this.jqueryObjectName=e.widget.jquery_object||e.widget.jqueryObject,
this.wantPanel=e.widget.panel,
this.title=e.widget.title,this.hostNode=null,this.container=null,
this.$container=null}init(){return new n((t,n)=>{require([this.module],()=>{
void 0===e.fn[this.jqueryObjectName]&&n("Sorry, cannot find jquery widget "+this.jqueryObjectName),
t()},e=>{n(e)})})}attach(t){return n.try(()=>{
this.hostNode=t,this.container=this.hostNode.appendChild(document.createElement("div")),
this.wantPanel?this.$container=function(t,n){
var i=r.genId(),s=r.tag("div"),a=r.tag("span");return t.html(s({
class:"panel panel-default "},[s({class:"panel-heading"},[a({class:"panel-title"
},n)]),s({class:"panel-body"},[s({id:i})])])),e("#"+i)
}(e(this.container),this.title):this.$container=e(this.container)})}start(e){
return n.try(()=>{var n=t.extendOwn({},e,{wsNameOrId:e.workspaceId,
objNameOrId:e.objectId,runtime:this.runtime})
;this.$container[this.jqueryObjectName](n)})}run(){return n.resolve()}stop(){
return n.resolve()}detach(){return n.resolve()}destroy(){return n.resolve()}}}
}));