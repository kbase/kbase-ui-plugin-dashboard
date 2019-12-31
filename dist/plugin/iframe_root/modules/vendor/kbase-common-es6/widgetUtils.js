define([],(function(){"use strict";return{Params:class{constructor(r){
this.params=r}check(r,e,t){if(!(r in this.params)){
if(t.required)throw new Error('Parameter "'+r+'" is required and was not provided')
;return}const s=this.params[r]
;if(typeof s!==e)throw new Error("Parameter "+r+" is not of the expected type: "+e)
;return s}}}}));