/*!
**  Pure-UUID -- Pure JavaScript Based Universally Unique Identifier (UUID)
**  Copyright (c) 2004-2019 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
!function(r,t,n){
"function"==typeof define&&void 0!==define.amd?define((function(){return n()
})):"object"==typeof module&&"object"==typeof module.exports?(module.exports=n(),
module.exports.default=module.exports):r.UUID=n()}(this,0,(function(){
var r=function(r,t,n,e,i,o){for(var a=function(r,t){var n=r.toString(16)
;return n.length<2&&(n="0"+n),t&&(n=n.toUpperCase()),n
},f=t;f<=n;f++)i[o++]=a(r[f],e);return i},t=function(r,t,n,e,i){
for(var o=t;o<=n;o+=2)e[i++]=parseInt(r.substr(o,2),16)
},n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split(""),e=[0,68,0,84,83,82,72,0,75,76,70,65,0,63,62,69,0,1,2,3,4,5,6,7,8,9,64,0,73,66,74,71,81,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,77,0,78,67,0,0,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,79,0,80,0,0],i=function(r,t){
var n={ibits:8,obits:8,obigendian:!0};for(var e in t)void 0!==n[e]&&(n[e]=t[e])
;for(var i,o,a,f=[],u=0,s=0,h=0,c=r.length;0===s&&(o=r.charCodeAt(u++)),
i=o>>n.ibits-(s+8)&255,
s=(s+8)%n.ibits,n.obigendian?0===h?a=i<<n.obits-8:a|=i<<n.obits-8-h:0===h?a=i:a|=i<<h,
!(0===(h=(h+8)%n.obits)&&(f.push(a),u>=c)););return f},o=function(r,t){var n={
ibits:32,ibigendian:!0};for(var e in t)void 0!==n[e]&&(n[e]=t[e])
;var i="",o=4294967295;n.ibits<32&&(o=(1<<n.ibits)-1)
;for(var a=r.length,f=0;f<a;f++)for(var u=r[f]&o,s=0;s<n.ibits;s+=8)n.ibigendian?i+=String.fromCharCode(u>>n.ibits-8-s&255):i+=String.fromCharCode(u>>s&255)
;return i},a=function(r,t,n,e,i,o,a,f){return[f,a,o,i,e,n,t,r]},f=function(){
return a(0,0,0,0,0,0,0,0)},u=function(r){return r.slice(0)},s=function(r){
for(var t=f(),n=0;n<8;n++)t[n]=Math.floor(r%256),r/=256;return t},h=function(r){
for(var t=0,n=7;n>=0;n--)t*=256,t+=r[n];return Math.floor(t)},c=function(r,t){
for(var n=0,e=0;e<8;e++)n+=r[e]+t[e],r[e]=Math.floor(n%256),n=Math.floor(n/256)
;return n},d=function(r,t){
for(var n=0,e=0;e<8;e++)n+=r[e]*t,r[e]=Math.floor(n%256),n=Math.floor(n/256)
;return n},v=function(r,t){for(var n=0;n<8;n++)r[n]&=t[n];return r
},p=function(r,t){var n=f()
;if(t%8!=0)throw new Error("ui64_rorn: only bit rotations supported with a multiple of digit bits")
;for(var e=Math.floor(t/8),i=0;i<e;i++){for(var o=6;o>=0;o--)n[o+1]=n[o]
;for(n[0]=r[0],o=0;o<7;o++)r[o]=r[o+1];r[o]=0}return h(n)},l=function(r,t){
if(t>64)throw new Error("ui64_ror: invalid number of bits to shift")
;var n,e=new Array(16);for(n=0;n<8;n++)e[n+8]=r[n],e[n]=0
;var i=Math.floor(t/8),o=t%8;for(n=i;n<15;n++)e[n-i]=255&(e[n]>>>o|e[n+1]<<8-o)
;for(e[15-i]=e[15]>>>o&255,n=15-i+1;n<16;n++)e[n]=0;for(n=0;n<8;n++)r[n]=e[n+8]
;return e.slice(0,8)},b=function(r,t){for(var n=0;n<8;n++)r[n]^=t[n]
},x=function(r,t){var n=(65535&r)+(65535&t)
;return(r>>16)+(t>>16)+(n>>16)<<16|65535&n},m=function(r,t){
return r<<t&4294967295|r>>>32-t&4294967295},w=function(r){
return o(function(r,t){function n(r,t,n,e){
return r<20?t&n|~t&e:r<40?t^n^e:r<60?t&n|t&e|n&e:t^n^e}function e(r){
return r<20?1518500249:r<40?1859775393:r<60?-1894007588:-899497514}
r[t>>5]|=128<<24-t%32,r[15+(t+64>>9<<4)]=t
;for(var i=Array(80),o=1732584193,a=-271733879,f=-1732584194,u=271733878,s=-1009589776,h=0;h<r.length;h+=16){
for(var c=o,d=a,v=f,p=u,l=s,b=0;b<80;b++){
i[b]=b<16?r[h+b]:m(i[b-3]^i[b-8]^i[b-14]^i[b-16],1)
;var w=x(x(m(o,5),n(b,a,f,u)),x(x(s,i[b]),e(b)));s=u,u=f,f=m(a,30),a=o,o=w}
o=x(o,c),a=x(a,d),f=x(f,v),u=x(u,p),s=x(s,l)}return[o,a,f,u,s]}(i(r,{ibits:8,
obits:32,obigendian:!0}),8*r.length),{ibits:32,ibigendian:!0})},y=function(r){
return o(function(r,t){function n(r,t,n,e,i,o){return x(m(x(x(t,r),x(e,o)),i),n)
}function e(r,t,e,i,o,a,f){return n(t&e|~t&i,r,t,o,a,f)}
function i(r,t,e,i,o,a,f){return n(t&i|e&~i,r,t,o,a,f)}
function o(r,t,e,i,o,a,f){return n(t^e^i,r,t,o,a,f)}function a(r,t,e,i,o,a,f){
return n(e^(t|~i),r,t,o,a,f)}r[t>>5]|=128<<t%32,r[14+(t+64>>>9<<4)]=t
;for(var f=1732584193,u=-271733879,s=-1732584194,h=271733878,c=0;c<r.length;c+=16){
var d=f,v=u,p=s,l=h
;f=e(f,u,s,h,r[c+0],7,-680876936),h=e(h,f,u,s,r[c+1],12,-389564586),
s=e(s,h,f,u,r[c+2],17,606105819),
u=e(u,s,h,f,r[c+3],22,-1044525330),f=e(f,u,s,h,r[c+4],7,-176418897),
h=e(h,f,u,s,r[c+5],12,1200080426),
s=e(s,h,f,u,r[c+6],17,-1473231341),u=e(u,s,h,f,r[c+7],22,-45705983),
f=e(f,u,s,h,r[c+8],7,1770035416),
h=e(h,f,u,s,r[c+9],12,-1958414417),s=e(s,h,f,u,r[c+10],17,-42063),
u=e(u,s,h,f,r[c+11],22,-1990404162),
f=e(f,u,s,h,r[c+12],7,1804603682),h=e(h,f,u,s,r[c+13],12,-40341101),
s=e(s,h,f,u,r[c+14],17,-1502002290),
f=i(f,u=e(u,s,h,f,r[c+15],22,1236535329),s,h,r[c+1],5,-165796510),
h=i(h,f,u,s,r[c+6],9,-1069501632),
s=i(s,h,f,u,r[c+11],14,643717713),u=i(u,s,h,f,r[c+0],20,-373897302),
f=i(f,u,s,h,r[c+5],5,-701558691),
h=i(h,f,u,s,r[c+10],9,38016083),s=i(s,h,f,u,r[c+15],14,-660478335),
u=i(u,s,h,f,r[c+4],20,-405537848),
f=i(f,u,s,h,r[c+9],5,568446438),h=i(h,f,u,s,r[c+14],9,-1019803690),
s=i(s,h,f,u,r[c+3],14,-187363961),
u=i(u,s,h,f,r[c+8],20,1163531501),f=i(f,u,s,h,r[c+13],5,-1444681467),
h=i(h,f,u,s,r[c+2],9,-51403784),
s=i(s,h,f,u,r[c+7],14,1735328473),f=o(f,u=i(u,s,h,f,r[c+12],20,-1926607734),s,h,r[c+5],4,-378558),
h=o(h,f,u,s,r[c+8],11,-2022574463),
s=o(s,h,f,u,r[c+11],16,1839030562),u=o(u,s,h,f,r[c+14],23,-35309556),
f=o(f,u,s,h,r[c+1],4,-1530992060),
h=o(h,f,u,s,r[c+4],11,1272893353),s=o(s,h,f,u,r[c+7],16,-155497632),
u=o(u,s,h,f,r[c+10],23,-1094730640),
f=o(f,u,s,h,r[c+13],4,681279174),h=o(h,f,u,s,r[c+0],11,-358537222),
s=o(s,h,f,u,r[c+3],16,-722521979),
u=o(u,s,h,f,r[c+6],23,76029189),f=o(f,u,s,h,r[c+9],4,-640364487),
h=o(h,f,u,s,r[c+12],11,-421815835),
s=o(s,h,f,u,r[c+15],16,530742520),f=a(f,u=o(u,s,h,f,r[c+2],23,-995338651),s,h,r[c+0],6,-198630844),
h=a(h,f,u,s,r[c+7],10,1126891415),
s=a(s,h,f,u,r[c+14],15,-1416354905),u=a(u,s,h,f,r[c+5],21,-57434055),
f=a(f,u,s,h,r[c+12],6,1700485571),
h=a(h,f,u,s,r[c+3],10,-1894986606),s=a(s,h,f,u,r[c+10],15,-1051523),
u=a(u,s,h,f,r[c+1],21,-2054922799),
f=a(f,u,s,h,r[c+8],6,1873313359),h=a(h,f,u,s,r[c+15],10,-30611744),
s=a(s,h,f,u,r[c+6],15,-1560198380),
u=a(u,s,h,f,r[c+13],21,1309151649),f=a(f,u,s,h,r[c+4],6,-145523070),
h=a(h,f,u,s,r[c+11],10,-1120210379),
s=a(s,h,f,u,r[c+2],15,718787259),u=a(u,s,h,f,r[c+9],21,-343485551),
f=x(f,d),u=x(u,v),s=x(s,p),h=x(h,l)}return[f,u,s,h]}(i(r,{ibits:8,obits:32,
obigendian:!1}),8*r.length),{ibits:32,ibigendian:!1})},g=function(r){
this.mul=a(88,81,244,45,76,149,127,45),
this.inc=a(20,5,123,126,247,103,129,79),this.mask=a(0,0,0,0,255,255,255,255),
this.state=u(this.inc),
this.next(),v(this.state,this.mask),r=s(void 0!==r?r>>>0:4294967295*Math.random()>>>0),
function(r,t){for(var n=0;n<8;n++)r[n]|=t[n]}(this.state,r),this.next()}
;g.prototype.next=function(){var r=u(this.state);!function(r,t){
var n,e,i,o=new Array(16);for(n=0;n<16;n++)o[n]=0;for(n=0;n<8;n++){
for(i=0,e=0;e<8;e++)i+=r[n]*t[e]+o[n+e],o[n+e]=i%256,i/=256
;for(;e<16-n;e++)i+=o[n+e],o[n+e]=i%256,i/=256}for(n=0;n<8;n++)r[n]=o[n]
;o.slice(8,8)}(this.state,this.mul),c(this.state,this.inc);var t=u(r)
;l(t,18),b(t,r),l(t,27);var n=u(r);l(n,59),v(t,this.mask);var e=h(n),i=u(t)
;return function(r,t){
if(t>64)throw new Error("ui64_rol: invalid number of bits to shift")
;var n,e=new Array(16);for(n=0;n<8;n++)e[n+8]=0,e[n]=r[n]
;var i=Math.floor(t/8),o=t%8;for(n=7-i;n>0;n--)e[n+i]=255&(e[n]<<o|e[n-1]>>>8-o)
;for(e[0+i]=e[0]<<o&255,n=0+i-1;n>=0;n--)e[n]=0;for(n=0;n<8;n++)r[n]=e[n]
;e.slice(8,8)}(i,32-e),l(t,e),b(t,i),h(t)};var U=new g,A=function(r,t){
for(var n=[],e=0;e<r;e++)n[e]=U.next()%t;return n},D=0,E=0,I=function(){
if(1===arguments.length&&"string"==typeof arguments[0])this.parse.apply(this,arguments);else if(arguments.length>=1&&"number"==typeof arguments[0])this.make.apply(this,arguments);else{
if(arguments.length>=1)throw new Error("UUID: constructor: invalid arguments")
;for(var r=0;r<16;r++)this[r]=0}}
;return(I.prototype="undefined"!=typeof Uint8Array?new Uint8Array(16):Buffer?new Buffer(16):new Array(16)).constructor=I,
I.prototype.make=function(r){var t,n=this;if(1===r){var e=new Date,i=e.getTime()
;i!==D?E=0:E++,D=i;var o,f=s(i)
;d(f,1e4),c(f,a(1,178,29,210,19,129,64,0)),E>0&&c(f,s(E)),
o=p(f,8),n[3]=255&o,o=p(f,8),n[2]=255&o,o=p(f,8),n[1]=255&o,o=p(f,8),n[0]=255&o,
o=p(f,8),n[5]=255&o,o=p(f,8),n[4]=255&o,o=p(f,8),n[7]=255&o,o=p(f,8),n[6]=15&o
;var u=A(2,255);n[8]=u[0],n[9]=u[1];var h=A(6,255)
;for(h[0]|=1,h[0]|=2,t=0;t<6;t++)n[10+t]=h[t]}else if(4===r){var v=A(16,255)
;for(t=0;t<16;t++)this[t]=v[t]}else{
if(3!==r&&5!==r)throw new Error("UUID: make: invalid version")
;var l="",b="object"==typeof arguments[1]&&arguments[1]instanceof I?arguments[1]:(new I).parse(arguments[1])
;for(t=0;t<16;t++)l+=String.fromCharCode(b[t]);l+=arguments[2]
;var x=3===r?y(l):w(l);for(t=0;t<16;t++)n[t]=x.charCodeAt(t)}
return n[6]&=15,n[6]|=r<<4,n[8]&=63,n[8]|=128,n},I.prototype.format=function(t){
var e,i;return"z85"===t?e=function(r,t){
if(t%4!=0)throw new Error("z85_encode: invalid input length (multiple of 4 expected)")
;for(var e="",i=0,o=0;i<t;)if(o=256*o+r[i++],i%4==0){for(var a=52200625;a>=1;){
var f=Math.floor(o/a)%85;e+=n[f],a/=85}o=0}return e
}(this,16):"b16"===t?(i=Array(32),
r(this,0,15,!0,i,0),e=i.join("")):void 0!==t&&"std"!==t||(i=new Array(36),
r(this,0,3,!1,i,0),
i[8]="-",r(this,4,5,!1,i,9),i[13]="-",r(this,6,7,!1,i,14),i[18]="-",
r(this,8,9,!1,i,19),i[23]="-",r(this,10,15,!1,i,24),e=i.join("")),e
},I.prototype.toString=function(r){return this.format(r)
},I.prototype.parse=function(r,n){
if("string"!=typeof r)throw new Error("UUID: parse: invalid argument (type string expected)")
;if("z85"===n)!function(r,t){var n=r.length
;if(n%5!=0)throw new Error("z85_decode: invalid input length (multiple of 5 expected)")
;void 0===t&&(t=new Array(4*n/5));for(var i=0,o=0,a=0;i<n;){
var f=r.charCodeAt(i++)-32;if(f<0||f>=e.length)break;if(a=85*a+e[f],i%5==0){
for(var u=16777216;u>=1;)t[o++]=Math.trunc(a/u%256),u/=256;a=0}}
}(r,this);else if("b16"===n)t(r,0,35,this,0);else if(void 0===n||"std"===n){
var i={nil:"00000000-0000-0000-0000-000000000000",
"ns:DNS":"6ba7b810-9dad-11d1-80b4-00c04fd430c8",
"ns:URL":"6ba7b811-9dad-11d1-80b4-00c04fd430c8",
"ns:OID":"6ba7b812-9dad-11d1-80b4-00c04fd430c8",
"ns:X500":"6ba7b814-9dad-11d1-80b4-00c04fd430c8"}
;if(void 0!==i[r])r=i[r];else if(!r.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/))throw new Error('UUID: parse: invalid string representation (expected "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")')
;t(r,0,7,this,0),
t(r,9,12,this,4),t(r,14,17,this,6),t(r,19,22,this,8),t(r,24,35,this,10)}
return this},I.prototype.export=function(){
for(var r=Array(16),t=0;t<16;t++)r[t]=this[t];return r
},I.prototype.import=function(r){
if(!("object"==typeof r&&r instanceof Array))throw new Error("UUID: import: invalid argument (type Array expected)")
;if(16!==r.length)throw new Error("UUID: import: invalid argument (Array of length 16 expected)")
;for(var t=0;t<16;t++){
if("number"!=typeof r[t])throw new Error("UUID: import: invalid array element #"+t+" (type Number expected)")
;if(!isFinite(r[t])||Math.floor(r[t])!==r[t])throw new Error("UUID: import: invalid array element #"+t+" (Number with integer value expected)")
;if(!(r[t]>=0&&r[t]<=255))throw new Error("UUID: import: invalid array element #"+t+" (Number with integer value in range 0...255 expected)")
;this[t]=r[t]}return this},I.prototype.compare=function(r){
if("object"!=typeof r)throw new Error("UUID: compare: invalid argument (type UUID expected)")
;if(!(r instanceof I))throw new Error("UUID: compare: invalid argument (type UUID expected)")
;for(var t=0;t<16;t++){if(this[t]<r[t])return-1;if(this[t]>r[t])return 1}
return 0},I.prototype.fold=function(r){
if(void 0===r)throw new Error("UUID: fold: invalid argument (number of fold operations expected)")
;if(r<1||r>4)throw new Error("UUID: fold: invalid argument (1-4 fold operations expected)")
;for(var t=16/Math.pow(2,r),n=new Array(t),e=0;e<t;e++){
for(var i=0,o=0;e+o<16;o+=t)i^=this[e+o];n[e]=i}return n},I.PCG=g,I}));