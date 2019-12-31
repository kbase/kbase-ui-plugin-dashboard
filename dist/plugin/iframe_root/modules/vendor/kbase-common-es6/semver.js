define([],(function(){"use strict";function e(e){
const r=/^([\d]+)\.([\d]+)\.([\d]+)(?:-(.*))?$/.exec(e)
;if(!r)throw new Error("Not a semver string: "+e);const[,t,o,n,i]=r
;return[parseInt(t,10),parseInt(o,10),parseInt(n,10),i]}return{parseSemver:e,
semverIsAtLeast:function(r,t){const[o,n,i,s]=e(r),[a,u,c,f]=e(t)
;if(a!==o)return"major-incompatible"
;if(0===a)return u!==n?"dev-semver-minor-incompatible":c>i?"dev-semver-patch-too-low":!s||(!f||(!(f>s)||"prerelease-too-low"))
;if(u>n)return"minor-too-low";if(u===n&&c>i)return"patch-too-low";if(c===i){
if(!s)return!0;if(!f)return"prerelease-makes-patch-too-low"
;if(f>s)return"prerelease-too-low"}return!0}}}));