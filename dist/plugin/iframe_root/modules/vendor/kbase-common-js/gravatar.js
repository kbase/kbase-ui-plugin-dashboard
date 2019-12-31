define(["md5"],(function(r){"use strict";return{make:function(a){return{
makeGravatarUrl:function(a,t,n,e){
return"https://www.gravatar.com/avatar/"+r.hash(a)+"?s="+t+"&amp;r="+n+"&d="+e}}
}}}));