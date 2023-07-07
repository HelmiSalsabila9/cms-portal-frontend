exports.ids = [29];
exports.modules = {

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/index.vue?vue&type=template&id=142e8986&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', {
    staticClass: "no-copy mt-5 mb-5"
  }, [_c('b-row', _vm._l(_vm.posts, function (post) {
    return _c('b-col', {
      key: post.id,
      staticClass: "mb-3",
      attrs: {
        "md": "4",
        "sm": "12"
      }
    }, [_c('b-card', {
      staticClass: "mb-2 h-100 rounded-lg shadow-sm",
      attrs: {
        "img-src": post.image,
        "img-top": "",
        "tag": "article"
      }
    }, [_c('div', {
      staticClass: "mb-2"
    }, [_c('small', {
      staticClass: "text-muted mr-3"
    }, [_c('svg', {
      staticClass: "icon icon-tabler icon-tabler-calendar-event mr-1",
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "18",
        "height": "18",
        "viewBox": "0 0 24 24",
        "stroke-width": "2",
        "stroke": "currentColor",
        "fill": "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }, [_c('path', {
      attrs: {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), _c('path', {
      attrs: {
        "d": "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
      }
    }), _c('path', {
      attrs: {
        "d": "M16 3l0 4"
      }
    }), _c('path', {
      attrs: {
        "d": "M8 3l0 4"
      }
    }), _c('path', {
      attrs: {
        "d": "M4 11l16 0"
      }
    }), _c('path', {
      attrs: {
        "d": "M8 15h2v2h-2z"
      }
    })]), _vm._v(_vm._s(post.created_at))])]), _vm._v(" "), _c('h5', [_c('nuxt-link', {
      staticClass: "text-bold",
      attrs: {
        "to": {
          name: 'post-slug',
          params: {
            slug: post.slug
          }
        }
      }
    }, [_vm._v(" " + _vm._s(post.title) + " ")])], 1), _vm._v(" "), _c('b-card-text', [_vm._v("\n          " + _vm._s(post.description.substr(0, 55)) + "...\n        ")]), _vm._v(" "), _c('b-card-text', [_c('small', {
      staticClass: "text-muted mr-3"
    }, [_c('svg', {
      staticClass: "icon icon-tabler icon-tabler-user mr-1",
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "18",
        "height": "18",
        "viewBox": "0 0 24 24",
        "stroke-width": "2",
        "stroke": "currentColor",
        "fill": "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }, [_c('path', {
      attrs: {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), _c('path', {
      attrs: {
        "d": "M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
      }
    }), _c('path', {
      attrs: {
        "d": "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
      }
    })]), _vm._v(_vm._s(post.user.name) + " - Dilihat " + _vm._s(post.views) + " kali")]), _vm._v(" "), _c('small', {
      staticClass: "text-muted"
    })])], 1)], 1);
  }), 1), _vm._v(" "), _c('b-row', {
    staticClass: "mt-4 justify-content-center"
  }, [_c('b-pagination', {
    attrs: {
      "total-rows": _vm.pagination.total,
      "per-page": _vm.pagination.per_page,
      "aria-controls": "my-table"
    },
    on: {
      "input": _vm.changePage
    },
    model: {
      value: _vm.pagination.current_page,
      callback: function ($$v) {
        _vm.$set(_vm.pagination, "current_page", $$v);
      },
      expression: "pagination.current_page"
    }
  })], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/post/index.vue?vue&type=template&id=142e8986&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/index.vue?vue&type=script&lang=js&
/* harmony default export */ var postvue_type_script_lang_js_ = ({
  //meta
  head() {
    return {
      title: 'Post Artikel - portal.helmisalsabila.com',
      meta: [{
        hid: 'og:title',
        name: 'og:title',
        content: 'portal.helmisalsabila.com'
      }, {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'portal.helmisalsabila.com'
      }, {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://i.imgur.com/XkrfJfo.png'
      }]
    };
  },
  //watch query URL
  watchQuery: ["page"],
  async asyncData({
    $axios,
    query
  }) {
    let page = query.page ? parseInt(query.page) : '';

    //fetching posts
    const posts = await $axios.$get(`/api/web/posts?page=${page}`);
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
          page: page
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/post/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_postvue_type_script_lang_js_ = (postvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/post/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(98)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_postvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "8281b28e"
  
)

/* harmony default export */ var post = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("04345464", content, true, context)
};

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_142e8986_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_142e8986_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_142e8986_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_142e8986_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_142e8986_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".no-select{-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map