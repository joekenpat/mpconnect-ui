import Vue from "vue";

import router from "./router";
import VueToast from "vue-toast-notification";
import store from "@/store";
import App from "./App.vue";
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueToast);

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});
app.$mount("#app");
