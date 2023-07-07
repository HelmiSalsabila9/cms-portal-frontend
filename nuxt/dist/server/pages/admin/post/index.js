exports.ids = [14];
exports.modules = {

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d447291c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d447291c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d447291c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d447291c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_d447291c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".small-column{width:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/post/index.vue?vue&type=template&id=d447291c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-wrapper mb-5"
  }, [_vm._ssrNode("<section class=\"content-header\"><div class=\"container-fluid\"></div></section> "), _vm._ssrNode("<section class=\"content\">", "</section>", [_vm._ssrNode("<div class=\"card card-outline card-info\">", "</div>", [_vm._ssrNode("<div class=\"card-header\"><h3 class=\"card-title\"><i class=\"nav-icon fa fa-upload mr-1\"></i> LIST POST ARTIKEL</h3> <div class=\"card-tools\"><button type=\"button\" data-card-widget=\"collapse\" title=\"Collapse\" class=\"btn btn-tool\"><i class=\"fas fa-minus\"></i></button> <button type=\"button\" data-card-widget=\"remove\" title=\"Remove\" class=\"btn btn-tool\"><i class=\"fas fa-times\"></i></button></div></div> "), _vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<div class=\"input-group mb-3\">", "</div>", [_vm._ssrNode("<div class=\"input-group-prepend\">", "</div>", [_c('nuxt-link', {
    staticClass: "btn btn-info btn-sm",
    staticStyle: {
      "padding-top": "8px"
    },
    attrs: {
      "to": {
        name: 'admin-post-create'
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-plus-circle mr-1"
  }), _vm._v(" TAMBAH POST ARTIKEL")])], 1), _vm._ssrNode(" <input type=\"text\" placeholder=\"cari berdasarkan judul post brow..\"" + _vm._ssrAttr("value", _vm.search) + " class=\"form-control\"> <div class=\"input-group-append\"><button class=\"btn btn-info\"><i class=\"fa fa-search mr-1\"></i> CARI</button></div>")], 2)]), _vm._ssrNode(" "), _c('b-table', {
    attrs: {
      "striped": "",
      "bordered": "",
      "hover": "",
      "items": _vm.posts,
      "fields": _vm.fields,
      "show-empty": ""
    },
    scopedSlots: _vm._u([{
      key: "cell(index)",
      fn: function (row) {
        return [_vm._v("\n              " + _vm._s(row.index + 1) + "\n            ")];
      }
    }, {
      key: "cell(comments)",
      fn: function (row) {
        return [_c('i', {
          staticClass: "fa fa-comments mr-1"
        }), _vm._v(" " + _vm._s(row.item.comments.length) + "\n            ")];
      }
    }, {
      key: "cell(views)",
      fn: function (row) {
        return [_c('i', {
          staticClass: "fa fa-eye mr-1"
        }), _vm._v(" " + _vm._s(row.item.views) + "\n            ")];
      }
    }, {
      key: "cell(actions)",
      fn: function (row) {
        return [_c('b-button', {
          attrs: {
            "to": {
              name: 'admin-post-edit-id',
              params: {
                id: row.item.id
              }
            },
            "variant": "info",
            "size": "sm"
          }
        }, [_vm._v("EDIT")]), _vm._v(" "), _c('b-button', {
          attrs: {
            "variant": "danger",
            "size": "sm"
          },
          on: {
            "click": function ($event) {
              return _vm.deletePost(row.item.id);
            }
          }
        }, [_vm._v("DELETE")])];
      }
    }])
  }), _vm._ssrNode(" "), _c('b-pagination', {
    staticClass: "mt-3",
    attrs: {
      "total-rows": _vm.pagination.total,
      "per-page": _vm.pagination.per_page,
      "size": "sm",
      "align": "right"
    },
    on: {
      "change": _vm.changePage
    },
    model: {
      value: _vm.pagination.current_page,
      callback: function ($$v) {
        _vm.$set(_vm.pagination, "current_page", $$v);
      },
      expression: "pagination.current_page"
    }
  })], 2)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/post/index.vue?vue&type=template&id=d447291c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/post/index.vue?vue&type=script&lang=js&
/* harmony default export */ var postvue_type_script_lang_js_ = ({
  //layout
  layout: 'admin',
  //meta
  head() {
    return {
      title: 'Posts - portal.helmisalsabila.com'
    };
  },
  //data function
  data() {
    return {
      //table header
      fields: [{
        label: '#',
        key: 'index',
        tdClass: 'small-column'
      }, {
        label: 'Judul Post',
        key: 'title'
      }, {
        label: 'Kategori',
        key: 'category.name'
      }, {
        label: 'Penulis',
        key: 'user.name'
      }, {
        label: 'Komentar',
        key: 'comments',
        tdClass: 'text-center'
      }, {
        label: 'Dilihat',
        key: 'views',
        tdClass: 'text-center'
      }, {
        label: 'Aksi',
        key: 'actions',
        tdClass: 'text-center'
      }],
      //state search
      search: ''
    };
  },
  //watch query URL
  watchQuery: ["q", "page"],
  async asyncData({
    $axios,
    query
  }) {
    //page
    let page = query.page ? parseInt(query.page) : '';

    //search
    let search = query.q ? query.q : '';

    //fetching posts
    const posts = await $axios.$get(`/api/admin/posts?q=${search}&page=${page}`);
    return {
      'posts': posts.data.data,
      'pagination': posts.data
    };
  },
  methods: {
    //change page pagination
    changePage(page) {
      this.$router.push({
        path: this.$route.path,
        query: {
          q: this.$route.query.q,
          page: page
        }
      });
    },
    //searchData
    searchData() {
      this.$router.push({
        path: this.$route.path,
        query: {
          q: this.search
        }
      });
    },
    //deletePost method  
    deletePost(id) {
      this.$swal.fire({
        title: '😣: APAKAH ANDA YAKIN ?',
        text: "INGIN MENGHAPUS DATA INI !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'YA, HAPUS!',
        cancelButtonText: 'NGGAK'
      }).then(result => {
        if (result.isConfirmed) {
          //delete tag from server
          this.$axios.delete(`/api/admin/posts/${id}`).then(() => {
            //feresh data
            this.$nuxt.refresh();

            //alert
            this.$swal.fire({
              title: '😊: BERHASIL!',
              text: "Data Berhasil Dihapus!",
              icon: 'success',
              showConfirmButton: false,
              timer: 2000
            });
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/post/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_postvue_type_script_lang_js_ = (postvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/post/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(106)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_postvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "690cd2b4"
  
)

/* harmony default export */ var post = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1ccf6954", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map