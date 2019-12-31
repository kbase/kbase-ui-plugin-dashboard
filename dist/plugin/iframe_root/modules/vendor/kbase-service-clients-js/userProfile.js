define(["bluebird","kb_common/utils","md5","./client/userProfile"],(function(e,t,r,i){
"use strict";return Object.create({},{init:{value:function(e){
if(!e.runtime)throw"Cannot create a profile object without a runtime"
;if(this.runtime=e.runtime,
!e.username)throw"Cannot create a profile object without a username"
;if(this.username=e.username,this.runtime.service("session").isLoggedIn()){
if(!this.runtime.hasConfig("services.user_profile.url"))throw"The user profile client url is not defined"
;this.userProfileClient=new i(this.runtime.getConfig("services.user_profile.url"),{
token:this.runtime.service("session").getAuthToken()})}
return this.userRecordHistory=[],this}},loadProfile:{value:function(){
return e.try(function(){
return this.userProfileClient?this.userProfileClient.get_user_profile([this.username]).then(function(e){
return e[0]?this.userRecord=e[0]:this.userRecord=null,this
}.bind(this)):(this.userRecord=null,this)}.bind(this))}},getProfile:{
value:function(){return this.userRecord}},deleteUserdata:{value:function(){
return this.userRecord.profile.userdata=null,
this.userRecord.profile.metadata.modified=(new Date).toISOString(),
this.userProfileClient.set_user_profile({profile:this.userRecord})}},
saveProfile:{value:function(){return this.userProfileClient.set_user_profile({
profile:this.userRecord})}},updateProfile:{value:function(e){
var r=t.merge({},this.userRecord),i=t.merge(r,e)
;10===this.userRecordHistory.length&&this.userRecordHistory.pop(),
this.userRecordHistory.unshift({userRecord:this.userRecord,
status:this.getProfileStatus(),
completionStatus:this.calcProfileCompletion().status}),this.userRecord=i}},
getProfileStatus:{value:function(){
return this.userRecord?this.userRecord.user?this.userRecord.profile&&this.userRecord.profile.userdata?"profile":"stub":this.userRecord.profile.account?"accountonly":"error":"none"
}},createProfile:{value:function(){var e=this
;return e.userProfileClient.lookup_globus_user([e.username]).then((function(t){
if(!t||!t[e.username])throw new Error("No user account found for "+e.username)
;return t[e.username]})).then((function(t){return e.userRecord=e.makeProfile({
username:t.userName,realname:t.fullName,email:t.email,account:t,createdBy:"user"
}),e.userProfileClient.set_user_profile({profile:e.userRecord})
})).then((function(){return e})).catch((function(e){
throw console.error("ERROR SAVING USER PROFILE: "+e),console.error(e),e}))}},
createStubProfile:{value:function(e){
return this.userProfileClient.lookup_globus_user([this.username]).then(function(t){
if(!t||!t[this.username])throw new Error("No user account found for "+this.username)
;var r=t[this.username];return this.userRecord=this.makeStubProfile({
username:r.userName,realname:r.fullName,account:r,createdBy:e.createdBy
}),this.userProfileClient.set_user_profile({profile:this.userRecord})
}.bind(this))}},makeStubProfile:{value:function(e){return{user:{
username:e.username,realname:e.realname},profile:{metadata:{
createdBy:e.createdBy,created:(new Date).toISOString()},account:e.account,
preferences:{},userdata:null}}}},makeProfile:{value:function(e){
var t=this.makeStubProfile(e)
;return t.profile.userdata={},e.email&&(t.profile.userdata.email=e.email),t}},
getAvatarURL:{value:function(e){e=e||{}
;var t=this.getProp("profile.userdata.avatar.gravatar_default"),r=this.getProp("profile.userdata.email")
;return t&&r?this.makeGravatarURL(r,e.size||100,e.rating||"pg",t):null}},
makeGravatarURL:{value:function(e,t,i,s){
return"https://www.gravatar.com/avatar/"+r.hash(e)+"?s="+t+"&amp;r="+i+"&d="+s}
},getUserProfileSchema:{value:function(){return{type:"object",properties:{user:{
type:"object",title:"User",properties:{realname:{type:"string",
title:"Real Name",maxLength:100},thumbnail:{type:"string"}},
required:["realname"]},profile:{type:"object",properties:{userdata:{
type:"object",properties:{title:{type:"string",title:"Title"},suffix:{
type:"string",title:"Suffix"},location:{type:"string",
title:"Geographic Location",maxLength:25},email:{type:"string",
title:"E-Mail Address",format:"email"},personal_statement:{type:"string",
title:"Personal Statement"},user_class:{type:"string",title:"User Type"},roles:{
type:"array",title:"Roles",items:{type:"string"}},avatar:{type:"object",
properties:{gravatar_default:{type:"string",title:"Gravatar Default Setting"}}},
affiliations:{type:"array",title:"Affiliation",items:{type:"object",properties:{
title:{type:"string",title:"Title"},institution:{type:"string",
title:"Institution"},start_year:{type:"integer",title:"Start Year",minimum:1900,
maximum:2100},end_year:{type:"integer",title:"End Year",minimum:1900,
maximum:2100}},required:["title","institution","start_year"]}}},
required:["email","user_class","roles","location"]}}}}}}},getProp:{
value:function(e,r){return this.userRecord?t.getProp(this.userRecord,e,r):r}},
nthHistory:{value:function(e){
if(e<=this.userRecordHistory.length)return this.userRecordHistory[e-1]}},
calcProfileCompletion:{value:function(){
var e,r=null,i=this.getProfileStatus(),s=["user.username","profile.userdata.email","profile.userdata.user_class","profile.userdata.location"],a=["user.username","profile.userdata.location","profile.userdata.email","profile.userdata.user_class","profile.userdata.roles","profile.userdata.affiliations","profile.userdata.personal_statement"],o=this.getUserProfileSchema(),u=[]
;switch(i){case"profile":break;case"stub":return{status:"stub"}
;case"accountonly":case"error":return{status:"error"};case"none":return{
status:"notfound"};default:return{status:"error"}}for(e=0;e<s.length;e++){
var n=t.getProp(this.userRecord,s[e]);if(t.isBlank(n)){r="requiredincomplete"
;var l=t.getSchemaNode(o,s[e]);u.push(l)}}if(r)return{status:r,
message:"The following required profile fields are missing: "+u.join(", "),
missingFields:u};for(e=0;e<a.length;e++){n=t.getProp(this.userRecord,a[e])
;if(t.isBlank(n)){l=t.getSchemaNode(o,a[e]);u.push(l)}}
var c=Math.round(100*(a.length-u.length)/a.length);return c<100?{
status:"incomplete",message:"The profile is complete, but could be richer.",
percentComplete:c,missingFields:u}:{status:"complete",
message:"Congratulations, your profile is complete!"}}}})}));