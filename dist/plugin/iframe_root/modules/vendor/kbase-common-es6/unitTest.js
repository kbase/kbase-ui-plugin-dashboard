const util=require("util");define([],(function(){"use strict";class t{
constructor(t,e,s){this.name=t,this.testFun=e,this.reporter=s}
reportTest(t,e,s,r,i){this.reporter.reportTest({name:t,elapsed:e,status:s,
failure:r,exception:i})}run(){
const t=this.name,e=this.testFun,s=(new Date).getTime();try{
const r=e(),i=(new Date).getTime()-s
;!0===r?this.reportTest(t,i,"passed"):this.reportTest(t,i,"failed",r)}catch(r){
const e=(new Date).getTime()-s;this.reportTest(t,e,"exception",null,r)}}}return{
Test:t,TestSuite:class{constructor(t,e){
this.name=t,this.reporter=e,this.tests=[]}addTest(e,s){
this.tests.push(new t(e,s,this.reporter))}run(){
process.stdout.write(util.format("\n** %s\n",this.name)),this.tests.forEach(t=>{
t.run()})}}}}));