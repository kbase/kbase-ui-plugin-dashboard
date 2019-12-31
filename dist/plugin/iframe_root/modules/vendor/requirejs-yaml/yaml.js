define(["text","js-yaml"],(function(n,t){"use strict";var i={};return{
write:function(n,t,r){
t in i&&r('define("'+n+"!"+t+'", function(){ return '+i[t]+"; });\n")},
load:function(r,e,o,f){n.get(e.toUrl(r),(function(n){try{var e=t.safeLoad(n)
;f.isBuild&&(i[r]=JSON.stringify(e)),o(e)}catch(u){o.error(u)}}))},
version:"1.0.3"}}));