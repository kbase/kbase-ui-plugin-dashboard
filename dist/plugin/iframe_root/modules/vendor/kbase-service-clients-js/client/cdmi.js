define(["jquery","bluebird"],(function(t,s){"use strict";return function(n,_,e){
if("string"!=typeof n)throw new Error("Service url was not provided");this.url=n
;var o=n,i=!1;function r(){if(!i){if(i=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var u=_||{token:"",user_id:""},c=e;function f(n,_,e,i,r){var f=t.Deferred()
;"function"==typeof i&&f.done(i),"function"==typeof r&&f.fail(r);var a={
params:_,method:n,version:"1.1",id:String(Math.random()).slice(2)
},I=null,l=c&&"function"==typeof c?c():u.token?u.token:null
;null!==l&&(I=function(t){t.setRequestHeader("Authorization",l)})
;var d=jQuery.ajax({url:o,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(a),beforeSend:I,success:function(t,s,n){var _;try{
var i=JSON.parse(t);_=1===e?i.result[0]:i.result}catch(r){return void f.reject({
status:503,error:r,url:o,resp:t})}f.resolve(_)},error:function(t,s,n){var _
;if(t.responseText)try{_=JSON.parse(t.responseText).error}catch(e){
_="Unknown error - "+t.responseText}else _="Unknown Error";f.reject({status:500,
error:_})}}),h=f.promise();return h.xhr=d,s.resolve(h)}
this.fids_to_annotations=function(t,s,n){
return f("CDMI_API.fids_to_annotations",[t],1,s,n)
},this.fids_to_annotations_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_annotations",[t],1,s,n)
},this.fids_to_functions=function(t,s,n){
return f("CDMI_API.fids_to_functions",[t],1,s,n)
},this.fids_to_functions_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_functions",[t],1,s,n)
},this.fids_to_literature=function(t,s,n){
return f("CDMI_API.fids_to_literature",[t],1,s,n)
},this.fids_to_literature_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_literature",[t],1,s,n)
},this.fids_to_protein_families=function(t,s,n){
return f("CDMI_API.fids_to_protein_families",[t],1,s,n)
},this.fids_to_protein_families_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_protein_families",[t],1,s,n)
},this.fids_to_roles=function(t,s,n){
return f("CDMI_API.fids_to_roles",[t],1,s,n)
},this.fids_to_roles_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_roles",[t],1,s,n)
},this.fids_to_subsystems=function(t,s,n){
return f("CDMI_API.fids_to_subsystems",[t],1,s,n)
},this.fids_to_subsystems_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_subsystems",[t],1,s,n)
},this.fids_to_co_occurring_fids=function(t,s,n){
return f("CDMI_API.fids_to_co_occurring_fids",[t],1,s,n)
},this.fids_to_co_occurring_fids_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_co_occurring_fids",[t],1,s,n)
},this.fids_to_locations=function(t,s,n){
return f("CDMI_API.fids_to_locations",[t],1,s,n)
},this.fids_to_locations_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_locations",[t],1,s,n)
},this.locations_to_fids=function(t,s,n){
return f("CDMI_API.locations_to_fids",[t],1,s,n)
},this.locations_to_fids_async=function(t,s,n){
return r(),f("CDMI_API.locations_to_fids",[t],1,s,n)
},this.alleles_to_bp_locs=function(t,s,n){
return f("CDMI_API.alleles_to_bp_locs",[t],1,s,n)
},this.alleles_to_bp_locs_async=function(t,s,n){
return r(),f("CDMI_API.alleles_to_bp_locs",[t],1,s,n)
},this.region_to_fids=function(t,s,n){
return f("CDMI_API.region_to_fids",[t],1,s,n)
},this.region_to_fids_async=function(t,s,n){
return r(),f("CDMI_API.region_to_fids",[t],1,s,n)
},this.region_to_alleles=function(t,s,n){
return f("CDMI_API.region_to_alleles",[t],1,s,n)
},this.region_to_alleles_async=function(t,s,n){
return r(),f("CDMI_API.region_to_alleles",[t],1,s,n)
},this.alleles_to_traits=function(t,s,n){
return f("CDMI_API.alleles_to_traits",[t],1,s,n)
},this.alleles_to_traits_async=function(t,s,n){
return r(),f("CDMI_API.alleles_to_traits",[t],1,s,n)
},this.traits_to_alleles=function(t,s,n){
return f("CDMI_API.traits_to_alleles",[t],1,s,n)
},this.traits_to_alleles_async=function(t,s,n){
return r(),f("CDMI_API.traits_to_alleles",[t],1,s,n)
},this.ous_with_trait=function(t,s,n,_,e,o,i){
return f("CDMI_API.ous_with_trait",[t,s,n,_,e],1,o,i)
},this.ous_with_trait_async=function(t,s,n,_,e,o,i){
return r(),f("CDMI_API.ous_with_trait",[t,s,n,_,e],1,o,i)
},this.locations_to_dna_sequences=function(t,s,n){
return f("CDMI_API.locations_to_dna_sequences",[t],1,s,n)
},this.locations_to_dna_sequences_async=function(t,s,n){
return r(),f("CDMI_API.locations_to_dna_sequences",[t],1,s,n)
},this.proteins_to_fids=function(t,s,n){
return f("CDMI_API.proteins_to_fids",[t],1,s,n)
},this.proteins_to_fids_async=function(t,s,n){
return r(),f("CDMI_API.proteins_to_fids",[t],1,s,n)
},this.proteins_to_protein_families=function(t,s,n){
return f("CDMI_API.proteins_to_protein_families",[t],1,s,n)
},this.proteins_to_protein_families_async=function(t,s,n){
return r(),f("CDMI_API.proteins_to_protein_families",[t],1,s,n)
},this.proteins_to_literature=function(t,s,n){
return f("CDMI_API.proteins_to_literature",[t],1,s,n)
},this.proteins_to_literature_async=function(t,s,n){
return r(),f("CDMI_API.proteins_to_literature",[t],1,s,n)
},this.proteins_to_functions=function(t,s,n){
return f("CDMI_API.proteins_to_functions",[t],1,s,n)
},this.proteins_to_functions_async=function(t,s,n){
return r(),f("CDMI_API.proteins_to_functions",[t],1,s,n)
},this.proteins_to_roles=function(t,s,n){
return f("CDMI_API.proteins_to_roles",[t],1,s,n)
},this.proteins_to_roles_async=function(t,s,n){
return r(),f("CDMI_API.proteins_to_roles",[t],1,s,n)
},this.roles_to_proteins=function(t,s,n){
return f("CDMI_API.roles_to_proteins",[t],1,s,n)
},this.roles_to_proteins_async=function(t,s,n){
return r(),f("CDMI_API.roles_to_proteins",[t],1,s,n)
},this.roles_to_subsystems=function(t,s,n){
return f("CDMI_API.roles_to_subsystems",[t],1,s,n)
},this.roles_to_subsystems_async=function(t,s,n){
return r(),f("CDMI_API.roles_to_subsystems",[t],1,s,n)
},this.roles_to_protein_families=function(t,s,n){
return f("CDMI_API.roles_to_protein_families",[t],1,s,n)
},this.roles_to_protein_families_async=function(t,s,n){
return r(),f("CDMI_API.roles_to_protein_families",[t],1,s,n)
},this.fids_to_coexpressed_fids=function(t,s,n){
return f("CDMI_API.fids_to_coexpressed_fids",[t],1,s,n)
},this.fids_to_coexpressed_fids_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_coexpressed_fids",[t],1,s,n)
},this.protein_families_to_fids=function(t,s,n){
return f("CDMI_API.protein_families_to_fids",[t],1,s,n)
},this.protein_families_to_fids_async=function(t,s,n){
return r(),f("CDMI_API.protein_families_to_fids",[t],1,s,n)
},this.protein_families_to_proteins=function(t,s,n){
return f("CDMI_API.protein_families_to_proteins",[t],1,s,n)
},this.protein_families_to_proteins_async=function(t,s,n){
return r(),f("CDMI_API.protein_families_to_proteins",[t],1,s,n)
},this.protein_families_to_functions=function(t,s,n){
return f("CDMI_API.protein_families_to_functions",[t],1,s,n)
},this.protein_families_to_functions_async=function(t,s,n){
return r(),f("CDMI_API.protein_families_to_functions",[t],1,s,n)
},this.protein_families_to_co_occurring_families=function(t,s,n){
return f("CDMI_API.protein_families_to_co_occurring_families",[t],1,s,n)
},this.protein_families_to_co_occurring_families_async=function(t,s,n){
return r(),f("CDMI_API.protein_families_to_co_occurring_families",[t],1,s,n)
},this.co_occurrence_evidence=function(t,s,n){
return f("CDMI_API.co_occurrence_evidence",[t],1,s,n)
},this.co_occurrence_evidence_async=function(t,s,n){
return r(),f("CDMI_API.co_occurrence_evidence",[t],1,s,n)
},this.contigs_to_sequences=function(t,s,n){
return f("CDMI_API.contigs_to_sequences",[t],1,s,n)
},this.contigs_to_sequences_async=function(t,s,n){
return r(),f("CDMI_API.contigs_to_sequences",[t],1,s,n)
},this.contigs_to_lengths=function(t,s,n){
return f("CDMI_API.contigs_to_lengths",[t],1,s,n)
},this.contigs_to_lengths_async=function(t,s,n){
return r(),f("CDMI_API.contigs_to_lengths",[t],1,s,n)
},this.contigs_to_md5s=function(t,s,n){
return f("CDMI_API.contigs_to_md5s",[t],1,s,n)
},this.contigs_to_md5s_async=function(t,s,n){
return r(),f("CDMI_API.contigs_to_md5s",[t],1,s,n)
},this.md5s_to_genomes=function(t,s,n){
return f("CDMI_API.md5s_to_genomes",[t],1,s,n)
},this.md5s_to_genomes_async=function(t,s,n){
return r(),f("CDMI_API.md5s_to_genomes",[t],1,s,n)
},this.genomes_to_md5s=function(t,s,n){
return f("CDMI_API.genomes_to_md5s",[t],1,s,n)
},this.genomes_to_md5s_async=function(t,s,n){
return r(),f("CDMI_API.genomes_to_md5s",[t],1,s,n)
},this.genomes_to_contigs=function(t,s,n){
return f("CDMI_API.genomes_to_contigs",[t],1,s,n)
},this.genomes_to_contigs_async=function(t,s,n){
return r(),f("CDMI_API.genomes_to_contigs",[t],1,s,n)
},this.genomes_to_fids=function(t,s,n,_){
return f("CDMI_API.genomes_to_fids",[t,s],1,n,_)
},this.genomes_to_fids_async=function(t,s,n,_){
return r(),f("CDMI_API.genomes_to_fids",[t,s],1,n,_)
},this.genomes_to_taxonomies=function(t,s,n){
return f("CDMI_API.genomes_to_taxonomies",[t],1,s,n)
},this.genomes_to_taxonomies_async=function(t,s,n){
return r(),f("CDMI_API.genomes_to_taxonomies",[t],1,s,n)
},this.genomes_to_subsystems=function(t,s,n){
return f("CDMI_API.genomes_to_subsystems",[t],1,s,n)
},this.genomes_to_subsystems_async=function(t,s,n){
return r(),f("CDMI_API.genomes_to_subsystems",[t],1,s,n)
},this.subsystems_to_genomes=function(t,s,n){
return f("CDMI_API.subsystems_to_genomes",[t],1,s,n)
},this.subsystems_to_genomes_async=function(t,s,n){
return r(),f("CDMI_API.subsystems_to_genomes",[t],1,s,n)
},this.subsystems_to_fids=function(t,s,n,_){
return f("CDMI_API.subsystems_to_fids",[t,s],1,n,_)
},this.subsystems_to_fids_async=function(t,s,n,_){
return r(),f("CDMI_API.subsystems_to_fids",[t,s],1,n,_)
},this.subsystems_to_roles=function(t,s,n,_){
return f("CDMI_API.subsystems_to_roles",[t,s],1,n,_)
},this.subsystems_to_roles_async=function(t,s,n,_){
return r(),f("CDMI_API.subsystems_to_roles",[t,s],1,n,_)
},this.subsystems_to_spreadsheets=function(t,s,n,_){
return f("CDMI_API.subsystems_to_spreadsheets",[t,s],1,n,_)
},this.subsystems_to_spreadsheets_async=function(t,s,n,_){
return r(),f("CDMI_API.subsystems_to_spreadsheets",[t,s],1,n,_)
},this.all_roles_used_in_models=function(t,s){
return f("CDMI_API.all_roles_used_in_models",[],1,t,s)
},this.all_roles_used_in_models_async=function(t,s){
return r(),f("CDMI_API.all_roles_used_in_models",[],1,t,s)
},this.complexes_to_complex_data=function(t,s,n){
return f("CDMI_API.complexes_to_complex_data",[t],1,s,n)
},this.complexes_to_complex_data_async=function(t,s,n){
return r(),f("CDMI_API.complexes_to_complex_data",[t],1,s,n)
},this.genomes_to_genome_data=function(t,s,n){
return f("CDMI_API.genomes_to_genome_data",[t],1,s,n)
},this.genomes_to_genome_data_async=function(t,s,n){
return r(),f("CDMI_API.genomes_to_genome_data",[t],1,s,n)
},this.fids_to_regulon_data=function(t,s,n){
return f("CDMI_API.fids_to_regulon_data",[t],1,s,n)
},this.fids_to_regulon_data_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_regulon_data",[t],1,s,n)
},this.regulons_to_fids=function(t,s,n){
return f("CDMI_API.regulons_to_fids",[t],1,s,n)
},this.regulons_to_fids_async=function(t,s,n){
return r(),f("CDMI_API.regulons_to_fids",[t],1,s,n)
},this.fids_to_feature_data=function(t,s,n){
return f("CDMI_API.fids_to_feature_data",[t],1,s,n)
},this.fids_to_feature_data_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_feature_data",[t],1,s,n)
},this.equiv_sequence_assertions=function(t,s,n){
return f("CDMI_API.equiv_sequence_assertions",[t],1,s,n)
},this.equiv_sequence_assertions_async=function(t,s,n){
return r(),f("CDMI_API.equiv_sequence_assertions",[t],1,s,n)
},this.fids_to_atomic_regulons=function(t,s,n){
return f("CDMI_API.fids_to_atomic_regulons",[t],1,s,n)
},this.fids_to_atomic_regulons_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_atomic_regulons",[t],1,s,n)
},this.atomic_regulons_to_fids=function(t,s,n){
return f("CDMI_API.atomic_regulons_to_fids",[t],1,s,n)
},this.atomic_regulons_to_fids_async=function(t,s,n){
return r(),f("CDMI_API.atomic_regulons_to_fids",[t],1,s,n)
},this.fids_to_protein_sequences=function(t,s,n){
return f("CDMI_API.fids_to_protein_sequences",[t],1,s,n)
},this.fids_to_protein_sequences_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_protein_sequences",[t],1,s,n)
},this.fids_to_proteins=function(t,s,n){
return f("CDMI_API.fids_to_proteins",[t],1,s,n)
},this.fids_to_proteins_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_proteins",[t],1,s,n)
},this.fids_to_dna_sequences=function(t,s,n){
return f("CDMI_API.fids_to_dna_sequences",[t],1,s,n)
},this.fids_to_dna_sequences_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_dna_sequences",[t],1,s,n)
},this.roles_to_fids=function(t,s,n,_){
return f("CDMI_API.roles_to_fids",[t,s],1,n,_)
},this.roles_to_fids_async=function(t,s,n,_){
return r(),f("CDMI_API.roles_to_fids",[t,s],1,n,_)
},this.reactions_to_complexes=function(t,s,n){
return f("CDMI_API.reactions_to_complexes",[t],1,s,n)
},this.reactions_to_complexes_async=function(t,s,n){
return r(),f("CDMI_API.reactions_to_complexes",[t],1,s,n)
},this.aliases_to_fids=function(t,s,n){
return f("CDMI_API.aliases_to_fids",[t],1,s,n)
},this.aliases_to_fids_async=function(t,s,n){
return r(),f("CDMI_API.aliases_to_fids",[t],1,s,n)
},this.aliases_to_fids_by_source=function(t,s,n,_){
return f("CDMI_API.aliases_to_fids_by_source",[t,s],1,n,_)
},this.aliases_to_fids_by_source_async=function(t,s,n,_){
return r(),f("CDMI_API.aliases_to_fids_by_source",[t,s],1,n,_)
},this.source_ids_to_fids=function(t,s,n){
return f("CDMI_API.source_ids_to_fids",[t],1,s,n)
},this.source_ids_to_fids_async=function(t,s,n){
return r(),f("CDMI_API.source_ids_to_fids",[t],1,s,n)
},this.external_ids_to_fids=function(t,s,n,_){
return f("CDMI_API.external_ids_to_fids",[t,s],1,n,_)
},this.external_ids_to_fids_async=function(t,s,n,_){
return r(),f("CDMI_API.external_ids_to_fids",[t,s],1,n,_)
},this.reaction_strings=function(t,s,n,_){
return f("CDMI_API.reaction_strings",[t,s],1,n,_)
},this.reaction_strings_async=function(t,s,n,_){
return r(),f("CDMI_API.reaction_strings",[t,s],1,n,_)
},this.roles_to_complexes=function(t,s,n){
return f("CDMI_API.roles_to_complexes",[t],1,s,n)
},this.roles_to_complexes_async=function(t,s,n){
return r(),f("CDMI_API.roles_to_complexes",[t],1,s,n)
},this.complexes_to_roles=function(t,s,n){
return f("CDMI_API.complexes_to_roles",[t],1,s,n)
},this.complexes_to_roles_async=function(t,s,n){
return r(),f("CDMI_API.complexes_to_roles",[t],1,s,n)
},this.fids_to_subsystem_data=function(t,s,n){
return f("CDMI_API.fids_to_subsystem_data",[t],1,s,n)
},this.fids_to_subsystem_data_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_subsystem_data",[t],1,s,n)
},this.representative=function(t,s,n){
return f("CDMI_API.representative",[t],1,s,n)
},this.representative_async=function(t,s,n){
return r(),f("CDMI_API.representative",[t],1,s,n)
},this.otu_members=function(t,s,n){return f("CDMI_API.otu_members",[t],1,s,n)
},this.otu_members_async=function(t,s,n){
return r(),f("CDMI_API.otu_members",[t],1,s,n)
},this.otus_to_representatives=function(t,s,n){
return f("CDMI_API.otus_to_representatives",[t],1,s,n)
},this.otus_to_representatives_async=function(t,s,n){
return r(),f("CDMI_API.otus_to_representatives",[t],1,s,n)
},this.fids_to_genomes=function(t,s,n){
return f("CDMI_API.fids_to_genomes",[t],1,s,n)
},this.fids_to_genomes_async=function(t,s,n){
return r(),f("CDMI_API.fids_to_genomes",[t],1,s,n)
},this.text_search=function(t,s,n,_,e,o){
return f("CDMI_API.text_search",[t,s,n,_],1,e,o)
},this.text_search_async=function(t,s,n,_,e,o){
return r(),f("CDMI_API.text_search",[t,s,n,_],1,e,o)
},this.corresponds=function(t,s,n,_){
return f("CDMI_API.corresponds",[t,s],1,n,_)
},this.corresponds_async=function(t,s,n,_){
return r(),f("CDMI_API.corresponds",[t,s],1,n,_)
},this.corresponds_from_sequences=function(t,s,n,_,e,o){
return f("CDMI_API.corresponds_from_sequences",[t,s,n,_],1,e,o)
},this.corresponds_from_sequences_async=function(t,s,n,_,e,o){
return r(),f("CDMI_API.corresponds_from_sequences",[t,s,n,_],1,e,o)
},this.close_genomes=function(t,s,n,_){
return f("CDMI_API.close_genomes",[t,s],1,n,_)
},this.close_genomes_async=function(t,s,n,_){
return r(),f("CDMI_API.close_genomes",[t,s],1,n,_)
},this.representative_sequences=function(t,s,n,_){
return f("CDMI_API.representative_sequences",[t,s],2,n,_)
},this.representative_sequences_async=function(t,s,n,_){
return r(),f("CDMI_API.representative_sequences",[t,s],2,n,_)
},this.align_sequences=function(t,s,n,_){
return f("CDMI_API.align_sequences",[t,s],1,n,_)
},this.align_sequences_async=function(t,s,n,_){
return r(),f("CDMI_API.align_sequences",[t,s],1,n,_)
},this.build_tree=function(t,s,n,_){return f("CDMI_API.build_tree",[t,s],1,n,_)
},this.build_tree_async=function(t,s,n,_){
return r(),f("CDMI_API.build_tree",[t,s],1,n,_)
},this.alignment_by_id=function(t,s,n){
return f("CDMI_API.alignment_by_id",[t],1,s,n)
},this.alignment_by_id_async=function(t,s,n){
return r(),f("CDMI_API.alignment_by_id",[t],1,s,n)
},this.tree_by_id=function(t,s,n){return f("CDMI_API.tree_by_id",[t],1,s,n)
},this.tree_by_id_async=function(t,s,n){
return r(),f("CDMI_API.tree_by_id",[t],1,s,n)},this.all_entities=function(t,s){
return f("CDMI_API.all_entities",[],1,t,s)
},this.all_entities_async=function(t,s){
return r(),f("CDMI_API.all_entities",[],1,t,s)
},this.all_relationships=function(t,s){
return f("CDMI_API.all_relationships",[],1,t,s)
},this.all_relationships_async=function(t,s){
return r(),f("CDMI_API.all_relationships",[],1,t,s)
},this.get_entity=function(t,s,n){return f("CDMI_API.get_entity",[t],1,s,n)
},this.get_entity_async=function(t,s,n){
return r(),f("CDMI_API.get_entity",[t],1,s,n)
},this.get_relationship=function(t,s,n){
return f("CDMI_API.get_relationship",[t],1,s,n)
},this.get_relationship_async=function(t,s,n){
return r(),f("CDMI_API.get_relationship",[t],1,s,n)}}}));