define(["./props"],(function(t){"use strict";return{make:function(){
return function(){var n=t.make(),e=!1;return{set:function(t,r){
n.setItem(t,r),e=!0},get:function(t){return n.getItem(t)},has:function(t){
return n.hasItem(t)},isDirty:function(){return e},setClean:function(){e=!1}}}()}
}}));