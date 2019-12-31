define([],(function(){"use strict";return{niceElapsedTime:function(e,t){var n,r
;n="string"==typeof e?new Date(e):"number"==typeof e?new Date(e):e,
r=void 0===t?new Date:"string"==typeof t?new Date(t):t
;var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u=Math.round((r.getTime()-n.getTime())/1e3),o=Math.abs(u)
;if(o<604800){if(0===o)return"now";var i,g,s
;o<60?(i=u,g=o,s="second"):o<3600?(i=Math.round(u/60),
g=Math.round(o/60),s="minute"):o<86400?(i=Math.round(u/3600),
g=Math.round(o/3600),
s="hour"):o<604800&&(i=Math.round(u/86400),g=Math.round(o/86400),
s="day"),g>1&&(s+="s");var f=null,l=null
;return i<0?f="in":i>0&&(l="ago"),(f?f+" ":"")+g+" "+s+(l?" "+l:"")}
return r.getFullYear()===n.getFullYear()?a[n.getMonth()]+" "+n.getDate():a[n.getMonth()]+" "+n.getDate()+", "+n.getFullYear()
},niceTime:function(e){
var t,n,r=(t="string"==typeof e?new Date(e):"number"==typeof e?new Date(e):e).getMinutes()
;return r<10&&(r="0"+r),
n=t.getHours()>=12?12!==t.getHours()?t.getHours()-12+":"+r+"pm":"12:"+r+"pm":t.getHours()+":"+r+"am",
["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+" "+t.getDate()+", "+t.getFullYear()+" at "+n
},fileSize:function(e){var t;t="string"==typeof t?parseInt(e,10):e
;for(var n,r=[];t>0;)n=t%1e3,
r.unshift(String(n)),(t=Math.floor(t/1e3))>0&&r.unshift(",")
;return r.join("")+" bytes"}}}));