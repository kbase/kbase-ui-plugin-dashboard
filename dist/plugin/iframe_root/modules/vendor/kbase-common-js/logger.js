define([],(function(){"use strict";return Object.create({},{init:{
value:function(e){}},log:{value:function(e){
var t,o=(new Date).toISOString(),n=null,s=e.type.toUpperCase(),r=null;switch(s){
case"ERROR":r="error";break;case"WARNING":r="warn";break;case"INFO":r="info"
;break;case"DEBUG":r="debug";break;default:
n=s,r="log",console.warn("WARNING: invalid log type: "+e.type)}
return t=n?n+": "+o+": : "+e.source+": ":o+": : "+e.source+": ",
e.title&&console[r](t+e.title),
e.message&&console[r](t+e.message),e.data&&(console[r](t+"Data follows"),
console[r](e.data)),e.exception&&console[r](e.exception),this}},logError:{
value:function(e){return"string"==typeof e&&(e={message:e
}),e.type="ERROR",this.log(e),this}},logWarning:{value:function(e){
return"string"==typeof e&&(e={message:e}),e.type="WARNING",this.log(e),this}},
logInfo:{value:function(e){return"string"==typeof e&&(e={message:e
}),e.type="INFO",this.log(e),this}},logDebug:{value:function(e){
return"string"==typeof e&&(e={message:e}),e.type="DEBUG",this.log(e),this}}})
}));