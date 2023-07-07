exports.ids = [8];
exports.modules = {

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/dashboard/index.vue?vue&type=template&id=438f5fe3&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-wrapper"
  }, [_vm._ssrNode("<section class=\"content-header\"><div class=\"container-fluid\"></div></section> <section class=\"content\"><div class=\"row\"><div class=\"col-md-4 col-sm-6 col-12\"><div class=\"info-box\"><span class=\"info-box-icon bg-primary\"><i class=\"fa fa-upload\"></i></span> <div class=\"info-box-content\"><span class=\"info-box-text\">JUMLAH POST ARTIKEL</span> <span><hr></span> <span class=\"h3 info-box-number\">" + _vm._ssrEscape(_vm._s(_vm.posts)) + "</span></div></div></div> <div class=\"col-md-4 col-sm-6 col-12\"><div class=\"info-box\"><span class=\"info-box-icon bg-info\"><i class=\"fa fa-tags\"></i></span> <div class=\"info-box-content\"><span class=\"info-box-text\">JUMLAH TAG</span> <span><hr></span> <span class=\"h3 info-box-number\">" + _vm._ssrEscape(_vm._s(_vm.tags)) + "</span></div></div></div> <div class=\"col-md-4 col-sm-6 col-12\"><div class=\"info-box\"><span class=\"info-box-icon bg-maroon\"><i class=\"fa fa-list\"></i></span> <div class=\"info-box-content\"><span class=\"info-box-text\">JUMLAH KATEGORI</span> <span><hr></span> <span class=\"h3 info-box-number\">" + _vm._ssrEscape(_vm._s(_vm.categories)) + "</span></div></div></div> <div class=\"col-md-3 col-sm-6 col-12\"><div class=\"info-box\"><span class=\"info-box-icon bg-success\"><i class=\"fa fa-comments\"></i></span> <div class=\"info-box-content\"><span class=\"info-box-text\">JUMLAH KOMENTAR</span> <span><hr></span> <span class=\"h3 info-box-number\">" + _vm._ssrEscape(_vm._s(_vm.comments)) + "</span></div></div></div> <div class=\"col-md-3 col-sm-6 col-12\"><div class=\"info-box\"><span class=\"info-box-icon bg-secondary\"><i class=\"fa fa-bars\"></i></span> <div class=\"info-box-content\"><span class=\"info-box-text\">JUMLAH MENU</span> <span><hr></span> <span class=\"h3 info-box-number\">" + _vm._ssrEscape(_vm._s(_vm.menus)) + "</span></div></div></div> <div class=\"col-md-3 col-sm-6 col-12\"><div class=\"info-box\"><span class=\"info-box-icon bg-danger\"><i class=\"fa fa-images\"></i></span> <div class=\"info-box-content\"><span class=\"info-box-text\">JUMLAH SLIDERS</span> <span><hr></span> <span class=\"h3 info-box-number\">" + _vm._ssrEscape(_vm._s(_vm.sliders)) + "</span></div></div></div> <div class=\"col-md-3 col-sm-6 col-12\"><div class=\"info-box\"><span class=\"info-box-icon bg-dark\"><i class=\"fa fa-users\"></i></span> <div class=\"info-box-content\"><span class=\"info-box-text\">JUMLAH PENGGUNA</span> <span><hr></span> <span class=\"h3 info-box-number\">" + _vm._ssrEscape(_vm._s(_vm.users)) + "</span></div></div></div></div></section>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/dashboard/index.vue?vue&type=template&id=438f5fe3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/dashboard/index.vue?vue&type=script&lang=js&
/* harmony default export */ var dashboardvue_type_script_lang_js_ = ({
  //layout
  layout: 'admin',
  //meta
  head() {
    return {
      title: 'Dashboard - portal.helmisalsabila.com'
    };
  },
  async asyncData({
    $axios
  }) {
    //fetching dashboard
    const dashboard = await $axios.$get('/api/admin/dashboard');
    return {
      'users': dashboard.data.users,
      'tags': dashboard.data.tags,
      'posts': dashboard.data.posts,
      'categories': dashboard.data.categories,
      'menus': dashboard.data.menus,
      'sliders': dashboard.data.sliders,
      'comments': dashboard.data.comments
    };
  }
});
// CONCATENATED MODULE: ./pages/admin/dashboard/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_dashboardvue_type_script_lang_js_ = (dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/dashboard/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_dashboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6c2919aa"
  
)

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map