import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './registerServiceWorker';
import router from './router';
import VueBreadcrumbs from 'vue-2-breadcrumbs';
import Paginate from 'vuejs-paginate';

// axios
import axios from 'axios';

// vuex
import store from "@/store";

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.use(VueBreadcrumbs);
Vue.component('paginate', Paginate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
