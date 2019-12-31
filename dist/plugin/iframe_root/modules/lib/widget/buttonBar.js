define(["jquery"],(function(a){"use strict";return Object.create({},{init:{
value:function(t){
return"string"==typeof t.container?this.container=a(t.container):this.container=t.container,
this}},version:{value:"0.0.1"},getVersion:{value:function(){return this.version}
},loadCSS:{value:function(){return a("<link>").appendTo("head").attr({
type:"text/css",rel:"stylesheet"
}).attr("href","/src/widgets/Buttonbar/style.css"),this}},clear:{
value:function(){return this.container.empty(),this}},makeButton:{
value:function(t){var n,e,r=""
;return t.label&&(r='<span class="kb-nav-btn-txt" style="vertical-align: middle;">'+t.label+"</span>"),
t.url?(t.external&&(t.target="_blank"),
n=t.target?'target="'+t.target+'"':"",e=a('<a data-button="'+t.name+'" id="kb-'+t.name+'-btn" class="btn btn-'+(t.style||"default")+(t.class?" "+t.class:"")+' xnavbar-btn xkb-nav-btn" role="button" href="'+t.url+'" '+n+'>  <span class="fa fa-'+t.icon+'" style="margin-right: 5px;"></span>'+r+"</a>")):e=a('<button data-button="'+t.name+'" id="kb-'+t.name+'-btn" class="btn btn-'+(t.style||"default")+' xnavbar-btn xkb-nav-btn">  <span class="fa fa-'+t.icon+'" style="margin-right: 5px;"></span>'+r+"</button>").on("click",(function(a){
a.preventDefault(),t.callback()})),t.disabled&&e.prop("disabled",!0),e}},
addButton:{value:function(a){var t=this.makeButton(a)
;return"end"===a.place?this.container.append(t):this.container.prepend(t),this}
},findButton:{value:function(a){
return this.container.find('[data-button="'+a+'"]')}},addRadioToggle:{
value:function(t){
var n,e=a('<div class="btn-group" data-toggle="buttons"></div>')
;for(n=0;n<t.buttons.length;n+=1){
var r=t.buttons[n],l=a('<label class="btn btn-primary'+(r.active?" active":"")+(r.class?" "+r.class:"")+'"><input type="radio" name="temp" autocomplete="off">'+r.label+"</label>").on("click",function(a){
return function(t){t.preventDefault(),a()}}(r.callback));e.append(l)}
return"end"===t.place?this.container.append(e):this.container.prepend(e),this}},
addDropdown:{value:function(t){var n=""
;n=t.label?'<div class="kb-nav-btn-txt">'+t.label+' <span class="caret"></span></div>':t.label+' <span class="caret"></span>'
;var e=a('<button  class="btn btn-'+(t.style||"default")+' navbar-btn kb-nav-btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false">  <div class="fa fa-'+t.icon+'" style=""></div>'+n+"</button>")
;t.disabled&&e.prop("disabled",!0)
;for(var r=a('<ul class="dropdown-menu" role="menu"></ul>'),l=0;l<t.items.length;l++){
var i=t.items[l]
;if("divider"===i.type)r.append('<li class="divider"></li>');else{
var s=a("<li></li>")
;if(i.url)var o=a("<a></a>").attr("href",i.url).attr("data-menu-item",i.name);else if(i.callback)o=a("<a></a>").attr("href","#").attr("data-menu-item",i.name).on("click",i.callback)
;i.external?o.attr("target","_blank"):o.attr("target","_parent")
;var c=a('<div class="navbar-icon" style=""></div>')
;i.icon&&c.append(a('<span class="fa fa-'+i.icon+'"  class="navbar-icon"></span>')),
r.append(s.append(o.append(c).append(i.label)))}}
var d=a('<div class="dropdown" style="display: inline-block;"></div>').append(e).append(r)
;return"end"===t.place?this.container.append(d):this.container.prepend(d),this}
},makeMenuItem:{value:function(t){
if("divider"===t.type)var n=a('<li  role="presentation" class="divider"></li>').attr("data-menu-item",t.name);else{
n=a("<li></li>")
;if(t.url)var e=a("<a></a>").attr("href",t.url).attr("data-menu-item",t.name);else if(t.callback)e=a("<a></a>").attr("href","#").attr("data-menu-item",t.name).on("click",t.callback)
;n.external&&e.attr("target","_blank")
;var r=a('<div class="navbar-icon" style=""></div>')
;t.icon&&r.append(a('<span class="fa fa-'+t.icon+'"  class="navbar-icon"></span>')),
n.append(e.append(r).append(t.label))}return n}},addInput:{value:function(t){
var n=a('<form class="navbar-form navbar-group" role="form"></form>')
;return n.append('<div class="form-group"><input type="text" class="form-control" placeholder="'+(t.placeholder?t.placeholder:"")+'"</div>'),
t.onkeyup&&n.on("keyup",function(a){return function(t){a(t)}
}(t.onkeyup)),n.on("submit",(function(a){
a.preventDefault(),t.onsubmit&&t.onsubmit(a)
})),"end"===t.place?this.container.append(n):this.container.prepend(n),this}}})
}));