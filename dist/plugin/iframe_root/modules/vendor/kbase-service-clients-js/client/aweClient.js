define(["jquery","bluebird"],(function(r,e){"use strict";return function(r){
var t=this
;t.url="https://kbase.us/services/awe-api/",t.auth_header={},r.url&&(t.url=r.url),
r.token&&(t.auth_header={Authorization:"OAuth "+r.token
}),t.get_job=function(r,u,a){var o=t.url+"/job/"+r,n=jQuery.Deferred()
;return jQuery.ajax(o,{success:function(r){var e=!1
;r?r.error?a&&a(r.error):r.data?u(r.data):e=!0:e=!0,
e&&a&&a("Error: invalid data returned from AWE server"),n.resolve()},
error:function(r,e){a&&a(e),n.resolve()},headers:t.auth_header,type:"GET"
}),e.resolve(n)}}}));