import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import { Upload } from 'element-ui';
// Vue.use(Upload)
// import ElementUI from 'element-ui'
// Vue.use(ElementUI);
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
