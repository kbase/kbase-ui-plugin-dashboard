define([],(function(){return{isValid:function(t){
return!(!t.metadata.narrative||!/^\d+$/.test(t.metadata.narrative)||"true"===t.metadata.is_temporary)
}}}));