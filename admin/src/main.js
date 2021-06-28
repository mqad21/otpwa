import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueLuxon from "vue-luxon";
import App from "./App.vue";
import axios from "./plugins/axios";
import socket from "./plugins/socket";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueLuxon, {
  output: {
    zone: "Asia/Jakarta",
    format: "dd-MM-yy HH:mm:ss",
    locale: "id-ID",
  },
});
Vue.use(IconsPlugin);
Vue.prototype.$axios = axios;
Vue.prototype.$socket = socket;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
