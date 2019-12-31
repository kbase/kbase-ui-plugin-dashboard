define(["jquery","bluebird"],(function(e,r){"use strict";return{
getJSON:function(t){var n;return t.sync?(e.get({
url:"/data/"+t.path+"/"+t.file+".json",async:!1,dataType:"json",
success:function(e){n=e},error:function(e){
throw new Error("Error getting data: "+t.file)}
}),n):new r.resolve(e.get("/data/"+t.path+"/"+t.file+".json"))}}}));