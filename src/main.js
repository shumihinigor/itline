import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './registerServiceWorker';
import router from './router';
import Paginate from 'vuejs-paginate';
import VueLazyload from 'vue-lazyload'

// vuex
import store from "@/store/index";

// axios
import axios from 'axios';

// mask
import VueMask from 'v-mask'
Vue.use(VueMask);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/static/image_not_found.png',
  loading: '/static/loading.gif',
  attempt: 1
})
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.component('paginate', Paginate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
