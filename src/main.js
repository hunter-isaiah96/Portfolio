import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import prismic from 'prismic-javascript'

import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$prismic', { value: prismic })
Object.defineProperty(Vue.prototype, '$apiEntryPoint', { value: 'https://distropaper.cdn.prismic.io/api/v2' })

Vue.use(Viewer, {
  defaultOptions: {
    toolbar: false,
    title: false,
    navbar: false,
    movable: false
  }
})

// Vue.prototype.$prismic = prismic

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
