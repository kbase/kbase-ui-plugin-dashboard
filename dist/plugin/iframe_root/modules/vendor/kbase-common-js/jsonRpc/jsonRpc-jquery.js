define(["jquery","bluebird","./exceptions"],(function(e,t,r){"use strict"
;return Object.freeze({request:function(s,n,o,a,u){var i,c={params:o,method:n,
version:"1.1",id:String(Math.random()).slice(2)}
;return u.rpcContext&&(c.context=u.rpcContext),
null!==u.authorization&&(i=function(e){
e.setRequestHeader("Authorization",u.authorization)}),new t((function(t,n){
e.ajax({url:s,dataType:"text",type:"POST",processData:!1,data:JSON.stringify(c),
beforeSend:i,timeout:u.timeout,success:function(e){try{var o=JSON.parse(e)
;t(1===a?o.result[0]:o.result)}catch(u){n(new r.InvalidResponseError(u,s,e))}},
error:function(e,o){if(e.responseText)try{var a=JSON.parse(e.responseText)
;console.warn("Invalid JSON RPC error response - should not return json-rpc error as http error",e.status,e.statusText,a),
t(a)}catch(u){n(new r.RequestError(e.status,e.statusText,o,s,e.responseText))
}else n(new r.RequestError(e.status,e.statusText,s,"Unknown Error"))}})}))}})
}));