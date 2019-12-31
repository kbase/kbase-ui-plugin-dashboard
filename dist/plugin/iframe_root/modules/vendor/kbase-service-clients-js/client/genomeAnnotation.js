define(["jquery","bluebird"],(function(n,e){"use strict";return function(t,o,r){
if("string"!=typeof t)throw new Error("Service url was not provided");this.url=t
;var i=t,a=!1;function _(){if(!a){if(a=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var s=o||{token:"",user_id:""},u=r;function c(t,o,r,a,_){var c=n.Deferred()
;"function"==typeof a&&c.done(a),"function"==typeof _&&c.fail(_);var l={
params:o,method:t,version:"1.1",id:String(Math.random()).slice(2)
},f=null,m=u&&"function"==typeof u?u():s.token?s.token:null
;null!==m&&(f=function(n){n.setRequestHeader("Authorization",m)})
;var p=jQuery.ajax({url:i,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(l),beforeSend:f,success:function(n,e,t){var o;try{
var a=JSON.parse(n);o=1===r?a.result[0]:a.result}catch(_){return void c.reject({
status:503,error:_,url:i,resp:n})}c.resolve(o)},error:function(n,e,t){var o
;if(n.responseText)try{o=JSON.parse(n.responseText).error}catch(r){
o="Unknown error - "+n.responseText}else o="Unknown Error";c.reject({status:500,
error:o})}}),h=c.promise();return h.xhr=p,e.resolve(h)}
this.genome_ids_to_genomes=function(n,e,t){
return c("GenomeAnnotation.genome_ids_to_genomes",[n],1,e,t)
},this.genome_ids_to_genomes_async=function(n,e,t){
return _(),c("GenomeAnnotation.genome_ids_to_genomes",[n],1,e,t)
},this.create_genome=function(n,e,t){
return c("GenomeAnnotation.create_genome",[n],1,e,t)
},this.create_genome_async=function(n,e,t){
return _(),c("GenomeAnnotation.create_genome",[n],1,e,t)
},this.create_genome_from_SEED=function(n,e,t){
return c("GenomeAnnotation.create_genome_from_SEED",[n],1,e,t)
},this.create_genome_from_SEED_async=function(n,e,t){
return _(),c("GenomeAnnotation.create_genome_from_SEED",[n],1,e,t)
},this.create_genome_from_RAST=function(n,e,t){
return c("GenomeAnnotation.create_genome_from_RAST",[n],1,e,t)
},this.create_genome_from_RAST_async=function(n,e,t){
return _(),c("GenomeAnnotation.create_genome_from_RAST",[n],1,e,t)
},this.set_metadata=function(n,e,t,o){
return c("GenomeAnnotation.set_metadata",[n,e],1,t,o)
},this.set_metadata_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.set_metadata",[n,e],1,t,o)
},this.add_contigs=function(n,e,t,o){
return c("GenomeAnnotation.add_contigs",[n,e],1,t,o)
},this.add_contigs_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.add_contigs",[n,e],1,t,o)
},this.add_contigs_from_handle=function(n,e,t,o){
return c("GenomeAnnotation.add_contigs_from_handle",[n,e],1,t,o)
},this.add_contigs_from_handle_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.add_contigs_from_handle",[n,e],1,t,o)
},this.add_features=function(n,e,t,o){
return c("GenomeAnnotation.add_features",[n,e],1,t,o)
},this.add_features_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.add_features",[n,e],1,t,o)
},this.genomeTO_to_reconstructionTO=function(n,e,t){
return c("GenomeAnnotation.genomeTO_to_reconstructionTO",[n],1,e,t)
},this.genomeTO_to_reconstructionTO_async=function(n,e,t){
return _(),c("GenomeAnnotation.genomeTO_to_reconstructionTO",[n],1,e,t)
},this.genomeTO_to_feature_data=function(n,e,t){
return c("GenomeAnnotation.genomeTO_to_feature_data",[n],1,e,t)
},this.genomeTO_to_feature_data_async=function(n,e,t){
return _(),c("GenomeAnnotation.genomeTO_to_feature_data",[n],1,e,t)
},this.reconstructionTO_to_roles=function(n,e,t){
return c("GenomeAnnotation.reconstructionTO_to_roles",[n],1,e,t)
},this.reconstructionTO_to_roles_async=function(n,e,t){
return _(),c("GenomeAnnotation.reconstructionTO_to_roles",[n],1,e,t)
},this.reconstructionTO_to_subsystems=function(n,e,t){
return c("GenomeAnnotation.reconstructionTO_to_subsystems",[n],1,e,t)
},this.reconstructionTO_to_subsystems_async=function(n,e,t){
return _(),c("GenomeAnnotation.reconstructionTO_to_subsystems",[n],1,e,t)
},this.assign_functions_to_CDSs=function(n,e,t){
return c("GenomeAnnotation.assign_functions_to_CDSs",[n],1,e,t)
},this.assign_functions_to_CDSs_async=function(n,e,t){
return _(),c("GenomeAnnotation.assign_functions_to_CDSs",[n],1,e,t)
},this.annotate_genome=function(n,e,t){
return c("GenomeAnnotation.annotate_genome",[n],1,e,t)
},this.annotate_genome_async=function(n,e,t){
return _(),c("GenomeAnnotation.annotate_genome",[n],1,e,t)
},this.call_selenoproteins=function(n,e,t){
return c("GenomeAnnotation.call_selenoproteins",[n],1,e,t)
},this.call_selenoproteins_async=function(n,e,t){
return _(),c("GenomeAnnotation.call_selenoproteins",[n],1,e,t)
},this.call_pyrrolysoproteins=function(n,e,t){
return c("GenomeAnnotation.call_pyrrolysoproteins",[n],1,e,t)
},this.call_pyrrolysoproteins_async=function(n,e,t){
return _(),c("GenomeAnnotation.call_pyrrolysoproteins",[n],1,e,t)
},this.call_features_selenoprotein=function(n,e,t){
return c("GenomeAnnotation.call_features_selenoprotein",[n],1,e,t)
},this.call_features_selenoprotein_async=function(n,e,t){
return _(),c("GenomeAnnotation.call_features_selenoprotein",[n],1,e,t)
},this.call_features_pyrrolysoprotein=function(n,e,t){
return c("GenomeAnnotation.call_features_pyrrolysoprotein",[n],1,e,t)
},this.call_features_pyrrolysoprotein_async=function(n,e,t){
return _(),c("GenomeAnnotation.call_features_pyrrolysoprotein",[n],1,e,t)
},this.call_features_insertion_sequences=function(n,e,t){
return c("GenomeAnnotation.call_features_insertion_sequences",[n],1,e,t)
},this.call_features_insertion_sequences_async=function(n,e,t){
return _(),c("GenomeAnnotation.call_features_insertion_sequences",[n],1,e,t)
},this.call_features_rRNA_SEED=function(n,e,t,o){
return c("GenomeAnnotation.call_features_rRNA_SEED",[n,e],1,t,o)
},this.call_features_rRNA_SEED_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.call_features_rRNA_SEED",[n,e],1,t,o)
},this.call_features_tRNA_trnascan=function(n,e,t){
return c("GenomeAnnotation.call_features_tRNA_trnascan",[n],1,e,t)
},this.call_features_tRNA_trnascan_async=function(n,e,t){
return _(),c("GenomeAnnotation.call_features_tRNA_trnascan",[n],1,e,t)
},this.call_RNAs=function(n,e,t){
return c("GenomeAnnotation.call_RNAs",[n],1,e,t)
},this.call_RNAs_async=function(n,e,t){
return _(),c("GenomeAnnotation.call_RNAs",[n],1,e,t)
},this.call_features_CDS_glimmer3=function(n,e,t,o){
return c("GenomeAnnotation.call_features_CDS_glimmer3",[n,e],1,t,o)
},this.call_features_CDS_glimmer3_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.call_features_CDS_glimmer3",[n,e],1,t,o)
},this.call_features_CDS_prodigal=function(n,e,t){
return c("GenomeAnnotation.call_features_CDS_prodigal",[n],1,e,t)
},this.call_features_CDS_prodigal_async=function(n,e,t){
return _(),c("GenomeAnnotation.call_features_CDS_prodigal",[n],1,e,t)
},this.call_features_CDS_genemark=function(n,e,t){
return c("GenomeAnnotation.call_features_CDS_genemark",[n],1,e,t)
},this.call_features_CDS_genemark_async=function(n,e,t){
return _(),c("GenomeAnnotation.call_features_CDS_genemark",[n],1,e,t)
},this.call_features_CDS_SEED_projection=function(n,e,t){
return c("GenomeAnnotation.call_features_CDS_SEED_projection",[n],1,e,t)
},this.call_features_CDS_SEED_projection_async=function(n,e,t){
return _(),c("GenomeAnnotation.call_features_CDS_SEED_projection",[n],1,e,t)
},this.call_features_CDS_FragGeneScan=function(n,e,t){
return c("GenomeAnnotation.call_features_CDS_FragGeneScan",[n],1,e,t)
},this.call_features_CDS_FragGeneScan_async=function(n,e,t){
return _(),c("GenomeAnnotation.call_features_CDS_FragGeneScan",[n],1,e,t)
},this.call_features_repeat_region_SEED=function(n,e,t,o){
return c("GenomeAnnotation.call_features_repeat_region_SEED",[n,e],1,t,o)
},this.call_features_repeat_region_SEED_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.call_features_repeat_region_SEED",[n,e],1,t,o)
},this.call_features_prophage_phispy=function(n,e,t){
return c("GenomeAnnotation.call_features_prophage_phispy",[n],1,e,t)
},this.call_features_prophage_phispy_async=function(n,e,t){
return _(),c("GenomeAnnotation.call_features_prophage_phispy",[n],1,e,t)
},this.call_features_scan_for_matches=function(n,e,t,o,r){
return c("GenomeAnnotation.call_features_scan_for_matches",[n,e,t],1,o,r)
},this.call_features_scan_for_matches_async=function(n,e,t,o,r){
return _(),c("GenomeAnnotation.call_features_scan_for_matches",[n,e,t],1,o,r)
},this.annotate_proteins_similarity=function(n,e,t,o){
return c("GenomeAnnotation.annotate_proteins_similarity",[n,e],1,t,o)
},this.annotate_proteins_similarity_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.annotate_proteins_similarity",[n,e],1,t,o)
},this.annotate_proteins_kmer_v1=function(n,e,t,o){
return c("GenomeAnnotation.annotate_proteins_kmer_v1",[n,e],1,t,o)
},this.annotate_proteins_kmer_v1_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.annotate_proteins_kmer_v1",[n,e],1,t,o)
},this.annotate_proteins_kmer_v2=function(n,e,t,o){
return c("GenomeAnnotation.annotate_proteins_kmer_v2",[n,e],1,t,o)
},this.annotate_proteins_kmer_v2_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.annotate_proteins_kmer_v2",[n,e],1,t,o)
},this.resolve_overlapping_features=function(n,e,t,o){
return c("GenomeAnnotation.resolve_overlapping_features",[n,e],1,t,o)
},this.resolve_overlapping_features_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.resolve_overlapping_features",[n,e],1,t,o)
},this.call_features_ProtoCDS_kmer_v1=function(n,e,t,o){
return c("GenomeAnnotation.call_features_ProtoCDS_kmer_v1",[n,e],1,t,o)
},this.call_features_ProtoCDS_kmer_v1_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.call_features_ProtoCDS_kmer_v1",[n,e],1,t,o)
},this.call_features_ProtoCDS_kmer_v2=function(n,e,t,o){
return c("GenomeAnnotation.call_features_ProtoCDS_kmer_v2",[n,e],1,t,o)
},this.call_features_ProtoCDS_kmer_v2_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.call_features_ProtoCDS_kmer_v2",[n,e],1,t,o)
},this.enumerate_special_protein_databases=function(n,e){
return c("GenomeAnnotation.enumerate_special_protein_databases",[],1,n,e)
},this.enumerate_special_protein_databases_async=function(n,e){
return _(),c("GenomeAnnotation.enumerate_special_protein_databases",[],1,n,e)
},this.compute_special_proteins=function(n,e,t,o){
return c("GenomeAnnotation.compute_special_proteins",[n,e],1,t,o)
},this.compute_special_proteins_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.compute_special_proteins",[n,e],1,t,o)
},this.compute_cdd=function(n,e,t){
return c("GenomeAnnotation.compute_cdd",[n],1,e,t)
},this.compute_cdd_async=function(n,e,t){
return _(),c("GenomeAnnotation.compute_cdd",[n],1,e,t)
},this.annotate_proteins=function(n,e,t){
return c("GenomeAnnotation.annotate_proteins",[n],1,e,t)
},this.annotate_proteins_async=function(n,e,t){
return _(),c("GenomeAnnotation.annotate_proteins",[n],1,e,t)
},this.estimate_crude_phylogenetic_position_kmer=function(n,e,t){
return c("GenomeAnnotation.estimate_crude_phylogenetic_position_kmer",[n],1,e,t)
},this.estimate_crude_phylogenetic_position_kmer_async=function(n,e,t){
return _(),
c("GenomeAnnotation.estimate_crude_phylogenetic_position_kmer",[n],1,e,t)
},this.find_close_neighbors=function(n,e,t){
return c("GenomeAnnotation.find_close_neighbors",[n],1,e,t)
},this.find_close_neighbors_async=function(n,e,t){
return _(),c("GenomeAnnotation.find_close_neighbors",[n],1,e,t)
},this.call_features_strep_suis_repeat=function(n,e,t){
return c("GenomeAnnotation.call_features_strep_suis_repeat",[n],1,e,t)
},this.call_features_strep_suis_repeat_async=function(n,e,t){
return _(),c("GenomeAnnotation.call_features_strep_suis_repeat",[n],1,e,t)
},this.call_features_strep_pneumo_repeat=function(n,e,t){
return c("GenomeAnnotation.call_features_strep_pneumo_repeat",[n],1,e,t)
},this.call_features_strep_pneumo_repeat_async=function(n,e,t){
return _(),c("GenomeAnnotation.call_features_strep_pneumo_repeat",[n],1,e,t)
},this.call_features_crispr=function(n,e,t){
return c("GenomeAnnotation.call_features_crispr",[n],1,e,t)
},this.call_features_crispr_async=function(n,e,t){
return _(),c("GenomeAnnotation.call_features_crispr",[n],1,e,t)
},this.update_functions=function(n,e,t,o,r){
return c("GenomeAnnotation.update_functions",[n,e,t],1,o,r)
},this.update_functions_async=function(n,e,t,o,r){
return _(),c("GenomeAnnotation.update_functions",[n,e,t],1,o,r)
},this.renumber_features=function(n,e,t){
return c("GenomeAnnotation.renumber_features",[n],1,e,t)
},this.renumber_features_async=function(n,e,t){
return _(),c("GenomeAnnotation.renumber_features",[n],1,e,t)
},this.export_genome=function(n,e,t,o,r){
return c("GenomeAnnotation.export_genome",[n,e,t],1,o,r)
},this.export_genome_async=function(n,e,t,o,r){
return _(),c("GenomeAnnotation.export_genome",[n,e,t],1,o,r)
},this.enumerate_classifiers=function(n,e){
return c("GenomeAnnotation.enumerate_classifiers",[],1,n,e)
},this.enumerate_classifiers_async=function(n,e){
return _(),c("GenomeAnnotation.enumerate_classifiers",[],1,n,e)
},this.query_classifier_groups=function(n,e,t){
return c("GenomeAnnotation.query_classifier_groups",[n],1,e,t)
},this.query_classifier_groups_async=function(n,e,t){
return _(),c("GenomeAnnotation.query_classifier_groups",[n],1,e,t)
},this.query_classifier_taxonomies=function(n,e,t){
return c("GenomeAnnotation.query_classifier_taxonomies",[n],1,e,t)
},this.query_classifier_taxonomies_async=function(n,e,t){
return _(),c("GenomeAnnotation.query_classifier_taxonomies",[n],1,e,t)
},this.classify_into_bins=function(n,e,t,o){
return c("GenomeAnnotation.classify_into_bins",[n,e],1,t,o)
},this.classify_into_bins_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.classify_into_bins",[n,e],1,t,o)
},this.classify_full=function(n,e,t,o){
return c("GenomeAnnotation.classify_full",[n,e],3,t,o)
},this.classify_full_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.classify_full",[n,e],3,t,o)
},this.default_workflow=function(n,e){
return c("GenomeAnnotation.default_workflow",[],1,n,e)
},this.default_workflow_async=function(n,e){
return _(),c("GenomeAnnotation.default_workflow",[],1,n,e)
},this.complete_workflow_template=function(n,e){
return c("GenomeAnnotation.complete_workflow_template",[],1,n,e)
},this.complete_workflow_template_async=function(n,e){
return _(),c("GenomeAnnotation.complete_workflow_template",[],1,n,e)
},this.run_pipeline=function(n,e,t,o){
return c("GenomeAnnotation.run_pipeline",[n,e],1,t,o)
},this.run_pipeline_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.run_pipeline",[n,e],1,t,o)
},this.pipeline_batch_start=function(n,e,t,o){
return c("GenomeAnnotation.pipeline_batch_start",[n,e],1,t,o)
},this.pipeline_batch_start_async=function(n,e,t,o){
return _(),c("GenomeAnnotation.pipeline_batch_start",[n,e],1,t,o)
},this.pipeline_batch_status=function(n,e,t){
return c("GenomeAnnotation.pipeline_batch_status",[n],1,e,t)
},this.pipeline_batch_status_async=function(n,e,t){
return _(),c("GenomeAnnotation.pipeline_batch_status",[n],1,e,t)
},this.pipeline_batch_enumerate_batches=function(n,e){
return c("GenomeAnnotation.pipeline_batch_enumerate_batches",[],1,n,e)
},this.pipeline_batch_enumerate_batches_async=function(n,e){
return _(),c("GenomeAnnotation.pipeline_batch_enumerate_batches",[],1,n,e)}}}));