<template>
  <v-app-bar app flat :color="backgroundcolor" v-scroll="onScroll">
    <v-col cols="1">
      <router-link to="/">
        <v-img
          id="navbarLogo"
          min-width="50"
          width="60"
          src="../assets/logo.png"
        ></v-img>
      </router-link>
    </v-col>
    <v-col cols="11">
      <v-toolbar-items v-if="renderNavItem" class="toolbarItem pa-2 ml-1 mr-1">
        <router-link to="/about" style="font-size: 1em">About</router-link>
      </v-toolbar-items>
      <v-toolbar-items v-else></v-toolbar-items>
      <v-toolbar-items
        class="toolbarItem pa-2 ml-2 mr-2"
        v-for="(el, i) in navItems"
        :key="i"
        @click="$vuetify.goTo('#' + el.url.split('/')[1])"
      >
        <!-- <router-link class="routerLink" :to="el.url">{{ el.text }}</router-link> -->
        {{ el.text }}
      </v-toolbar-items>
    </v-col>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    navItems: [
      { text: "", url: "" },
      { text: "", url: "" }
    ],
    renderNavItem: true,
    backgroundcolor: "transparent",
    top: 0
  }),
  created() {
    if (this.$route.path == "/") {
      this.renderNavItem = true;
      this.navItems[0].text = "Packs";
      this.navItems[0].url = "/packs";
      this.navItems[1].text = "Studio";
      this.navItems[1].url = "/studio";
      // } else if (this.$route.path == "/packs") {
      //   this.navItems[0].text = "Home";
      //   this.navItems[0].url = "/";
      //   this.navItems[1].text = "Studio";
      //   this.navItems[1].url = "/studio";
      //   this.navItems[2].text = "About";
      //   this.navItems[2].url = "/about";
      // } else if (this.$route.path == "/services") {
      //   this.navItems[0].text = "Home";
      //   this.navItems[0].url = "/";
      //   this.navItems[1].text = "Packs";
      //   this.navItems[1].url = "/packs";
      //   this.navItems[2].text = "About";
      //   this.navItems[2].url = "/about";
    } else if (
      this.$route.path == "/about" ||
      this.$route.path == "/Terms" ||
      this.$route.path == "/Privacy"
    ) {
      this.renderNavItem = false;
      // this.navItems[0].text = "Home";
      // this.navItems[0].url = "/";
      // this.navItems[1].text = "Packs";
      // this.navItems[1].url = "/packs";
      // this.navItems[2].text = "Studio";
      // this.navItems[2].url = "/studio";
    }
  },
  methods: {
    onScroll(e) {
      this.top = window.pageYOffset || e.target.scrollTop || 0;
    }
  },
  watch: {
    top: function() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        this.backgroundcolor = "black";
      } else {
        if (this.top > (window.innerHeight / 10) * 10)
          this.backgroundcolor = "black";
        else this.backgroundcolor = "transparent";
      }
    }
  }
};
</script>

<style lang="scss">
.toolbarItem {
  float: right !important;
  color: #cfcfcf !important;
  font-size: 1.2em;
  cursor: pointer;
}

.toolbarItem:hover {
  color: white !important;
}

.toolbarItem a {
  font-size: 1.2em;
  color: #cfcfcf !important;
  text-decoration: none;
}

.toolbarItem a:hover {
  color: white !important;
}

#navbarLogo:hover {
  -webkit-animation: spin 2s linear infinite;
  -moz-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
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
