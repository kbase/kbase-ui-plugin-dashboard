define(["jquery","bluebird"],(function(e,t){"use strict";return function(n,o,i){
if("string"!=typeof n)throw new Error("Service url was not provided");this.url=n
;var r=n,s=!1;function a(){if(!s){if(s=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var c=o||{token:"",user_id:""},_=i;function u(n,o,i,s,a){var u=e.Deferred()
;"function"==typeof s&&u.done(s),"function"==typeof a&&u.fail(a);var f={
params:o,method:n,version:"1.1",id:String(Math.random()).slice(2)
},l=null,d=_&&"function"==typeof _?_():c.token?c.token:null
;null!==d&&(l=function(e){e.setRequestHeader("Authorization",d)})
;var m=jQuery.ajax({url:r,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(f),beforeSend:l,success:function(e,t,n){var o;try{
var s=JSON.parse(e);o=1===i?s.result[0]:s.result}catch(a){return void u.reject({
status:503,error:a,url:r,resp:e})}u.resolve(o)},error:function(e,t,n){var o
;if(e.responseText)try{o=JSON.parse(e.responseText).error}catch(i){
o="Unknown error - "+e.responseText}else o="Unknown Error";u.reject({status:500,
error:o})}}),b=u.promise();return b.xhr=m,t.resolve(b)}
this.get_models=function(e,t,n){
return u("fbaModelServices.get_models",[e],1,t,n)
},this.get_models_async=function(e,t,n){
return a(),u("fbaModelServices.get_models",[e],1,t,n)
},this.get_fbas=function(e,t,n){return u("fbaModelServices.get_fbas",[e],1,t,n)
},this.get_fbas_async=function(e,t,n){
return a(),u("fbaModelServices.get_fbas",[e],1,t,n)
},this.get_gapfills=function(e,t,n){
return u("fbaModelServices.get_gapfills",[e],1,t,n)
},this.get_gapfills_async=function(e,t,n){
return a(),u("fbaModelServices.get_gapfills",[e],1,t,n)
},this.get_gapgens=function(e,t,n){
return u("fbaModelServices.get_gapgens",[e],1,t,n)
},this.get_gapgens_async=function(e,t,n){
return a(),u("fbaModelServices.get_gapgens",[e],1,t,n)
},this.get_reactions=function(e,t,n){
return u("fbaModelServices.get_reactions",[e],1,t,n)
},this.get_reactions_async=function(e,t,n){
return a(),u("fbaModelServices.get_reactions",[e],1,t,n)
},this.get_compounds=function(e,t,n){
return u("fbaModelServices.get_compounds",[e],1,t,n)
},this.get_compounds_async=function(e,t,n){
return a(),u("fbaModelServices.get_compounds",[e],1,t,n)
},this.get_alias=function(e,t,n){
return u("fbaModelServices.get_alias",[e],1,t,n)
},this.get_alias_async=function(e,t,n){
return a(),u("fbaModelServices.get_alias",[e],1,t,n)
},this.get_aliassets=function(e,t,n){
return u("fbaModelServices.get_aliassets",[e],1,t,n)
},this.get_aliassets_async=function(e,t,n){
return a(),u("fbaModelServices.get_aliassets",[e],1,t,n)
},this.get_media=function(e,t,n){
return u("fbaModelServices.get_media",[e],1,t,n)
},this.get_media_async=function(e,t,n){
return a(),u("fbaModelServices.get_media",[e],1,t,n)
},this.get_biochemistry=function(e,t,n){
return u("fbaModelServices.get_biochemistry",[e],1,t,n)
},this.get_biochemistry_async=function(e,t,n){
return a(),u("fbaModelServices.get_biochemistry",[e],1,t,n)
},this.import_probanno=function(e,t,n){
return u("fbaModelServices.import_probanno",[e],1,t,n)
},this.import_probanno_async=function(e,t,n){
return a(),u("fbaModelServices.import_probanno",[e],1,t,n)
},this.genome_object_to_workspace=function(e,t,n){
return u("fbaModelServices.genome_object_to_workspace",[e],1,t,n)
},this.genome_object_to_workspace_async=function(e,t,n){
return a(),u("fbaModelServices.genome_object_to_workspace",[e],1,t,n)
},this.genome_to_workspace=function(e,t,n){
return u("fbaModelServices.genome_to_workspace",[e],1,t,n)
},this.genome_to_workspace_async=function(e,t,n){
return a(),u("fbaModelServices.genome_to_workspace",[e],1,t,n)
},this.domains_to_workspace=function(e,t,n){
return u("fbaModelServices.domains_to_workspace",[e],1,t,n)
},this.domains_to_workspace_async=function(e,t,n){
return a(),u("fbaModelServices.domains_to_workspace",[e],1,t,n)
},this.compute_domains=function(e,t,n){
return u("fbaModelServices.compute_domains",[e],1,t,n)
},this.compute_domains_async=function(e,t,n){
return a(),u("fbaModelServices.compute_domains",[e],1,t,n)
},this.add_feature_translation=function(e,t,n){
return u("fbaModelServices.add_feature_translation",[e],1,t,n)
},this.add_feature_translation_async=function(e,t,n){
return a(),u("fbaModelServices.add_feature_translation",[e],1,t,n)
},this.genome_to_fbamodel=function(e,t,n){
return u("fbaModelServices.genome_to_fbamodel",[e],1,t,n)
},this.genome_to_fbamodel_async=function(e,t,n){
return a(),u("fbaModelServices.genome_to_fbamodel",[e],1,t,n)
},this.translate_fbamodel=function(e,t,n){
return u("fbaModelServices.translate_fbamodel",[e],1,t,n)
},this.translate_fbamodel_async=function(e,t,n){
return a(),u("fbaModelServices.translate_fbamodel",[e],1,t,n)
},this.build_pangenome=function(e,t,n){
return u("fbaModelServices.build_pangenome",[e],1,t,n)
},this.build_pangenome_async=function(e,t,n){
return a(),u("fbaModelServices.build_pangenome",[e],1,t,n)
},this.genome_heatmap_from_pangenome=function(e,t,n){
return u("fbaModelServices.genome_heatmap_from_pangenome",[e],1,t,n)
},this.genome_heatmap_from_pangenome_async=function(e,t,n){
return a(),u("fbaModelServices.genome_heatmap_from_pangenome",[e],1,t,n)
},this.ortholog_family_from_pangenome=function(e,t,n){
return u("fbaModelServices.ortholog_family_from_pangenome",[e],1,t,n)
},this.ortholog_family_from_pangenome_async=function(e,t,n){
return a(),u("fbaModelServices.ortholog_family_from_pangenome",[e],1,t,n)
},this.pangenome_to_proteome_comparison=function(e,t,n){
return u("fbaModelServices.pangenome_to_proteome_comparison",[e],1,t,n)
},this.pangenome_to_proteome_comparison_async=function(e,t,n){
return a(),u("fbaModelServices.pangenome_to_proteome_comparison",[e],1,t,n)
},this.import_fbamodel=function(e,t,n){
return u("fbaModelServices.import_fbamodel",[e],1,t,n)
},this.import_fbamodel_async=function(e,t,n){
return a(),u("fbaModelServices.import_fbamodel",[e],1,t,n)
},this.export_fbamodel=function(e,t,n){
return u("fbaModelServices.export_fbamodel",[e],1,t,n)
},this.export_fbamodel_async=function(e,t,n){
return a(),u("fbaModelServices.export_fbamodel",[e],1,t,n)
},this.export_object=function(e,t,n){
return u("fbaModelServices.export_object",[e],1,t,n)
},this.export_object_async=function(e,t,n){
return a(),u("fbaModelServices.export_object",[e],1,t,n)
},this.export_genome=function(e,t,n){
return u("fbaModelServices.export_genome",[e],1,t,n)
},this.export_genome_async=function(e,t,n){
return a(),u("fbaModelServices.export_genome",[e],1,t,n)
},this.adjust_model_reaction=function(e,t,n){
return u("fbaModelServices.adjust_model_reaction",[e],1,t,n)
},this.adjust_model_reaction_async=function(e,t,n){
return a(),u("fbaModelServices.adjust_model_reaction",[e],1,t,n)
},this.adjust_biomass_reaction=function(e,t,n){
return u("fbaModelServices.adjust_biomass_reaction",[e],1,t,n)
},this.adjust_biomass_reaction_async=function(e,t,n){
return a(),u("fbaModelServices.adjust_biomass_reaction",[e],1,t,n)
},this.addmedia=function(e,t,n){return u("fbaModelServices.addmedia",[e],1,t,n)
},this.addmedia_async=function(e,t,n){
return a(),u("fbaModelServices.addmedia",[e],1,t,n)
},this.export_media=function(e,t,n){
return u("fbaModelServices.export_media",[e],1,t,n)
},this.export_media_async=function(e,t,n){
return a(),u("fbaModelServices.export_media",[e],1,t,n)
},this.runfba=function(e,t,n){return u("fbaModelServices.runfba",[e],1,t,n)
},this.runfba_async=function(e,t,n){
return a(),u("fbaModelServices.runfba",[e],1,t,n)
},this.quantitative_optimization=function(e,t,n){
return u("fbaModelServices.quantitative_optimization",[e],1,t,n)
},this.quantitative_optimization_async=function(e,t,n){
return a(),u("fbaModelServices.quantitative_optimization",[e],1,t,n)
},this.generate_model_stats=function(e,t,n){
return u("fbaModelServices.generate_model_stats",[e],1,t,n)
},this.generate_model_stats_async=function(e,t,n){
return a(),u("fbaModelServices.generate_model_stats",[e],1,t,n)
},this.minimize_reactions=function(e,t,n){
return u("fbaModelServices.minimize_reactions",[e],1,t,n)
},this.minimize_reactions_async=function(e,t,n){
return a(),u("fbaModelServices.minimize_reactions",[e],1,t,n)
},this.export_fba=function(e,t,n){
return u("fbaModelServices.export_fba",[e],1,t,n)
},this.export_fba_async=function(e,t,n){
return a(),u("fbaModelServices.export_fba",[e],1,t,n)
},this.import_phenotypes=function(e,t,n){
return u("fbaModelServices.import_phenotypes",[e],1,t,n)
},this.import_phenotypes_async=function(e,t,n){
return a(),u("fbaModelServices.import_phenotypes",[e],1,t,n)
},this.simulate_phenotypes=function(e,t,n){
return u("fbaModelServices.simulate_phenotypes",[e],1,t,n)
},this.simulate_phenotypes_async=function(e,t,n){
return a(),u("fbaModelServices.simulate_phenotypes",[e],1,t,n)
},this.add_media_transporters=function(e,t,n){
return u("fbaModelServices.add_media_transporters",[e],1,t,n)
},this.add_media_transporters_async=function(e,t,n){
return a(),u("fbaModelServices.add_media_transporters",[e],1,t,n)
},this.export_phenotypeSimulationSet=function(e,t,n){
return u("fbaModelServices.export_phenotypeSimulationSet",[e],1,t,n)
},this.export_phenotypeSimulationSet_async=function(e,t,n){
return a(),u("fbaModelServices.export_phenotypeSimulationSet",[e],1,t,n)
},this.integrate_reconciliation_solutions=function(e,t,n){
return u("fbaModelServices.integrate_reconciliation_solutions",[e],1,t,n)
},this.integrate_reconciliation_solutions_async=function(e,t,n){
return a(),u("fbaModelServices.integrate_reconciliation_solutions",[e],1,t,n)
},this.queue_runfba=function(e,t,n){
return u("fbaModelServices.queue_runfba",[e],1,t,n)
},this.queue_runfba_async=function(e,t,n){
return a(),u("fbaModelServices.queue_runfba",[e],1,t,n)
},this.queue_gapfill_model=function(e,t,n){
return u("fbaModelServices.queue_gapfill_model",[e],1,t,n)
},this.queue_gapfill_model_async=function(e,t,n){
return a(),u("fbaModelServices.queue_gapfill_model",[e],1,t,n)
},this.gapfill_model=function(e,t,n){
return u("fbaModelServices.gapfill_model",[e],1,t,n)
},this.gapfill_model_async=function(e,t,n){
return a(),u("fbaModelServices.gapfill_model",[e],1,t,n)
},this.queue_gapgen_model=function(e,t,n){
return u("fbaModelServices.queue_gapgen_model",[e],1,t,n)
},this.queue_gapgen_model_async=function(e,t,n){
return a(),u("fbaModelServices.queue_gapgen_model",[e],1,t,n)
},this.gapgen_model=function(e,t,n){
return u("fbaModelServices.gapgen_model",[e],1,t,n)
},this.gapgen_model_async=function(e,t,n){
return a(),u("fbaModelServices.gapgen_model",[e],1,t,n)
},this.queue_wildtype_phenotype_reconciliation=function(e,t,n){
return u("fbaModelServices.queue_wildtype_phenotype_reconciliation",[e],1,t,n)},
this.queue_wildtype_phenotype_reconciliation_async=function(e,t,n){
return a(),u("fbaModelServices.queue_wildtype_phenotype_reconciliation",[e],1,t,n)
},this.queue_reconciliation_sensitivity_analysis=function(e,t,n){
return u("fbaModelServices.queue_reconciliation_sensitivity_analysis",[e],1,t,n)
},this.queue_reconciliation_sensitivity_analysis_async=function(e,t,n){
return a(),
u("fbaModelServices.queue_reconciliation_sensitivity_analysis",[e],1,t,n)
},this.queue_combine_wildtype_phenotype_reconciliation=function(e,t,n){
return u("fbaModelServices.queue_combine_wildtype_phenotype_reconciliation",[e],1,t,n)
},this.queue_combine_wildtype_phenotype_reconciliation_async=function(e,t,n){
return a(),
u("fbaModelServices.queue_combine_wildtype_phenotype_reconciliation",[e],1,t,n)
},this.run_job=function(e,t,n){return u("fbaModelServices.run_job",[e],1,t,n)
},this.run_job_async=function(e,t,n){
return a(),u("fbaModelServices.run_job",[e],1,t,n)
},this.queue_job=function(e,t,n){
return u("fbaModelServices.queue_job",[e],1,t,n)
},this.queue_job_async=function(e,t,n){
return a(),u("fbaModelServices.queue_job",[e],1,t,n)
},this.set_cofactors=function(e,t,n){
return u("fbaModelServices.set_cofactors",[e],1,t,n)
},this.set_cofactors_async=function(e,t,n){
return a(),u("fbaModelServices.set_cofactors",[e],1,t,n)
},this.find_reaction_synonyms=function(e,t,n){
return u("fbaModelServices.find_reaction_synonyms",[e],1,t,n)
},this.find_reaction_synonyms_async=function(e,t,n){
return a(),u("fbaModelServices.find_reaction_synonyms",[e],1,t,n)
},this.role_to_reactions=function(e,t,n){
return u("fbaModelServices.role_to_reactions",[e],1,t,n)
},this.role_to_reactions_async=function(e,t,n){
return a(),u("fbaModelServices.role_to_reactions",[e],1,t,n)
},this.reaction_sensitivity_analysis=function(e,t,n){
return u("fbaModelServices.reaction_sensitivity_analysis",[e],1,t,n)
},this.reaction_sensitivity_analysis_async=function(e,t,n){
return a(),u("fbaModelServices.reaction_sensitivity_analysis",[e],1,t,n)
},this.filter_iterative_solutions=function(e,t,n){
return u("fbaModelServices.filter_iterative_solutions",[e],1,t,n)
},this.filter_iterative_solutions_async=function(e,t,n){
return a(),u("fbaModelServices.filter_iterative_solutions",[e],1,t,n)
},this.delete_noncontributing_reactions=function(e,t,n){
return u("fbaModelServices.delete_noncontributing_reactions",[e],1,t,n)
},this.delete_noncontributing_reactions_async=function(e,t,n){
return a(),u("fbaModelServices.delete_noncontributing_reactions",[e],1,t,n)
},this.annotate_workspace_Genome=function(e,t,n){
return u("fbaModelServices.annotate_workspace_Genome",[e],1,t,n)
},this.annotate_workspace_Genome_async=function(e,t,n){
return a(),u("fbaModelServices.annotate_workspace_Genome",[e],1,t,n)
},this.gtf_to_genome=function(e,t,n){
return u("fbaModelServices.gtf_to_genome",[e],1,t,n)
},this.gtf_to_genome_async=function(e,t,n){
return a(),u("fbaModelServices.gtf_to_genome",[e],1,t,n)
},this.fasta_to_ProteinSet=function(e,t,n){
return u("fbaModelServices.fasta_to_ProteinSet",[e],1,t,n)
},this.fasta_to_ProteinSet_async=function(e,t,n){
return a(),u("fbaModelServices.fasta_to_ProteinSet",[e],1,t,n)
},this.ProteinSet_to_Genome=function(e,t,n){
return u("fbaModelServices.ProteinSet_to_Genome",[e],1,t,n)
},this.ProteinSet_to_Genome_async=function(e,t,n){
return a(),u("fbaModelServices.ProteinSet_to_Genome",[e],1,t,n)
},this.fasta_to_ContigSet=function(e,t,n){
return u("fbaModelServices.fasta_to_ContigSet",[e],1,t,n)
},this.fasta_to_ContigSet_async=function(e,t,n){
return a(),u("fbaModelServices.fasta_to_ContigSet",[e],1,t,n)
},this.ContigSet_to_Genome=function(e,t,n){
return u("fbaModelServices.ContigSet_to_Genome",[e],1,t,n)
},this.ContigSet_to_Genome_async=function(e,t,n){
return a(),u("fbaModelServices.ContigSet_to_Genome",[e],1,t,n)
},this.probanno_to_genome=function(e,t,n){
return u("fbaModelServices.probanno_to_genome",[e],1,t,n)
},this.probanno_to_genome_async=function(e,t,n){
return a(),u("fbaModelServices.probanno_to_genome",[e],1,t,n)
},this.get_mapping=function(e,t,n){
return u("fbaModelServices.get_mapping",[e],1,t,n)
},this.get_mapping_async=function(e,t,n){
return a(),u("fbaModelServices.get_mapping",[e],1,t,n)
},this.subsystem_of_roles=function(e,t,n){
return u("fbaModelServices.subsystem_of_roles",[e],1,t,n)
},this.subsystem_of_roles_async=function(e,t,n){
return a(),u("fbaModelServices.subsystem_of_roles",[e],1,t,n)
},this.adjust_mapping_role=function(e,t,n){
return u("fbaModelServices.adjust_mapping_role",[e],1,t,n)
},this.adjust_mapping_role_async=function(e,t,n){
return a(),u("fbaModelServices.adjust_mapping_role",[e],1,t,n)
},this.adjust_mapping_complex=function(e,t,n){
return u("fbaModelServices.adjust_mapping_complex",[e],1,t,n)
},this.adjust_mapping_complex_async=function(e,t,n){
return a(),u("fbaModelServices.adjust_mapping_complex",[e],1,t,n)
},this.adjust_mapping_subsystem=function(e,t,n){
return u("fbaModelServices.adjust_mapping_subsystem",[e],1,t,n)
},this.adjust_mapping_subsystem_async=function(e,t,n){
return a(),u("fbaModelServices.adjust_mapping_subsystem",[e],1,t,n)
},this.get_template_model=function(e,t,n){
return u("fbaModelServices.get_template_model",[e],1,t,n)
},this.get_template_model_async=function(e,t,n){
return a(),u("fbaModelServices.get_template_model",[e],1,t,n)
},this.import_template_fbamodel=function(e,t,n){
return u("fbaModelServices.import_template_fbamodel",[e],1,t,n)
},this.import_template_fbamodel_async=function(e,t,n){
return a(),u("fbaModelServices.import_template_fbamodel",[e],1,t,n)
},this.adjust_template_reaction=function(e,t,n){
return u("fbaModelServices.adjust_template_reaction",[e],1,t,n)
},this.adjust_template_reaction_async=function(e,t,n){
return a(),u("fbaModelServices.adjust_template_reaction",[e],1,t,n)
},this.adjust_template_biomass=function(e,t,n){
return u("fbaModelServices.adjust_template_biomass",[e],1,t,n)
},this.adjust_template_biomass_async=function(e,t,n){
return a(),u("fbaModelServices.adjust_template_biomass",[e],1,t,n)
},this.add_stimuli=function(e,t,n){
return u("fbaModelServices.add_stimuli",[e],1,t,n)
},this.add_stimuli_async=function(e,t,n){
return a(),u("fbaModelServices.add_stimuli",[e],1,t,n)
},this.import_regulatory_model=function(e,t,n){
return u("fbaModelServices.import_regulatory_model",[e],1,t,n)
},this.import_regulatory_model_async=function(e,t,n){
return a(),u("fbaModelServices.import_regulatory_model",[e],1,t,n)
},this.compare_models=function(e,t,n){
return u("fbaModelServices.compare_models",[e],1,t,n)
},this.compare_models_async=function(e,t,n){
return a(),u("fbaModelServices.compare_models",[e],1,t,n)
},this.compare_genomes=function(e,t,n){
return u("fbaModelServices.compare_genomes",[e],1,t,n)
},this.compare_genomes_async=function(e,t,n){
return a(),u("fbaModelServices.compare_genomes",[e],1,t,n)
},this.import_metagenome_annotation=function(e,t,n){
return u("fbaModelServices.import_metagenome_annotation",[e],1,t,n)
},this.import_metagenome_annotation_async=function(e,t,n){
return a(),u("fbaModelServices.import_metagenome_annotation",[e],1,t,n)
},this.models_to_community_model=function(e,t,n){
return u("fbaModelServices.models_to_community_model",[e],1,t,n)
},this.models_to_community_model_async=function(e,t,n){
return a(),u("fbaModelServices.models_to_community_model",[e],1,t,n)
},this.metagenome_to_fbamodels=function(e,t,n){
return u("fbaModelServices.metagenome_to_fbamodels",[e],1,t,n)
},this.metagenome_to_fbamodels_async=function(e,t,n){
return a(),u("fbaModelServices.metagenome_to_fbamodels",[e],1,t,n)
},this.import_expression=function(e,t,n){
return u("fbaModelServices.import_expression",[e],1,t,n)
},this.import_expression_async=function(e,t,n){
return a(),u("fbaModelServices.import_expression",[e],1,t,n)
},this.import_regulome=function(e,t,n){
return u("fbaModelServices.import_regulome",[e],1,t,n)
},this.import_regulome_async=function(e,t,n){
return a(),u("fbaModelServices.import_regulome",[e],1,t,n)
},this.create_promconstraint=function(e,t,n){
return u("fbaModelServices.create_promconstraint",[e],1,t,n)
},this.create_promconstraint_async=function(e,t,n){
return a(),u("fbaModelServices.create_promconstraint",[e],1,t,n)
},this.add_biochemistry_compounds=function(e,t,n){
return u("fbaModelServices.add_biochemistry_compounds",[e],1,t,n)
},this.add_biochemistry_compounds_async=function(e,t,n){
return a(),u("fbaModelServices.add_biochemistry_compounds",[e],1,t,n)
},this.update_object_references=function(e,t,n){
return u("fbaModelServices.update_object_references",[e],1,t,n)
},this.update_object_references_async=function(e,t,n){
return a(),u("fbaModelServices.update_object_references",[e],1,t,n)
},this.add_reactions=function(e,t,n){
return u("fbaModelServices.add_reactions",[e],1,t,n)
},this.add_reactions_async=function(e,t,n){
return a(),u("fbaModelServices.add_reactions",[e],1,t,n)
},this.remove_reactions=function(e,t,n){
return u("fbaModelServices.remove_reactions",[e],1,t,n)
},this.remove_reactions_async=function(e,t,n){
return a(),u("fbaModelServices.remove_reactions",[e],1,t,n)
},this.modify_reactions=function(e,t,n){
return u("fbaModelServices.modify_reactions",[e],1,t,n)
},this.modify_reactions_async=function(e,t,n){
return a(),u("fbaModelServices.modify_reactions",[e],1,t,n)
},this.add_features=function(e,t,n){
return u("fbaModelServices.add_features",[e],1,t,n)
},this.add_features_async=function(e,t,n){
return a(),u("fbaModelServices.add_features",[e],1,t,n)
},this.remove_features=function(e,t,n){
return u("fbaModelServices.remove_features",[e],1,t,n)
},this.remove_features_async=function(e,t,n){
return a(),u("fbaModelServices.remove_features",[e],1,t,n)
},this.modify_features=function(e,t,n){
return u("fbaModelServices.modify_features",[e],1,t,n)
},this.modify_features_async=function(e,t,n){
return a(),u("fbaModelServices.modify_features",[e],1,t,n)
},this.import_trainingset=function(e,t,n){
return u("fbaModelServices.import_trainingset",[e],1,t,n)
},this.import_trainingset_async=function(e,t,n){
return a(),u("fbaModelServices.import_trainingset",[e],1,t,n)
},this.preload_trainingset=function(e,t,n){
return u("fbaModelServices.preload_trainingset",[e],1,t,n)
},this.preload_trainingset_async=function(e,t,n){
return a(),u("fbaModelServices.preload_trainingset",[e],1,t,n)
},this.build_classifier=function(e,t,n){
return u("fbaModelServices.build_classifier",[e],1,t,n)
},this.build_classifier_async=function(e,t,n){
return a(),u("fbaModelServices.build_classifier",[e],1,t,n)
},this.classify_genomes=function(e,t,n){
return u("fbaModelServices.classify_genomes",[e],1,t,n)
},this.classify_genomes_async=function(e,t,n){
return a(),u("fbaModelServices.classify_genomes",[e],1,t,n)
},this.build_tissue_model=function(e,t,n){
return u("fbaModelServices.build_tissue_model",[e],1,t,n)
},this.build_tissue_model_async=function(e,t,n){
return a(),u("fbaModelServices.build_tissue_model",[e],1,t,n)}}}));