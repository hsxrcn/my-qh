import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'lib-flexible';
import Vue from 'vue';
import App from './App.vue';
import router from './router/.invoke/router.js';
import './router/router.interceptor';
import './components/global';
import './icons';
import './filters';
import './services';
import './vendor/vant';

import './assets/less/app.less';

/* eslint-disable */
Vue.config.productionTip = process.env.NODE_ENV === 'production';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // use Runtime-only
  // https://vuejs.org/v2/guide/installation.html
  render: (h) => h(App)
});
