define(["./props"],(function(e){"use strict";return{
testGetSimpleProp:function(t){[{expected:"Coco",prop:"name"},{expected:"Coco",
prop:["name"]}].forEach(o=>{const p={name:o.expected}
;e.getProp(p,o.prop)===o.expected?t.success():t.fail()})},
testGetPropPath:function(t){const o={name:"Coco",favoriteFoods:{
breakfast:"chow",lunch:"chow",dinner:"special-chow"}};[{expected:"special-chow",
prop:"favoriteFoods.dinner"},{expected:"special-chow",
prop:["favoriteFoods","dinner"]}].forEach(p=>{
e.getProp(o,p.prop)===p.expected?t.success():t.fail()})},
testSetThenGetProp:function(t){[{value:"peet",prop:"name"},{
value:"special-chow",prop:["name"]}].forEach(o=>{const p={}
;e.setProp(p,o.prop,o.value);const c=e.getProp(p,o.prop)
;c===o.value?t.success():t.fail({actual:c,expected:o.value})})},
testSetThenDeleteThenGetProp:function(t){const o={};e.setProp(o,"name","peet")
;const p=e.getProp(o,"name"),c=e.deleteProp(o,"name"),n=e.getProp(o,"name",null)
;"peet"===p&&null===n&&!0===c?t.success():t.fail()},
testSetThenHasProp:function(t){[{value:"peet",prop:"name"},{
value:"special-chow",prop:["name"]}].forEach(o=>{const p={}
;e.setProp(p,o.prop,o.value),e.hasProp(p,o.prop)?t.success():t.fail()})},
testIncrement:function(t){[{prop:"goals",initial:0,expected:1},{prop:"goals",
initial:-1,expected:0}].forEach(o=>{const p={goals:o.initial}
;e.incrProp(p,o.prop),e.getProp(p,o.prop)===o.expected?t.success():t.fail()})},
testDeleteNonexistentProperty:function(t){const o={};e.setProp(o,"name","peet"),
!1===e.deleteProp(o,"age")?t.success():t.fail()},
testDeleteNonexistentPathComponent:function(t){const o={}
;e.setProp(o,"name","peet"),
!1===e.deleteProp(o,"birth.date")?t.success():t.fail()},
testDeleteWithInvalidPath:function(t){const o={}
;e.setProp(o,"name","peet"),[void 0,null,1,1.23,!0,!1,new Date].forEach(p=>{try{
return e.deleteProp(o,p),void t.fail()}catch(c){t.success()}})},
testSetWithInvalidPath:function(t){const o={}
;[void 0,null,1,1.23,!0,!1,new Date].forEach(p=>{try{
return e.setProp(o,p,"peet"),void t.fail()}catch(c){t.success()}})}}}));