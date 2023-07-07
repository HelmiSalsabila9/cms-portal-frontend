exports.ids = [16];
exports.modules = {

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/slider/edit/_id.vue?vue&type=template&id=af3503d2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-wrapper"
  }, [_vm._ssrNode("<section class=\"content-header\"><div class=\"container-fluid\"></div></section> <section class=\"content\"><div class=\"card card-outline card-info\"><div class=\"card-header\"><h3 class=\"card-title\"><i class=\"nav-icon fa fa-images mr-1\"></i> EDIT SLIDER</h3> <div class=\"card-tools\"><button type=\"button\" data-card-widget=\"collapse\" title=\"Collapse\" class=\"btn btn-tool\"><i class=\"fas fa-minus\"></i></button> <button type=\"button\" data-card-widget=\"remove\" title=\"Remove\" class=\"btn btn-tool\"><i class=\"fas fa-times\"></i></button></div></div> <div class=\"card-body\"><form><div class=\"form-group\"><label>GAMBAR SLIDER</label> <input type=\"file\" class=\"form-control btn-sm\"></div> <button type=\"submit\" class=\"btn btn-info mr-1 btn-submit\"><i class=\"fa fa-paper-plane mr-1\"></i> UPDATE</button> <button type=\"reset\" class=\"btn btn-warning btn-reset\"><i class=\"fa fa-redo mr-1\"></i> RESET</button></form></div></div></section>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/admin/slider/edit/_id.vue?vue&type=template&id=af3503d2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/slider/edit/_id.vue?vue&type=script&lang=js&
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  //layout
  layout: 'admin',
  //meta
  head() {
    return {
      title: 'Edit Slider - portal.helmisalsabila.com'
    };
  },
  data() {
    return {
      //state slider
      slider: {
        image: ''
      },
      //state validation
      validation: []
    };
  },
  mounted() {
    this.$axios.get(`/api/admin/sliders/${this.$route.params.id}`).then(response => {
      this.slider.image = response.data.data.image;
    });
  },
  methods: {
    handleFileChange(e) {
      //get image
      let image = this.slider.image = e.target.files[0];

      //check fileType
      if (!image.type.match('image.*')) {
        //if fileType not allowed, then clear value and set null
        e.target.value = '';
        this.slider.image = null;

        //show sweet alert
        this.$swal.fire({
          title: '😣: OOPS!',
          text: "Format File Tidak Didukung!",
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        });
      }
    },
    //storeSlider method
    async updateSlider() {
      //define formData
      let formData = new FormData();
      formData.append('image', this.slider.image);
      formData.append("_method", "PATCH");

      //sending data to server
      await this.$axios.post(`/api/admin/sliders/${this.$route.params.id}`, formData).then(() => {
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
          name: 'admin-slider'
        });
      }).catch(error => {
        //assign error to state "validation"
        this.validation = error.response.data;
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/slider/edit/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var edit_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/slider/edit/_id.vue



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
  "5b273d23"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map