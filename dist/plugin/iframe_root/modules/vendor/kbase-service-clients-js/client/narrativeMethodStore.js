define(["jquery","bluebird"],(function(t,e){"use strict";return function(r,i,o){
if("string"!=typeof r)throw new Error("Service url was not provided");this.url=r
;var n=r,a=!1;function s(){if(!a){if(a=!0,!window.console)return
;console.log("DEPRECATION WARNING: '*_async' method names will be removed","in a future version. Please use the identical methods without","the'_async' suffix.")
}}var _=i||{token:"",user_id:""},u=o;function h(r,i,o,a,s){var h=t.Deferred()
;"function"==typeof a&&h.done(a),"function"==typeof s&&h.fail(s);var d={
params:i,method:r,version:"1.1",id:String(Math.random()).slice(2)
},c=null,f=u&&"function"==typeof u?u():_.token?_.token:null
;null!==f&&(c=function(t){t.setRequestHeader("Authorization",f)})
;var p=jQuery.ajax({url:n,dataType:"text",type:"POST",processData:!1,
data:JSON.stringify(d),beforeSend:c,success:function(t,e,r){var i;try{
var a=JSON.parse(t);i=1===o?a.result[0]:a.result}catch(s){return void h.reject({
status:503,error:s,url:n,resp:t})}h.resolve(i)},error:function(t,e,r){var i
;if(t.responseText)try{i=JSON.parse(t.responseText).error}catch(o){
i="Unknown error - "+t.responseText}else i="Unknown Error";h.reject({status:500,
error:i})}}),l=h.promise();return l.xhr=p,e.resolve(l)}this.ver=function(t,e){
return h("NarrativeMethodStore.ver",[],1,t,e)},this.ver_async=function(t,e){
return s(),h("NarrativeMethodStore.ver",[],1,t,e)},this.status=function(t,e){
return h("NarrativeMethodStore.status",[],1,t,e)
},this.status_async=function(t,e){
return s(),h("NarrativeMethodStore.status",[],1,t,e)
},this.list_categories=function(t,e,r){
return h("NarrativeMethodStore.list_categories",[t],4,e,r)
},this.list_categories_async=function(t,e,r){
return s(),h("NarrativeMethodStore.list_categories",[t],4,e,r)
},this.get_category=function(t,e,r){
return h("NarrativeMethodStore.get_category",[t],1,e,r)
},this.get_category_async=function(t,e,r){
return s(),h("NarrativeMethodStore.get_category",[t],1,e,r)
},this.list_methods=function(t,e,r){
return h("NarrativeMethodStore.list_methods",[t],1,e,r)
},this.list_methods_async=function(t,e,r){
return s(),h("NarrativeMethodStore.list_methods",[t],1,e,r)
},this.list_methods_full_info=function(t,e,r){
return h("NarrativeMethodStore.list_methods_full_info",[t],1,e,r)
},this.list_methods_full_info_async=function(t,e,r){
return s(),h("NarrativeMethodStore.list_methods_full_info",[t],1,e,r)
},this.list_methods_spec=function(t,e,r){
return h("NarrativeMethodStore.list_methods_spec",[t],1,e,r)
},this.list_methods_spec_async=function(t,e,r){
return s(),h("NarrativeMethodStore.list_methods_spec",[t],1,e,r)
},this.list_method_ids_and_names=function(t,e,r){
return h("NarrativeMethodStore.list_method_ids_and_names",[t],1,e,r)
},this.list_method_ids_and_names_async=function(t,e,r){
return s(),h("NarrativeMethodStore.list_method_ids_and_names",[t],1,e,r)
},this.list_apps=function(t,e,r){
return h("NarrativeMethodStore.list_apps",[t],1,e,r)
},this.list_apps_async=function(t,e,r){
return s(),h("NarrativeMethodStore.list_apps",[t],1,e,r)
},this.list_apps_full_info=function(t,e,r){
return h("NarrativeMethodStore.list_apps_full_info",[t],1,e,r)
},this.list_apps_full_info_async=function(t,e,r){
return s(),h("NarrativeMethodStore.list_apps_full_info",[t],1,e,r)
},this.list_apps_spec=function(t,e,r){
return h("NarrativeMethodStore.list_apps_spec",[t],1,e,r)
},this.list_apps_spec_async=function(t,e,r){
return s(),h("NarrativeMethodStore.list_apps_spec",[t],1,e,r)
},this.list_app_ids_and_names=function(t,e){
return h("NarrativeMethodStore.list_app_ids_and_names",[],1,t,e)
},this.list_app_ids_and_names_async=function(t,e){
return s(),h("NarrativeMethodStore.list_app_ids_and_names",[],1,t,e)
},this.list_types=function(t,e,r){
return h("NarrativeMethodStore.list_types",[t],1,e,r)
},this.list_types_async=function(t,e,r){
return s(),h("NarrativeMethodStore.list_types",[t],1,e,r)
},this.get_method_brief_info=function(t,e,r){
return h("NarrativeMethodStore.get_method_brief_info",[t],1,e,r)
},this.get_method_brief_info_async=function(t,e,r){
return s(),h("NarrativeMethodStore.get_method_brief_info",[t],1,e,r)
},this.get_method_full_info=function(t,e,r){
return h("NarrativeMethodStore.get_method_full_info",[t],1,e,r)
},this.get_method_full_info_async=function(t,e,r){
return s(),h("NarrativeMethodStore.get_method_full_info",[t],1,e,r)
},this.get_method_spec=function(t,e,r){
return h("NarrativeMethodStore.get_method_spec",[t],1,e,r)
},this.get_method_spec_async=function(t,e,r){
return s(),h("NarrativeMethodStore.get_method_spec",[t],1,e,r)
},this.get_app_brief_info=function(t,e,r){
return h("NarrativeMethodStore.get_app_brief_info",[t],1,e,r)
},this.get_app_brief_info_async=function(t,e,r){
return s(),h("NarrativeMethodStore.get_app_brief_info",[t],1,e,r)
},this.get_app_full_info=function(t,e,r){
return h("NarrativeMethodStore.get_app_full_info",[t],1,e,r)
},this.get_app_full_info_async=function(t,e,r){
return s(),h("NarrativeMethodStore.get_app_full_info",[t],1,e,r)
},this.get_app_spec=function(t,e,r){
return h("NarrativeMethodStore.get_app_spec",[t],1,e,r)
},this.get_app_spec_async=function(t,e,r){
return s(),h("NarrativeMethodStore.get_app_spec",[t],1,e,r)
},this.get_type_info=function(t,e,r){
return h("NarrativeMethodStore.get_type_info",[t],1,e,r)
},this.get_type_info_async=function(t,e,r){
return s(),h("NarrativeMethodStore.get_type_info",[t],1,e,r)
},this.validate_method=function(t,e,r){
return h("NarrativeMethodStore.validate_method",[t],1,e,r)
},this.validate_method_async=function(t,e,r){
return s(),h("NarrativeMethodStore.validate_method",[t],1,e,r)
},this.validate_app=function(t,e,r){
return h("NarrativeMethodStore.validate_app",[t],1,e,r)
},this.validate_app_async=function(t,e,r){
return s(),h("NarrativeMethodStore.validate_app",[t],1,e,r)
},this.validate_type=function(t,e,r){
return h("NarrativeMethodStore.validate_type",[t],1,e,r)
},this.validate_type_async=function(t,e,r){
return s(),h("NarrativeMethodStore.validate_type",[t],1,e,r)
},this.load_widget_java_script=function(t,e,r){
return h("NarrativeMethodStore.load_widget_java_script",[t],1,e,r)
},this.load_widget_java_script_async=function(t,e,r){
return s(),h("NarrativeMethodStore.load_widget_java_script",[t],1,e,r)
},this.register_repo=function(t,e,r){
return h("NarrativeMethodStore.register_repo",[t],0,e,r)
},this.register_repo_async=function(t,e,r){
return s(),h("NarrativeMethodStore.register_repo",[t],0,e,r)
},this.disable_repo=function(t,e,r){
return h("NarrativeMethodStore.disable_repo",[t],0,e,r)
},this.disable_repo_async=function(t,e,r){
return s(),h("NarrativeMethodStore.disable_repo",[t],0,e,r)
},this.push_repo_to_tag=function(t,e,r){
return h("NarrativeMethodStore.push_repo_to_tag",[t],0,e,r)
},this.push_repo_to_tag_async=function(t,e,r){
return s(),h("NarrativeMethodStore.push_repo_to_tag",[t],0,e,r)}}}));