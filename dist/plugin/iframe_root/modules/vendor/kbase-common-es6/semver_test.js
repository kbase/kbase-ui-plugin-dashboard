define(["./semver"],(function(e){"use strict";return{
testParseSemver:function(t){[{input:"1.2.3",expected:[1,2,3,void 0]},{
input:"1.2.3-beta1",expected:[1,2,3,"beta1"]}].forEach(a=>{
const r=e.parseSemver(a.input);!function(e,t){if(e.length!==t.length)return!1
;for(let a=0;a<e.length;a+=1)if(e[a]!==t[a])return!1;return!0
}(r,a.expected)?t.fail({actual:r,expected:a.expected}):t.success()})},
testComparison:function(t){[{actualVersion:"1.2.3",desiredVersion:"1.2.3",
expected:!0},{actualVersion:"1.2.3",desiredVersion:"1.2.4",
expected:"patch-too-low"},{actualVersion:"1.2.3",desiredVersion:"1.3.3",
expected:"minor-too-low"},{actualVersion:"2.2.3",desiredVersion:"1.2.4",
expected:"major-incompatible"},{actualVersion:"1.2.3-beta",
desiredVersion:"1.2.3-beta",expected:!0},{actualVersion:"1.2.3-beta2",
desiredVersion:"1.2.3-beta1",expected:!0},{actualVersion:"1.2.3-beta",
desiredVersion:"1.2.3-alpha",expected:!0},{actualVersion:"1.2.3-alpha",
desiredVersion:"1.2.3-beta",expected:"prerelease-too-low"},{
actualVersion:"1.2.3-alpha1",desiredVersion:"1.2.3-alpha2",
expected:"prerelease-too-low"},{actualVersion:"1.2.3-alpha1",
desiredVersion:"1.2.3",expected:"prerelease-makes-patch-too-low"},{
actualVersion:"1.2.3",desiredVersion:"1.2.3-alpha1",expected:!0}].forEach(a=>{
const r=e.semverIsAtLeast(a.actualVersion,a.desiredVersion)
;r===a.expected?t.success():t.fail({actual:r,expected:a.expected})})}}}));