<template>
  <div v-scroll="onScroll" :class="navshdw" class="nav">
    <v-row align="center">
      <v-col cols="1">
        <router-link to="/">
          <v-img class="ml-3" id="navbarLogo" min-width="50" width="60" src="../assets/logo.png"></v-img>
        </router-link>
      </v-col>
      <v-col cols="11">
        <v-icon
          class="float-right mr-9 mt-1"
          large
          dark
          dense
          v-show="renderNavItem"
          @click="openMenu"
        >{{ invisibleTab ? 'mdi-chevron-left' : 'mdi-chevron-down' }}</v-icon>
        <transition name="slide-fade">
          <v-toolbar-items v-if="invisibleTab" class="tab pa-2 mr-lg-6 mr-3">
            <router-link to="/about" style="font-size: 1em; text-decoration: none; color: #cfcfcf">
              <p style="pointer-events: none">About</p>
            </router-link>
          </v-toolbar-items>
        </transition>
        <transition name="slide-fade">
          <v-toolbar-items
            v-if="invisibleTab"
            class="tab pa-2 ml-lg-2 mr-lg-2"
            @click="$vuetify.goTo('#packs')"
          >
            <p style="pointer-events: none">Packs</p>
          </v-toolbar-items>
        </transition>
        <transition name="slide-fade">
          <v-toolbar-items
            v-if="invisibleTab"
            class="tab pa-2 ml-lg-2 mr-lg-2"
            @click="$vuetify.goTo('#studio')"
          >
            <p style="pointer-events: none">Studio</p>
          </v-toolbar-items>
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
        this.invisibleTab = false;
      } else {
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
  height: 64px;
  z-index: 1000;
  overflow: hidden;
  opacity: 0.85;
  backdrop-filter: saturate(180%) blur(2px);
  -webkit-backdrop-filter: saturate(180%) blur(2px);
  background-color: #131313;
  position: fixed;
  top: 0;
  width: 100vw;
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
  font-family: 'Helvetica Now Text';
}

.visibleTab {
  visibility: visible;
}

/* Navbar links */
.invisibleTab {
  visibility: hidden;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.tab:hover, .tab a:hover {
  color: white !important;
}

.menu-icon {
  cursor: pointer;
  transition: all 3s;
  transition-timing: ease-in-out;
}

.v-icon.v-icon:after {
  background-color: transparent;
}

@keyframes rot {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -moz-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    -moz-transform: rotate(90deg);
  }
}

#navbarLogo:hover {
  -webkit-animation: spin 2s linear infinite;
  -moz-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    -moz-transform: rotate(360deg);
  }
}
</style>
