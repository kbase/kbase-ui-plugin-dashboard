define(["jquery","bluebird"],(function(t,n){"use strict"
;return function(e,o,f,i,r,u){
if("string"!=typeof e)throw new Error("Service url was not provided");this.url=e
;var c=e;this.timeout=i;var a=i
;this.async_job_check_time_ms=r,this.async_job_check_time_ms||(this.async_job_check_time_ms=5e3),
this.service_version=u;var s=o||{token:"",user_id:""},m=f
;function h(e,o,f,i,r,u,c,h){
h||(h=t.Deferred()),"function"==typeof r&&h.done(r),
"function"==typeof u&&h.fail(u);var l={params:f,method:o,version:"1.1",
id:String(Math.random()).slice(2)};c&&(l.context=c)
;var p=null,g=m&&"function"==typeof m?m():s.token?s.token:null
;null!==g&&(p=function(t){t.setRequestHeader("Authorization",g)})
;var b=jQuery.ajax({url:e,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(l),beforeSend:p,timeout:a,success:function(t,n,o){var f;try{
var r=JSON.parse(t);f=1===i?r.result[0]:r.result}catch(u){return void h.reject({
status:503,error:u,url:e,resp:t})}h.resolve(f)},error:function(t,n,e){var o
;if(t.responseText)try{o=JSON.parse(t.responseText).error}catch(f){
o="Unknown error - "+t.responseText}else o="Unknown Error";h.reject({status:500,
error:o})}}),d=h.promise();return d.xhr=b,n.resolve(d)}this.ver=function(t,n){
if(t&&"function"!=typeof t)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>2)throw"Too many arguments ("+arguments.length+" instead of 2)"
;return h(c,"Workspace.ver",[],1,t,n)},this.create_workspace=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.create_workspace",[t],1,n,e)
},this.alter_workspace_metadata=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.alter_workspace_metadata",[t],0,n,e)
},this.clone_workspace=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.clone_workspace",[t],1,n,e)
},this.lock_workspace=function(t,n,e){
if("function"==typeof t)throw"Argument wsi can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.lock_workspace",[t],1,n,e)
},this.get_workspacemeta=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_workspacemeta",[t],1,n,e)
},this.get_workspace_info=function(t,n,e){
if("function"==typeof t)throw"Argument wsi can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_workspace_info",[t],1,n,e)
},this.get_workspace_description=function(t,n,e){
if("function"==typeof t)throw"Argument wsi can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_workspace_description",[t],1,n,e)
},this.set_permissions=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.set_permissions",[t],0,n,e)
},this.set_global_permission=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.set_global_permission",[t],0,n,e)
},this.set_workspace_description=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.set_workspace_description",[t],0,n,e)
},this.get_permissions_mass=function(t,n,e){
if("function"==typeof t)throw"Argument mass can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_permissions_mass",[t],1,n,e)
},this.get_permissions=function(t,n,e){
if("function"==typeof t)throw"Argument wsi can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_permissions",[t],1,n,e)
},this.save_object=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.save_object",[t],1,n,e)
},this.save_objects=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.save_objects",[t],1,n,e)
},this.get_object=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_object",[t],1,n,e)
},this.get_object_provenance=function(t,n,e){
if("function"==typeof t)throw"Argument object_ids can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_object_provenance",[t],1,n,e)
},this.get_objects=function(t,n,e){
if("function"==typeof t)throw"Argument object_ids can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_objects",[t],1,n,e)
},this.get_objects2=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_objects2",[t],1,n,e)
},this.get_object_subset=function(t,n,e){
if("function"==typeof t)throw"Argument sub_object_ids can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_object_subset",[t],1,n,e)
},this.get_object_history=function(t,n,e){
if("function"==typeof t)throw"Argument object can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_object_history",[t],1,n,e)
},this.list_referencing_objects=function(t,n,e){
if("function"==typeof t)throw"Argument object_ids can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.list_referencing_objects",[t],1,n,e)
},this.list_referencing_object_counts=function(t,n,e){
if("function"==typeof t)throw"Argument object_ids can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.list_referencing_object_counts",[t],1,n,e)
},this.get_referenced_objects=function(t,n,e){
if("function"==typeof t)throw"Argument ref_chains can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_referenced_objects",[t],1,n,e)
},this.list_workspaces=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.list_workspaces",[t],1,n,e)
},this.list_workspace_info=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.list_workspace_info",[t],1,n,e)
},this.list_workspace_objects=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.list_workspace_objects",[t],1,n,e)
},this.list_objects=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.list_objects",[t],1,n,e)
},this.get_objectmeta=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_objectmeta",[t],1,n,e)
},this.get_object_info=function(t,n,e,o){
if("function"==typeof t)throw"Argument object_ids can not be a function"
;if("function"==typeof n)throw"Argument includeMetadata can not be a function"
;if(e&&"function"!=typeof e)throw"Argument _callback must be a function if defined"
;if(o&&"function"!=typeof o)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>4)throw"Too many arguments ("+arguments.length+" instead of 4)"
;return h(c,"Workspace.get_object_info",[t,n],1,e,o)
},this.get_object_info_new=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_object_info_new",[t],1,n,e)
},this.rename_workspace=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.rename_workspace",[t],1,n,e)
},this.rename_object=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.rename_object",[t],1,n,e)
},this.copy_object=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.copy_object",[t],1,n,e)
},this.revert_object=function(t,n,e){
if("function"==typeof t)throw"Argument object can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.revert_object",[t],1,n,e)
},this.get_names_by_prefix=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_names_by_prefix",[t],1,n,e)
},this.hide_objects=function(t,n,e){
if("function"==typeof t)throw"Argument object_ids can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.hide_objects",[t],0,n,e)
},this.unhide_objects=function(t,n,e){
if("function"==typeof t)throw"Argument object_ids can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.unhide_objects",[t],0,n,e)
},this.delete_objects=function(t,n,e){
if("function"==typeof t)throw"Argument object_ids can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.delete_objects",[t],0,n,e)
},this.undelete_objects=function(t,n,e){
if("function"==typeof t)throw"Argument object_ids can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.undelete_objects",[t],0,n,e)
},this.delete_workspace=function(t,n,e){
if("function"==typeof t)throw"Argument wsi can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.delete_workspace",[t],0,n,e)
},this.undelete_workspace=function(t,n,e){
if("function"==typeof t)throw"Argument wsi can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.undelete_workspace",[t],0,n,e)
},this.request_module_ownership=function(t,n,e){
if("function"==typeof t)throw"Argument mod can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.request_module_ownership",[t],0,n,e)
},this.register_typespec=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.register_typespec",[t],1,n,e)
},this.register_typespec_copy=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.register_typespec_copy",[t],1,n,e)
},this.release_module=function(t,n,e){
if("function"==typeof t)throw"Argument mod can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.release_module",[t],1,n,e)
},this.list_modules=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.list_modules",[t],1,n,e)
},this.list_module_versions=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.list_module_versions",[t],1,n,e)
},this.get_module_info=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_module_info",[t],1,n,e)
},this.get_jsonschema=function(t,n,e){
if("function"==typeof t)throw"Argument type can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_jsonschema",[t],1,n,e)
},this.translate_from_MD5_types=function(t,n,e){
if("function"==typeof t)throw"Argument md5_types can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.translate_from_MD5_types",[t],1,n,e)
},this.translate_to_MD5_types=function(t,n,e){
if("function"==typeof t)throw"Argument sem_types can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.translate_to_MD5_types",[t],1,n,e)
},this.get_type_info=function(t,n,e){
if("function"==typeof t)throw"Argument type can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_type_info",[t],1,n,e)
},this.get_all_type_info=function(t,n,e){
if("function"==typeof t)throw"Argument mod can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_all_type_info",[t],1,n,e)
},this.get_func_info=function(t,n,e){
if("function"==typeof t)throw"Argument func can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_func_info",[t],1,n,e)
},this.get_all_func_info=function(t,n,e){
if("function"==typeof t)throw"Argument mod can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.get_all_func_info",[t],1,n,e)
},this.grant_module_ownership=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.grant_module_ownership",[t],0,n,e)
},this.remove_module_ownership=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.remove_module_ownership",[t],0,n,e)
},this.list_all_types=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.list_all_types",[t],1,n,e)
},this.administer=function(t,n,e){
if("function"==typeof t)throw"Argument command can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return h(c,"Workspace.administer",[t],1,n,e)},this.status=function(t,n){
if(t&&"function"!=typeof t)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>2)throw"Too many arguments ("+arguments.length+" instead of 2)"
;return h(c,"Workspace.status",[],1,t,n)}}}));