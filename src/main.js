// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/store'
import ElementUI from 'element-ui'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.config.productionTip = false

// import 'element-ui/lib/theme-default/index.css'    // 默认主题
import '../static/css/theme-green/index.css'       // 浅绿色主题

Vue.use(MuseUI)
Vue.use(ElementUI)

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
