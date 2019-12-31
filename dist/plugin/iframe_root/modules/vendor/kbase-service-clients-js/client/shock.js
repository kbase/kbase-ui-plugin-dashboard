define(["jquery","bluebird"],(function(e,t){"use strict";function n(n,i){
var r={};return i&&(r.Authorization="OAuth "+i),t.try((function(){
return e.ajax({url:n,type:"GET",headers:r})})).then((function(e){return e.data
}))}function i(n,i,r){var o={}
;return i&&(o.Authorization="OAuth "+i),t.try((function(){return e.ajax({url:n,
type:"PUT",headers:o,contentType:!1,processData:!1,data:r})
})).then((function(e){return e.data}))}function r(e){
return e.lastModified?e.lastModified:e.lastModifiedDate?e.lastModifiedDate.getTime():(console.warning("File last modified time not supported"),
0)}return function(o){
if(this.auth_header={},this.chunkSize=2097152,void 0===o.url)throw new Error('Missing parameter "url"')
;this.url=o.url,
o.token&&(this.token=o.token,this.auth_header.Authorization="OAuth "+o.token),
o.chunkSize&&(this.chunkSize=o.chunkSize),this.get_node=function(e){
return n([this.url,"node",e].join("/"),this.token)},this.get_nodes=function(e){
var t=[this.url,"node"].join("/"),i={}
;return e.query?(i=e.query).query=!0:e.queryNode&&((i=e.queryNode).querynode=!0),
e.owner&&(i.owner=e.owner),
e.limit&&(i.limit=e.limit),e.offset&&(i.offset=e.offset),n(t+="?"+function(e){
return Object.keys(e).map((function(t){var n=e[t]
;return!0===n?t:!1!==n&&[encodeURIComponent(t),encodeURIComponent(e[t])].join("=")
})).filter((function(e){return!1!==e})).join("&")}(i),this.token)
},this.get_node_acls=function(e){
return n([this.url,"node",e,"acl"].join("/"),this.token)
},this.delete_node=function(n){return function(n,i){var r={}
;return i&&(r.Authorization="OAuth "+i),t.try((function(){return e.ajax({url:n,
type:"DELETE",headers:r})}))}([this.url,"node",n].join("/"),this.token)
},this.update_node=function(e,t){
var n=[this.url,"node"].join("/"),r=[JSON.stringify(t)],o=new Blob(r,{
type:"text/json"}),a=new FormData
;return a.append("attributes",o),i(n,this.token,a)},this.check_file=function(e){
var t={file_size:e.size,file_time:r(e),file_name:e.name,limit:1}
;return this.get_nodes(t).then((function(e){return 0===e.length?null:e[0]}))
},this.change_node_file_name=function(e,t,n,r){
var o=[this.url,"node",e].join("/"),a=new FormData
;return a.append("file_name",t),i(o,this.token,a)
},this.loadNext=function(t,n,i,o,a,s,u,l,d,c){if(!c||!c()){
var f=new FileReader,h=this;f.onload=function(f){if(!c||!c()){
var p=new FormData,_=new Blob([f.target.result],{type:t.type});p.append(o+1,_)
;var z={incomplete:(o+1)*u>=t.size?"0":"1",file_size:String(t.size),
file_name:t.name,file_time:String(r(t)),chunks:String(o+1),chunk_size:String(u)
},m=[JSON.stringify(z)],y=new Blob(m,{type:"text/json"})
;p.append("attributes",y),e.ajax(n,{contentType:!1,processData:!1,data:p,
success:function(e){if(!c||!c()){o++;var r=Math.min(t.size,o*u);l({
file_size:t.size,uploaded_size:r,node_id:s
}),o*u>=t.size?i.resolve():h.loadNext(t,n,i,o,a,s,u,l,d,c)}},
error:function(e,t){d&&d(t),i.resolve()},headers:h.auth_header,type:"PUT"})}
},f.onerror=function(){d&&d("error during upload at chunk "+o+"."),i.resolve()}
;var p=o*u;if(p<t.size){
var _=p+u>=t.size?t.size:p+u,z=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice
;f.readAsArrayBuffer(z.call(t,p,_))}else l({file_size:t.size,
uploaded_size:t.size,node_id:s})}},this.upload_node=function(n,i,o,a,s,u){
var l=this.url+"/node",d=e.Deferred(),c=this;function f(){
o?c.check_file(n,(function(e){u&&u()||h(e)}),(function(e){s&&s(e),d.resolve()
})):h(null)}function h(t){if(null!=t){var i=t.id;l+="/"+t.id;var o=0
;t.attributes.incomplete_chunks?o=parseInt(t.attributes.incomplete_chunks):t.attributes.chunks&&(o=parseInt(t.attributes.chunks))
;var f=c.chunkSize
;t.attributes.chunk_size&&(f=parseInt(t.attributes.chunk_size))
;var h=Math.min(n.size,o*f);a({file_size:n.size,uploaded_size:h,node_id:i
}),c.loadNext(n,l,d,o,p,i,f,a,s,u)}else{f=c.chunkSize
;var p=Math.ceil(n.size/f),_={incomplete:"1",file_size:""+n.size,
file_name:n.name,file_time:""+r(n),chunk_size:""+f
},z=[JSON.stringify(_)],m=new Blob(z,{type:"text/json"}),y=new FormData
;y.append("attributes",m),y.append("parts",p),e.ajax(l,{contentType:!1,
processData:!1,data:y,success:function(e){if(!u||!u()){var t=e.data.id;a({
file_size:n.size,uploaded_size:0,node_id:t
}),l+="/"+e.data.id,c.loadNext(n,l,d,0,p,t,f,a,s,u)}},error:function(e,t){
s&&s(t),d.resolve()},headers:c.auth_header,type:"POST"})}}
return i?c.get_node(i).then((function(e){
u&&u()||(e&&e.attributes.file_size===String(n.size)&&e.attributes.file_name===n.name&&e.attributes.file_time===String(r(n))?h(e):f())
})).catch((function(e){f()})):f(),t.resolve(d)}}}));