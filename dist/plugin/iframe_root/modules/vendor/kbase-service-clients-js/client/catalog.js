define(["jquery","bluebird"],(function(t,n){"use strict"
;return function(e,o,f,i,r,u){
if("string"!=typeof e)throw new Error("Service url was not provided");this.url=e
;var a=e;this.timeout=i;var c=i
;this.async_job_check_time_ms=r,this.async_job_check_time_ms||(this.async_job_check_time_ms=100),
this.async_job_check_time_scale_percent=150,
this.async_job_check_max_time_ms=3e5,this.service_version=u;var s=o||{token:"",
user_id:""},l=f;function m(e,o,f,i,r,u,a,m){
m||(m=t.Deferred()),"function"==typeof r&&m.done(r),
"function"==typeof u&&m.fail(u);var g={params:f,method:o,version:"1.1",
id:String(Math.random()).slice(2)};a&&(g.context=a)
;var h=null,_=l&&"function"==typeof l?l():s.token?s.token:null
;null!==_&&(h=function(t){t.setRequestHeader("Authorization",_)})
;var d=jQuery.ajax({url:e,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(g),beforeSend:h,timeout:c,success:function(t,n,o){var f;try{
var r=JSON.parse(t);f=1===i?r.result[0]:r.result}catch(u){return void m.reject({
status:503,error:u,url:e,resp:t})}m.resolve(f)},error:function(t,n,e){var o
;if(t.responseText)try{o=JSON.parse(t.responseText).error}catch(f){
o="Unknown error - "+t.responseText}else o="Unknown Error";m.reject({status:500,
error:o})}}),p=m.promise();return p.xhr=d,n.resolve(p)}
this.version=function(t,n){
if(t&&"function"!=typeof t)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>2)throw"Too many arguments ("+arguments.length+" instead of 2)"
;return m(a,"Catalog.version",[],1,t,n)},this.is_registered=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.is_registered",[t],1,n,e)
},this.register_repo=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.register_repo",[t],1,n,e)
},this.push_dev_to_beta=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.push_dev_to_beta",[t],0,n,e)
},this.request_release=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.request_release",[t],0,n,e)
},this.list_requested_releases=function(t,n){
if(t&&"function"!=typeof t)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>2)throw"Too many arguments ("+arguments.length+" instead of 2)"
;return m(a,"Catalog.list_requested_releases",[],1,t,n)
},this.review_release_request=function(t,n,e){
if("function"==typeof t)throw"Argument review can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.review_release_request",[t],0,n,e)
},this.list_basic_module_info=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.list_basic_module_info",[t],1,n,e)
},this.add_favorite=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.add_favorite",[t],0,n,e)
},this.remove_favorite=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.remove_favorite",[t],0,n,e)
},this.list_favorites=function(t,n,e){
if("function"==typeof t)throw"Argument username can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.list_favorites",[t],1,n,e)
},this.list_app_favorites=function(t,n,e){
if("function"==typeof t)throw"Argument item can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.list_app_favorites",[t],1,n,e)
},this.list_favorite_counts=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.list_favorite_counts",[t],1,n,e)
},this.get_module_info=function(t,n,e){
if("function"==typeof t)throw"Argument selection can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.get_module_info",[t],1,n,e)
},this.get_version_info=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.get_version_info",[t],1,n,e)
},this.list_released_module_versions=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.list_released_module_versions",[t],1,n,e)
},this.get_module_version=function(t,n,e){
if("function"==typeof t)throw"Argument selection can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.get_module_version",[t],1,n,e)
},this.list_local_functions=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.list_local_functions",[t],1,n,e)
},this.get_local_function_details=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.get_local_function_details",[t],1,n,e)
},this.module_version_lookup=function(t,n,e){
if("function"==typeof t)throw"Argument selection can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.module_version_lookup",[t],1,n,e)
},this.list_service_modules=function(t,n,e){
if("function"==typeof t)throw"Argument filter can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.list_service_modules",[t],1,n,e)
},this.set_registration_state=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.set_registration_state",[t],0,n,e)
},this.get_module_state=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.get_module_state",[t],1,n,e)
},this.get_build_log=function(t,n,e){
if("function"==typeof t)throw"Argument registration_id can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.get_build_log",[t],1,n,e)
},this.get_parsed_build_log=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.get_parsed_build_log",[t],1,n,e)
},this.list_builds=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.list_builds",[t],1,n,e)
},this.delete_module=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.delete_module",[t],0,n,e)
},this.migrate_module_to_new_git_url=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.migrate_module_to_new_git_url",[t],0,n,e)
},this.set_to_active=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.set_to_active",[t],0,n,e)
},this.set_to_inactive=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.set_to_inactive",[t],0,n,e)
},this.is_approved_developer=function(t,n,e){
if("function"==typeof t)throw"Argument usernames can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.is_approved_developer",[t],1,n,e)
},this.list_approved_developers=function(t,n){
if(t&&"function"!=typeof t)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>2)throw"Too many arguments ("+arguments.length+" instead of 2)"
;return m(a,"Catalog.list_approved_developers",[],1,t,n)
},this.approve_developer=function(t,n,e){
if("function"==typeof t)throw"Argument username can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.approve_developer",[t],0,n,e)
},this.revoke_developer=function(t,n,e){
if("function"==typeof t)throw"Argument username can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.revoke_developer",[t],0,n,e)
},this.log_exec_stats=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.log_exec_stats",[t],0,n,e)
},this.get_exec_aggr_stats=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.get_exec_aggr_stats",[t],1,n,e)
},this.get_exec_aggr_table=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.get_exec_aggr_table",[t],1,n,e)
},this.get_exec_raw_stats=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.get_exec_raw_stats",[t],1,n,e)
},this.get_client_groups=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.get_client_groups",[t],1,n,e)
},this.set_client_group_config=function(t,n,e){
if("function"==typeof t)throw"Argument config can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.set_client_group_config",[t],0,n,e)
},this.remove_client_group_config=function(t,n,e){
if("function"==typeof t)throw"Argument config can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.remove_client_group_config",[t],0,n,e)
},this.list_client_group_configs=function(t,n,e){
if("function"==typeof t)throw"Argument filter can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.list_client_group_configs",[t],1,n,e)
},this.set_volume_mount=function(t,n,e){
if("function"==typeof t)throw"Argument config can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.set_volume_mount",[t],0,n,e)
},this.remove_volume_mount=function(t,n,e){
if("function"==typeof t)throw"Argument config can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.remove_volume_mount",[t],0,n,e)
},this.list_volume_mounts=function(t,n,e){
if("function"==typeof t)throw"Argument filter can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.list_volume_mounts",[t],1,n,e)
},this.is_admin=function(t,n,e){
if("function"==typeof t)throw"Argument username can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.is_admin",[t],1,n,e)
},this.set_secure_config_params=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.set_secure_config_params",[t],0,n,e)
},this.remove_secure_config_params=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.remove_secure_config_params",[t],0,n,e)
},this.get_secure_config_params=function(t,n,e){
if("function"==typeof t)throw"Argument params can not be a function"
;if(n&&"function"!=typeof n)throw"Argument _callback must be a function if defined"
;if(e&&"function"!=typeof e)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>3)throw"Too many arguments ("+arguments.length+" instead of 3)"
;return m(a,"Catalog.get_secure_config_params",[t],1,n,e)
},this.status=function(t,n){
if(t&&"function"!=typeof t)throw"Argument _callback must be a function if defined"
;if(n&&"function"!=typeof n)throw"Argument _errorCallback must be a function if defined"
;if("function"==typeof arguments&&arguments.length>2)throw"Too many arguments ("+arguments.length+" instead of 2)"
;return m(a,"Catalog.status",[],1,t,n)}}}));