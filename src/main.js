import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './registerServiceWorker';
import router from './router';
import Paginate from 'vuejs-paginate';

// vuex
import store from "@/store";

// axios
import axios from 'axios';


Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.component('paginate', Paginate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
