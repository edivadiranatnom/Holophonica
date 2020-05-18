import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/packs",
    name: "Packs",
    component: () =>
      import(/* webpackChunkName: "packs" */ "../views/Packs.vue")
  },
  {
    path: "/services",
    name: "Services",
    component: () =>
      import(/* webpackChunkName: "services" */ "../views/Services.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/admin",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "addpack" */ "../views/CMS/Login.vue")
  },
  {
    path: "/admin/addpack",
    name: "AddPack",
    component: () =>
      import(/* webpackChunkName: "addpack" */ "../views/CMS/AddPack.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
