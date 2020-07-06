import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vuelidate from "vuelidate";
import "vue-video-section/dist/vue-video-section.css";
import VueVideoSection from "vue-video-section";
import Meta from "vue-meta";

Vue.component("vue-video-section", VueVideoSection);

Vue.use(Vuelidate);
Vue.use(Meta);
Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();
Vue.use(Vuetify);

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
