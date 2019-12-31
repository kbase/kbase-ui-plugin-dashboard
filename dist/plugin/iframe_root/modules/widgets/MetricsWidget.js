define(["bluebird","./DashboardWidget"],(function(t,e){"use strict"
;return Object.create(e,{init:{value:function(t){
return t.name="MetricsWidget",t.title="Metrics",
this.DashboardWidget_init(t),this}},afterStart:{value:function(){
this.viewState.listen("narratives",{onSet:function(t){
this.setState("narratives",t),
this.calcNarrativeMetrics(t.count),this.calcSharingNarrativeMetrics(t.sharingCount)
}.bind(this),onError:function(t){this.setError(t)}.bind(this)})}},setup:{
value:function(){return this}},calcNarrativeMetrics:{value:function(t){
var e=this.getState("narrativesStats"),a=e.histogram,i=100/a.binned.length,n=Math.max.apply(null,a.binned),r=Math.min.apply(null,a.binned)
;n=Math.max(n,t),r=Math.min(r,t);for(var s,h=n+n/10,l=a.bins.map((function(t){
return t.width=i,t.height=Math.round(100*t.count/h),t
})),u=0;u<a.bins.length;u++){var c=a.bins[u]
;if(t>=c.lower&&(c.upperInclusive&&t<=c.upper||t<c.upper||u===a.bins.length-1)){
s=u,
u===a.bins.length-1&&t>c.upper&&(c.upper=t,c.label="("+c.lower+"-"+c.upper+"]")
;break}}if(void 0!==s)var v={scale:s*i+i/2,value:t,bin:s,
side:s<a.bins.length/2?"right":"left"};else v={scale:0,value:0}
;this.setState("histogram.narratives",{maxBinSize:n,minBinSize:r,chartMax:h,
binData:a,chart:l,user:v,stats:e})}},calcSharedNarrativeMetrics:{
value:function(t){
var e=this.getState("sharedNarrativesStats"),a=e.histogram,i=100/a.binned.length,n=Math.max.apply(null,a.binned),r=Math.min.apply(null,a.binned)
;n=Math.max(n,t),r=Math.min(r,t);for(var s,h=n+n/10,l=a.bins.map((function(t){
return t.width=i,t.height=Math.round(100*t.count/h),t
})),u=0;u<a.bins.length;u++){var c=a.bins[u]
;if(t>=c.lower&&(c.upperInclusive&&t<=c.upper||t<c.upper||u===a.bins.length-1)){
s=u,
u===a.bins.length-1&&t>c.upper&&(c.upper=t,c.label="("+c.lower+"-"+c.upper+"]")
;break}}if(void 0!==s)var v={scale:s*i+i/2,value:t,bin:s,
side:s<a.bins.length/2?"right":"left"};else v={scale:0,value:0}
;this.setState("histogram.sharedNarratives",{maxBinSize:n,minBinSize:r,
chartMax:h,binData:a,chart:l,user:v,stats:e})}},calcSharingNarrativeMetrics:{
value:function(t){
var e=this.getState("sharingNarrativesStats"),a=e.histogram,i=100/a.binned.length,n=Math.max.apply(null,a.binned),r=Math.min.apply(null,a.binned)
;n=Math.max(n,t),r=Math.min(r,t);for(var s,h=n+n/10,l=a.bins.map((function(t){
return t.width=i,t.height=Math.round(100*t.count/h),t
})),u=0;u<a.bins.length;u++){var c=a.bins[u]
;if(t>=c.lower&&(c.upperInclusive&&t<=c.upper||t<c.upper||u===a.bins.length-1)){
s=u,
u===a.bins.length-1&&t>c.upper&&(c.upper=t,c.label="("+c.lower+"-"+c.upper+"]")
;break}}if(void 0!==s)var v={scale:s*i+i/2,value:t,bin:s,
side:s<a.bins.length/2?"right":"left"};else v={scale:0,value:0}
;this.setState("histogram.sharingNarratives",{maxBinSize:n,minBinSize:r,
chartMax:h,binData:a,chart:l,user:v,stats:e})}},calcSharedNarrativeMetricsx:{
value:function(t){
var e=this.getState("sharedNarrativesStats").histogram,a=100/e.binned.length,i=Math.max.apply(null,e.binned),n=Math.min.apply(null,e.binned)
;i=Math.max(i,t),n=Math.min(n,t);for(var r,s=i+i/10,h=e.bins.map((function(t){
return t.width=a,t.height=Math.round(100*t.count/s),t
})),l=0;l<e.bins.length;l++){var u=e.bins[l]
;if(t>=u.lower&&(u.upperInclusive&&t<=u.upper||t<u.upper)){r=l;break}}
if(void 0!==r)var c={scale:r*a+a/2,value:t};else c={scale:0,value:0}
;this.setState("histogram.sharedNarratives",{maxBinSize:i,minBinSize:n,
chartMax:s,binData:e,chart:h,user:c})}},setInitialState:{value:function(){
return new t(function(e,a){t.all([this.runtime.service("data").getJson({
path:"metrics",file:"narrative_histogram"
}),this.runtime.service("data").getJson({path:"metrics",
file:"narrative_sharing_histogram"
}),this.viewState.whenItem("narratives",6e4)]).then(function(t){
this.setState("narrativesStats",t[0]),
this.setState("sharingNarrativesStats",t[1]),
this.setState("narratives",t[2]),this.calcNarrativeMetrics(t[2].count),
this.calcSharingNarrativeMetrics(t[2].sharingCount),e()
}.bind(this)).catch((function(t){a(t)}))}.bind(this))}}})}));