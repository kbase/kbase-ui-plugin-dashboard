define([],(function(){"use strict";function e(e){
this.type=e.type,this.reason=e.reason,this.message=e.message,this.blame=e.blame,
this.code=e.code,this.suggestion=e.suggestion}return e.prototype=new Error,{
UIError:e}}));