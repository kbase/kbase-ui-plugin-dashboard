define(["./ajax","./exceptions"],(function(r,e){"use strict"
;return Object.freeze({request:function(t,o,n,s,i){const a={params:s,
method:o+"."+n,version:"1.1",id:i.id||String(Math.random()).slice(2)},c={
"Content-Type":"application/json; charset=utf-8"}
;return i.rpcContext&&(a.context=i.rpcContext),
null!==i.authorization&&(c.Authorization=i.authorization),r.post({url:t,
timeout:i.timeout,data:JSON.stringify(a),header:c}).then(r=>{try{
return JSON.parse(r).result}catch(t){
throw new e.ResponseValueError(o,n,s,r,"Error processing response as json",t.message)
}}).catch(e.ClientError,e.ServerError,r=>{let i,a,c;try{
i=JSON.parse(r.xhr.responseText)}catch(u){throw r}if(!function(r){
return!!r&&("object"==typeof r&&("string"==typeof r.name&&(("string"==typeof r.message||null===r.message)&&(("string"==typeof r.error||null===r.error)&&"number"==typeof r.code))))
}(i.error))throw new e.JsonRpcNonconformingError(o,n,s,t,i)
;switch(i.error&&i.error.error&&"string"==typeof i.error.error&&(a=i.error.error.split("\n"),
a.length>=2&&(c=a[a.length-2])),c){case"AttributeError":
throw new e.AttributeError(o,n,i);default:
throw new e.JsonRpcError(o,n,s,t,i.error)}})}})}));