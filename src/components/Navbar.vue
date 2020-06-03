<template>
  <div id="nav">
    <v-row align="center">
      <v-col cols="1">
        <router-link to="/">
          <v-img
            class="ml-3"
            id="navbarLogo"
            min-width="50"
            width="60"
            src="../assets/logo.png"
          ></v-img>
        </router-link>
      </v-col>
      <v-col cols="11">
        <v-toolbar-items
          v-if="renderNavItem"
          class="toolbarItem pa-2 ml-1 mr-8"
        >
          <router-link to="/about" style="font-size: 1em">About</router-link>
        </v-toolbar-items>
        <v-toolbar-items v-else></v-toolbar-items>
        <v-toolbar-items
          class="toolbarItem pa-2 ml-2 mr-2"
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
  }
};
</script>

<style lang="stylus" scoped>
#nav {
  opacity: 0.9;
  backdrop-filter: blur(1.5px);
  z-index: 100;
  overflow: hidden;
  background-color: #121212;
  position: fixed;
  top: 0;
  width: 100%;
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

.toolbarItem:hover, .toolbarItem a:hover {
  color: white !important;
}

.toolbarItem a {
  font-size: 1.2em;
  color: #cfcfcf !important;
  text-decoration: none;
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
