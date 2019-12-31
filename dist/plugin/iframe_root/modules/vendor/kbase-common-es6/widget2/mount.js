define(["bluebird"],(function(t){"use strict";return{WidgetMount:class{
constructor(t){
if(!t.node)throw new Error('Cannot create widget mount without a parent node; pass it as "node"')
;if(this.hostNode=t.node,
!t.widgetManager)throw new Error('The widget mounter needs a widget manager; pass it as "widgetManager"')
;this.widgetManager=t.widgetManager,
this.container=this.hostNode,this.mountedWidget=null}mount(e,n){
return this.mountedWidget={widgetId:null,widget:null,container:null,promise:null
},
this.mountedWidget.promise=t.try(()=>this.widgetManager.makeWidget(e,{})).then(n=>{
if(!n)throw new Error("Widget could not be created: "+e)
;return this.mountedWidget.widget=n,
this.mountedWidget.widgetId=e,t.all([n,n.init&&n.init()])
}).spread(e=>(this.mountedWidget.container=this.container,
t.all([e,e.attach&&e.attach(this.mountedWidget.container)]))).spread(e=>t.all([e,e.start&&e.start(n)])).spread(e=>t.all([e,e.run&&e.run(n)])).spread(t=>t),
this.mountedWidget.promise}unmount(){return t.try(()=>{var e
;return this.mountedWidget?(this.mountedWidget.promise&&this.mountedWidget.promise.cancel(),
e=this.mountedWidget.widget,
t.try(()=>e&&e.stop&&e.stop()).then(()=>e&&e.detach&&e.detach()).then(()=>{
this.container.innerHTML=""
}).then(()=>e&&e.destroy&&e.destroy()).catch(t=>(console.error("ERROR unmounting widget"),
console.error(t),null)).finally(()=>{this.mountedWidget=null})):null})}
mountWidget(t,e){return this.unmount().then(()=>this.mount(t,e))}}}}));