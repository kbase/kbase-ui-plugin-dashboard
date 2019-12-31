define(["jquery","bluebird"],(function(e,t){"use strict";return function(n,r,_){
if("string"!=typeof n)throw new Error("Service url was not provided");this.url=n
;var s=n,a=!1;function i(){if(!a){if(a=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var o=r||{token:"",user_id:""},u=_;function c(n,r,_,a,i){var c=e.Deferred()
;"function"==typeof a&&c.done(a),"function"==typeof i&&c.fail(i);var f={
params:r,method:n,version:"1.1",id:String(Math.random()).slice(2)
},l=null,d=u&&"function"==typeof u?u():o.token?o.token:null
;null!==d&&(l=function(e){e.setRequestHeader("Authorization",d)})
;var m=jQuery.ajax({url:s,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(f),beforeSend:l,success:function(e,t,n){var r;try{
var a=JSON.parse(e);r=1===_?a.result[0]:a.result}catch(i){return void c.reject({
status:503,error:i,url:s,resp:e})}c.resolve(r)},error:function(e,t,n){var r
;if(e.responseText)try{r=JSON.parse(e.responseText).error}catch(_){
r="Unknown error - "+e.responseText}else r="Unknown Error";c.reject({status:500,
error:r})}}),g=c.promise();return g.xhr=m,t.resolve(g)}
this.replace_node_names=function(e,t,n,r){
return c("KBaseTrees.replace_node_names",[e,t],1,n,r)
},this.replace_node_names_async=function(e,t,n,r){
return i(),c("KBaseTrees.replace_node_names",[e,t],1,n,r)
},this.remove_node_names_and_simplify=function(e,t,n,r){
return c("KBaseTrees.remove_node_names_and_simplify",[e,t],1,n,r)
},this.remove_node_names_and_simplify_async=function(e,t,n,r){
return i(),c("KBaseTrees.remove_node_names_and_simplify",[e,t],1,n,r)
},this.merge_zero_distance_leaves=function(e,t,n){
return c("KBaseTrees.merge_zero_distance_leaves",[e],1,t,n)
},this.merge_zero_distance_leaves_async=function(e,t,n){
return i(),c("KBaseTrees.merge_zero_distance_leaves",[e],1,t,n)
},this.extract_leaf_node_names=function(e,t,n){
return c("KBaseTrees.extract_leaf_node_names",[e],1,t,n)
},this.extract_leaf_node_names_async=function(e,t,n){
return i(),c("KBaseTrees.extract_leaf_node_names",[e],1,t,n)
},this.extract_node_names=function(e,t,n){
return c("KBaseTrees.extract_node_names",[e],1,t,n)
},this.extract_node_names_async=function(e,t,n){
return i(),c("KBaseTrees.extract_node_names",[e],1,t,n)
},this.get_node_count=function(e,t,n){
return c("KBaseTrees.get_node_count",[e],1,t,n)
},this.get_node_count_async=function(e,t,n){
return i(),c("KBaseTrees.get_node_count",[e],1,t,n)
},this.get_leaf_count=function(e,t,n){
return c("KBaseTrees.get_leaf_count",[e],1,t,n)
},this.get_leaf_count_async=function(e,t,n){
return i(),c("KBaseTrees.get_leaf_count",[e],1,t,n)
},this.get_tree=function(e,t,n,r){return c("KBaseTrees.get_tree",[e,t],1,n,r)
},this.get_tree_async=function(e,t,n,r){
return i(),c("KBaseTrees.get_tree",[e,t],1,n,r)
},this.get_alignment=function(e,t,n,r){
return c("KBaseTrees.get_alignment",[e,t],1,n,r)
},this.get_alignment_async=function(e,t,n,r){
return i(),c("KBaseTrees.get_alignment",[e,t],1,n,r)
},this.get_tree_data=function(e,t,n){
return c("KBaseTrees.get_tree_data",[e],1,t,n)
},this.get_tree_data_async=function(e,t,n){
return i(),c("KBaseTrees.get_tree_data",[e],1,t,n)
},this.get_alignment_data=function(e,t,n){
return c("KBaseTrees.get_alignment_data",[e],1,t,n)
},this.get_alignment_data_async=function(e,t,n){
return i(),c("KBaseTrees.get_alignment_data",[e],1,t,n)
},this.get_tree_ids_by_feature=function(e,t,n){
return c("KBaseTrees.get_tree_ids_by_feature",[e],1,t,n)
},this.get_tree_ids_by_feature_async=function(e,t,n){
return i(),c("KBaseTrees.get_tree_ids_by_feature",[e],1,t,n)
},this.get_tree_ids_by_protein_sequence=function(e,t,n){
return c("KBaseTrees.get_tree_ids_by_protein_sequence",[e],1,t,n)
},this.get_tree_ids_by_protein_sequence_async=function(e,t,n){
return i(),c("KBaseTrees.get_tree_ids_by_protein_sequence",[e],1,t,n)
},this.get_alignment_ids_by_feature=function(e,t,n){
return c("KBaseTrees.get_alignment_ids_by_feature",[e],1,t,n)
},this.get_alignment_ids_by_feature_async=function(e,t,n){
return i(),c("KBaseTrees.get_alignment_ids_by_feature",[e],1,t,n)
},this.get_alignment_ids_by_protein_sequence=function(e,t,n){
return c("KBaseTrees.get_alignment_ids_by_protein_sequence",[e],1,t,n)
},this.get_alignment_ids_by_protein_sequence_async=function(e,t,n){
return i(),c("KBaseTrees.get_alignment_ids_by_protein_sequence",[e],1,t,n)
},this.get_tree_ids_by_source_id_pattern=function(e,t,n){
return c("KBaseTrees.get_tree_ids_by_source_id_pattern",[e],1,t,n)
},this.get_tree_ids_by_source_id_pattern_async=function(e,t,n){
return i(),c("KBaseTrees.get_tree_ids_by_source_id_pattern",[e],1,t,n)
},this.get_leaf_to_protein_map=function(e,t,n){
return c("KBaseTrees.get_leaf_to_protein_map",[e],1,t,n)
},this.get_leaf_to_protein_map_async=function(e,t,n){
return i(),c("KBaseTrees.get_leaf_to_protein_map",[e],1,t,n)
},this.get_leaf_to_feature_map=function(e,t,n){
return c("KBaseTrees.get_leaf_to_feature_map",[e],1,t,n)
},this.get_leaf_to_feature_map_async=function(e,t,n){
return i(),c("KBaseTrees.get_leaf_to_feature_map",[e],1,t,n)
},this.import_tree_from_cds=function(e,t,n,r){
return c("KBaseTrees.import_tree_from_cds",[e,t],1,n,r)
},this.import_tree_from_cds_async=function(e,t,n,r){
return i(),c("KBaseTrees.import_tree_from_cds",[e,t],1,n,r)
},this.compute_abundance_profile=function(e,t,n){
return c("KBaseTrees.compute_abundance_profile",[e],1,t,n)
},this.compute_abundance_profile_async=function(e,t,n){
return i(),c("KBaseTrees.compute_abundance_profile",[e],1,t,n)
},this.filter_abundance_profile=function(e,t,n,r){
return c("KBaseTrees.filter_abundance_profile",[e,t],1,n,r)
},this.filter_abundance_profile_async=function(e,t,n,r){
return i(),c("KBaseTrees.filter_abundance_profile",[e,t],1,n,r)
},this.draw_html_tree=function(e,t,n,r){
return c("KBaseTrees.draw_html_tree",[e,t],1,n,r)
},this.draw_html_tree_async=function(e,t,n,r){
return i(),c("KBaseTrees.draw_html_tree",[e,t],1,n,r)
},this.construct_species_tree=function(e,t,n){
return c("KBaseTrees.construct_species_tree",[e],1,t,n)
},this.construct_species_tree_async=function(e,t,n){
return i(),c("KBaseTrees.construct_species_tree",[e],1,t,n)
},this.construct_multiple_alignment=function(e,t,n){
return c("KBaseTrees.construct_multiple_alignment",[e],1,t,n)
},this.construct_multiple_alignment_async=function(e,t,n){
return i(),c("KBaseTrees.construct_multiple_alignment",[e],1,t,n)
},this.construct_tree_for_alignment=function(e,t,n){
return c("KBaseTrees.construct_tree_for_alignment",[e],1,t,n)
},this.construct_tree_for_alignment_async=function(e,t,n){
return i(),c("KBaseTrees.construct_tree_for_alignment",[e],1,t,n)
},this.find_close_genomes=function(e,t,n){
return c("KBaseTrees.find_close_genomes",[e],1,t,n)
},this.find_close_genomes_async=function(e,t,n){
return i(),c("KBaseTrees.find_close_genomes",[e],1,t,n)
},this.guess_taxonomy_path=function(e,t,n){
return c("KBaseTrees.guess_taxonomy_path",[e],1,t,n)
},this.guess_taxonomy_path_async=function(e,t,n){
return i(),c("KBaseTrees.guess_taxonomy_path",[e],1,t,n)
},this.build_genome_set_from_tree=function(e,t,n){
return c("KBaseTrees.build_genome_set_from_tree",[e],1,t,n)
},this.build_genome_set_from_tree_async=function(e,t,n){
return i(),c("KBaseTrees.build_genome_set_from_tree",[e],1,t,n)}}}));