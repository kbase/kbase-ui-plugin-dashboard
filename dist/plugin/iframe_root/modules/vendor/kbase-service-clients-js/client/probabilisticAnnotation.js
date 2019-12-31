define(["jquery","bluebird"],(function(n,t){"use strict";return function(r,e,o){
if("string"!=typeof r)throw new Error("Service url was not provided");this.url=r
;var i=r,a=!1;function s(){if(!a){if(a=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var u=e||{token:"",user_id:""},c=o;function l(r,e,o,a,s){var l=n.Deferred()
;"function"==typeof a&&l.done(a),"function"==typeof s&&l.fail(s);var f={
params:e,method:r,version:"1.1",id:String(Math.random()).slice(2)
},b=null,p=c&&"function"==typeof c?c():u.token?u.token:null
;null!==p&&(b=function(n){n.setRequestHeader("Authorization",p)})
;var h=jQuery.ajax({url:i,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(f),beforeSend:b,success:function(n,t,r){var e;try{
var a=JSON.parse(n);e=1===o?a.result[0]:a.result}catch(s){return void l.reject({
status:503,error:s,url:i,resp:n})}l.resolve(e)},error:function(n,t,r){var e
;if(n.responseText)try{e=JSON.parse(n.responseText).error}catch(o){
e="Unknown error - "+n.responseText}else e="Unknown Error";l.reject({status:500,
error:e})}}),d=l.promise();return d.xhr=h,t.resolve(d)}
this.version=function(n,t){return l("ProbabilisticAnnotation.version",[],1,n,t)
},this.version_async=function(n,t){
return s(),l("ProbabilisticAnnotation.version",[],1,n,t)
},this.annotate=function(n,t,r){
return l("ProbabilisticAnnotation.annotate",[n],1,t,r)
},this.annotate_async=function(n,t,r){
return s(),l("ProbabilisticAnnotation.annotate",[n],1,t,r)
},this.calculate=function(n,t,r){
return l("ProbabilisticAnnotation.calculate",[n],1,t,r)
},this.calculate_async=function(n,t,r){
return s(),l("ProbabilisticAnnotation.calculate",[n],1,t,r)
},this.get_rxnprobs=function(n,t,r){
return l("ProbabilisticAnnotation.get_rxnprobs",[n],1,t,r)
},this.get_rxnprobs_async=function(n,t,r){
return s(),l("ProbabilisticAnnotation.get_rxnprobs",[n],1,t,r)
},this.get_probanno=function(n,t,r){
return l("ProbabilisticAnnotation.get_probanno",[n],1,t,r)
},this.get_probanno_async=function(n,t,r){
return s(),l("ProbabilisticAnnotation.get_probanno",[n],1,t,r)}}}));