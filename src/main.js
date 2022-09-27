import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://www.code4everyone.info/api'
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
