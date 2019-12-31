define([],(function(){"use strict";class r extends Error{constructor(r){super(r)
}}class s extends Error{constructor(r){super(r)}}return Object.freeze({
AjaxError:r,RedirectError:class extends r{constructor(r,s,t){
super(s),this.code=r,this.xhr=t,this.stack=(new Error).stack}},
ClientError:class extends r{constructor(r,s,t){
super(s),this.code=r,this.xhr=t,this.stack=(new Error).stack}},
ServerError:class extends r{constructor(r,s,t){
super(s),this.code=r,this.xhr=t,this.stack=(new Error).stack}},
TimeoutError:class extends r{constructor(r,s,t,e){
super(t),this.timeout=r,this.elapsed=s,this.xhr=e,this.stack=(new Error).stack}
},GeneralError:class extends r{constructor(r,s){
super(r),this.xhr=s,this.stack=(new Error).stack}},
ConnectionError:class extends r{constructor(r,s){
super(r),this.xhr=s,this.stack=(new Error).stack}},AbortError:class extends r{
constructor(r,s){super(r),this.xhr=s,this.stack=(new Error).stack}},RpcError:s,
InvalidResponseError:class extends s{constructor(r,s,t){
super("Invalid Response"),
this.originalError=r,this.url=s,this.data=t,this.stack=(new Error).stack}},
RequestError:class extends s{constructor(r,s,t,e){
super(e),this.statusCode=r,this.statusText=s,
this.url=t,this.stack=(new Error).stack}},ResponseValueError:class extends s{
constructor(r,s,t,e,o,c){
super(o),this.module=r,this.func=s,this.params=t,this.response=e,this.message=o,
this.processingMessage=c,this.stack=(new Error).stack}},
JsonRpcError:class extends s{constructor(r,s,t,e,o){let c
;if(super("JSONRPC Error"),
this.module=r,this.func=s,this.params=t,this.url=e,this.originalError=o,
o.message)c=o.message;else{const r=o.error;if("string"==typeof r){
c=r.split("\n")[0]||""}}
this.message=c,this.detail=o.error,this.type=o.name,this.code=o.code,
this.stack=(new Error).stack}},JsonRpcNonconformingError:class extends s{
constructor(r,s,t,e,o){
super("JSONRPC Non-Conforming Error"),this.module=r,this.func=s,
this.params=t,this.url=e,this.data=o,this.stack=(new Error).stack}},
AttributeError:class extends s{constructor(r,s,t){
super("Attribute Error"),this.module=r,
this.func=s,this.originalError=t,this.stack=(new Error).stack}}})}));