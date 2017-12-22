import Vue from 'vue'
import App from 'components/App'

import VueRouter from 'vue-router';
import routeConfig from '../../assets/route-config';
Vue.use(VueRouter);
const router = new VueRouter();
router.map(routeConfig);
router.start(App, '#App');

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
