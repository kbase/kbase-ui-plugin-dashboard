define(["jquery","jquery-ui","bootstrap","fileSaver"],(function(t){"use strict"
;function e(e,a){
return t("<button>").addClass("btn btn-default "+e).append(t("<span>").addClass(a))
}var a=function(e,a){this.options={class:"",style:{},searchPlaceholder:"Search",
rowsPerPage:10,headers:[],decoration:[],data:[],enableDownload:!1,
downloadFileName:"table_data.csv"
},t.extend(!0,this.options,a),this.currentData=[],this.currentSort={id:null,
dir:null,sortState:null},this.currentPage=0,this.sortCol=null,this.sortDir=null,
this.rowsPerPage=this.options.rowsPerPage,
this.total=0,this.start=0,this.end=0,this.headers=this.options.headers,
this.decoration=this.options.decoration,this.initialize(e),this.getNewData()}
;a.prototype.initialize=function(e){
this.$container=t("<div>").addClass("container-fluid "+this.options.class),
this.$container.css(this.options.style),
this.$container.append(this.makeWidgetHeader()),
this.$table=t('<table id="dynamic_table" class="table table-striped table-bordered table-hover">'),
this.$tHeader=t("<tr>"),this.headers.forEach(function(t){
this.$tHeader.append(this.makeTableHeader(t))
}.bind(this)),this.$table.append(t("<thead>").append(this.$tHeader)),
this.$tBody=t("<tbody>"),
this.$table.append(this.$tBody),this.$container.append(t('<div class="row">').append(t('<div class="col-md-12">').append(this.$table))).append(this.makeWidgetFooter()),
t(e).append(this.$container)},a.prototype.makeWidgetFooter=function(){
this.$shownText=t("<span></span>")
;var a=t('<div class="row">').append(t('<div class="col-md-6">').append(this.$shownText))
;if(this.options.enableDownload){var n=this,i=function(t){var e=[]
;return n.headers.forEach((function(t){e.push(t.text)
})),t.unshift(e),t.map((function(t){return t.join(",")+"\n"}))
},o=e("btn-md btn-default dropdown-toggle","fa fa-download").click((function(){
saveAs(new Blob(i(n.currentData)),n.options.downloadFileName)
})),r=e("btn-md btn-default dropdown-toggle","fa fa-cloud-download").click((function(){
n.options.downloadAllDataFunction(n.currentSort.id,n.currentSort.sortState).then((function(t){
saveAs(new Blob(i(t)),n.options.downloadFileName)}))}))
;a.append(t('<div class="col-md-6">').append(t('<div class="pull-right">').append(o).append(r)))
}return a},a.prototype.makeWidgetHeader=function(){
var a=this,n=e("btn-md","fa fa-caret-left").click((function(){
var t=a.currentPage;a.getPrevPage()!==t&&a.getNewData()
})),i=e("btn-md","fa fa-caret-right").click((function(){var t=a.currentPage
;a.getNextPage()!==t&&a.getNewData()
})),o=t('<div class="col-md-4">').append(n).append(i)
;a.$loadingElement=t("<div>").attr("align","center").append(t("<i>").addClass("fa fa-spinner fa-spin fa-2x")).hide()
;var r=t('<div class="col-md-4">').append(a.$loadingElement),s=t("<input>").attr("type","text").addClass("form-control").attr("placeholder",a.options.searchPlaceholder).on("keyup",(function(){
a.currentQuery=t.trim(s.val()),a.currentPage=0,a.getNewData()
})),d=t('<div class="col-md-4 pull-right">').append(s)
;return t('<div class="row" style="margin-bottom: 5px">').append(o).append(r).append(d)
},a.prototype.getPrevPage=function(){
return this.currentPage--,this.currentPage<0&&(this.currentPage=0),
this.currentPage},a.prototype.getNextPage=function(){
return this.currentPage++,this.currentPage*this.rowsPerPage>=this.total&&this.currentPage--,
this.currentPage},a.prototype.getNewData=function(){this.$loadingElement.show(),
this.options.updateFunction(this.currentPage,this.currentQuery,this.currentSort.id,this.currentSort.sortState).then(function(t){
this.update(t)}.bind(this)).catch((function(t){alert("error!"),console.error(t)
})).finally(function(){this.$loadingElement.hide()}.bind(this))
},a.prototype.makeTableHeader=function(a){
var n=t("<th>").append(t("<b>").append(a.text));if(a.sortState=0,a.isSortable){
var i=e("btn-xs","fa fa-sort text-muted").addClass("pull-right")
;i.click(function(){var t=a.sortState;this.headers.forEach((function(t){
t.sortState=0})),a.sortState=t<1?1:-1,this.currentSort=a,this.getNewData()
}.bind(this)),n.append(i)}return n.resizable({handles:"e"}),n
},a.prototype.setData=function(t){
this.currentData=t,this.$tBody.empty(),t.forEach(function(t){var e=t.slice()
;this.options.decoration.forEach((function(t){
"link"==t.type?e[t.col]='<a style="cursor:pointer">'+e[t.col]+"</a>":"button"==t.type&&(e[t.col]='<button class="btn btn-default btn-sm">'+e[t.col]+"</button>")
}));var a=n(e);this.options.decoration.forEach((function(t){if(t.clickFunction){
var e=a.find("td:eq("+t.col+") > :eq(0)");e.click((function(){
t.clickFunction(e.text())}))}
})),this.options.rowFunction&&(a=this.options.rowFunction(a,t)),
this.$tBody.append(a)}.bind(this))},a.prototype.update=function(t){
this.headers.forEach(function(t,e){if(t.isSortable){var a="fa-sort text-muted"
;1==t.sortState&&(a="fa-sort-up"),
-1==t.sortState&&(a="fa-sort-down"),this.$tHeader.find("th:eq("+e+") .fa").removeClass("fa-sort fa-sort-down fa-sort-up text-muted").addClass(a)
}
}.bind(this)),this.setData(t.rows),this.start=t.start,this.end=t.start+t.rows.length,
this.total=t.total,
this.$shownText.text("Showing "+(this.start+1)+" to "+this.end+" of "+this.total)
};var n=function(e){return t("<tr>").append(e.map((function(t){
return"<td>"+t+"</td>"})).join())};return a}));