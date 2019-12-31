define([],(function(){return{encodeQuery:function(n){
return Object.keys(n).map((function(e){return[e,n[e]].map((function(n){
return encodeURIComponent(function(n){var e=typeof n;switch(e){case"string":
return n;case"number":return String(n)}
throw new Error("Only string and number values can be query-encoded, not "+e)
}(n))})).join("=")})).join("&")}}}));