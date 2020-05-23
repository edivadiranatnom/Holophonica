import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "fullpage.js/vendors/scrolloverflow";
import VueFullPage from "vue-fullpage.js";
import Vuelidate from "vuelidate";
import VueCookies from "vue-cookies";

Vue.use(Vuelidate);
Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();
Vue.use(Vuetify);
Vue.use(VueFullPage);
Vue.use(VueCookies);

Vue.$cookies.config("7d");
Vue.$cookies.set("theme", "default");
Vue.$cookies.set("hover-time", "1s");

new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: () => ({
    dialog: true,
    icons: {
      iconfont: "md"
    },
    drawer: null
  }),
  router,
  render: h => h(App)
}).$mount("#app");
