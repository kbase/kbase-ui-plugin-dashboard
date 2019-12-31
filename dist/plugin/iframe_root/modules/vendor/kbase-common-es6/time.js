define([],(function(){"use strict"
;const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
;return Object.freeze({niceElapsedTime:function(t,n){let r,o
;r="string"==typeof t?new Date(t):"number"==typeof t?new Date(t):t,
o=void 0===n?new Date:"string"==typeof n?new Date(n):n
;const d=Math.round((o.getTime()-r.getTime())/1e3),u=Math.abs(d);let a,i,l
;if(u<604800){if(0===u)return"now"
;u<60?(a=d,i=u,l="second"):u<3600?(a=Math.round(d/60),
i=Math.round(u/60),l="minute"):u<86400?(a=Math.round(d/3600),
i=Math.round(u/3600),
l="hour"):u<604800&&(a=Math.round(d/86400),i=Math.round(u/86400),
l="day"),i>1&&(l+="s");let e=null,t=null
;return a<0?e="in":a>0&&(t="ago"),(e?e+" ":"")+i+" "+l+(t?" "+t:"")}
return o.getFullYear()===r.getFullYear()?e[r.getMonth()]+" "+r.getDate():e[r.getMonth()]+" "+r.getDate()+", "+r.getFullYear()
},shortMonths:e,shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
iso8601ToDate:function(e){if(!e)return null
;const t=/(\d\d\d\d)-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)([+-])(\d\d)(:?[:]*)(\d\d)/.exec(e)
;if(!t)throw new TypeError("Invalid Date Format for "+e)
;const n=t[7]+t[8]+":"+t[10],r=t[1]+"-"+t[2]+"-"+t[3]+"T"+t[4]+":"+t[5]+":"+t[6]+n
;return new Date(r)}})}));