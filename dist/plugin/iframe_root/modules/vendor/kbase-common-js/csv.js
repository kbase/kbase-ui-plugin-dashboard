define(["bluebird","./ajax"],(function(t,n){"use strict";function r(t){
return t.split(/\n/).map((function(t){return t.split(/,/).map((function(t){
var n,r=t.trim()
;return'"'===r.charAt(0)?r.replace(/"/g,""):(n=r.match(/\./)?parseFloat(r):parseInt(r),
isNaN(n)?r:n)}))}))}return{parseCsv:r,load:function(t){return n.get({url:t
}).then((function(t){return r(t)}))}}}));