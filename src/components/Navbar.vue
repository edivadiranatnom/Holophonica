<template>
  <div v-scroll="onScroll" :class="navshdw" class="nav">
    <v-row>
      <v-col cols="1">
        <router-link to="/">
          <v-img
            class="ml-3 mt-lg-2 mt-2"
            id="navbarLogo"
            min-width="50"
            width="60"
            src="../assets/logo.png"
          ></v-img>
        </router-link>
      </v-col>
      <v-col cols="11">
        <v-img
          v-if="renderNavItem"
          class="menu-icon float-right mt-3 mr-9"
          width="20"
          src="../assets/leftArrow.png"
          @click="openMenu"
        ></v-img>
        <transition name="slide-fade">
          <v-toolbar-items v-if="invisibleTab" class="tab pa-2 mr-lg-6 mr-3">
            <router-link
              to="/about"
              style="font-size: 1em; text-decoration: none; color: white"
            >About</router-link>
          </v-toolbar-items>
        </transition>
        <transition name="slide-fade">
          <v-toolbar-items
            v-if="invisibleTab"
            class="tab pa-2 ml-lg-2 mr-lg-2"
            @click="$vuetify.goTo('#studio')"
          >Studio</v-toolbar-items>
        </transition>
        <transition name="slide-fade">
          <v-toolbar-items
            v-if="invisibleTab"
            class="tab pa-2 ml-lg-2 mr-lg-2"
            @click="$vuetify.goTo('#packs')"
          >Packs</v-toolbar-items>
        </transition>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: () => ({
    invisibleTab: false,
    navshdw: "",
    navItems: [
      { text: "", url: "" },
      { text: "", url: "" }
    ],
    renderNavItem: true
  }),
  created() {
    if (
      this.$route.path == "/about" ||
      this.$route.path == "/terms" ||
      this.$route.path == "/privacy"
    ) {
      this.renderNavItem = false;
    }
  },
  methods: {
    openMenu() {
      if (this.invisibleTab) {
        this.visibleTab = true;
        this.invisibleTab = false;
      } else {
        this.visibleTab = false;
        this.invisibleTab = true;
      }
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

.tab {
  float: right;
  display: block;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  color: #cfcfcf;
  font-size: 1.2em;
  cursor: pointer;
}

.visibleTab {
  visibility: visible;
}

/* Navbar links */
.invisibleTab {
  visibility: hidden;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.toolbarItem:hover {
  color: white !important;
}

.toolbarItem-clicked {
  animation-direction: left;
}

.menu-icon {
  cursor: pointer;
  background-color: transparent;
  transition: transform 2s;
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
