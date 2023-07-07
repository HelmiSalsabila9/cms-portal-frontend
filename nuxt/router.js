import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _28bfff0b = () => interopDefault(import('..\\pages\\kebijakan\\index.vue' /* webpackChunkName: "pages/kebijakan/index" */))
const _f39d317c = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _752f026e = () => interopDefault(import('..\\pages\\post\\index.vue' /* webpackChunkName: "pages/post/index" */))
const _07a29901 = () => interopDefault(import('..\\pages\\search\\index.vue' /* webpackChunkName: "pages/search/index" */))
const _2b496dde = () => interopDefault(import('..\\pages\\admin\\category\\index.vue' /* webpackChunkName: "pages/admin/category/index" */))
const _13b0bf64 = () => interopDefault(import('..\\pages\\admin\\dashboard\\index.vue' /* webpackChunkName: "pages/admin/dashboard/index" */))
const _86ae3046 = () => interopDefault(import('..\\pages\\admin\\menu\\index.vue' /* webpackChunkName: "pages/admin/menu/index" */))
const _3dc281fc = () => interopDefault(import('..\\pages\\admin\\post\\index.vue' /* webpackChunkName: "pages/admin/post/index" */))
const _c9930aca = () => interopDefault(import('..\\pages\\admin\\slider\\index.vue' /* webpackChunkName: "pages/admin/slider/index" */))
const _62b4ed1e = () => interopDefault(import('..\\pages\\admin\\tag\\index.vue' /* webpackChunkName: "pages/admin/tag/index" */))
const _6bf515f1 = () => interopDefault(import('..\\pages\\admin\\user\\index.vue' /* webpackChunkName: "pages/admin/user/index" */))
const _411ac7e2 = () => interopDefault(import('..\\pages\\admin\\category\\create\\index.vue' /* webpackChunkName: "pages/admin/category/create/index" */))
const _0c1bd2e1 = () => interopDefault(import('..\\pages\\admin\\menu\\create\\index.vue' /* webpackChunkName: "pages/admin/menu/create/index" */))
const _f9764400 = () => interopDefault(import('..\\pages\\admin\\post\\create\\index.vue' /* webpackChunkName: "pages/admin/post/create/index" */))
const _1fc1c79f = () => interopDefault(import('..\\pages\\admin\\slider\\create\\index.vue' /* webpackChunkName: "pages/admin/slider/create/index" */))
const _3c99f1bc = () => interopDefault(import('..\\pages\\admin\\tag\\create\\index.vue' /* webpackChunkName: "pages/admin/tag/create/index" */))
const _de9aa616 = () => interopDefault(import('..\\pages\\admin\\user\\create\\index.vue' /* webpackChunkName: "pages/admin/user/create/index" */))
const _3aa4ea7c = () => interopDefault(import('..\\pages\\admin\\category\\edit\\_id.vue' /* webpackChunkName: "pages/admin/category/edit/_id" */))
const _88ad660a = () => interopDefault(import('..\\pages\\admin\\menu\\edit\\_id.vue' /* webpackChunkName: "pages/admin/menu/edit/_id" */))
const _f7ca80cc = () => interopDefault(import('..\\pages\\admin\\post\\edit\\_id.vue' /* webpackChunkName: "pages/admin/post/edit/_id" */))
const _c0d95e8e = () => interopDefault(import('..\\pages\\admin\\slider\\edit\\_id.vue' /* webpackChunkName: "pages/admin/slider/edit/_id" */))
const _74826c88 = () => interopDefault(import('..\\pages\\admin\\tag\\edit\\_id.vue' /* webpackChunkName: "pages/admin/tag/edit/_id" */))
const _6e48510f = () => interopDefault(import('..\\pages\\admin\\user\\edit\\_id.vue' /* webpackChunkName: "pages/admin/user/edit/_id" */))
const _41239ae3 = () => interopDefault(import('..\\pages\\category\\_slug.vue' /* webpackChunkName: "pages/category/_slug" */))
const _789c44fe = () => interopDefault(import('..\\pages\\post\\_slug.vue' /* webpackChunkName: "pages/post/_slug" */))
const _b121fd2e = () => interopDefault(import('..\\pages\\tag\\_slug.vue' /* webpackChunkName: "pages/tag/_slug" */))
const _e8d63bae = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/kebijakan",
    component: _28bfff0b,
    name: "kebijakan"
  }, {
    path: "/login",
    component: _f39d317c,
    name: "login"
  }, {
    path: "/post",
    component: _752f026e,
    name: "post"
  }, {
    path: "/search",
    component: _07a29901,
    name: "search"
  }, {
    path: "/admin/category",
    component: _2b496dde,
    name: "admin-category"
  }, {
    path: "/admin/dashboard",
    component: _13b0bf64,
    name: "admin-dashboard"
  }, {
    path: "/admin/menu",
    component: _86ae3046,
    name: "admin-menu"
  }, {
    path: "/admin/post",
    component: _3dc281fc,
    name: "admin-post"
  }, {
    path: "/admin/slider",
    component: _c9930aca,
    name: "admin-slider"
  }, {
    path: "/admin/tag",
    component: _62b4ed1e,
    name: "admin-tag"
  }, {
    path: "/admin/user",
    component: _6bf515f1,
    name: "admin-user"
  }, {
    path: "/admin/category/create",
    component: _411ac7e2,
    name: "admin-category-create"
  }, {
    path: "/admin/menu/create",
    component: _0c1bd2e1,
    name: "admin-menu-create"
  }, {
    path: "/admin/post/create",
    component: _f9764400,
    name: "admin-post-create"
  }, {
    path: "/admin/slider/create",
    component: _1fc1c79f,
    name: "admin-slider-create"
  }, {
    path: "/admin/tag/create",
    component: _3c99f1bc,
    name: "admin-tag-create"
  }, {
    path: "/admin/user/create",
    component: _de9aa616,
    name: "admin-user-create"
  }, {
    path: "/admin/category/edit/:id?",
    component: _3aa4ea7c,
    name: "admin-category-edit-id"
  }, {
    path: "/admin/menu/edit/:id?",
    component: _88ad660a,
    name: "admin-menu-edit-id"
  }, {
    path: "/admin/post/edit/:id?",
    component: _f7ca80cc,
    name: "admin-post-edit-id"
  }, {
    path: "/admin/slider/edit/:id?",
    component: _c0d95e8e,
    name: "admin-slider-edit-id"
  }, {
    path: "/admin/tag/edit/:id?",
    component: _74826c88,
    name: "admin-tag-edit-id"
  }, {
    path: "/admin/user/edit/:id?",
    component: _6e48510f,
    name: "admin-user-edit-id"
  }, {
    path: "/category/:slug?",
    component: _41239ae3,
    name: "category-slug"
  }, {
    path: "/post/:slug",
    component: _789c44fe,
    name: "post-slug"
  }, {
    path: "/tag/:slug?",
    component: _b121fd2e,
    name: "tag-slug"
  }, {
    path: "/",
    component: _e8d63bae,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
