(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{407:function(t,e,n){var content=n(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("303bd69f",content,!0,{sourceMap:!1})},430:function(t,e,n){"use strict";n(407)},431:function(t,e,n){var r=n(39)((function(i){return i[1]}));r.push([t.i,".small-column{width:0}",""]),r.locals={},t.exports=r},460:function(t,e,n){"use strict";n.r(e);var r=n(22),o=(n(57),{layout:"admin",head:function(){return{title:"Slider - portal.helmisalsabila.com"}},data:function(){return{fields:[{label:"#",key:"index",tdClass:"small-column"},{label:"Gambar",key:"image",tdClass:"text-center"},{label:"Aksi",key:"actions",tdClass:"text-center"}]}},watchQuery:["page"],asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.query,o=r.page?parseInt(r.page):"",e.next=4,n.$get("/api/admin/sliders?page".concat(o));case 4:return c=e.sent,e.abrupt("return",{sliders:c.data.data,pagination:c.data});case 6:case"end":return e.stop()}}),e)})))()},methods:{changePage:function(t){this.$router.push({path:this.$route.path,query:{page:t}})},deleteSlider:function(t){var e=this;this.$swal.fire({title:"😣: APAKAH ANDA YAKIN ?",text:"INGIN MENGHAPUS DATA INI !",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"YA, HAPUS!",cancelButtonText:"NGGAK"}).then((function(n){n.isConfirmed&&e.$axios.delete("/api/admin/sliders/".concat(t)).then((function(){e.$nuxt.refresh(),e.$swal.fire({title:"😊: BERHASIL!",text:"Data Berhasil Dihapus!",icon:"success",showConfirmButton:!1,timer:2e3})}))}))}}}),c=(n(430),n(35)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-wrapper mb-5"},[t._m(0),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"card card-outline card-info"},[t._m(1),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"form-group"},[e("nuxt-link",{staticClass:"btn btn-info btn-sm p-2",attrs:{to:{name:"admin-slider-create"}}},[e("i",{staticClass:"fa fa-plus-circle mr-1"}),t._v(" TAMBAH SLIDER")])],1),t._v(" "),e("b-table",{attrs:{striped:"",bordered:"",hover:"",items:t.sliders,fields:t.fields,"show-empty":""},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[t._v("\n            "+t._s(e.index+1)+"\n          ")]}},{key:"cell(image)",fn:function(data){return[e("img",{staticClass:"img-fluid img-thumbnail",attrs:{width:"400",src:data.item.image}})]}},{key:"cell(actions)",fn:function(n){return[e("b-button",{attrs:{to:{name:"admin-slider-edit-id",params:{id:n.item.id}},variant:"info",size:"sm"}},[t._v("EDIT")]),t._v(" "),e("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(e){return t.deleteSlider(n.item.id)}}},[t._v("DELETE")])]}}])}),t._v(" "),e("b-pagination",{staticClass:"mt-3",attrs:{"total-rows":t.pagination.total,"per-page":t.pagination.per_page,size:"sm",align:"right"},on:{change:t.changePage},model:{value:t.pagination.current_page,callback:function(e){t.$set(t.pagination,"current_page",e)},expression:"pagination.current_page"}})],1)])])])}),[function(){var t=this._self._c;return t("section",{staticClass:"content-header"},[t("div",{staticClass:"container-fluid"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title"},[e("i",{staticClass:"nav-icon fa fa-images mr-1"}),t._v(" LIST SLIDERS")]),t._v(" "),e("div",{staticClass:"card-tools"},[e("button",{staticClass:"btn btn-tool",attrs:{type:"button","data-card-widget":"collapse",title:"Collapse"}},[e("i",{staticClass:"fas fa-minus"})]),t._v(" "),e("button",{staticClass:"btn btn-tool",attrs:{type:"button","data-card-widget":"remove",title:"Remove"}},[e("i",{staticClass:"fas fa-times"})])])])}],!1,null,null,null);e.default=component.exports}}]);