import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Paginate from 'vuejs-paginate'

// vuex
import store from "@/store";

Vue.config.productionTip = false
Vue.component('paginate', Paginate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
