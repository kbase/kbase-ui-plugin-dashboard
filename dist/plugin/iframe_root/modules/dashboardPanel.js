define(["bluebird","kb_lib/html","kb_lib/observed","lib/widget/widgetSet","bootstrap"],(function(t,a,e,r){
"use strict";var i=(0,a.tag)("div");function d(a){var d,n,o=a.runtime,s=new r({
widgetManager:o.widgetManager}),u=new e;return{attach:function(a){
return t.try((function(){
return d=a,n=document.createElement("div"),d.appendChild(n),n.innerHTML=i({},i({
class:"kbase-view kbase-dashboard-view container-fluid",dataKbaseView:"social",
dataKBTesthookPlugin:"dashboard"},[i({class:"row"},[i({class:"col-sm-12"},[i({
id:s.addWidget("dashboardNarratives",{viewState:u})}),i({
id:s.addWidget("dashboardNarratorials",{viewState:u})}),i({
id:s.addWidget("dashboardSharedNarratives",{viewState:u})}),i({
id:s.addWidget("dashboardPublicNarratives",{viewState:u})}),i({
id:s.addWidget("dashboardCollaborators",{viewState:u})
})])])])),o.send("ui","setTitle","Your Dashboard"),s.init().then((function(){
return s.attach(n)}))}))},start:function(t){return s.start(t)},run:function(t){
return s.run(t)},stop:function(){return s.stop()},detach:function(){
return s.detach()}}}return{make:function(t){return d(t)}}}));