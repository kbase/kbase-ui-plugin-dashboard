define(["jquery","bluebird"],(function(e,s){"use strict";return function(_,n,t){
if("string"!=typeof _)throw new Error("Service url was not provided");this.url=_
;var i=_,r=!1;function a(){if(!r){if(r=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var o=n||{token:"",user_id:""},p=t;function x(_,n,t,r,a){var x=e.Deferred()
;"function"==typeof r&&x.done(r),"function"==typeof a&&x.fail(a);var u={
params:n,method:_,version:"1.1",id:String(Math.random()).slice(2)
},l=null,d=p&&"function"==typeof p?p():o.token?o.token:null
;null!==d&&(l=function(e){e.setRequestHeader("Authorization",d)})
;var c=jQuery.ajax({url:i,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(u),beforeSend:l,success:function(e,s,_){var n;try{
var r=JSON.parse(e);n=1===t?r.result[0]:r.result}catch(a){return void x.reject({
status:503,error:a,url:i,resp:e})}x.resolve(n)},error:function(e,s,_){var n
;if(e.responseText)try{n=JSON.parse(e.responseText).error}catch(t){
n="Unknown error - "+e.responseText}else n="Unknown Error";x.reject({status:500,
error:n})}}),m=x.promise();return m.xhr=c,s.resolve(m)}
this.get_expression_samples_data=function(e,s,_){
return x("KBaseExpression.get_expression_samples_data",[e],1,s,_)
},this.get_expression_samples_data_async=function(e,s,_){
return a(),x("KBaseExpression.get_expression_samples_data",[e],1,s,_)
},this.get_expression_data_by_samples_and_features=function(e,s,_,n,t){
return x("KBaseExpression.get_expression_data_by_samples_and_features",[e,s,_],1,n,t)
},this.get_expression_data_by_samples_and_features_async=function(e,s,_,n,t){
return a(),
x("KBaseExpression.get_expression_data_by_samples_and_features",[e,s,_],1,n,t)},
this.get_expression_samples_data_by_series_ids=function(e,s,_){
return x("KBaseExpression.get_expression_samples_data_by_series_ids",[e],1,s,_)
},this.get_expression_samples_data_by_series_ids_async=function(e,s,_){
return a(),
x("KBaseExpression.get_expression_samples_data_by_series_ids",[e],1,s,_)
},this.get_expression_sample_ids_by_series_ids=function(e,s,_){
return x("KBaseExpression.get_expression_sample_ids_by_series_ids",[e],1,s,_)
},this.get_expression_sample_ids_by_series_ids_async=function(e,s,_){return a(),
x("KBaseExpression.get_expression_sample_ids_by_series_ids",[e],1,s,_)
},this.get_expression_samples_data_by_experimental_unit_ids=function(e,s,_){
return x("KBaseExpression.get_expression_samples_data_by_experimental_unit_ids",[e],1,s,_)
},
this.get_expression_samples_data_by_experimental_unit_ids_async=function(e,s,_){
return a(),
x("KBaseExpression.get_expression_samples_data_by_experimental_unit_ids",[e],1,s,_)
},this.get_expression_sample_ids_by_experimental_unit_ids=function(e,s,_){
return x("KBaseExpression.get_expression_sample_ids_by_experimental_unit_ids",[e],1,s,_)
},this.get_expression_sample_ids_by_experimental_unit_ids_async=function(e,s,_){
return a(),
x("KBaseExpression.get_expression_sample_ids_by_experimental_unit_ids",[e],1,s,_)
},this.get_expression_samples_data_by_experiment_meta_ids=function(e,s,_){
return x("KBaseExpression.get_expression_samples_data_by_experiment_meta_ids",[e],1,s,_)
},this.get_expression_samples_data_by_experiment_meta_ids_async=function(e,s,_){
return a(),
x("KBaseExpression.get_expression_samples_data_by_experiment_meta_ids",[e],1,s,_)
},this.get_expression_sample_ids_by_experiment_meta_ids=function(e,s,_){
return x("KBaseExpression.get_expression_sample_ids_by_experiment_meta_ids",[e],1,s,_)
},this.get_expression_sample_ids_by_experiment_meta_ids_async=function(e,s,_){
return a(),
x("KBaseExpression.get_expression_sample_ids_by_experiment_meta_ids",[e],1,s,_)
},this.get_expression_samples_data_by_strain_ids=function(e,s,_,n){
return x("KBaseExpression.get_expression_samples_data_by_strain_ids",[e,s],1,_,n)
},this.get_expression_samples_data_by_strain_ids_async=function(e,s,_,n){
return a(),
x("KBaseExpression.get_expression_samples_data_by_strain_ids",[e,s],1,_,n)
},this.get_expression_sample_ids_by_strain_ids=function(e,s,_,n){
return x("KBaseExpression.get_expression_sample_ids_by_strain_ids",[e,s],1,_,n)
},this.get_expression_sample_ids_by_strain_ids_async=function(e,s,_,n){
return a(),
x("KBaseExpression.get_expression_sample_ids_by_strain_ids",[e,s],1,_,n)
},this.get_expression_samples_data_by_genome_ids=function(e,s,_,n,t){
return x("KBaseExpression.get_expression_samples_data_by_genome_ids",[e,s,_],1,n,t)
},this.get_expression_samples_data_by_genome_ids_async=function(e,s,_,n,t){
return a(),
x("KBaseExpression.get_expression_samples_data_by_genome_ids",[e,s,_],1,n,t)
},this.get_expression_sample_ids_by_genome_ids=function(e,s,_,n,t){
return x("KBaseExpression.get_expression_sample_ids_by_genome_ids",[e,s,_],1,n,t)
},this.get_expression_sample_ids_by_genome_ids_async=function(e,s,_,n,t){
return a(),
x("KBaseExpression.get_expression_sample_ids_by_genome_ids",[e,s,_],1,n,t)
},this.get_expression_samples_data_by_ontology_ids=function(e,s,_,n,t,i,r){
return x("KBaseExpression.get_expression_samples_data_by_ontology_ids",[e,s,_,n,t],1,i,r)
},
this.get_expression_samples_data_by_ontology_ids_async=function(e,s,_,n,t,i,r){
return a(),
x("KBaseExpression.get_expression_samples_data_by_ontology_ids",[e,s,_,n,t],1,i,r)
},this.get_expression_sample_ids_by_ontology_ids=function(e,s,_,n,t,i,r){
return x("KBaseExpression.get_expression_sample_ids_by_ontology_ids",[e,s,_,n,t],1,i,r)
},this.get_expression_sample_ids_by_ontology_ids_async=function(e,s,_,n,t,i,r){
return a(),
x("KBaseExpression.get_expression_sample_ids_by_ontology_ids",[e,s,_,n,t],1,i,r)
},this.get_expression_data_by_feature_ids=function(e,s,_,n,t){
return x("KBaseExpression.get_expression_data_by_feature_ids",[e,s,_],1,n,t)
},this.get_expression_data_by_feature_ids_async=function(e,s,_,n,t){
return a(),x("KBaseExpression.get_expression_data_by_feature_ids",[e,s,_],1,n,t)
},this.compare_samples=function(e,s,_,n){
return x("KBaseExpression.compare_samples",[e,s],1,_,n)
},this.compare_samples_async=function(e,s,_,n){
return a(),x("KBaseExpression.compare_samples",[e,s],1,_,n)
},this.compare_samples_vs_default_controls=function(e,s,_){
return x("KBaseExpression.compare_samples_vs_default_controls",[e],1,s,_)
},this.compare_samples_vs_default_controls_async=function(e,s,_){
return a(),x("KBaseExpression.compare_samples_vs_default_controls",[e],1,s,_)
},this.compare_samples_vs_the_average=function(e,s,_,n){
return x("KBaseExpression.compare_samples_vs_the_average",[e,s],1,_,n)
},this.compare_samples_vs_the_average_async=function(e,s,_,n){
return a(),x("KBaseExpression.compare_samples_vs_the_average",[e,s],1,_,n)
},this.get_on_off_calls=function(e,s,_,n,t){
return x("KBaseExpression.get_on_off_calls",[e,s,_],1,n,t)
},this.get_on_off_calls_async=function(e,s,_,n,t){
return a(),x("KBaseExpression.get_on_off_calls",[e,s,_],1,n,t)
},this.get_top_changers=function(e,s,_,n,t){
return x("KBaseExpression.get_top_changers",[e,s,_],1,n,t)
},this.get_top_changers_async=function(e,s,_,n,t){
return a(),x("KBaseExpression.get_top_changers",[e,s,_],1,n,t)
},this.get_expression_samples_titles=function(e,s,_){
return x("KBaseExpression.get_expression_samples_titles",[e],1,s,_)
},this.get_expression_samples_titles_async=function(e,s,_){
return a(),x("KBaseExpression.get_expression_samples_titles",[e],1,s,_)
},this.get_expression_samples_descriptions=function(e,s,_){
return x("KBaseExpression.get_expression_samples_descriptions",[e],1,s,_)
},this.get_expression_samples_descriptions_async=function(e,s,_){
return a(),x("KBaseExpression.get_expression_samples_descriptions",[e],1,s,_)
},this.get_expression_samples_molecules=function(e,s,_){
return x("KBaseExpression.get_expression_samples_molecules",[e],1,s,_)
},this.get_expression_samples_molecules_async=function(e,s,_){
return a(),x("KBaseExpression.get_expression_samples_molecules",[e],1,s,_)
},this.get_expression_samples_types=function(e,s,_){
return x("KBaseExpression.get_expression_samples_types",[e],1,s,_)
},this.get_expression_samples_types_async=function(e,s,_){
return a(),x("KBaseExpression.get_expression_samples_types",[e],1,s,_)
},this.get_expression_samples_external_source_ids=function(e,s,_){
return x("KBaseExpression.get_expression_samples_external_source_ids",[e],1,s,_)
},this.get_expression_samples_external_source_ids_async=function(e,s,_){
return a(),
x("KBaseExpression.get_expression_samples_external_source_ids",[e],1,s,_)
},this.get_expression_samples_original_log2_medians=function(e,s,_){
return x("KBaseExpression.get_expression_samples_original_log2_medians",[e],1,s,_)
},this.get_expression_samples_original_log2_medians_async=function(e,s,_){
return a(),
x("KBaseExpression.get_expression_samples_original_log2_medians",[e],1,s,_)
},this.get_expression_series_titles=function(e,s,_){
return x("KBaseExpression.get_expression_series_titles",[e],1,s,_)
},this.get_expression_series_titles_async=function(e,s,_){
return a(),x("KBaseExpression.get_expression_series_titles",[e],1,s,_)
},this.get_expression_series_summaries=function(e,s,_){
return x("KBaseExpression.get_expression_series_summaries",[e],1,s,_)
},this.get_expression_series_summaries_async=function(e,s,_){
return a(),x("KBaseExpression.get_expression_series_summaries",[e],1,s,_)
},this.get_expression_series_designs=function(e,s,_){
return x("KBaseExpression.get_expression_series_designs",[e],1,s,_)
},this.get_expression_series_designs_async=function(e,s,_){
return a(),x("KBaseExpression.get_expression_series_designs",[e],1,s,_)
},this.get_expression_series_external_source_ids=function(e,s,_){
return x("KBaseExpression.get_expression_series_external_source_ids",[e],1,s,_)
},this.get_expression_series_external_source_ids_async=function(e,s,_){
return a(),
x("KBaseExpression.get_expression_series_external_source_ids",[e],1,s,_)
},this.get_expression_sample_ids_by_sample_external_source_ids=function(e,s,_){
return x("KBaseExpression.get_expression_sample_ids_by_sample_external_source_ids",[e],1,s,_)
},
this.get_expression_sample_ids_by_sample_external_source_ids_async=function(e,s,_){
return a(),
x("KBaseExpression.get_expression_sample_ids_by_sample_external_source_ids",[e],1,s,_)
},
this.get_expression_sample_ids_by_platform_external_source_ids=function(e,s,_){
return x("KBaseExpression.get_expression_sample_ids_by_platform_external_source_ids",[e],1,s,_)
},
this.get_expression_sample_ids_by_platform_external_source_ids_async=function(e,s,_){
return a(),
x("KBaseExpression.get_expression_sample_ids_by_platform_external_source_ids",[e],1,s,_)
},this.get_expression_series_ids_by_series_external_source_ids=function(e,s,_){
return x("KBaseExpression.get_expression_series_ids_by_series_external_source_ids",[e],1,s,_)
},
this.get_expression_series_ids_by_series_external_source_ids_async=function(e,s,_){
return a(),
x("KBaseExpression.get_expression_series_ids_by_series_external_source_ids",[e],1,s,_)
},this.get_GEO_GSE=function(e,s,_){
return x("KBaseExpression.get_GEO_GSE",[e],1,s,_)
},this.get_GEO_GSE_async=function(e,s,_){
return a(),x("KBaseExpression.get_GEO_GSE",[e],1,s,_)
},this.get_expression_float_data_table_by_samples_and_features=function(e,s,_,n,t){
return x("KBaseExpression.get_expression_float_data_table_by_samples_and_features",[e,s,_],1,n,t)
},
this.get_expression_float_data_table_by_samples_and_features_async=function(e,s,_,n,t){
return a(),
x("KBaseExpression.get_expression_float_data_table_by_samples_and_features",[e,s,_],1,n,t)
},this.get_expression_float_data_table_by_genome=function(e,s,_,n){
return x("KBaseExpression.get_expression_float_data_table_by_genome",[e,s],1,_,n)
},this.get_expression_float_data_table_by_genome_async=function(e,s,_,n){
return a(),
x("KBaseExpression.get_expression_float_data_table_by_genome",[e,s],1,_,n)}}}));