define(["./state"],(function(e){"use strict";return{
testGetStateProperty:function(t){class n extends e.Collection{constructor(){
super()}createKey(e){if("username"in e)return e.username
;throw new Error("Cannot create key for object: "+Object.keys(e).join(", "))}}
const r=new n;r.start(),r.add({username:"abc",name:"Aye Bee Cee"})
;const s=r.get({username:"abc"})
;s&&"abc"===s.username&&"Aye Bee Cee"===s.name?t.success():t.fail("did not get expected value")
}}}));