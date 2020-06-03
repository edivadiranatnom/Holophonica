<template>
  <div v-scroll="onScroll" :class="navshdw" class="nav">
    <v-row>
      <v-col cols="1">
        <router-link to="/">
          <v-img
            class="ml-3 mt-lg-0 mt-2"
            id="navbarLogo"
            min-width="50"
            width="60"
            src="../assets/logo.png"
          ></v-img>
        </router-link>
      </v-col>
      <v-col cols="11">
        <v-img
          v-show="renderNavItem"
          v-if="!showTabs"
          class="menu-icon float-right mt-3 mr-6"
          width="20"
          src="../assets/leftArrow.png"
          @click="openMenu"
        ></v-img>
        <v-img
          v-else
          class="menu-icon float-right mt-3 mr-6"
          width="20"
          src="../assets/close.png"
          @click="openMenu"
        ></v-img>
        <v-toolbar-items
          :class="endTrans"
          v-show="showTabs"
          v-if="renderNavItem"
          class="toolbarItem pa-2 ml-1 mr-lg-6 mr-3"
        >
          <router-link to="/about" style="font-size: 1em">About</router-link>
        </v-toolbar-items>
        <v-toolbar-items v-else></v-toolbar-items>
        <v-toolbar-items
          :class="endTrans"
          v-show="showTabs"
          class="toolbarItem pa-2 ml-lg-2 mr-lg-2"
          v-for="(el, i) in navItems"
          :key="i"
          @click="$vuetify.goTo('#' + el.url.split('/')[1])"
          >{{ el.text }}</v-toolbar-items
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: () => ({
    showTabs: false,
    endTrans: "",
    navshdw: "",
    navItems: [
      { text: "", url: "" },
      { text: "", url: "" }
    ],
    renderNavItem: true
  }),
  created() {
    if (this.$route.path == "/") {
      this.renderNavItem = true;
      this.navItems[0].text = "Packs";
      this.navItems[0].url = "/packs";
      this.navItems[1].text = "Studio";
      this.navItems[1].url = "/studio";
    } else if (
      this.$route.path == "/about" ||
      this.$route.path == "/Terms" ||
      this.$route.path == "/Privacy"
    ) {
      this.renderNavItem = false;
    }
  },
  methods: {
    openMenu() {
      this.endTrans = "toolbarItem-clicked";
      this.showTabs = !this.showTabs;
    },
    onScroll() {
      if (window.pageYOffset < 150) this.navshdw = "";
      else this.navshdw = "navshdw";
    }
  }
};
</script>

<style lang="stylus" scoped>
.nav {
  height: 7vh;
  z-index: 1;
  overflow: hidden;
  opacity: 0.85;
  backdrop-filter: blur(1px);
  background-color: #131313;
  position: fixed;
  top: 0;
  width: 100vw;
}

@media only screen and (max-width: 600px) {
  .nav {
    height: 10vh;
  }
}

.navshdw {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.5);
}

/* Navbar links */
.toolbarItem {
  float: right;
  display: block;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  color: #cfcfcf;
  font-size: 1.2em;
  cursor: pointer;
}

.toolbarItem a {
  font-size: 1.2em;
  color: #cfcfcf !important;
  text-decoration: none;
}

.toolbarItem:hover, .toolbarItem a:hover {
  color: white !important;
}

.toolbarItem-clicked {
  animation-direction: left;
}

.menu-icon {
  cursor: pointer;
  background-color: transparent;
}

#navbarLogo:hover {
  -webkit-animation: spin 2s linear infinite;
  -moz-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
