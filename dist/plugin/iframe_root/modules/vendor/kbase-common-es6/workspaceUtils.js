define(["./time"],(function(e){"use strict";return Object.create({},{
workspaceInfoToObject:{value:function(t){return{id:t[0],name:t[1],owner:t[2],
moddate:t[3],object_count:t[4],user_permission:t[5],globalread:t[6],
lockstat:t[7],metadata:t[8],modDate:e.iso8601ToDate(t[3])}}},
objectInfoToObject:{value:function(t){const o=t[2].split(/[-.]/);return{id:t[0],
name:t[1],type:t[2],save_date:t[3],version:t[4],saved_by:t[5],wsid:t[6],ws:t[7],
checksum:t[8],size:t[9],metadata:t[10],ref:t[6]+"/"+t[0]+"/"+t[4],
obj_id:"ws."+t[6]+".obj."+t[0],typeModule:o[0],typeName:o[1],
typeMajorVersion:o[2],typeMinorVersion:o[3],saveDate:e.iso8601ToDate(t[3])}}},
makeWorkspaceObjectId:{value:function(e,t){return"ws."+e+".obj."+t}},
makeWorkspaceObjectRef:{value:function(e,t,o){return e+"/"+t+(o?"/"+o:"")}},
buildObjectIdentity:{value:function(e,t){var o={}
;return/^\d+$/.exec(e)?o.wsid=e:o.workspace=e,
/^\d+$/.exec(t)?o.objid=t:o.name=t,o}},parseTypeId:{value:function(e){
const[t,o,a]=e.match(/^(.+?)\.(.+?)-(.+)$/);return{module:t,name:o,version:a}}}
})}));