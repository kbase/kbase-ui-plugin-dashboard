define(["bluebird"],(function(n){"use strict";function e(e){
var r=e.runtime,u=e.moduleBase||"/modules",t={};function i(e,t){
return new n((function(i,o){var c={},s={},a=e.directory,f=[],l=!1
;t.source&&(t.source.styles&&t.source.styles.forEach((function(n){
n.file&&f.push("css!"+a+"/resources/css/"+n.file)
})),t.source.modules&&(t.source.modules.length>0&&(l=!0),
t.source.modules.forEach((function(n){
var e=n.file,r=e.match(/^([\S\s]+?)(?:(?:\.js$)|(?:$))/);if(r){e=r[1]
;var u=a+"/modules/"+e;if(c[n.module]=u,n.css){var t=n.module+"_css"
;c[t]=u,s[n.module]={deps:["css!"+t]}}}})))),require.config({paths:c,shim:s
}),define("kb_plugin_"+t.package.name,[],(function(){return{plugin:{
path:"/"+a+"/resources",modulePath:"/"+a+"/resources",
fullPath:u+"/"+a+"/resources"}}}));var h={usingSourceModules:l,
moduleRoot:a+"/modules"};t.install?require(f,(function(){var e=[]
;Object.keys(t.install).forEach((function(u){var i=function(e,u,t){
return n.try((function(){var n,i=e.match(/(.*?)(:?(s)|($))$/);if(i){
if(n=i[1],!r.hasService(n))throw{name:"MissingService",
message:'The requested service "'+n+'" was not registered in the plugin manager',
suggestion:"This is a web app configuration issue, not a user error"}
;var o=r.getService(n);return o.pluginHandler?o.pluginHandler(u,t):void 0}}))
}(u,t.install[u],h);!function(n,e){e&&e.forEach((function(e){n.push(e)}))
}(e,[i])})),n.all(e).then((function(n){i()})).catch((function(n){
console.error(n),o(n)}))})):i()}))}function o(e){var r=e.map((function(e){
return function(e){var r;return r="string"==typeof e?{name:e,
directory:"plugins/"+e}:e,new n((function(n,e){
require(["yaml!"+r.directory+"/config.yml"],(function(u){
i(r,u).then((function(){n(r)})).catch((function(n){e(n)}))}))}))}(e)}))
;return n.all(r)}return{installPlugins:o,installPluginSets:function(e){
return function(e){return new n((function(r,u){!function e(t){
void 0!==t&&0!==t.length||r("DONE");var i=t[0],o=t.slice(1);n.try((function(){
return new n((function(n,e,r){i(n,e,r)}))})).then((function(){return e(o)
})).catch((function(n){u(n)}))}(e)}))}(e.map((function(n){
return function(e,r,u){o(n).then((function(){e()})).catch((function(n){r(n)}))}
})))},registerService:function(n,e){n.forEach((function(n){t[n]=e}))}}}return{
make:function(n){return e(n)}}}));