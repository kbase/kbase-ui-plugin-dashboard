define(["bluebird","./asyncQueue","./lang"],(function(e,r,n){"use strict"
;function s(s){var a={},t=0,o=r.make();function u(){return"sub_"+(t+=1)}
function i(){return[e.resolve()]}return{receive:function(e){
var r=e.chan||e.channel||"default",n=e.msg||e.message||function(e){
throw new Error(e)}("Message is required for a sub"),s=a[r];s||(s={messages:{}},
a[r]=s);var t=s.messages[n];t||(t={listeners:[],byId:{}},s.messages[n]=t)
;var o=u();return e.subId=o,t.byId[o]=e,t.listeners.push(e),{chan:r,msg:n,id:o}
},unreceive:function(e){var r=a[e.chan];if(!r)return!1;var n=r.messages[e.msg]
;return!!n&&(!!n.byId[e.id]&&(delete n.byId[e.id],
n.listeners=n.listeners.filter((function(r){return r.subId!==e.id})),!0))},
send:function(e){var r=e.chan||e.channel,s=e.msg||e.message,u=a[r];if(u){
var i=u.messages[s];i&&i.listeners.forEach((function(r){o.addItem({
onRun:function(){try{r.handler(e.data)}catch(a){
throw console.error(a),new n.UIError({type:"RuntimeError",
reason:"MessageHandlerError",message:"Exception running message "+s+", sub "+t,
data:a,suggestion:"This is an application error, not your fault"})}}})}))}},
sendPromise:function(r){var s=r.chan||r.channel,u=r.msg||r.message,c=a[s]
;if(!c&&r.propogate)return i();var f=c.messages[u];if(!f&&r.propogate)return i()
;var g=f.listeners;return e.all(g.map((function(s){return new e((function(e,a){
o.addItem({onRun:function(){try{e(s.handler(r.data))}catch(o){
console.error(o),a(new n.UIError({type:"RuntimeError",
reason:"MessageHandlerError",message:"Exception running message "+u+", sub "+t,
data:o,suggestion:"This is an application error, not your fault"}))}},
onError:function(e){a(e)}})}))})).map((function(e){return e.reflect()})))}}}
return{make:function(e){return s()}}}));