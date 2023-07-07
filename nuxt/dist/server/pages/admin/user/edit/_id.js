exports.ids = [22];
exports.modules = {

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/user/edit/_id.vue?vue&type=template&id=2776bd6f&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-wrapper"
  }, [_vm._ssrNode("<section class=\"content-header\"><div class=\"container-fluid\"></div></section> "), _vm._ssrNode("<section class=\"content\">", "</section>", [_vm._ssrNode("<div class=\"card card-outline card-info\">", "</div>", [_vm._ssrNode("<div class=\"card-header\"><h3 class=\"card-title\"><i class=\"nav-icon fas fa-users mr-1\"></i> EDIT PENGGUNA</h3> <div class=\"card-tools\"><button type=\"button\" data-card-widget=\"collapse\" title=\"Collapse\" class=\"btn btn-tool\"><i class=\"fas fa-minus\"></i></button> <button type=\"button\" data-card-widget=\"remove\" title=\"Remove\" class=\"btn btn-tool\"><i class=\"fas fa-times\"></i></button></div></div> "), _vm._ssrNode("<div class=\"card-body\">", "</div>", [_vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<label>NAMA USER</label> <input type=\"text\" placeholder=\"Masukkan Nama Pengguna\"" + _vm._ssrAttr("value", _vm.user.name) + " class=\"form-control\"> "), _vm.validation.name ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.name[0]))])], 1) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<label>NOMOR TELEPON/WA</label> <input type=\"number\" placeholder=\"Masukkan Nomor Pengguna/WA - Ex: 085xxxxxxxxx\"" + _vm._ssrAttr("value", _vm.user.telepon) + " class=\"form-control\"> "), _vm.validation.name ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.telepon[0]))])], 1) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"form-group\">", "</div>", [_vm._ssrNode("<label>ALAMAT EMAIL</label> <input type=\"email\" placeholder=\"Masukkan Alamat Email\"" + _vm._ssrAttr("value", _vm.user.email) + " class=\"form-control\"> "), _vm.validation.email ? _vm._ssrNode("<div class=\"mt-2\">", "</div>", [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.email[0]))])], 1) : _vm._e()], 2), _vm._ssrNode(" <div class=\"form-group\"><label>PASSWORD</label> <input type=\"password\" placeholder=\"Masukkan Password\"" + _vm._ssrAttr("value", _vm.user.password) + " class=\"form-control\"></div> <button type=\"submit\" class=\"btn btn-info mr-1 btn-submit\"><i class=\"fa fa-paper-plane mr-1\"></i> UPDATE</button> <button type=\"reset\" class=\"btn btn-warning btn-reset\"><i class=\"fa fa-redo mr-1\"></i> RESET</button>")], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/user/edit/_id.vue?vue&type=template&id=2776bd6f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/user/edit/_id.vue?vue&type=script&lang=js&
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  //layout
  layout: 'admin',
  //meta
  head() {
    return {
      title: 'Edit Pengguna - portal.helmisalsabila.com'
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
  mounted() {
    //fetching data user by ID
    this.$axios.get(`/api/admin/users/${this.$route.params.id}`).then(response => {
      //assing response data to state "user.name"
      this.user.name = response.data.data.name;
      this.user.telepon = response.data.data.telepon;

      //assing response data to state "user.email"
      this.user.email = response.data.data.email;
    });
  },
  methods: {
    //updateUser method
    async updateUser() {
      //sending data to server
      await this.$axios.put(`/api/admin/users/${this.$route.params.id}`, {
        //data
        name: this.user.name,
        telepon: this.user.telepon,
        email: this.user.email,
        password: this.user.password
      }).then(() => {
        //sweet alert
        this.$swal.fire({
          title: '😊: BERHASIL!',
          text: "Data Berhasil Diupdate!",
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
// CONCATENATED MODULE: ./pages/admin/user/edit/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/user/edit/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  edit_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "38365879"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map