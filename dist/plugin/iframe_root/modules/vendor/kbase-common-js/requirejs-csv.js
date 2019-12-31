define(["text"],(function(e){"use strict";return{load:function(e,n,t,i){
i.isBuild?t(""):n(["text!"+e],(function(e){t(parseCsv(e))}))},
loadFromFileSystem:function(e,n){var t=nodeRequire("fs"),i=require.toUrl(n)
;return'define("'+e+"!"+n+'", function () {\nreturn '+t.readFileSync(i).toString()+";\n});\n"
},write:function(e,n,t){t(this.loadFromFileSystem(e,n))}}}));