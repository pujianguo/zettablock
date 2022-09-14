import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueCollapse from "vue2-collapse";
import axios from 'axios'
import util from './utils/util'

Vue.use(VueCollapse);
Vue.config.productionTip = false;
Vue.prototype.$http = axios
Vue.prototype.util = util

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
