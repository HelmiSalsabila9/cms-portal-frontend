exports.ids = [21];
exports.modules = {

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/user/create/index.vue?vue&type=template&id=f713cee6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-wrapper"
  }, [_vm._ssrNode("<section class=\"content-header\"><div class=\"container-fluid\"></div></section> "), _vm._ssrNode("<section class=\"content\">", "</section>", [_vm._ssrNode("<div class=\"card card-outline card-info\">", "</div>", [_vm._ssrNode("<div class=\"card-header\"><h3 class=\"card-title\"><i class=\"nav-icon fas fa-users mr-1\"></i> TAMBAH PENGGUNA BARU</h3> <div class=\"card-tools\"><button type=\"button\" data-card-widget=\"collapse\" title=\"Collapse\" class=\"btn btn-tool\"><i class=\"fas fa-minus\"></i></button> <button type=\"button\" data-card-widget=\"remove\" title=\"Remove\" class=\"btn btn-tool\"><i class=\"fas fa-times\"></i></button></div></div> "), _vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<label>NAMA PENGGUNA</label> <input type=\"text\" placeholder=\"Masukkan Nama User\"" + _vm._ssrAttr("value", _vm.user.name) + " class=\"form-control\"> "), _vm.validation.name ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.name[0]))])], 1) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<label>NOMOR TELEPON/WA</label> <input type=\"number\" placeholder=\"Masukkan Nomor Telepon/WA - Ex: 085xxxxxxxxx\"" + _vm._ssrAttr("value", _vm.user.telepon) + " class=\"form-control\"> "), _vm.validation.name ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.telepon[0]))])], 1) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<label>ALAMAT EMAIL</label> <input type=\"email\" placeholder=\"Masukkan Alamat Email\"" + _vm._ssrAttr("value", _vm.user.email) + " class=\"form-control\"> "), _vm.validation.email ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.email[0]))])], 1) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<label>PASSWORD</label> <input type=\"password\" placeholder=\"Masukkan Password\"" + _vm._ssrAttr("value", _vm.user.password) + " class=\"form-control\"> "), _vm.validation.password ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.password[0]))])], 1) : _vm._e()], 2), _vm._ssrNode(" <button type=\"submit\" class=\"btn btn-info mr-1 btn-submit\"><i class=\"fa fa-paper-plane mr-1\"></i> SIMPAN</button> <button type=\"reset\" class=\"btn btn-warning btn-reset\"><i class=\"fa fa-redo mr-1\"></i> RESET</button>")], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/user/create/index.vue?vue&type=template&id=f713cee6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/user/create/index.vue?vue&type=script&lang=js&
/* harmony default export */ var createvue_type_script_lang_js_ = ({
  //layout
  layout: 'admin',
  //meta
  head() {
    return {
      title: 'Tambah Pengguna - portal.helmisalsabila.com'
    };
  },
  data() {
    return {
      //state user
      user: {
        name: '',
        telepon: '',
        email: '',
        password: ''
      },
      //state validation
      validation: []
    };
  },
  methods: {
    //storeUser method
    async storeUser() {
      //sending data to server
      await this.$axios.post('/api/admin/users', {
        //data
        name: this.user.name,
        telepon: this.user.telepon,
        email: this.user.email,
        password: this.user.password
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
          name: 'admin-user'
        });
      }).catch(error => {
        //assign error to state "validation"
        this.validation = error.response.data;
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/user/create/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/user/create/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5da40ffa"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map