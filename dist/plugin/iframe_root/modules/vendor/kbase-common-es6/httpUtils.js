define([],(function(){"use strict";return Object.freeze({
encodeQuery:function(n){return Object.keys(n).map(e=>[e,n[e]].map((function(n){
return encodeURIComponent(function(n){const e=typeof n;switch(e){case"string":
return n;case"number":return String(n)}
throw new Error("Only string and number values can be query-encoded, not "+e)
}(n))})).join("=")).join("&")}})}));