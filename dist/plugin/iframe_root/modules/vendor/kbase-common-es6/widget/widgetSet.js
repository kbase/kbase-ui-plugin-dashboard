define(["bluebird","kb_common/html"],(function(t,e){"use strict";return{
WidgetSet:class{constructor(t){
if(!t.widgetManager)throw new Error('Widget manager not available; provide as "widgetManager"')
;this.widgetManager=t.widgetManager,this.widgets=[],this.config=t}
addWidget(t,i){
const d=i||{},r=this.widgetManager.getWidget(t),a=this.widgetManager.makeWidget(t,d),g=e.genId(),n={
id:g,name:r.name||r.id,title:r.title,widgetMaker:a};return this.widgets.push(n),
g}addWidgets(t,e){t.map(t=>this.addWidget(t,e))}makeWidgets(){
return t.all(this.widgets.map(t=>t.widgetMaker)).then(t=>{!function(t,e){
const i=t[0].length;for(let d=0;d<i;d+=1){const i=[]
;for(let e=0;e<t.length;e+=1)i.push(t[e][d]);e(i)}}([this.widgets,t],t=>{
t[0].widget=t[1]})})}init(e){
return this.makeWidgets().then(()=>t.all(this.widgets.map(t=>{
if(t.widget.init)return t.widget.init(e)})))}attach(){
return t.all(this.widgets.map(t=>{if(t.widget.attach){
if(t.node||(t.node=document.getElementById(t.id)),!t.node)throw{
type:"WidgetError",reason:"MissingAttachmentNode",
message:"The widget "+t.title+" does not have a valid node at "+t.id}
;return t.widget.attach(t.node)}console.warn("no attach method",t)}))}start(e){
return t.all(this.widgets.map(t=>{
if(t.widget&&t.widget.start)return t.widget.start(e)}))}run(e){
return t.all(this.widgets.map(t=>{
if(t.widget&&t.widget.run)return t.widget.run(e)}).filter(t=>!!t))}stop(){
return t.all(this.widgets.map(t=>{
if(t.widget&&t.widget.stop)return t.widget.stop()}))}detach(){
return t.all(this.widgets.map(t=>{
if(t.widget&&t.widget.detach)return t.widget.detach()}).filter(t=>!!t))}
destroy(){return t.all(this.widgets.map(t=>{
if(t.widget&&t.widget.destroy)return t.widget.destroy()}))}}}}));