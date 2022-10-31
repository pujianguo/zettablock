import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueGtag from 'vue-gtag'
import VueCollapse from "vue2-collapse";
import axios from 'axios'
import util from './utils/util'

Vue.use(VueGtag, {
  config: { id: 'G-NK4XX5R11N' }  // 这里修改为你的gtag id，应该是G开头的。
});
Vue.use(VueCollapse);
Vue.config.productionTip = false;
Vue.prototype.$http = axios
Vue.prototype.util = util

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
