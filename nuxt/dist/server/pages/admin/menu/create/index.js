exports.ids = [9];
exports.modules = {

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/menu/create/index.vue?vue&type=template&id=4976d693&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-wrapper"
  }, [_vm._ssrNode("<section class=\"content-header\"><div class=\"container-fluid\"></div></section> "), _vm._ssrNode("<section class=\"content\">", "</section>", [_vm._ssrNode("<div class=\"card card-outline card-info\">", "</div>", [_vm._ssrNode("<div class=\"card-header\"><h3 class=\"card-title\"><i class=\"nav-icon fa fa-bars mr-1\"></i> TAMBAH MENU</h3> <div class=\"card-tools\"><button type=\"button\" data-card-widget=\"collapse\" title=\"Collapse\" class=\"btn btn-tool\"><i class=\"fas fa-minus\"></i></button> <button type=\"button\" data-card-widget=\"remove\" title=\"Remove\" class=\"btn btn-tool\"><i class=\"fas fa-times\"></i></button></div></div> "), _vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<label>NAMA MENU</label> <input type=\"text\" placeholder=\"Masukkan Nama Menu\"" + _vm._ssrAttr("value", _vm.menu.name) + " class=\"form-control\"> "), _vm.validation.name ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.name[0]))])], 1) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<label>URL MENU</label> <input type=\"text\" placeholder=\"Masukkan URL Menu Ex: /pages/...\"" + _vm._ssrAttr("value", _vm.menu.url) + " class=\"form-control\"> "), _vm.validation.url ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.url[0]))])], 1) : _vm._e()], 2), _vm._ssrNode(" <button type=\"submit\" class=\"btn btn-info mr-1 btn-submit\"><i class=\"fa fa-paper-plane mr-1\"></i> SIMPAN</button> <button type=\"reset\" class=\"btn btn-warning btn-reset\"><i class=\"fa fa-redo mr-1\"></i> RESET</button>")], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/menu/create/index.vue?vue&type=template&id=4976d693&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/menu/create/index.vue?vue&type=script&lang=js&
/* harmony default export */ var createvue_type_script_lang_js_ = ({
  //layout
  layout: 'admin',
  //meta
  head() {
    return {
      title: 'Tambah Menu - portal.helmisalsabila.com'
    };
  },
  data() {
    return {
      //state menu
      menu: {
        name: '',
        url: ''
      },
      //state validation
      validation: []
    };
  },
  methods: {
    //storeMenu method
    async storeMenu() {
      //sending data to server
      await this.$axios.post('/api/admin/menus', {
        //data
        name: this.menu.name,
        url: this.menu.url
      }).then(() => {
        //sweet alert
        this.$swal.fire({
          title: '😊: BERHASIL!',
          text: "Data Berhasil Disimpan!",
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        });

        //redirect, if success store data
        this.$router.push({
          name: 'admin-menu'
        });
      }).catch(error => {
        //assign error to state "validation"
        this.validation = error.response.data;
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/menu/create/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var menu_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/menu/create/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  menu_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4a3fa8ef"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map