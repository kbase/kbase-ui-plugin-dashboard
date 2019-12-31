define(["./utils","yaml!DEV/config/client.yml"],(function(t,i){"use strict"
;return Object.create({},{config:{value:null,writable:!0},init:{
value:function(t){return this.config=i,this}},getItem:{value:function(i,e){
return t.getProp(this.config,i,e)}},setItem:{value:function(i,e){
t.setProp(this.config,i,e)}},hasItem:{value:function(i){
return void 0!==t.getProp(this.config,i)}}}).init()}));