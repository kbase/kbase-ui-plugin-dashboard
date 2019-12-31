define(["bluebird","jquery"],(function(e,t){"use strict"
;return Object.create({},{version:{value:"0.0.2",writable:!1},getProp:{
value:function(e,t,r){
if("string"==typeof t)t=t.split(".");else if(!(t instanceof Array))throw new TypeError("Invalid type for key: "+typeof t)
;var n;for(n=0;n<t.length;n+=1){
if(void 0===e||"object"!=typeof e||null===e)return r;e=e[t[n]]}
return void 0===e?r:e}},hasProp:{value:function(e,t){var r
;for("string"==typeof t&&(t=t.split(".")),r=0;r<t.length;r+=1){
if(void 0===e||"object"!=typeof e||null===e)return!1;e=e[t[r]]}return void 0!==e
}},setProp:{value:function(e,t,r){
if("string"==typeof t&&(t=t.split(".")),0!==t.length){
for(var n,a=t.pop();t.length>0;)void 0===e[n=t.shift()]&&(e[n]={}),e=e[n]
;return e[a]=r,r}}},incrProp:{value:function(e,t,r){
if("string"==typeof t&&(t=t.split(".")),0!==t.length){r=void 0===r?1:r
;for(var n,a=t.pop();t.length>0;)void 0===e[n=t.shift()]&&(e[n]={}),e=e[n]
;if(void 0===e[a])e[a]=r;else{
if("number"!=typeof e[a])throw new Error("Can only increment a number");e[a]+=r}
return e[a]}}},deleteProp:{value:function(e,t){
if("string"==typeof t&&(t=t.split(".")),0!==t.length){
for(var r,n=t.pop();t.length>0;){if(void 0===e[r=t.shift()])return!1;e=e[r]}
return delete e[n],!0}}},promise:{value:function(t,r,n){
return new e((function(e,a){
if(!t[r])throw new TypeError('Invalid KBase Client call; method "'+r+'" not found in client "'+t.constructor+'"')
;t[r](n,(function(t){e(t)}),(function(e){a(e)}))}))}},getSchemaNode:{
value:function(e,t){var r,n=t.split(".");for(r=0;r<n.length;r+=1){var a=n[r]
;switch(e.type){case"object":var i=e.properties[a]
;if(!i)throw"Field "+a+" in "+t+" not found.";e=i;break;case"string":
case"integer":case"boolean":default:
throw"Cannot get a node on type type "+e.type}}return e}},isBlank:{
value:function(e){if(void 0===e)return!0;if("object"==typeof e){
if(null===e)return!0;if(e.push&&e.pop){if(0===e.length)return!0
}else if(0===Object.getOwnPropertyNames(e).length)return!0
}else if("string"==typeof e&&0===e.length)return!0;return!1}},merge:{
value:function(e,t){var r={init:function(e){return this.dest=e,this},
getType:function(e){var t=typeof e
;return"object"===t?null===e?"null":e.pop&&e.push?"array":"object":t},
merge:function(e,t){switch(this.dest=e,this.getType(t)){case"string":
case"integer":case"boolean":case"null":
throw new TypeError("Can't merge a '"+typeof t+"'");case"object":
return this.mergeObject(t);case"array":return this.mergeArray(t);default:
throw new TypeError("Can't merge a '"+typeof t+"'")}},mergeObject:function(e){
for(var t=Object.keys(e),n=0;n<t.length;n++){var a=t[n],i=e[a]
;switch(this.getType(i)){case"string":case"number":case"boolean":case"null":
this.dest[a]=i;break;case"object":
this.dest[a]||(this.dest[a]={}),this.dest[a]=Object.create(r).init(this.dest[a]).mergeObject(e[a])
;break;case"array":
this.dest[a],this.dest[a]=[],this.dest[a]=Object.create(r).init(this.dest[a]).mergeArray(e[a])
;break;case"undefined":this.dest[a]&&delete this.dest[a]}}return this.dest},
mergeArray:function(e){for(var t=0;t<e.length;t++){var n=e[t]
;switch(this.getType(n)){case"string":case"number":case"boolean":case"null":
this.dest[t]=n;break;case"object":
this.dest[t]||(this.dest[t]={}),this.dest[t]=Object.create(r).init(this.dest[t]).mergeObject(e[t])
;break;case"array":
this.dest[t]||(this.dest[t]=[]),this.dest[t]=Object.create(r).init(this.dest[t]).mergeArray(e[t])
;break;case"undefined":this.dest[t]&&(this.dest[t]=void 0)}}return this.dest}}
;return void 0===t?e:Object.create(r).merge(e,t)}},shallowMerge:{
value:function(e,t){if(!t)return e
;if(!e)throw new Error("First argument not an object")
;return Object.keys(t).forEach((function(r){e[r]=t[r]})),e}},iso8601ToDate:{
value:function(e){if(!e)return null
;var t=/(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)([\+\-])(\d\d)(:?[\:]*)(\d\d)/.exec(e)
;if(!t)throw new TypeError("Invalid Date Format for "+e)
;var r=t[7]+t[8]+":"+t[10],n=t[1]+"-"+t[2]+"-"+t[3]+"T"+t[4]+":"+t[5]+":"+t[6]+r
;return new Date(n)}},niceElapsedTime:{value:function(e,t){
if("string"==typeof e)var r=new Date(e);else if("number"==typeof e)r=new Date(e);else r=e
;if(void 0===t)var n=new Date;else if("string"==typeof t)n=new Date(t);else n=t
;var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=Math.round((n.getTime()-r.getTime())/1e3),s=Math.abs(i)
;if(s<604800){if(0===s)return"now"
;if(s<60)var o=i,u=s,l="second";else if(s<3600)o=Math.round(i/60),
u=Math.round(s/60),
l="minute";else if(s<86400)o=Math.round(i/3600),u=Math.round(s/3600),
l="hour";else if(s<604800)o=Math.round(i/86400),u=Math.round(s/86400),l="day"
;u>1&&(l+="s");var f=null,c=null;if(o<0)f="in";else if(o>0)c="ago"
;return(f?f+" ":"")+u+" "+l+(c?" "+c:"")}
return n.getFullYear()===r.getFullYear()?a[r.getMonth()]+" "+r.getDate():a[r.getMonth()]+" "+r.getDate()+", "+r.getFullYear()
}},niceTimestamp:{value:function(e){
if("string"==typeof e)var t=new Date(e);else if("number"==typeof e)t=new Date(e);else t=e
;var r=t.getMinutes()
;if(r<10&&(r="0"+r),t.getHours()>=12)if(12!==t.getHours())var n=t.getHours()-12+":"+r+"pm";else n="12:"+r+"pm";else n=t.getHours()+":"+r+"am"
;return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+" "+t.getDate()+", "+t.getFullYear()+" at "+n
}},fileSizeFormat:{value:function(e){if("string"==typeof e)e=parseInt(e)
;for(var t=[];e>0;){var r=e%1e3
;t.unshift(r+""),(e=Math.floor(e/1e3))>0&&t.unshift(",")}
return t.join("")+" bytes"}},getJSON:{value:function(r,n){
return new e.resolve(t.ajax(r,{type:"GET",dataType:"json",timeout:n||1e4}))}},
object_to_array:{value:function(e,t,r){var n=Object.keys(e),a=[]
;for(var i in n){var s={};s[t]=n[i],s[r]=e[n[i]],a.push(s)}return a}},mapAnd:{
value:function(e,t){Object.keys(e[0])
;for(var r=0;r<e[0].length;r++)for(var n=[],a=0;a<e.length;a++)if(n.push(e[a][r]),
!t.call(null,n))return!1;return!0}},isEqual:{value:function(e,t){
var r=[],n=function(e,t){var a=typeof e,i=typeof t;if(a!==i)return!1;switch(a){
case"string":case"number":case"boolean":if(e!==t)return!1;break;case"undefined":
if("undefined"!==i)return!1;break;case"object":if(e instanceof Array){
if(e.length!==t.length)return!1;for(var s=0;s<e.length;s++){
if(r.push(s),!n(e[s],t[s]))return!1;r.pop()}}else if(null===e){
if(null!==t)return!1}else{if(null===t)return!1
;var o=Object.keys(e),u=Object.keys(t);if(o.length!==u.length)return!1
;for(s=0;s<o.length;s++){if(r.push(o[s]),!n(e[o[s]],t[o[s]]))return!1;r.pop()}}}
return!0}.bind(this);return n(e,t)}},objTable:{value:function(e){
var r=e.obj,n=e.keys;if(e.keysAsLabels){var a=[];for(var i in n){
var s=n[i].key.replace(/(id|Id)/g,"ID").split(/_/g)
;for(var o in s)s[o]=s[o].charAt(0).toUpperCase()+s[o].slice(1)
;var u=s.join(" ");a.push(u)}
}else if("labels"in e)a=e.labels;else for(var i in n){var l=n[i]
;"label"in l?a.push(l.label):a.push(l.key)}
var f=t('<table class="table table-striped table-bordered">');for(var i in n){
var c=n[i],d=t("<tr>")
;if(e.bold)var h=t("<td><b>"+a[i]+"</b></td>");else h=t("<td>"+a[i]+"</td>")
;var p=t("<td>");if("format"in c){var v=c.format(r);p.append(v)
}else"bool"===c.type?p.append(1===r[c.key]?"True":"False"):p.append(r[c.key])
;d.append(h,p),f.append(d)}return f}}})}));