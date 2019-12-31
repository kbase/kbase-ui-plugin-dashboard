define(["jquery","bluebird"],(function(t,n){"use strict";return function(e,i,_){
if("string"!=typeof e)throw new Error("Service url was not provided");this.url=e
;var r=e,s=!1;function o(){if(!s){if(s=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var a=i||{token:"",user_id:""},u=_;function l(e,i,_,s,o){var l=t.Deferred()
;"function"==typeof s&&l.done(s),"function"==typeof o&&l.fail(o);var I={
params:i,method:e,version:"1.1",id:String(Math.random()).slice(2)
},y=null,h=u&&"function"==typeof u?u():a.token?a.token:null
;null!==h&&(y=function(t){t.setRequestHeader("Authorization",h)})
;var c=jQuery.ajax({url:r,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(I),beforeSend:y,success:function(t,n,e){var i;try{
var s=JSON.parse(t);i=1===_?s.result[0]:s.result}catch(o){return void l.reject({
status:503,error:o,url:r,resp:t})}l.resolve(i)},error:function(t,n,e){var i
;if(t.responseText)try{i=JSON.parse(t.responseText).error}catch(_){
i="Unknown error - "+t.responseText}else i="Unknown Error";l.reject({status:500,
error:i})}}),g=l.promise();return g.xhr=c,n.resolve(g)}
this.get_all=function(t,n,e,i,_,r,s){
return l("CDMI_EntityAPI.get_all",[t,n,e,i,_],1,r,s)
},this.get_all_async=function(t,n,e,i,_,r,s){
return o(),l("CDMI_EntityAPI.get_all",[t,n,e,i,_],1,r,s)
},this.get_entity_Alignment=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Alignment",[t,n],1,e,i)
},this.get_entity_Alignment_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Alignment",[t,n],1,e,i)
},this.query_entity_Alignment=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Alignment",[t,n],1,e,i)
},this.query_entity_Alignment_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Alignment",[t,n],1,e,i)
},this.all_entities_Alignment=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Alignment",[t,n,e],1,i,_)
},this.all_entities_Alignment_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Alignment",[t,n,e],1,i,_)
},this.get_entity_AlignmentAttribute=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_AlignmentAttribute",[t,n],1,e,i)
},this.get_entity_AlignmentAttribute_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_AlignmentAttribute",[t,n],1,e,i)
},this.query_entity_AlignmentAttribute=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_AlignmentAttribute",[t,n],1,e,i)
},this.query_entity_AlignmentAttribute_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_AlignmentAttribute",[t,n],1,e,i)
},this.all_entities_AlignmentAttribute=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_AlignmentAttribute",[t,n,e],1,i,_)
},this.all_entities_AlignmentAttribute_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_AlignmentAttribute",[t,n,e],1,i,_)
},this.get_entity_AlignmentRow=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_AlignmentRow",[t,n],1,e,i)
},this.get_entity_AlignmentRow_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_AlignmentRow",[t,n],1,e,i)
},this.query_entity_AlignmentRow=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_AlignmentRow",[t,n],1,e,i)
},this.query_entity_AlignmentRow_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_AlignmentRow",[t,n],1,e,i)
},this.all_entities_AlignmentRow=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_AlignmentRow",[t,n,e],1,i,_)
},this.all_entities_AlignmentRow_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_AlignmentRow",[t,n,e],1,i,_)
},this.get_entity_AlleleFrequency=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_AlleleFrequency",[t,n],1,e,i)
},this.get_entity_AlleleFrequency_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_AlleleFrequency",[t,n],1,e,i)
},this.query_entity_AlleleFrequency=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_AlleleFrequency",[t,n],1,e,i)
},this.query_entity_AlleleFrequency_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_AlleleFrequency",[t,n],1,e,i)
},this.all_entities_AlleleFrequency=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_AlleleFrequency",[t,n,e],1,i,_)
},this.all_entities_AlleleFrequency_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_AlleleFrequency",[t,n,e],1,i,_)
},this.get_entity_Annotation=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Annotation",[t,n],1,e,i)
},this.get_entity_Annotation_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Annotation",[t,n],1,e,i)
},this.query_entity_Annotation=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Annotation",[t,n],1,e,i)
},this.query_entity_Annotation_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Annotation",[t,n],1,e,i)
},this.all_entities_Annotation=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Annotation",[t,n,e],1,i,_)
},this.all_entities_Annotation_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Annotation",[t,n,e],1,i,_)
},this.get_entity_Assay=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Assay",[t,n],1,e,i)
},this.get_entity_Assay_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Assay",[t,n],1,e,i)
},this.query_entity_Assay=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Assay",[t,n],1,e,i)
},this.query_entity_Assay_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Assay",[t,n],1,e,i)
},this.all_entities_Assay=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Assay",[t,n,e],1,i,_)
},this.all_entities_Assay_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Assay",[t,n,e],1,i,_)
},this.get_entity_Association=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Association",[t,n],1,e,i)
},this.get_entity_Association_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Association",[t,n],1,e,i)
},this.query_entity_Association=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Association",[t,n],1,e,i)
},this.query_entity_Association_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Association",[t,n],1,e,i)
},this.all_entities_Association=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Association",[t,n,e],1,i,_)
},this.all_entities_Association_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Association",[t,n,e],1,i,_)
},this.get_entity_AssociationDataset=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_AssociationDataset",[t,n],1,e,i)
},this.get_entity_AssociationDataset_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_AssociationDataset",[t,n],1,e,i)
},this.query_entity_AssociationDataset=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_AssociationDataset",[t,n],1,e,i)
},this.query_entity_AssociationDataset_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_AssociationDataset",[t,n],1,e,i)
},this.all_entities_AssociationDataset=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_AssociationDataset",[t,n,e],1,i,_)
},this.all_entities_AssociationDataset_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_AssociationDataset",[t,n,e],1,i,_)
},this.get_entity_AssociationDetectionType=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_AssociationDetectionType",[t,n],1,e,i)
},this.get_entity_AssociationDetectionType_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_AssociationDetectionType",[t,n],1,e,i)},
this.query_entity_AssociationDetectionType=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_AssociationDetectionType",[t,n],1,e,i)
},this.query_entity_AssociationDetectionType_async=function(t,n,e,i){return o(),
l("CDMI_EntityAPI.query_entity_AssociationDetectionType",[t,n],1,e,i)
},this.all_entities_AssociationDetectionType=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_AssociationDetectionType",[t,n,e],1,i,_)},
this.all_entities_AssociationDetectionType_async=function(t,n,e,i,_){return o(),
l("CDMI_EntityAPI.all_entities_AssociationDetectionType",[t,n,e],1,i,_)
},this.get_entity_AtomicRegulon=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_AtomicRegulon",[t,n],1,e,i)
},this.get_entity_AtomicRegulon_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_AtomicRegulon",[t,n],1,e,i)
},this.query_entity_AtomicRegulon=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_AtomicRegulon",[t,n],1,e,i)
},this.query_entity_AtomicRegulon_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_AtomicRegulon",[t,n],1,e,i)
},this.all_entities_AtomicRegulon=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_AtomicRegulon",[t,n,e],1,i,_)
},this.all_entities_AtomicRegulon_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_AtomicRegulon",[t,n,e],1,i,_)
},this.get_entity_Attribute=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Attribute",[t,n],1,e,i)
},this.get_entity_Attribute_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Attribute",[t,n],1,e,i)
},this.query_entity_Attribute=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Attribute",[t,n],1,e,i)
},this.query_entity_Attribute_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Attribute",[t,n],1,e,i)
},this.all_entities_Attribute=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Attribute",[t,n,e],1,i,_)
},this.all_entities_Attribute_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Attribute",[t,n,e],1,i,_)
},this.get_entity_Biomass=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Biomass",[t,n],1,e,i)
},this.get_entity_Biomass_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Biomass",[t,n],1,e,i)
},this.query_entity_Biomass=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Biomass",[t,n],1,e,i)
},this.query_entity_Biomass_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Biomass",[t,n],1,e,i)
},this.all_entities_Biomass=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Biomass",[t,n,e],1,i,_)
},this.all_entities_Biomass_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Biomass",[t,n,e],1,i,_)
},this.get_entity_CodonUsage=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_CodonUsage",[t,n],1,e,i)
},this.get_entity_CodonUsage_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_CodonUsage",[t,n],1,e,i)
},this.query_entity_CodonUsage=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_CodonUsage",[t,n],1,e,i)
},this.query_entity_CodonUsage_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_CodonUsage",[t,n],1,e,i)
},this.all_entities_CodonUsage=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_CodonUsage",[t,n,e],1,i,_)
},this.all_entities_CodonUsage_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_CodonUsage",[t,n,e],1,i,_)
},this.get_entity_Complex=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Complex",[t,n],1,e,i)
},this.get_entity_Complex_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Complex",[t,n],1,e,i)
},this.query_entity_Complex=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Complex",[t,n],1,e,i)
},this.query_entity_Complex_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Complex",[t,n],1,e,i)
},this.all_entities_Complex=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Complex",[t,n,e],1,i,_)
},this.all_entities_Complex_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Complex",[t,n,e],1,i,_)
},this.get_entity_Compound=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Compound",[t,n],1,e,i)
},this.get_entity_Compound_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Compound",[t,n],1,e,i)
},this.query_entity_Compound=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Compound",[t,n],1,e,i)
},this.query_entity_Compound_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Compound",[t,n],1,e,i)
},this.all_entities_Compound=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Compound",[t,n,e],1,i,_)
},this.all_entities_Compound_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Compound",[t,n,e],1,i,_)
},this.get_entity_CompoundInstance=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_CompoundInstance",[t,n],1,e,i)
},this.get_entity_CompoundInstance_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_CompoundInstance",[t,n],1,e,i)
},this.query_entity_CompoundInstance=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_CompoundInstance",[t,n],1,e,i)
},this.query_entity_CompoundInstance_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_CompoundInstance",[t,n],1,e,i)
},this.all_entities_CompoundInstance=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_CompoundInstance",[t,n,e],1,i,_)
},this.all_entities_CompoundInstance_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_CompoundInstance",[t,n,e],1,i,_)
},this.get_entity_ConservedDomainModel=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_ConservedDomainModel",[t,n],1,e,i)
},this.get_entity_ConservedDomainModel_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_ConservedDomainModel",[t,n],1,e,i)
},this.query_entity_ConservedDomainModel=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_ConservedDomainModel",[t,n],1,e,i)
},this.query_entity_ConservedDomainModel_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_ConservedDomainModel",[t,n],1,e,i)
},this.all_entities_ConservedDomainModel=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_ConservedDomainModel",[t,n,e],1,i,_)
},this.all_entities_ConservedDomainModel_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_ConservedDomainModel",[t,n,e],1,i,_)},
this.get_entity_Contig=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Contig",[t,n],1,e,i)
},this.get_entity_Contig_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Contig",[t,n],1,e,i)
},this.query_entity_Contig=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Contig",[t,n],1,e,i)
},this.query_entity_Contig_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Contig",[t,n],1,e,i)
},this.all_entities_Contig=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Contig",[t,n,e],1,i,_)
},this.all_entities_Contig_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Contig",[t,n,e],1,i,_)
},this.get_entity_ContigChunk=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_ContigChunk",[t,n],1,e,i)
},this.get_entity_ContigChunk_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_ContigChunk",[t,n],1,e,i)
},this.query_entity_ContigChunk=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_ContigChunk",[t,n],1,e,i)
},this.query_entity_ContigChunk_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_ContigChunk",[t,n],1,e,i)
},this.all_entities_ContigChunk=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_ContigChunk",[t,n,e],1,i,_)
},this.all_entities_ContigChunk_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_ContigChunk",[t,n,e],1,i,_)
},this.get_entity_ContigSequence=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_ContigSequence",[t,n],1,e,i)
},this.get_entity_ContigSequence_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_ContigSequence",[t,n],1,e,i)
},this.query_entity_ContigSequence=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_ContigSequence",[t,n],1,e,i)
},this.query_entity_ContigSequence_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_ContigSequence",[t,n],1,e,i)
},this.all_entities_ContigSequence=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_ContigSequence",[t,n,e],1,i,_)
},this.all_entities_ContigSequence_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_ContigSequence",[t,n,e],1,i,_)
},this.get_entity_CoregulatedSet=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_CoregulatedSet",[t,n],1,e,i)
},this.get_entity_CoregulatedSet_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_CoregulatedSet",[t,n],1,e,i)
},this.query_entity_CoregulatedSet=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_CoregulatedSet",[t,n],1,e,i)
},this.query_entity_CoregulatedSet_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_CoregulatedSet",[t,n],1,e,i)
},this.all_entities_CoregulatedSet=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_CoregulatedSet",[t,n,e],1,i,_)
},this.all_entities_CoregulatedSet_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_CoregulatedSet",[t,n,e],1,i,_)
},this.get_entity_Diagram=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Diagram",[t,n],1,e,i)
},this.get_entity_Diagram_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Diagram",[t,n],1,e,i)
},this.query_entity_Diagram=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Diagram",[t,n],1,e,i)
},this.query_entity_Diagram_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Diagram",[t,n],1,e,i)
},this.all_entities_Diagram=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Diagram",[t,n,e],1,i,_)
},this.all_entities_Diagram_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Diagram",[t,n,e],1,i,_)
},this.get_entity_EcNumber=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_EcNumber",[t,n],1,e,i)
},this.get_entity_EcNumber_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_EcNumber",[t,n],1,e,i)
},this.query_entity_EcNumber=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_EcNumber",[t,n],1,e,i)
},this.query_entity_EcNumber_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_EcNumber",[t,n],1,e,i)
},this.all_entities_EcNumber=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_EcNumber",[t,n,e],1,i,_)
},this.all_entities_EcNumber_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_EcNumber",[t,n,e],1,i,_)
},this.get_entity_Effector=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Effector",[t,n],1,e,i)
},this.get_entity_Effector_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Effector",[t,n],1,e,i)
},this.query_entity_Effector=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Effector",[t,n],1,e,i)
},this.query_entity_Effector_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Effector",[t,n],1,e,i)
},this.all_entities_Effector=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Effector",[t,n,e],1,i,_)
},this.all_entities_Effector_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Effector",[t,n,e],1,i,_)
},this.get_entity_Environment=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Environment",[t,n],1,e,i)
},this.get_entity_Environment_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Environment",[t,n],1,e,i)
},this.query_entity_Environment=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Environment",[t,n],1,e,i)
},this.query_entity_Environment_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Environment",[t,n],1,e,i)
},this.all_entities_Environment=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Environment",[t,n,e],1,i,_)
},this.all_entities_Environment_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Environment",[t,n,e],1,i,_)
},this.get_entity_Experiment=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Experiment",[t,n],1,e,i)
},this.get_entity_Experiment_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Experiment",[t,n],1,e,i)
},this.query_entity_Experiment=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Experiment",[t,n],1,e,i)
},this.query_entity_Experiment_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Experiment",[t,n],1,e,i)
},this.all_entities_Experiment=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Experiment",[t,n,e],1,i,_)
},this.all_entities_Experiment_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Experiment",[t,n,e],1,i,_)
},this.get_entity_ExperimentMeta=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_ExperimentMeta",[t,n],1,e,i)
},this.get_entity_ExperimentMeta_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_ExperimentMeta",[t,n],1,e,i)
},this.query_entity_ExperimentMeta=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_ExperimentMeta",[t,n],1,e,i)
},this.query_entity_ExperimentMeta_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_ExperimentMeta",[t,n],1,e,i)
},this.all_entities_ExperimentMeta=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_ExperimentMeta",[t,n,e],1,i,_)
},this.all_entities_ExperimentMeta_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_ExperimentMeta",[t,n,e],1,i,_)
},this.get_entity_ExperimentalUnit=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_ExperimentalUnit",[t,n],1,e,i)
},this.get_entity_ExperimentalUnit_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_ExperimentalUnit",[t,n],1,e,i)
},this.query_entity_ExperimentalUnit=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_ExperimentalUnit",[t,n],1,e,i)
},this.query_entity_ExperimentalUnit_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_ExperimentalUnit",[t,n],1,e,i)
},this.all_entities_ExperimentalUnit=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_ExperimentalUnit",[t,n,e],1,i,_)
},this.all_entities_ExperimentalUnit_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_ExperimentalUnit",[t,n,e],1,i,_)
},this.get_entity_ExperimentalUnitGroup=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_ExperimentalUnitGroup",[t,n],1,e,i)
},this.get_entity_ExperimentalUnitGroup_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_ExperimentalUnitGroup",[t,n],1,e,i)
},this.query_entity_ExperimentalUnitGroup=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_ExperimentalUnitGroup",[t,n],1,e,i)
},this.query_entity_ExperimentalUnitGroup_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_ExperimentalUnitGroup",[t,n],1,e,i)
},this.all_entities_ExperimentalUnitGroup=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_ExperimentalUnitGroup",[t,n,e],1,i,_)
},this.all_entities_ExperimentalUnitGroup_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_ExperimentalUnitGroup",[t,n,e],1,i,_)
},this.get_entity_Family=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Family",[t,n],1,e,i)
},this.get_entity_Family_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Family",[t,n],1,e,i)
},this.query_entity_Family=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Family",[t,n],1,e,i)
},this.query_entity_Family_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Family",[t,n],1,e,i)
},this.all_entities_Family=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Family",[t,n,e],1,i,_)
},this.all_entities_Family_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Family",[t,n,e],1,i,_)
},this.get_entity_Feature=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Feature",[t,n],1,e,i)
},this.get_entity_Feature_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Feature",[t,n],1,e,i)
},this.query_entity_Feature=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Feature",[t,n],1,e,i)
},this.query_entity_Feature_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Feature",[t,n],1,e,i)
},this.all_entities_Feature=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Feature",[t,n,e],1,i,_)
},this.all_entities_Feature_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Feature",[t,n,e],1,i,_)
},this.get_entity_Genome=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Genome",[t,n],1,e,i)
},this.get_entity_Genome_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Genome",[t,n],1,e,i)
},this.query_entity_Genome=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Genome",[t,n],1,e,i)
},this.query_entity_Genome_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Genome",[t,n],1,e,i)
},this.all_entities_Genome=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Genome",[t,n,e],1,i,_)
},this.all_entities_Genome_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Genome",[t,n,e],1,i,_)
},this.get_entity_Locality=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Locality",[t,n],1,e,i)
},this.get_entity_Locality_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Locality",[t,n],1,e,i)
},this.query_entity_Locality=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Locality",[t,n],1,e,i)
},this.query_entity_Locality_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Locality",[t,n],1,e,i)
},this.all_entities_Locality=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Locality",[t,n,e],1,i,_)
},this.all_entities_Locality_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Locality",[t,n,e],1,i,_)
},this.get_entity_LocalizedCompound=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_LocalizedCompound",[t,n],1,e,i)
},this.get_entity_LocalizedCompound_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_LocalizedCompound",[t,n],1,e,i)
},this.query_entity_LocalizedCompound=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_LocalizedCompound",[t,n],1,e,i)
},this.query_entity_LocalizedCompound_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_LocalizedCompound",[t,n],1,e,i)
},this.all_entities_LocalizedCompound=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_LocalizedCompound",[t,n,e],1,i,_)
},this.all_entities_LocalizedCompound_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_LocalizedCompound",[t,n,e],1,i,_)
},this.get_entity_Location=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Location",[t,n],1,e,i)
},this.get_entity_Location_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Location",[t,n],1,e,i)
},this.query_entity_Location=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Location",[t,n],1,e,i)
},this.query_entity_Location_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Location",[t,n],1,e,i)
},this.all_entities_Location=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Location",[t,n,e],1,i,_)
},this.all_entities_Location_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Location",[t,n,e],1,i,_)
},this.get_entity_LocationInstance=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_LocationInstance",[t,n],1,e,i)
},this.get_entity_LocationInstance_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_LocationInstance",[t,n],1,e,i)
},this.query_entity_LocationInstance=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_LocationInstance",[t,n],1,e,i)
},this.query_entity_LocationInstance_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_LocationInstance",[t,n],1,e,i)
},this.all_entities_LocationInstance=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_LocationInstance",[t,n,e],1,i,_)
},this.all_entities_LocationInstance_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_LocationInstance",[t,n,e],1,i,_)
},this.get_entity_Measurement=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Measurement",[t,n],1,e,i)
},this.get_entity_Measurement_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Measurement",[t,n],1,e,i)
},this.query_entity_Measurement=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Measurement",[t,n],1,e,i)
},this.query_entity_Measurement_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Measurement",[t,n],1,e,i)
},this.all_entities_Measurement=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Measurement",[t,n,e],1,i,_)
},this.all_entities_Measurement_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Measurement",[t,n,e],1,i,_)
},this.get_entity_MeasurementDescription=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_MeasurementDescription",[t,n],1,e,i)
},this.get_entity_MeasurementDescription_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_MeasurementDescription",[t,n],1,e,i)
},this.query_entity_MeasurementDescription=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_MeasurementDescription",[t,n],1,e,i)
},this.query_entity_MeasurementDescription_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_MeasurementDescription",[t,n],1,e,i)},
this.all_entities_MeasurementDescription=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_MeasurementDescription",[t,n,e],1,i,_)
},this.all_entities_MeasurementDescription_async=function(t,n,e,i,_){return o(),
l("CDMI_EntityAPI.all_entities_MeasurementDescription",[t,n,e],1,i,_)
},this.get_entity_Media=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Media",[t,n],1,e,i)
},this.get_entity_Media_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Media",[t,n],1,e,i)
},this.query_entity_Media=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Media",[t,n],1,e,i)
},this.query_entity_Media_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Media",[t,n],1,e,i)
},this.all_entities_Media=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Media",[t,n,e],1,i,_)
},this.all_entities_Media_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Media",[t,n,e],1,i,_)
},this.get_entity_Model=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Model",[t,n],1,e,i)
},this.get_entity_Model_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Model",[t,n],1,e,i)
},this.query_entity_Model=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Model",[t,n],1,e,i)
},this.query_entity_Model_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Model",[t,n],1,e,i)
},this.all_entities_Model=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Model",[t,n,e],1,i,_)
},this.all_entities_Model_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Model",[t,n,e],1,i,_)
},this.get_entity_OTU=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_OTU",[t,n],1,e,i)
},this.get_entity_OTU_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_OTU",[t,n],1,e,i)
},this.query_entity_OTU=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_OTU",[t,n],1,e,i)
},this.query_entity_OTU_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_OTU",[t,n],1,e,i)
},this.all_entities_OTU=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_OTU",[t,n,e],1,i,_)
},this.all_entities_OTU_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_OTU",[t,n,e],1,i,_)
},this.get_entity_ObservationalUnit=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_ObservationalUnit",[t,n],1,e,i)
},this.get_entity_ObservationalUnit_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_ObservationalUnit",[t,n],1,e,i)
},this.query_entity_ObservationalUnit=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_ObservationalUnit",[t,n],1,e,i)
},this.query_entity_ObservationalUnit_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_ObservationalUnit",[t,n],1,e,i)
},this.all_entities_ObservationalUnit=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_ObservationalUnit",[t,n,e],1,i,_)
},this.all_entities_ObservationalUnit_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_ObservationalUnit",[t,n,e],1,i,_)
},this.get_entity_Ontology=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Ontology",[t,n],1,e,i)
},this.get_entity_Ontology_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Ontology",[t,n],1,e,i)
},this.query_entity_Ontology=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Ontology",[t,n],1,e,i)
},this.query_entity_Ontology_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Ontology",[t,n],1,e,i)
},this.all_entities_Ontology=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Ontology",[t,n,e],1,i,_)
},this.all_entities_Ontology_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Ontology",[t,n,e],1,i,_)
},this.get_entity_Operon=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Operon",[t,n],1,e,i)
},this.get_entity_Operon_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Operon",[t,n],1,e,i)
},this.query_entity_Operon=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Operon",[t,n],1,e,i)
},this.query_entity_Operon_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Operon",[t,n],1,e,i)
},this.all_entities_Operon=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Operon",[t,n,e],1,i,_)
},this.all_entities_Operon_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Operon",[t,n,e],1,i,_)
},this.get_entity_PairSet=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_PairSet",[t,n],1,e,i)
},this.get_entity_PairSet_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_PairSet",[t,n],1,e,i)
},this.query_entity_PairSet=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_PairSet",[t,n],1,e,i)
},this.query_entity_PairSet_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_PairSet",[t,n],1,e,i)
},this.all_entities_PairSet=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_PairSet",[t,n,e],1,i,_)
},this.all_entities_PairSet_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_PairSet",[t,n,e],1,i,_)
},this.get_entity_Pairing=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Pairing",[t,n],1,e,i)
},this.get_entity_Pairing_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Pairing",[t,n],1,e,i)
},this.query_entity_Pairing=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Pairing",[t,n],1,e,i)
},this.query_entity_Pairing_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Pairing",[t,n],1,e,i)
},this.all_entities_Pairing=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Pairing",[t,n,e],1,i,_)
},this.all_entities_Pairing_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Pairing",[t,n,e],1,i,_)
},this.get_entity_Parameter=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Parameter",[t,n],1,e,i)
},this.get_entity_Parameter_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Parameter",[t,n],1,e,i)
},this.query_entity_Parameter=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Parameter",[t,n],1,e,i)
},this.query_entity_Parameter_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Parameter",[t,n],1,e,i)
},this.all_entities_Parameter=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Parameter",[t,n,e],1,i,_)
},this.all_entities_Parameter_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Parameter",[t,n,e],1,i,_)
},this.get_entity_Person=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Person",[t,n],1,e,i)
},this.get_entity_Person_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Person",[t,n],1,e,i)
},this.query_entity_Person=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Person",[t,n],1,e,i)
},this.query_entity_Person_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Person",[t,n],1,e,i)
},this.all_entities_Person=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Person",[t,n,e],1,i,_)
},this.all_entities_Person_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Person",[t,n,e],1,i,_)
},this.get_entity_Platform=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Platform",[t,n],1,e,i)
},this.get_entity_Platform_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Platform",[t,n],1,e,i)
},this.query_entity_Platform=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Platform",[t,n],1,e,i)
},this.query_entity_Platform_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Platform",[t,n],1,e,i)
},this.all_entities_Platform=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Platform",[t,n,e],1,i,_)
},this.all_entities_Platform_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Platform",[t,n,e],1,i,_)
},this.get_entity_ProbeSet=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_ProbeSet",[t,n],1,e,i)
},this.get_entity_ProbeSet_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_ProbeSet",[t,n],1,e,i)
},this.query_entity_ProbeSet=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_ProbeSet",[t,n],1,e,i)
},this.query_entity_ProbeSet_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_ProbeSet",[t,n],1,e,i)
},this.all_entities_ProbeSet=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_ProbeSet",[t,n,e],1,i,_)
},this.all_entities_ProbeSet_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_ProbeSet",[t,n,e],1,i,_)
},this.get_entity_ProteinSequence=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_ProteinSequence",[t,n],1,e,i)
},this.get_entity_ProteinSequence_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_ProteinSequence",[t,n],1,e,i)
},this.query_entity_ProteinSequence=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_ProteinSequence",[t,n],1,e,i)
},this.query_entity_ProteinSequence_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_ProteinSequence",[t,n],1,e,i)
},this.all_entities_ProteinSequence=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_ProteinSequence",[t,n,e],1,i,_)
},this.all_entities_ProteinSequence_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_ProteinSequence",[t,n,e],1,i,_)
},this.get_entity_Protocol=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Protocol",[t,n],1,e,i)
},this.get_entity_Protocol_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Protocol",[t,n],1,e,i)
},this.query_entity_Protocol=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Protocol",[t,n],1,e,i)
},this.query_entity_Protocol_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Protocol",[t,n],1,e,i)
},this.all_entities_Protocol=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Protocol",[t,n,e],1,i,_)
},this.all_entities_Protocol_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Protocol",[t,n,e],1,i,_)
},this.get_entity_Publication=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Publication",[t,n],1,e,i)
},this.get_entity_Publication_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Publication",[t,n],1,e,i)
},this.query_entity_Publication=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Publication",[t,n],1,e,i)
},this.query_entity_Publication_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Publication",[t,n],1,e,i)
},this.all_entities_Publication=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Publication",[t,n,e],1,i,_)
},this.all_entities_Publication_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Publication",[t,n,e],1,i,_)
},this.get_entity_Reaction=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Reaction",[t,n],1,e,i)
},this.get_entity_Reaction_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Reaction",[t,n],1,e,i)
},this.query_entity_Reaction=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Reaction",[t,n],1,e,i)
},this.query_entity_Reaction_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Reaction",[t,n],1,e,i)
},this.all_entities_Reaction=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Reaction",[t,n,e],1,i,_)
},this.all_entities_Reaction_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Reaction",[t,n,e],1,i,_)
},this.get_entity_ReactionInstance=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_ReactionInstance",[t,n],1,e,i)
},this.get_entity_ReactionInstance_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_ReactionInstance",[t,n],1,e,i)
},this.query_entity_ReactionInstance=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_ReactionInstance",[t,n],1,e,i)
},this.query_entity_ReactionInstance_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_ReactionInstance",[t,n],1,e,i)
},this.all_entities_ReactionInstance=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_ReactionInstance",[t,n,e],1,i,_)
},this.all_entities_ReactionInstance_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_ReactionInstance",[t,n,e],1,i,_)
},this.get_entity_Regulator=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Regulator",[t,n],1,e,i)
},this.get_entity_Regulator_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Regulator",[t,n],1,e,i)
},this.query_entity_Regulator=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Regulator",[t,n],1,e,i)
},this.query_entity_Regulator_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Regulator",[t,n],1,e,i)
},this.all_entities_Regulator=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Regulator",[t,n,e],1,i,_)
},this.all_entities_Regulator_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Regulator",[t,n,e],1,i,_)
},this.get_entity_Regulog=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Regulog",[t,n],1,e,i)
},this.get_entity_Regulog_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Regulog",[t,n],1,e,i)
},this.query_entity_Regulog=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Regulog",[t,n],1,e,i)
},this.query_entity_Regulog_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Regulog",[t,n],1,e,i)
},this.all_entities_Regulog=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Regulog",[t,n,e],1,i,_)
},this.all_entities_Regulog_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Regulog",[t,n,e],1,i,_)
},this.get_entity_RegulogCollection=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_RegulogCollection",[t,n],1,e,i)
},this.get_entity_RegulogCollection_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_RegulogCollection",[t,n],1,e,i)
},this.query_entity_RegulogCollection=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_RegulogCollection",[t,n],1,e,i)
},this.query_entity_RegulogCollection_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_RegulogCollection",[t,n],1,e,i)
},this.all_entities_RegulogCollection=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_RegulogCollection",[t,n,e],1,i,_)
},this.all_entities_RegulogCollection_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_RegulogCollection",[t,n,e],1,i,_)
},this.get_entity_Regulome=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Regulome",[t,n],1,e,i)
},this.get_entity_Regulome_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Regulome",[t,n],1,e,i)
},this.query_entity_Regulome=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Regulome",[t,n],1,e,i)
},this.query_entity_Regulome_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Regulome",[t,n],1,e,i)
},this.all_entities_Regulome=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Regulome",[t,n,e],1,i,_)
},this.all_entities_Regulome_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Regulome",[t,n,e],1,i,_)
},this.get_entity_Regulon=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Regulon",[t,n],1,e,i)
},this.get_entity_Regulon_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Regulon",[t,n],1,e,i)
},this.query_entity_Regulon=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Regulon",[t,n],1,e,i)
},this.query_entity_Regulon_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Regulon",[t,n],1,e,i)
},this.all_entities_Regulon=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Regulon",[t,n,e],1,i,_)
},this.all_entities_Regulon_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Regulon",[t,n,e],1,i,_)
},this.get_entity_ReplicateGroup=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_ReplicateGroup",[t,n],1,e,i)
},this.get_entity_ReplicateGroup_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_ReplicateGroup",[t,n],1,e,i)
},this.query_entity_ReplicateGroup=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_ReplicateGroup",[t,n],1,e,i)
},this.query_entity_ReplicateGroup_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_ReplicateGroup",[t,n],1,e,i)
},this.all_entities_ReplicateGroup=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_ReplicateGroup",[t,n,e],1,i,_)
},this.all_entities_ReplicateGroup_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_ReplicateGroup",[t,n,e],1,i,_)
},this.get_entity_Role=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Role",[t,n],1,e,i)
},this.get_entity_Role_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Role",[t,n],1,e,i)
},this.query_entity_Role=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Role",[t,n],1,e,i)
},this.query_entity_Role_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Role",[t,n],1,e,i)
},this.all_entities_Role=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Role",[t,n,e],1,i,_)
},this.all_entities_Role_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Role",[t,n,e],1,i,_)
},this.get_entity_SSCell=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_SSCell",[t,n],1,e,i)
},this.get_entity_SSCell_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_SSCell",[t,n],1,e,i)
},this.query_entity_SSCell=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_SSCell",[t,n],1,e,i)
},this.query_entity_SSCell_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_SSCell",[t,n],1,e,i)
},this.all_entities_SSCell=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_SSCell",[t,n,e],1,i,_)
},this.all_entities_SSCell_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_SSCell",[t,n,e],1,i,_)
},this.get_entity_SSRow=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_SSRow",[t,n],1,e,i)
},this.get_entity_SSRow_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_SSRow",[t,n],1,e,i)
},this.query_entity_SSRow=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_SSRow",[t,n],1,e,i)
},this.query_entity_SSRow_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_SSRow",[t,n],1,e,i)
},this.all_entities_SSRow=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_SSRow",[t,n,e],1,i,_)
},this.all_entities_SSRow_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_SSRow",[t,n,e],1,i,_)
},this.get_entity_Sample=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Sample",[t,n],1,e,i)
},this.get_entity_Sample_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Sample",[t,n],1,e,i)
},this.query_entity_Sample=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Sample",[t,n],1,e,i)
},this.query_entity_Sample_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Sample",[t,n],1,e,i)
},this.all_entities_Sample=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Sample",[t,n,e],1,i,_)
},this.all_entities_Sample_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Sample",[t,n,e],1,i,_)
},this.get_entity_SampleAnnotation=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_SampleAnnotation",[t,n],1,e,i)
},this.get_entity_SampleAnnotation_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_SampleAnnotation",[t,n],1,e,i)
},this.query_entity_SampleAnnotation=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_SampleAnnotation",[t,n],1,e,i)
},this.query_entity_SampleAnnotation_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_SampleAnnotation",[t,n],1,e,i)
},this.all_entities_SampleAnnotation=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_SampleAnnotation",[t,n,e],1,i,_)
},this.all_entities_SampleAnnotation_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_SampleAnnotation",[t,n,e],1,i,_)
},this.get_entity_Scenario=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Scenario",[t,n],1,e,i)
},this.get_entity_Scenario_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Scenario",[t,n],1,e,i)
},this.query_entity_Scenario=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Scenario",[t,n],1,e,i)
},this.query_entity_Scenario_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Scenario",[t,n],1,e,i)
},this.all_entities_Scenario=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Scenario",[t,n,e],1,i,_)
},this.all_entities_Scenario_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Scenario",[t,n,e],1,i,_)
},this.get_entity_Series=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Series",[t,n],1,e,i)
},this.get_entity_Series_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Series",[t,n],1,e,i)
},this.query_entity_Series=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Series",[t,n],1,e,i)
},this.query_entity_Series_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Series",[t,n],1,e,i)
},this.all_entities_Series=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Series",[t,n,e],1,i,_)
},this.all_entities_Series_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Series",[t,n,e],1,i,_)
},this.get_entity_Source=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Source",[t,n],1,e,i)
},this.get_entity_Source_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Source",[t,n],1,e,i)
},this.query_entity_Source=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Source",[t,n],1,e,i)
},this.query_entity_Source_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Source",[t,n],1,e,i)
},this.all_entities_Source=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Source",[t,n,e],1,i,_)
},this.all_entities_Source_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Source",[t,n,e],1,i,_)
},this.get_entity_Strain=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Strain",[t,n],1,e,i)
},this.get_entity_Strain_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Strain",[t,n],1,e,i)
},this.query_entity_Strain=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Strain",[t,n],1,e,i)
},this.query_entity_Strain_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Strain",[t,n],1,e,i)
},this.all_entities_Strain=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Strain",[t,n,e],1,i,_)
},this.all_entities_Strain_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Strain",[t,n,e],1,i,_)
},this.get_entity_StudyExperiment=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_StudyExperiment",[t,n],1,e,i)
},this.get_entity_StudyExperiment_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_StudyExperiment",[t,n],1,e,i)
},this.query_entity_StudyExperiment=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_StudyExperiment",[t,n],1,e,i)
},this.query_entity_StudyExperiment_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_StudyExperiment",[t,n],1,e,i)
},this.all_entities_StudyExperiment=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_StudyExperiment",[t,n,e],1,i,_)
},this.all_entities_StudyExperiment_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_StudyExperiment",[t,n,e],1,i,_)
},this.get_entity_Subsystem=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Subsystem",[t,n],1,e,i)
},this.get_entity_Subsystem_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Subsystem",[t,n],1,e,i)
},this.query_entity_Subsystem=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Subsystem",[t,n],1,e,i)
},this.query_entity_Subsystem_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Subsystem",[t,n],1,e,i)
},this.all_entities_Subsystem=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Subsystem",[t,n,e],1,i,_)
},this.all_entities_Subsystem_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Subsystem",[t,n,e],1,i,_)
},this.get_entity_SubsystemClass=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_SubsystemClass",[t,n],1,e,i)
},this.get_entity_SubsystemClass_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_SubsystemClass",[t,n],1,e,i)
},this.query_entity_SubsystemClass=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_SubsystemClass",[t,n],1,e,i)
},this.query_entity_SubsystemClass_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_SubsystemClass",[t,n],1,e,i)
},this.all_entities_SubsystemClass=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_SubsystemClass",[t,n,e],1,i,_)
},this.all_entities_SubsystemClass_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_SubsystemClass",[t,n,e],1,i,_)
},this.get_entity_TaxonomicGrouping=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_TaxonomicGrouping",[t,n],1,e,i)
},this.get_entity_TaxonomicGrouping_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_TaxonomicGrouping",[t,n],1,e,i)
},this.query_entity_TaxonomicGrouping=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_TaxonomicGrouping",[t,n],1,e,i)
},this.query_entity_TaxonomicGrouping_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_TaxonomicGrouping",[t,n],1,e,i)
},this.all_entities_TaxonomicGrouping=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_TaxonomicGrouping",[t,n,e],1,i,_)
},this.all_entities_TaxonomicGrouping_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_TaxonomicGrouping",[t,n,e],1,i,_)
},this.get_entity_TimeSeries=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_TimeSeries",[t,n],1,e,i)
},this.get_entity_TimeSeries_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_TimeSeries",[t,n],1,e,i)
},this.query_entity_TimeSeries=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_TimeSeries",[t,n],1,e,i)
},this.query_entity_TimeSeries_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_TimeSeries",[t,n],1,e,i)
},this.all_entities_TimeSeries=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_TimeSeries",[t,n,e],1,i,_)
},this.all_entities_TimeSeries_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_TimeSeries",[t,n,e],1,i,_)
},this.get_entity_Trait=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Trait",[t,n],1,e,i)
},this.get_entity_Trait_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Trait",[t,n],1,e,i)
},this.query_entity_Trait=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Trait",[t,n],1,e,i)
},this.query_entity_Trait_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Trait",[t,n],1,e,i)
},this.all_entities_Trait=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Trait",[t,n,e],1,i,_)
},this.all_entities_Trait_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Trait",[t,n,e],1,i,_)
},this.get_entity_Tree=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Tree",[t,n],1,e,i)
},this.get_entity_Tree_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Tree",[t,n],1,e,i)
},this.query_entity_Tree=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Tree",[t,n],1,e,i)
},this.query_entity_Tree_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Tree",[t,n],1,e,i)
},this.all_entities_Tree=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Tree",[t,n,e],1,i,_)
},this.all_entities_Tree_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Tree",[t,n,e],1,i,_)
},this.get_entity_TreeAttribute=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_TreeAttribute",[t,n],1,e,i)
},this.get_entity_TreeAttribute_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_TreeAttribute",[t,n],1,e,i)
},this.query_entity_TreeAttribute=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_TreeAttribute",[t,n],1,e,i)
},this.query_entity_TreeAttribute_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_TreeAttribute",[t,n],1,e,i)
},this.all_entities_TreeAttribute=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_TreeAttribute",[t,n,e],1,i,_)
},this.all_entities_TreeAttribute_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_TreeAttribute",[t,n,e],1,i,_)
},this.get_entity_TreeNodeAttribute=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_TreeNodeAttribute",[t,n],1,e,i)
},this.get_entity_TreeNodeAttribute_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_TreeNodeAttribute",[t,n],1,e,i)
},this.query_entity_TreeNodeAttribute=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_TreeNodeAttribute",[t,n],1,e,i)
},this.query_entity_TreeNodeAttribute_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_TreeNodeAttribute",[t,n],1,e,i)
},this.all_entities_TreeNodeAttribute=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_TreeNodeAttribute",[t,n,e],1,i,_)
},this.all_entities_TreeNodeAttribute_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_TreeNodeAttribute",[t,n,e],1,i,_)
},this.get_entity_Variant=function(t,n,e,i){
return l("CDMI_EntityAPI.get_entity_Variant",[t,n],1,e,i)
},this.get_entity_Variant_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.get_entity_Variant",[t,n],1,e,i)
},this.query_entity_Variant=function(t,n,e,i){
return l("CDMI_EntityAPI.query_entity_Variant",[t,n],1,e,i)
},this.query_entity_Variant_async=function(t,n,e,i){
return o(),l("CDMI_EntityAPI.query_entity_Variant",[t,n],1,e,i)
},this.all_entities_Variant=function(t,n,e,i,_){
return l("CDMI_EntityAPI.all_entities_Variant",[t,n,e],1,i,_)
},this.all_entities_Variant_async=function(t,n,e,i,_){
return o(),l("CDMI_EntityAPI.all_entities_Variant",[t,n,e],1,i,_)
},this.get_relationship_AffectsLevelOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_AffectsLevelOf",[t,n,e,i],1,_,r)
},this.get_relationship_AffectsLevelOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_AffectsLevelOf",[t,n,e,i],1,_,r)},
this.get_relationship_IsAffectedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsAffectedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsAffectedIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsAffectedIn",[t,n,e,i],1,_,r)
},this.get_relationship_Aligned=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Aligned",[t,n,e,i],1,_,r)
},this.get_relationship_Aligned_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Aligned",[t,n,e,i],1,_,r)
},this.get_relationship_WasAlignedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_WasAlignedBy",[t,n,e,i],1,_,r)
},this.get_relationship_WasAlignedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_WasAlignedBy",[t,n,e,i],1,_,r)
},this.get_relationship_AssertsFunctionFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_AssertsFunctionFor",[t,n,e,i],1,_,r)},
this.get_relationship_AssertsFunctionFor_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_AssertsFunctionFor",[t,n,e,i],1,_,r)
},this.get_relationship_HasAssertedFunctionFrom=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasAssertedFunctionFrom",[t,n,e,i],1,_,r)
},this.get_relationship_HasAssertedFunctionFrom_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_HasAssertedFunctionFrom",[t,n,e,i],1,_,r)
},this.get_relationship_AssociationFeature=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_AssociationFeature",[t,n,e,i],1,_,r)},
this.get_relationship_AssociationFeature_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_AssociationFeature",[t,n,e,i],1,_,r)
},this.get_relationship_FeatureInteractsIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_FeatureInteractsIn",[t,n,e,i],1,_,r)},
this.get_relationship_FeatureInteractsIn_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_FeatureInteractsIn",[t,n,e,i],1,_,r)
},this.get_relationship_CompoundMeasuredBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_CompoundMeasuredBy",[t,n,e,i],1,_,r)},
this.get_relationship_CompoundMeasuredBy_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_CompoundMeasuredBy",[t,n,e,i],1,_,r)
},this.get_relationship_MeasuresCompound=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_MeasuresCompound",[t,n,e,i],1,_,r)
},this.get_relationship_MeasuresCompound_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_MeasuresCompound",[t,n,e,i],1,_,r)
},this.get_relationship_Concerns=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Concerns",[t,n,e,i],1,_,r)
},this.get_relationship_Concerns_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Concerns",[t,n,e,i],1,_,r)
},this.get_relationship_IsATopicOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsATopicOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsATopicOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsATopicOf",[t,n,e,i],1,_,r)
},this.get_relationship_ConsistsOfCompounds=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ConsistsOfCompounds",[t,n,e,i],1,_,r)
},this.get_relationship_ConsistsOfCompounds_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_ConsistsOfCompounds",[t,n,e,i],1,_,r)
},this.get_relationship_ComponentOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ComponentOf",[t,n,e,i],1,_,r)
},this.get_relationship_ComponentOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_ComponentOf",[t,n,e,i],1,_,r)
},this.get_relationship_Contains=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Contains",[t,n,e,i],1,_,r)
},this.get_relationship_Contains_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Contains",[t,n,e,i],1,_,r)
},this.get_relationship_IsContainedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsContainedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsContainedIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsContainedIn",[t,n,e,i],1,_,r)
},this.get_relationship_ContainsAlignedDNA=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ContainsAlignedDNA",[t,n,e,i],1,_,r)},
this.get_relationship_ContainsAlignedDNA_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_ContainsAlignedDNA",[t,n,e,i],1,_,r)
},this.get_relationship_IsAlignedDNAComponentOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsAlignedDNAComponentOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsAlignedDNAComponentOf_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsAlignedDNAComponentOf",[t,n,e,i],1,_,r)
},this.get_relationship_ContainsAlignedProtein=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ContainsAlignedProtein",[t,n,e,i],1,_,r)
},this.get_relationship_ContainsAlignedProtein_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_ContainsAlignedProtein",[t,n,e,i],1,_,r)
},this.get_relationship_IsAlignedProteinComponentOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsAlignedProteinComponentOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsAlignedProteinComponentOf_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsAlignedProteinComponentOf",[t,n,e,i],1,_,r)
},this.get_relationship_ContainsExperimentalUnit=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ContainsExperimentalUnit",[t,n,e,i],1,_,r)
},this.get_relationship_ContainsExperimentalUnit_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_ContainsExperimentalUnit",[t,n,e,i],1,_,r)
},this.get_relationship_GroupedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_GroupedBy",[t,n,e,i],1,_,r)
},this.get_relationship_GroupedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_GroupedBy",[t,n,e,i],1,_,r)
},this.get_relationship_Controls=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Controls",[t,n,e,i],1,_,r)
},this.get_relationship_Controls_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Controls",[t,n,e,i],1,_,r)
},this.get_relationship_IsControlledUsing=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsControlledUsing",[t,n,e,i],1,_,r)
},this.get_relationship_IsControlledUsing_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsControlledUsing",[t,n,e,i],1,_,r)
},this.get_relationship_DefaultControlSample=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_DefaultControlSample",[t,n,e,i],1,_,r)
},this.get_relationship_DefaultControlSample_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_DefaultControlSample",[t,n,e,i],1,_,r)
},this.get_relationship_SamplesDefaultControl=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SamplesDefaultControl",[t,n,e,i],1,_,r)
},this.get_relationship_SamplesDefaultControl_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_SamplesDefaultControl",[t,n,e,i],1,_,r)
},this.get_relationship_Describes=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Describes",[t,n,e,i],1,_,r)
},this.get_relationship_Describes_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Describes",[t,n,e,i],1,_,r)
},this.get_relationship_IsDescribedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsDescribedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsDescribedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsDescribedBy",[t,n,e,i],1,_,r)
},this.get_relationship_DescribesAlignment=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_DescribesAlignment",[t,n,e,i],1,_,r)},
this.get_relationship_DescribesAlignment_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_DescribesAlignment",[t,n,e,i],1,_,r)
},this.get_relationship_HasAlignmentAttribute=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasAlignmentAttribute",[t,n,e,i],1,_,r)
},this.get_relationship_HasAlignmentAttribute_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_HasAlignmentAttribute",[t,n,e,i],1,_,r)
},this.get_relationship_DescribesMeasurement=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_DescribesMeasurement",[t,n,e,i],1,_,r)
},this.get_relationship_DescribesMeasurement_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_DescribesMeasurement",[t,n,e,i],1,_,r)
},this.get_relationship_IsDefinedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsDefinedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsDefinedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsDefinedBy",[t,n,e,i],1,_,r)
},this.get_relationship_DescribesTree=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_DescribesTree",[t,n,e,i],1,_,r)
},this.get_relationship_DescribesTree_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_DescribesTree",[t,n,e,i],1,_,r)
},this.get_relationship_HasTreeAttribute=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasTreeAttribute",[t,n,e,i],1,_,r)
},this.get_relationship_HasTreeAttribute_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_HasTreeAttribute",[t,n,e,i],1,_,r)
},this.get_relationship_DescribesTreeNode=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_DescribesTreeNode",[t,n,e,i],1,_,r)
},this.get_relationship_DescribesTreeNode_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_DescribesTreeNode",[t,n,e,i],1,_,r)
},this.get_relationship_HasNodeAttribute=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasNodeAttribute",[t,n,e,i],1,_,r)
},this.get_relationship_HasNodeAttribute_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_HasNodeAttribute",[t,n,e,i],1,_,r)
},this.get_relationship_DetectedWithMethod=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_DetectedWithMethod",[t,n,e,i],1,_,r)},
this.get_relationship_DetectedWithMethod_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_DetectedWithMethod",[t,n,e,i],1,_,r)
},this.get_relationship_DetectedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_DetectedBy",[t,n,e,i],1,_,r)
},this.get_relationship_DetectedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_DetectedBy",[t,n,e,i],1,_,r)
},this.get_relationship_Displays=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Displays",[t,n,e,i],1,_,r)
},this.get_relationship_Displays_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Displays",[t,n,e,i],1,_,r)
},this.get_relationship_IsDisplayedOn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsDisplayedOn",[t,n,e,i],1,_,r)
},this.get_relationship_IsDisplayedOn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsDisplayedOn",[t,n,e,i],1,_,r)
},this.get_relationship_Encompasses=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Encompasses",[t,n,e,i],1,_,r)
},this.get_relationship_Encompasses_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Encompasses",[t,n,e,i],1,_,r)
},this.get_relationship_IsEncompassedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsEncompassedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsEncompassedIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsEncompassedIn",[t,n,e,i],1,_,r)
},this.get_relationship_EvaluatedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_EvaluatedIn",[t,n,e,i],1,_,r)
},this.get_relationship_EvaluatedIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_EvaluatedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IncludesStrain=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IncludesStrain",[t,n,e,i],1,_,r)
},this.get_relationship_IncludesStrain_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IncludesStrain",[t,n,e,i],1,_,r)},
this.get_relationship_FeatureIsTranscriptionFactorFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_FeatureIsTranscriptionFactorFor",[t,n,e,i],1,_,r)
},
this.get_relationship_FeatureIsTranscriptionFactorFor_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_FeatureIsTranscriptionFactorFor",[t,n,e,i],1,_,r)
},this.get_relationship_HasTranscriptionFactorFeature=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasTranscriptionFactorFeature",[t,n,e,i],1,_,r)
},
this.get_relationship_HasTranscriptionFactorFeature_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_HasTranscriptionFactorFeature",[t,n,e,i],1,_,r)
},this.get_relationship_FeatureMeasuredBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_FeatureMeasuredBy",[t,n,e,i],1,_,r)
},this.get_relationship_FeatureMeasuredBy_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_FeatureMeasuredBy",[t,n,e,i],1,_,r)
},this.get_relationship_MeasuresFeature=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_MeasuresFeature",[t,n,e,i],1,_,r)
},this.get_relationship_MeasuresFeature_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_MeasuresFeature",[t,n,e,i],1,_,r)
},this.get_relationship_Formulated=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Formulated",[t,n,e,i],1,_,r)
},this.get_relationship_Formulated_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Formulated",[t,n,e,i],1,_,r)
},this.get_relationship_WasFormulatedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_WasFormulatedBy",[t,n,e,i],1,_,r)
},this.get_relationship_WasFormulatedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_WasFormulatedBy",[t,n,e,i],1,_,r)
},this.get_relationship_GeneratedLevelsFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_GeneratedLevelsFor",[t,n,e,i],1,_,r)},
this.get_relationship_GeneratedLevelsFor_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_GeneratedLevelsFor",[t,n,e,i],1,_,r)
},this.get_relationship_WasGeneratedFrom=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_WasGeneratedFrom",[t,n,e,i],1,_,r)
},this.get_relationship_WasGeneratedFrom_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_WasGeneratedFrom",[t,n,e,i],1,_,r)
},this.get_relationship_GenomeParentOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_GenomeParentOf",[t,n,e,i],1,_,r)
},this.get_relationship_GenomeParentOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_GenomeParentOf",[t,n,e,i],1,_,r)},
this.get_relationship_DerivedFromGenome=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_DerivedFromGenome",[t,n,e,i],1,_,r)
},this.get_relationship_DerivedFromGenome_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_DerivedFromGenome",[t,n,e,i],1,_,r)
},this.get_relationship_HasAliasAssertedFrom=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasAliasAssertedFrom",[t,n,e,i],1,_,r)
},this.get_relationship_HasAliasAssertedFrom_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_HasAliasAssertedFrom",[t,n,e,i],1,_,r)
},this.get_relationship_AssertsAliasFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_AssertsAliasFor",[t,n,e,i],1,_,r)
},this.get_relationship_AssertsAliasFor_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_AssertsAliasFor",[t,n,e,i],1,_,r)
},this.get_relationship_HasCompoundAliasFrom=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasCompoundAliasFrom",[t,n,e,i],1,_,r)
},this.get_relationship_HasCompoundAliasFrom_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_HasCompoundAliasFrom",[t,n,e,i],1,_,r)
},this.get_relationship_UsesAliasForCompound=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_UsesAliasForCompound",[t,n,e,i],1,_,r)
},this.get_relationship_UsesAliasForCompound_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_UsesAliasForCompound",[t,n,e,i],1,_,r)
},this.get_relationship_HasEffector=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasEffector",[t,n,e,i],1,_,r)
},this.get_relationship_HasEffector_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasEffector",[t,n,e,i],1,_,r)
},this.get_relationship_IsEffectorFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsEffectorFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsEffectorFor_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsEffectorFor",[t,n,e,i],1,_,r)
},this.get_relationship_HasExperimentalUnit=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasExperimentalUnit",[t,n,e,i],1,_,r)
},this.get_relationship_HasExperimentalUnit_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_HasExperimentalUnit",[t,n,e,i],1,_,r)
},this.get_relationship_IsExperimentalUnitOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsExperimentalUnitOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsExperimentalUnitOf_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsExperimentalUnitOf",[t,n,e,i],1,_,r)
},this.get_relationship_HasExpressionSample=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasExpressionSample",[t,n,e,i],1,_,r)
},this.get_relationship_HasExpressionSample_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_HasExpressionSample",[t,n,e,i],1,_,r)
},this.get_relationship_SampleBelongsToExperimentalUnit=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SampleBelongsToExperimentalUnit",[t,n,e,i],1,_,r)
},
this.get_relationship_SampleBelongsToExperimentalUnit_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_SampleBelongsToExperimentalUnit",[t,n,e,i],1,_,r)
},this.get_relationship_HasGenomes=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasGenomes",[t,n,e,i],1,_,r)
},this.get_relationship_HasGenomes_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasGenomes",[t,n,e,i],1,_,r)
},this.get_relationship_IsInRegulogCollection=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsInRegulogCollection",[t,n,e,i],1,_,r)
},this.get_relationship_IsInRegulogCollection_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsInRegulogCollection",[t,n,e,i],1,_,r)
},this.get_relationship_HasIndicatedSignalFrom=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasIndicatedSignalFrom",[t,n,e,i],1,_,r)
},this.get_relationship_HasIndicatedSignalFrom_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_HasIndicatedSignalFrom",[t,n,e,i],1,_,r)
},this.get_relationship_IndicatesSignalFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IndicatesSignalFor",[t,n,e,i],1,_,r)},
this.get_relationship_IndicatesSignalFor_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_IndicatesSignalFor",[t,n,e,i],1,_,r)
},this.get_relationship_HasKnockoutIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasKnockoutIn",[t,n,e,i],1,_,r)
},this.get_relationship_HasKnockoutIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasKnockoutIn",[t,n,e,i],1,_,r)
},this.get_relationship_KnockedOutIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_KnockedOutIn",[t,n,e,i],1,_,r)
},this.get_relationship_KnockedOutIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_KnockedOutIn",[t,n,e,i],1,_,r)
},this.get_relationship_HasMeasurement=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasMeasurement",[t,n,e,i],1,_,r)
},this.get_relationship_HasMeasurement_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasMeasurement",[t,n,e,i],1,_,r)},
this.get_relationship_IsMeasureOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsMeasureOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsMeasureOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsMeasureOf",[t,n,e,i],1,_,r)
},this.get_relationship_HasMember=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasMember",[t,n,e,i],1,_,r)
},this.get_relationship_HasMember_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasMember",[t,n,e,i],1,_,r)
},this.get_relationship_IsMemberOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsMemberOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsMemberOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsMemberOf",[t,n,e,i],1,_,r)
},this.get_relationship_HasParameter=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasParameter",[t,n,e,i],1,_,r)
},this.get_relationship_HasParameter_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasParameter",[t,n,e,i],1,_,r)
},this.get_relationship_OfEnvironment=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_OfEnvironment",[t,n,e,i],1,_,r)
},this.get_relationship_OfEnvironment_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_OfEnvironment",[t,n,e,i],1,_,r)
},this.get_relationship_HasParticipant=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasParticipant",[t,n,e,i],1,_,r)
},this.get_relationship_HasParticipant_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasParticipant",[t,n,e,i],1,_,r)},
this.get_relationship_ParticipatesIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ParticipatesIn",[t,n,e,i],1,_,r)
},this.get_relationship_ParticipatesIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_ParticipatesIn",[t,n,e,i],1,_,r)},
this.get_relationship_HasPresenceOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasPresenceOf",[t,n,e,i],1,_,r)
},this.get_relationship_HasPresenceOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasPresenceOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsPresentIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsPresentIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsPresentIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsPresentIn",[t,n,e,i],1,_,r)
},this.get_relationship_HasProteinMember=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasProteinMember",[t,n,e,i],1,_,r)
},this.get_relationship_HasProteinMember_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_HasProteinMember",[t,n,e,i],1,_,r)
},this.get_relationship_IsProteinMemberOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsProteinMemberOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsProteinMemberOf_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsProteinMemberOf",[t,n,e,i],1,_,r)
},this.get_relationship_HasReactionAliasFrom=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasReactionAliasFrom",[t,n,e,i],1,_,r)
},this.get_relationship_HasReactionAliasFrom_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_HasReactionAliasFrom",[t,n,e,i],1,_,r)
},this.get_relationship_UsesAliasForReaction=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_UsesAliasForReaction",[t,n,e,i],1,_,r)
},this.get_relationship_UsesAliasForReaction_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_UsesAliasForReaction",[t,n,e,i],1,_,r)
},this.get_relationship_HasRegulogs=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasRegulogs",[t,n,e,i],1,_,r)
},this.get_relationship_HasRegulogs_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasRegulogs",[t,n,e,i],1,_,r)
},this.get_relationship_IsInCollection=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsInCollection",[t,n,e,i],1,_,r)
},this.get_relationship_IsInCollection_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsInCollection",[t,n,e,i],1,_,r)},
this.get_relationship_HasRepresentativeOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasRepresentativeOf",[t,n,e,i],1,_,r)
},this.get_relationship_HasRepresentativeOf_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_HasRepresentativeOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsRepresentedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsRepresentedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsRepresentedIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsRepresentedIn",[t,n,e,i],1,_,r)
},this.get_relationship_HasRequirementOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasRequirementOf",[t,n,e,i],1,_,r)
},this.get_relationship_HasRequirementOf_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_HasRequirementOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsARequirementOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsARequirementOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsARequirementOf_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_IsARequirementOf",[t,n,e,i],1,_,r)
},this.get_relationship_HasResultsIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasResultsIn",[t,n,e,i],1,_,r)
},this.get_relationship_HasResultsIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasResultsIn",[t,n,e,i],1,_,r)
},this.get_relationship_HasResultsFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasResultsFor",[t,n,e,i],1,_,r)
},this.get_relationship_HasResultsFor_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasResultsFor",[t,n,e,i],1,_,r)
},this.get_relationship_HasSection=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasSection",[t,n,e,i],1,_,r)
},this.get_relationship_HasSection_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasSection",[t,n,e,i],1,_,r)
},this.get_relationship_IsSectionOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsSectionOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsSectionOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsSectionOf",[t,n,e,i],1,_,r)
},this.get_relationship_HasStep=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasStep",[t,n,e,i],1,_,r)
},this.get_relationship_HasStep_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasStep",[t,n,e,i],1,_,r)
},this.get_relationship_IsStepOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsStepOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsStepOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsStepOf",[t,n,e,i],1,_,r)
},this.get_relationship_HasTrait=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasTrait",[t,n,e,i],1,_,r)
},this.get_relationship_HasTrait_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasTrait",[t,n,e,i],1,_,r)
},this.get_relationship_Measures=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Measures",[t,n,e,i],1,_,r)
},this.get_relationship_Measures_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Measures",[t,n,e,i],1,_,r)
},this.get_relationship_HasUnits=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasUnits",[t,n,e,i],1,_,r)
},this.get_relationship_HasUnits_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasUnits",[t,n,e,i],1,_,r)
},this.get_relationship_IsLocated=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsLocated",[t,n,e,i],1,_,r)
},this.get_relationship_IsLocated_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsLocated",[t,n,e,i],1,_,r)
},this.get_relationship_HasUsage=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasUsage",[t,n,e,i],1,_,r)
},this.get_relationship_HasUsage_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasUsage",[t,n,e,i],1,_,r)
},this.get_relationship_IsUsageOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsUsageOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsUsageOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsUsageOf",[t,n,e,i],1,_,r)
},this.get_relationship_HasValueFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasValueFor",[t,n,e,i],1,_,r)
},this.get_relationship_HasValueFor_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasValueFor",[t,n,e,i],1,_,r)
},this.get_relationship_HasValueIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasValueIn",[t,n,e,i],1,_,r)
},this.get_relationship_HasValueIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasValueIn",[t,n,e,i],1,_,r)
},this.get_relationship_HasVariationIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasVariationIn",[t,n,e,i],1,_,r)
},this.get_relationship_HasVariationIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasVariationIn",[t,n,e,i],1,_,r)},
this.get_relationship_IsVariedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsVariedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsVariedIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsVariedIn",[t,n,e,i],1,_,r)
},this.get_relationship_Impacts=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Impacts",[t,n,e,i],1,_,r)
},this.get_relationship_Impacts_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Impacts",[t,n,e,i],1,_,r)
},this.get_relationship_IsImpactedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsImpactedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsImpactedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsImpactedBy",[t,n,e,i],1,_,r)
},this.get_relationship_ImplementsReaction=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ImplementsReaction",[t,n,e,i],1,_,r)},
this.get_relationship_ImplementsReaction_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_ImplementsReaction",[t,n,e,i],1,_,r)
},this.get_relationship_ImplementedBasedOn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ImplementedBasedOn",[t,n,e,i],1,_,r)},
this.get_relationship_ImplementedBasedOn_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_ImplementedBasedOn",[t,n,e,i],1,_,r)
},this.get_relationship_Includes=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Includes",[t,n,e,i],1,_,r)
},this.get_relationship_Includes_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Includes",[t,n,e,i],1,_,r)
},this.get_relationship_IsIncludedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsIncludedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsIncludedIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsIncludedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IncludesAdditionalCompounds=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IncludesAdditionalCompounds",[t,n,e,i],1,_,r)
},this.get_relationship_IncludesAdditionalCompounds_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IncludesAdditionalCompounds",[t,n,e,i],1,_,r)
},this.get_relationship_IncludedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IncludedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IncludedIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IncludedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IncludesAlignmentRow=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IncludesAlignmentRow",[t,n,e,i],1,_,r)
},this.get_relationship_IncludesAlignmentRow_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IncludesAlignmentRow",[t,n,e,i],1,_,r)
},this.get_relationship_IsAlignmentRowIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsAlignmentRowIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsAlignmentRowIn_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_IsAlignmentRowIn",[t,n,e,i],1,_,r)
},this.get_relationship_IncludesPart=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IncludesPart",[t,n,e,i],1,_,r)
},this.get_relationship_IncludesPart_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IncludesPart",[t,n,e,i],1,_,r)
},this.get_relationship_IsPartOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsPartOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsPartOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsPartOf",[t,n,e,i],1,_,r)
},this.get_relationship_IndicatedLevelsFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IndicatedLevelsFor",[t,n,e,i],1,_,r)},
this.get_relationship_IndicatedLevelsFor_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_IndicatedLevelsFor",[t,n,e,i],1,_,r)
},this.get_relationship_HasLevelsFrom=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasLevelsFrom",[t,n,e,i],1,_,r)
},this.get_relationship_HasLevelsFrom_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasLevelsFrom",[t,n,e,i],1,_,r)
},this.get_relationship_Involves=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Involves",[t,n,e,i],1,_,r)
},this.get_relationship_Involves_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Involves",[t,n,e,i],1,_,r)
},this.get_relationship_IsInvolvedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsInvolvedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsInvolvedIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsInvolvedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsAnnotatedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsAnnotatedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsAnnotatedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsAnnotatedBy",[t,n,e,i],1,_,r)
},this.get_relationship_Annotates=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Annotates",[t,n,e,i],1,_,r)
},this.get_relationship_Annotates_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Annotates",[t,n,e,i],1,_,r)
},this.get_relationship_IsAssayOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsAssayOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsAssayOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsAssayOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsAssayedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsAssayedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsAssayedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsAssayedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsClassFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsClassFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsClassFor_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsClassFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsInClass=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsInClass",[t,n,e,i],1,_,r)
},this.get_relationship_IsInClass_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsInClass",[t,n,e,i],1,_,r)
},this.get_relationship_IsCollectionOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsCollectionOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsCollectionOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsCollectionOf",[t,n,e,i],1,_,r)},
this.get_relationship_IsCollectedInto=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsCollectedInto",[t,n,e,i],1,_,r)
},this.get_relationship_IsCollectedInto_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsCollectedInto",[t,n,e,i],1,_,r)
},this.get_relationship_IsComposedOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsComposedOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsComposedOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsComposedOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsComponentOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsComponentOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsComponentOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsComponentOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsComprisedOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsComprisedOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsComprisedOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsComprisedOf",[t,n,e,i],1,_,r)
},this.get_relationship_Comprises=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Comprises",[t,n,e,i],1,_,r)
},this.get_relationship_Comprises_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Comprises",[t,n,e,i],1,_,r)
},this.get_relationship_IsConfiguredBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsConfiguredBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsConfiguredBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsConfiguredBy",[t,n,e,i],1,_,r)},
this.get_relationship_ReflectsStateOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ReflectsStateOf",[t,n,e,i],1,_,r)
},this.get_relationship_ReflectsStateOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_ReflectsStateOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsConservedDomainModelFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsConservedDomainModelFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsConservedDomainModelFor_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsConservedDomainModelFor",[t,n,e,i],1,_,r)},
this.get_relationship_HasConservedDomainModel=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasConservedDomainModel",[t,n,e,i],1,_,r)
},this.get_relationship_HasConservedDomainModel_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_HasConservedDomainModel",[t,n,e,i],1,_,r)
},this.get_relationship_IsConsistentWith=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsConsistentWith",[t,n,e,i],1,_,r)
},this.get_relationship_IsConsistentWith_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_IsConsistentWith",[t,n,e,i],1,_,r)
},this.get_relationship_IsConsistentTo=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsConsistentTo",[t,n,e,i],1,_,r)
},this.get_relationship_IsConsistentTo_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsConsistentTo",[t,n,e,i],1,_,r)},
this.get_relationship_IsContextOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsContextOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsContextOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsContextOf",[t,n,e,i],1,_,r)
},this.get_relationship_HasEnvironment=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasEnvironment",[t,n,e,i],1,_,r)
},this.get_relationship_HasEnvironment_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasEnvironment",[t,n,e,i],1,_,r)},
this.get_relationship_IsCoregulatedWith=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsCoregulatedWith",[t,n,e,i],1,_,r)
},this.get_relationship_IsCoregulatedWith_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsCoregulatedWith",[t,n,e,i],1,_,r)
},this.get_relationship_HasCoregulationWith=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasCoregulationWith",[t,n,e,i],1,_,r)
},this.get_relationship_HasCoregulationWith_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_HasCoregulationWith",[t,n,e,i],1,_,r)
},this.get_relationship_IsCoupledTo=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsCoupledTo",[t,n,e,i],1,_,r)
},this.get_relationship_IsCoupledTo_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsCoupledTo",[t,n,e,i],1,_,r)
},this.get_relationship_IsCoupledWith=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsCoupledWith",[t,n,e,i],1,_,r)
},this.get_relationship_IsCoupledWith_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsCoupledWith",[t,n,e,i],1,_,r)
},this.get_relationship_IsDatasetFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsDatasetFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsDatasetFor_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsDatasetFor",[t,n,e,i],1,_,r)
},this.get_relationship_HasAssociationDataset=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasAssociationDataset",[t,n,e,i],1,_,r)
},this.get_relationship_HasAssociationDataset_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_HasAssociationDataset",[t,n,e,i],1,_,r)
},this.get_relationship_IsDeterminedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsDeterminedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsDeterminedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsDeterminedBy",[t,n,e,i],1,_,r)},
this.get_relationship_Determines=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Determines",[t,n,e,i],1,_,r)
},this.get_relationship_Determines_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Determines",[t,n,e,i],1,_,r)
},this.get_relationship_IsDividedInto=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsDividedInto",[t,n,e,i],1,_,r)
},this.get_relationship_IsDividedInto_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsDividedInto",[t,n,e,i],1,_,r)
},this.get_relationship_IsDivisionOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsDivisionOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsDivisionOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsDivisionOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsExecutedAs=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsExecutedAs",[t,n,e,i],1,_,r)
},this.get_relationship_IsExecutedAs_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsExecutedAs",[t,n,e,i],1,_,r)
},this.get_relationship_IsExecutionOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsExecutionOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsExecutionOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsExecutionOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsExemplarOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsExemplarOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsExemplarOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsExemplarOf",[t,n,e,i],1,_,r)
},this.get_relationship_HasAsExemplar=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasAsExemplar",[t,n,e,i],1,_,r)
},this.get_relationship_HasAsExemplar_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasAsExemplar",[t,n,e,i],1,_,r)
},this.get_relationship_IsFamilyFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsFamilyFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsFamilyFor_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsFamilyFor",[t,n,e,i],1,_,r)
},this.get_relationship_DeterminesFunctionOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_DeterminesFunctionOf",[t,n,e,i],1,_,r)
},this.get_relationship_DeterminesFunctionOf_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_DeterminesFunctionOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsFormedOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsFormedOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsFormedOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsFormedOf",[t,n,e,i],1,_,r)}
;this.get_relationship_IsFormedInto=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsFormedInto",[t,n,e,i],1,_,r)
},this.get_relationship_IsFormedInto_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsFormedInto",[t,n,e,i],1,_,r)
},this.get_relationship_IsFunctionalIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsFunctionalIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsFunctionalIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsFunctionalIn",[t,n,e,i],1,_,r)},
this.get_relationship_HasFunctional=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasFunctional",[t,n,e,i],1,_,r)
},this.get_relationship_HasFunctional_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasFunctional",[t,n,e,i],1,_,r)
},this.get_relationship_IsGroupFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsGroupFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsGroupFor_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsGroupFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsInGroup=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsInGroup",[t,n,e,i],1,_,r)
},this.get_relationship_IsInGroup_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsInGroup",[t,n,e,i],1,_,r)
},this.get_relationship_IsGroupingOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsGroupingOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsGroupingOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsGroupingOf",[t,n,e,i],1,_,r)
},this.get_relationship_InAssociationDataset=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_InAssociationDataset",[t,n,e,i],1,_,r)
},this.get_relationship_InAssociationDataset_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_InAssociationDataset",[t,n,e,i],1,_,r)
},this.get_relationship_IsImplementedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsImplementedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsImplementedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsImplementedBy",[t,n,e,i],1,_,r)
},this.get_relationship_Implements=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Implements",[t,n,e,i],1,_,r)
},this.get_relationship_Implements_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Implements",[t,n,e,i],1,_,r)
},this.get_relationship_IsInOperon=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsInOperon",[t,n,e,i],1,_,r)
},this.get_relationship_IsInOperon_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsInOperon",[t,n,e,i],1,_,r)
},this.get_relationship_OperonContains=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_OperonContains",[t,n,e,i],1,_,r)
},this.get_relationship_OperonContains_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_OperonContains",[t,n,e,i],1,_,r)},
this.get_relationship_IsInPair=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsInPair",[t,n,e,i],1,_,r)
},this.get_relationship_IsInPair_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsInPair",[t,n,e,i],1,_,r)
},this.get_relationship_IsPairOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsPairOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsPairOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsPairOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsInstantiatedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsInstantiatedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsInstantiatedBy_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_IsInstantiatedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsInstanceOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsInstanceOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsInstanceOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsInstanceOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsLocatedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsLocatedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsLocatedIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsLocatedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsLocusFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsLocusFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsLocusFor_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsLocusFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsMeasurementMethodOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsMeasurementMethodOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsMeasurementMethodOf_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsMeasurementMethodOf",[t,n,e,i],1,_,r)
},this.get_relationship_WasMeasuredBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_WasMeasuredBy",[t,n,e,i],1,_,r)
},this.get_relationship_WasMeasuredBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_WasMeasuredBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsModeledBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsModeledBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsModeledBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsModeledBy",[t,n,e,i],1,_,r)
},this.get_relationship_Models=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Models",[t,n,e,i],1,_,r)
},this.get_relationship_Models_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Models",[t,n,e,i],1,_,r)
},this.get_relationship_IsModifiedToBuildAlignment=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsModifiedToBuildAlignment",[t,n,e,i],1,_,r)
},this.get_relationship_IsModifiedToBuildAlignment_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsModifiedToBuildAlignment",[t,n,e,i],1,_,r)
},this.get_relationship_IsModificationOfAlignment=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsModificationOfAlignment",[t,n,e,i],1,_,r)
},this.get_relationship_IsModificationOfAlignment_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsModificationOfAlignment",[t,n,e,i],1,_,r)},
this.get_relationship_IsModifiedToBuildTree=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsModifiedToBuildTree",[t,n,e,i],1,_,r)
},this.get_relationship_IsModifiedToBuildTree_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsModifiedToBuildTree",[t,n,e,i],1,_,r)
},this.get_relationship_IsModificationOfTree=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsModificationOfTree",[t,n,e,i],1,_,r)
},this.get_relationship_IsModificationOfTree_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsModificationOfTree",[t,n,e,i],1,_,r)
},this.get_relationship_IsOwnerOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsOwnerOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsOwnerOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsOwnerOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsOwnedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsOwnedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsOwnedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsOwnedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsParticipatingAt=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsParticipatingAt",[t,n,e,i],1,_,r)
},this.get_relationship_IsParticipatingAt_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsParticipatingAt",[t,n,e,i],1,_,r)
},this.get_relationship_ParticipatesAt=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ParticipatesAt",[t,n,e,i],1,_,r)
},this.get_relationship_ParticipatesAt_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_ParticipatesAt",[t,n,e,i],1,_,r)},
this.get_relationship_IsProteinFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsProteinFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsProteinFor_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsProteinFor",[t,n,e,i],1,_,r)
},this.get_relationship_Produces=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Produces",[t,n,e,i],1,_,r)
},this.get_relationship_Produces_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Produces",[t,n,e,i],1,_,r)
},this.get_relationship_IsReagentIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsReagentIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsReagentIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsReagentIn",[t,n,e,i],1,_,r)
},this.get_relationship_Targets=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Targets",[t,n,e,i],1,_,r)
},this.get_relationship_Targets_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Targets",[t,n,e,i],1,_,r)
},this.get_relationship_IsRealLocationOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsRealLocationOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsRealLocationOf_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_IsRealLocationOf",[t,n,e,i],1,_,r)
},this.get_relationship_HasRealLocationIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasRealLocationIn",[t,n,e,i],1,_,r)
},this.get_relationship_HasRealLocationIn_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_HasRealLocationIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsReferencedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsReferencedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsReferencedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsReferencedBy",[t,n,e,i],1,_,r)},
this.get_relationship_UsesReference=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_UsesReference",[t,n,e,i],1,_,r)
},this.get_relationship_UsesReference_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_UsesReference",[t,n,e,i],1,_,r)
},this.get_relationship_IsRegulatedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsRegulatedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsRegulatedIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsRegulatedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsRegulatedSetOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsRegulatedSetOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsRegulatedSetOf_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_IsRegulatedSetOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsRegulatorFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsRegulatorFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsRegulatorFor_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsRegulatorFor",[t,n,e,i],1,_,r)},
this.get_relationship_HasRegulator=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasRegulator",[t,n,e,i],1,_,r)
},this.get_relationship_HasRegulator_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasRegulator",[t,n,e,i],1,_,r)
},this.get_relationship_IsRegulatorForRegulon=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsRegulatorForRegulon",[t,n,e,i],1,_,r)
},this.get_relationship_IsRegulatorForRegulon_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsRegulatorForRegulon",[t,n,e,i],1,_,r)
},this.get_relationship_ReglonHasRegulator=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ReglonHasRegulator",[t,n,e,i],1,_,r)},
this.get_relationship_ReglonHasRegulator_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_ReglonHasRegulator",[t,n,e,i],1,_,r)
},this.get_relationship_IsRegulatorySiteFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsRegulatorySiteFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsRegulatorySiteFor_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsRegulatorySiteFor",[t,n,e,i],1,_,r)
},this.get_relationship_HasRegulatorySite=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasRegulatorySite",[t,n,e,i],1,_,r)
},this.get_relationship_HasRegulatorySite_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_HasRegulatorySite",[t,n,e,i],1,_,r)
},this.get_relationship_IsRelevantFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsRelevantFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsRelevantFor_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsRelevantFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsRelevantTo=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsRelevantTo",[t,n,e,i],1,_,r)
},this.get_relationship_IsRelevantTo_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsRelevantTo",[t,n,e,i],1,_,r)
},this.get_relationship_IsRepresentedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsRepresentedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsRepresentedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsRepresentedBy",[t,n,e,i],1,_,r)
},this.get_relationship_DefinedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_DefinedBy",[t,n,e,i],1,_,r)
},this.get_relationship_DefinedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_DefinedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsRoleOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsRoleOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsRoleOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsRoleOf",[t,n,e,i],1,_,r)
},this.get_relationship_HasRole=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasRole",[t,n,e,i],1,_,r)
},this.get_relationship_HasRole_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasRole",[t,n,e,i],1,_,r)
},this.get_relationship_IsRowOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsRowOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsRowOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsRowOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsRoleFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsRoleFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsRoleFor_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsRoleFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsSequenceOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsSequenceOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsSequenceOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsSequenceOf",[t,n,e,i],1,_,r)
},this.get_relationship_HasAsSequence=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasAsSequence",[t,n,e,i],1,_,r)
},this.get_relationship_HasAsSequence_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasAsSequence",[t,n,e,i],1,_,r)
},this.get_relationship_IsSourceForAssociationDataset=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsSourceForAssociationDataset",[t,n,e,i],1,_,r)
},
this.get_relationship_IsSourceForAssociationDataset_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsSourceForAssociationDataset",[t,n,e,i],1,_,r)
},this.get_relationship_AssociationDatasetSourcedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_AssociationDatasetSourcedBy",[t,n,e,i],1,_,r)
},this.get_relationship_AssociationDatasetSourcedBy_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_AssociationDatasetSourcedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsSubInstanceOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsSubInstanceOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsSubInstanceOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsSubInstanceOf",[t,n,e,i],1,_,r)
},this.get_relationship_Validates=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Validates",[t,n,e,i],1,_,r)
},this.get_relationship_Validates_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Validates",[t,n,e,i],1,_,r)
},this.get_relationship_IsSummarizedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsSummarizedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsSummarizedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsSummarizedBy",[t,n,e,i],1,_,r)},
this.get_relationship_Summarizes=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Summarizes",[t,n,e,i],1,_,r)
},this.get_relationship_Summarizes_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Summarizes",[t,n,e,i],1,_,r)
},this.get_relationship_IsSuperclassOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsSuperclassOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsSuperclassOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsSuperclassOf",[t,n,e,i],1,_,r)},
this.get_relationship_IsSubclassOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsSubclassOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsSubclassOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsSubclassOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsTaxonomyOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsTaxonomyOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsTaxonomyOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsTaxonomyOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsInTaxa=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsInTaxa",[t,n,e,i],1,_,r)
},this.get_relationship_IsInTaxa_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsInTaxa",[t,n,e,i],1,_,r)
},this.get_relationship_IsTerminusFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsTerminusFor",[t,n,e,i],1,_,r)
},this.get_relationship_IsTerminusFor_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsTerminusFor",[t,n,e,i],1,_,r)
},this.get_relationship_HasAsTerminus=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasAsTerminus",[t,n,e,i],1,_,r)
},this.get_relationship_HasAsTerminus_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasAsTerminus",[t,n,e,i],1,_,r)
},this.get_relationship_IsTriggeredBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsTriggeredBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsTriggeredBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsTriggeredBy",[t,n,e,i],1,_,r)
},this.get_relationship_Triggers=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Triggers",[t,n,e,i],1,_,r)
},this.get_relationship_Triggers_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Triggers",[t,n,e,i],1,_,r)
},this.get_relationship_IsUsedToBuildTree=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsUsedToBuildTree",[t,n,e,i],1,_,r)
},this.get_relationship_IsUsedToBuildTree_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsUsedToBuildTree",[t,n,e,i],1,_,r)
},this.get_relationship_IsBuiltFromAlignment=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsBuiltFromAlignment",[t,n,e,i],1,_,r)
},this.get_relationship_IsBuiltFromAlignment_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsBuiltFromAlignment",[t,n,e,i],1,_,r)
},this.get_relationship_Manages=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Manages",[t,n,e,i],1,_,r)
},this.get_relationship_Manages_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Manages",[t,n,e,i],1,_,r)
},this.get_relationship_IsManagedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsManagedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsManagedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsManagedBy",[t,n,e,i],1,_,r)
},this.get_relationship_OntologyForSample=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_OntologyForSample",[t,n,e,i],1,_,r)
},this.get_relationship_OntologyForSample_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_OntologyForSample",[t,n,e,i],1,_,r)
},this.get_relationship_SampleHasOntology=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SampleHasOntology",[t,n,e,i],1,_,r)
},this.get_relationship_SampleHasOntology_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_SampleHasOntology",[t,n,e,i],1,_,r)
},this.get_relationship_OperatesIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_OperatesIn",[t,n,e,i],1,_,r)
},this.get_relationship_OperatesIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_OperatesIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsUtilizedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsUtilizedIn",[t,n,e,i],1,_,r)
},this.get_relationship_IsUtilizedIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsUtilizedIn",[t,n,e,i],1,_,r)
},this.get_relationship_OrdersExperimentalUnit=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_OrdersExperimentalUnit",[t,n,e,i],1,_,r)
},this.get_relationship_OrdersExperimentalUnit_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_OrdersExperimentalUnit",[t,n,e,i],1,_,r)
},this.get_relationship_IsTimepointOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsTimepointOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsTimepointOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsTimepointOf",[t,n,e,i],1,_,r)
},this.get_relationship_Overlaps=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Overlaps",[t,n,e,i],1,_,r)
},this.get_relationship_Overlaps_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Overlaps",[t,n,e,i],1,_,r)
},this.get_relationship_IncludesPartOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IncludesPartOf",[t,n,e,i],1,_,r)
},this.get_relationship_IncludesPartOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IncludesPartOf",[t,n,e,i],1,_,r)},
this.get_relationship_ParticipatesAs=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ParticipatesAs",[t,n,e,i],1,_,r)
},this.get_relationship_ParticipatesAs_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_ParticipatesAs",[t,n,e,i],1,_,r)},
this.get_relationship_IsParticipationOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsParticipationOf",[t,n,e,i],1,_,r)
},this.get_relationship_IsParticipationOf_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsParticipationOf",[t,n,e,i],1,_,r)
},this.get_relationship_PerformedExperiment=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_PerformedExperiment",[t,n,e,i],1,_,r)
},this.get_relationship_PerformedExperiment_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_PerformedExperiment",[t,n,e,i],1,_,r)
},this.get_relationship_PerformedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_PerformedBy",[t,n,e,i],1,_,r)
},this.get_relationship_PerformedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_PerformedBy",[t,n,e,i],1,_,r)
},this.get_relationship_PersonAnnotatedSample=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_PersonAnnotatedSample",[t,n,e,i],1,_,r)
},this.get_relationship_PersonAnnotatedSample_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_PersonAnnotatedSample",[t,n,e,i],1,_,r)
},this.get_relationship_SampleAnnotatedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SampleAnnotatedBy",[t,n,e,i],1,_,r)
},this.get_relationship_SampleAnnotatedBy_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_SampleAnnotatedBy",[t,n,e,i],1,_,r)
},this.get_relationship_PlatformWithSamples=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_PlatformWithSamples",[t,n,e,i],1,_,r)
},this.get_relationship_PlatformWithSamples_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_PlatformWithSamples",[t,n,e,i],1,_,r)
},this.get_relationship_SampleRunOnPlatform=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SampleRunOnPlatform",[t,n,e,i],1,_,r)
},this.get_relationship_SampleRunOnPlatform_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_SampleRunOnPlatform",[t,n,e,i],1,_,r)
},this.get_relationship_ProducedResultsFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ProducedResultsFor",[t,n,e,i],1,_,r)},
this.get_relationship_ProducedResultsFor_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_ProducedResultsFor",[t,n,e,i],1,_,r)
},this.get_relationship_HadResultsProducedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HadResultsProducedBy",[t,n,e,i],1,_,r)
},this.get_relationship_HadResultsProducedBy_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_HadResultsProducedBy",[t,n,e,i],1,_,r)
},this.get_relationship_ProtocolForSample=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ProtocolForSample",[t,n,e,i],1,_,r)
},this.get_relationship_ProtocolForSample_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_ProtocolForSample",[t,n,e,i],1,_,r)
},this.get_relationship_SampleUsesProtocol=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SampleUsesProtocol",[t,n,e,i],1,_,r)},
this.get_relationship_SampleUsesProtocol_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_SampleUsesProtocol",[t,n,e,i],1,_,r)
},this.get_relationship_Provided=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Provided",[t,n,e,i],1,_,r)
},this.get_relationship_Provided_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Provided",[t,n,e,i],1,_,r)
},this.get_relationship_WasProvidedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_WasProvidedBy",[t,n,e,i],1,_,r)
},this.get_relationship_WasProvidedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_WasProvidedBy",[t,n,e,i],1,_,r)
},this.get_relationship_PublishedAssociation=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_PublishedAssociation",[t,n,e,i],1,_,r)
},this.get_relationship_PublishedAssociation_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_PublishedAssociation",[t,n,e,i],1,_,r)
},this.get_relationship_AssociationPublishedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_AssociationPublishedIn",[t,n,e,i],1,_,r)
},this.get_relationship_AssociationPublishedIn_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_AssociationPublishedIn",[t,n,e,i],1,_,r)
},this.get_relationship_PublishedExperiment=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_PublishedExperiment",[t,n,e,i],1,_,r)
},this.get_relationship_PublishedExperiment_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_PublishedExperiment",[t,n,e,i],1,_,r)
},this.get_relationship_ExperimentPublishedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ExperimentPublishedIn",[t,n,e,i],1,_,r)
},this.get_relationship_ExperimentPublishedIn_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_ExperimentPublishedIn",[t,n,e,i],1,_,r)
},this.get_relationship_PublishedProtocol=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_PublishedProtocol",[t,n,e,i],1,_,r)
},this.get_relationship_PublishedProtocol_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_PublishedProtocol",[t,n,e,i],1,_,r)
},this.get_relationship_ProtocolPublishedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ProtocolPublishedIn",[t,n,e,i],1,_,r)
},this.get_relationship_ProtocolPublishedIn_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_ProtocolPublishedIn",[t,n,e,i],1,_,r)
},this.get_relationship_RegulogHasRegulon=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_RegulogHasRegulon",[t,n,e,i],1,_,r)
},this.get_relationship_RegulogHasRegulon_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_RegulogHasRegulon",[t,n,e,i],1,_,r)
},this.get_relationship_RegulonIsInRegolog=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_RegulonIsInRegolog",[t,n,e,i],1,_,r)},
this.get_relationship_RegulonIsInRegolog_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_RegulonIsInRegolog",[t,n,e,i],1,_,r)
},this.get_relationship_RegulomeHasGenome=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_RegulomeHasGenome",[t,n,e,i],1,_,r)
},this.get_relationship_RegulomeHasGenome_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_RegulomeHasGenome",[t,n,e,i],1,_,r)
},this.get_relationship_GenomeIsInRegulome=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_GenomeIsInRegulome",[t,n,e,i],1,_,r)},
this.get_relationship_GenomeIsInRegulome_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_GenomeIsInRegulome",[t,n,e,i],1,_,r)
},this.get_relationship_RegulomeHasRegulon=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_RegulomeHasRegulon",[t,n,e,i],1,_,r)},
this.get_relationship_RegulomeHasRegulon_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_RegulomeHasRegulon",[t,n,e,i],1,_,r)
},this.get_relationship_RegulonIsInRegolome=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_RegulonIsInRegolome",[t,n,e,i],1,_,r)
},this.get_relationship_RegulonIsInRegolome_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_RegulonIsInRegolome",[t,n,e,i],1,_,r)
},this.get_relationship_RegulomeSource=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_RegulomeSource",[t,n,e,i],1,_,r)
},this.get_relationship_RegulomeSource_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_RegulomeSource",[t,n,e,i],1,_,r)},
this.get_relationship_CreatedRegulome=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_CreatedRegulome",[t,n,e,i],1,_,r)
},this.get_relationship_CreatedRegulome_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_CreatedRegulome",[t,n,e,i],1,_,r)
},this.get_relationship_RegulonHasOperon=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_RegulonHasOperon",[t,n,e,i],1,_,r)
},this.get_relationship_RegulonHasOperon_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_RegulonHasOperon",[t,n,e,i],1,_,r)
},this.get_relationship_OperonIsInRegulon=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_OperonIsInRegulon",[t,n,e,i],1,_,r)
},this.get_relationship_OperonIsInRegulon_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_OperonIsInRegulon",[t,n,e,i],1,_,r)
},this.get_relationship_SampleAveragedFrom=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SampleAveragedFrom",[t,n,e,i],1,_,r)},
this.get_relationship_SampleAveragedFrom_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_SampleAveragedFrom",[t,n,e,i],1,_,r)
},this.get_relationship_SampleComponentOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SampleComponentOf",[t,n,e,i],1,_,r)
},this.get_relationship_SampleComponentOf_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_SampleComponentOf",[t,n,e,i],1,_,r)
},this.get_relationship_SampleContactPerson=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SampleContactPerson",[t,n,e,i],1,_,r)
},this.get_relationship_SampleContactPerson_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_SampleContactPerson",[t,n,e,i],1,_,r)
},this.get_relationship_PersonPerformedSample=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_PersonPerformedSample",[t,n,e,i],1,_,r)
},this.get_relationship_PersonPerformedSample_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_PersonPerformedSample",[t,n,e,i],1,_,r)
},this.get_relationship_SampleHasAnnotations=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SampleHasAnnotations",[t,n,e,i],1,_,r)
},this.get_relationship_SampleHasAnnotations_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_SampleHasAnnotations",[t,n,e,i],1,_,r)
},this.get_relationship_AnnotationsForSample=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_AnnotationsForSample",[t,n,e,i],1,_,r)
},this.get_relationship_AnnotationsForSample_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_AnnotationsForSample",[t,n,e,i],1,_,r)
},this.get_relationship_SampleInSeries=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SampleInSeries",[t,n,e,i],1,_,r)
},this.get_relationship_SampleInSeries_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_SampleInSeries",[t,n,e,i],1,_,r)},
this.get_relationship_SeriesWithSamples=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SeriesWithSamples",[t,n,e,i],1,_,r)
},this.get_relationship_SeriesWithSamples_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_SeriesWithSamples",[t,n,e,i],1,_,r)
},this.get_relationship_SampleMeasurements=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SampleMeasurements",[t,n,e,i],1,_,r)},
this.get_relationship_SampleMeasurements_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_SampleMeasurements",[t,n,e,i],1,_,r)
},this.get_relationship_MeasurementInSample=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_MeasurementInSample",[t,n,e,i],1,_,r)
},this.get_relationship_MeasurementInSample_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_MeasurementInSample",[t,n,e,i],1,_,r)
},this.get_relationship_SamplesInReplicateGroup=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SamplesInReplicateGroup",[t,n,e,i],1,_,r)
},this.get_relationship_SamplesInReplicateGroup_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_SamplesInReplicateGroup",[t,n,e,i],1,_,r)
},this.get_relationship_ReplicateGroupsForSample=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_ReplicateGroupsForSample",[t,n,e,i],1,_,r)
},this.get_relationship_ReplicateGroupsForSample_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_ReplicateGroupsForSample",[t,n,e,i],1,_,r)
},this.get_relationship_SeriesPublishedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SeriesPublishedIn",[t,n,e,i],1,_,r)
},this.get_relationship_SeriesPublishedIn_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_SeriesPublishedIn",[t,n,e,i],1,_,r)
},this.get_relationship_PublicationsForSeries=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_PublicationsForSeries",[t,n,e,i],1,_,r)
},this.get_relationship_PublicationsForSeries_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_PublicationsForSeries",[t,n,e,i],1,_,r)
},this.get_relationship_Shows=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Shows",[t,n,e,i],1,_,r)
},this.get_relationship_Shows_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Shows",[t,n,e,i],1,_,r)
},this.get_relationship_IsShownOn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsShownOn",[t,n,e,i],1,_,r)
},this.get_relationship_IsShownOn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsShownOn",[t,n,e,i],1,_,r)
},this.get_relationship_StrainParentOf=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_StrainParentOf",[t,n,e,i],1,_,r)
},this.get_relationship_StrainParentOf_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_StrainParentOf",[t,n,e,i],1,_,r)},
this.get_relationship_DerivedFromStrain=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_DerivedFromStrain",[t,n,e,i],1,_,r)
},this.get_relationship_DerivedFromStrain_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_DerivedFromStrain",[t,n,e,i],1,_,r)
},this.get_relationship_StrainWithPlatforms=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_StrainWithPlatforms",[t,n,e,i],1,_,r)
},this.get_relationship_StrainWithPlatforms_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_StrainWithPlatforms",[t,n,e,i],1,_,r)
},this.get_relationship_PlatformForStrain=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_PlatformForStrain",[t,n,e,i],1,_,r)
},this.get_relationship_PlatformForStrain_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_PlatformForStrain",[t,n,e,i],1,_,r)
},this.get_relationship_StrainWithSample=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_StrainWithSample",[t,n,e,i],1,_,r)
},this.get_relationship_StrainWithSample_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_StrainWithSample",[t,n,e,i],1,_,r)
},this.get_relationship_SampleForStrain=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SampleForStrain",[t,n,e,i],1,_,r)
},this.get_relationship_SampleForStrain_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_SampleForStrain",[t,n,e,i],1,_,r)
},this.get_relationship_Submitted=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Submitted",[t,n,e,i],1,_,r)
},this.get_relationship_Submitted_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Submitted",[t,n,e,i],1,_,r)
},this.get_relationship_WasSubmittedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_WasSubmittedBy",[t,n,e,i],1,_,r)
},this.get_relationship_WasSubmittedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_WasSubmittedBy",[t,n,e,i],1,_,r)},
this.get_relationship_SupersedesAlignment=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SupersedesAlignment",[t,n,e,i],1,_,r)
},this.get_relationship_SupersedesAlignment_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_SupersedesAlignment",[t,n,e,i],1,_,r)
},this.get_relationship_IsSupersededByAlignment=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsSupersededByAlignment",[t,n,e,i],1,_,r)
},this.get_relationship_IsSupersededByAlignment_async=function(t,n,e,i,_,r){
return o(),
l("CDMI_EntityAPI.get_relationship_IsSupersededByAlignment",[t,n,e,i],1,_,r)
},this.get_relationship_SupersedesTree=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_SupersedesTree",[t,n,e,i],1,_,r)
},this.get_relationship_SupersedesTree_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_SupersedesTree",[t,n,e,i],1,_,r)},
this.get_relationship_IsSupersededByTree=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsSupersededByTree",[t,n,e,i],1,_,r)},
this.get_relationship_IsSupersededByTree_async=function(t,n,e,i,_,r){return o(),
l("CDMI_EntityAPI.get_relationship_IsSupersededByTree",[t,n,e,i],1,_,r)
},this.get_relationship_Treed=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Treed",[t,n,e,i],1,_,r)
},this.get_relationship_Treed_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Treed",[t,n,e,i],1,_,r)
},this.get_relationship_IsTreeFrom=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsTreeFrom",[t,n,e,i],1,_,r)
},this.get_relationship_IsTreeFrom_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsTreeFrom",[t,n,e,i],1,_,r)
},this.get_relationship_UsedIn=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_UsedIn",[t,n,e,i],1,_,r)
},this.get_relationship_UsedIn_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_UsedIn",[t,n,e,i],1,_,r)
},this.get_relationship_HasMedia=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_HasMedia",[t,n,e,i],1,_,r)
},this.get_relationship_HasMedia_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_HasMedia",[t,n,e,i],1,_,r)
},this.get_relationship_Uses=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_Uses",[t,n,e,i],1,_,r)
},this.get_relationship_Uses_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_Uses",[t,n,e,i],1,_,r)
},this.get_relationship_IsUsedBy=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_IsUsedBy",[t,n,e,i],1,_,r)
},this.get_relationship_IsUsedBy_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_IsUsedBy",[t,n,e,i],1,_,r)
},this.get_relationship_UsesCodons=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_UsesCodons",[t,n,e,i],1,_,r)
},this.get_relationship_UsesCodons_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_UsesCodons",[t,n,e,i],1,_,r)
},this.get_relationship_AreCodonsFor=function(t,n,e,i,_,r){
return l("CDMI_EntityAPI.get_relationship_AreCodonsFor",[t,n,e,i],1,_,r)
},this.get_relationship_AreCodonsFor_async=function(t,n,e,i,_,r){
return o(),l("CDMI_EntityAPI.get_relationship_AreCodonsFor",[t,n,e,i],1,_,r)}}
}));