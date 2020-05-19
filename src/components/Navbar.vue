<template>
  <v-app-bar
    app
    flat
    src="https://img.freepik.com/free-photo/_40163-61.jpg?size=626&ext=jpg"
  >
    <v-col cols="1">
      <a href="/">
        <v-img min-width="50" width="60" src="../assets/logo.png"></v-img>
      </a>
    </v-col>
    <v-col cols="11">
      <v-toolbar-items
        class="toolbarItem pa-2"
        v-for="(el, i) in navItems"
        :key="i"
      >
        <router-link :to="el.url">{{ el.text }}</router-link>
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
      { text: "", url: "" },
      { text: "", url: "" }
    ]
  }),
  created() {
    if (this.$route.path == "/") {
      this.navItems[2].text = "Packs";
      this.navItems[2].url = "/packs";
      this.navItems[1].text = "Services";
      this.navItems[1].url = "/services";
      this.navItems[0].text = "About";
      this.navItems[0].url = "/about";
    } else if (this.$route.path == "/packs") {
      this.navItems[0].text = "Home";
      this.navItems[0].url = "/";
      this.navItems[1].text = "Services";
      this.navItems[1].url = "/services";
      this.navItems[2].text = "About";
      this.navItems[2].url = "/about";
    } else if (this.$route.path == "/services") {
      this.navItems[0].text = "Home";
      this.navItems[0].url = "/";
      this.navItems[1].text = "Packs";
      this.navItems[1].url = "/packs";
      this.navItems[2].text = "About";
      this.navItems[2].url = "/about";
    } else if (this.$route.path == "/about") {
      this.navItems[0].text = "Home";
      this.navItems[0].url = "/";
      this.navItems[1].text = "Packs";
      this.navItems[1].url = "/packs";
      this.navItems[2].text = "Services";
      this.navItems[2].url = "/services";
    }
  }
};
</script>

<style lang="scss">
.toolbarItem {
  float: right !important;
}

.pa-2 a {
  font-size: 1.2em;
  color: white !important;
  text-decoration: none;
}

#holo {
  z-index: 0;
  width: 60vh;
  background-image: url("https://img.freepik.com/free-photo/_40163-61.jpg?size=626&ext=jpg");
  background-size: cover;
  display: block;
  width: 100vh;
  height: 150px;
  -webkit-filter: blur(7.5px);
  -moz-filter: blur(7.5px);
  -o-filter: blur(7.5px);
  -ms-filter: blur(7.5px);
  filter: blur(7.5px);
}
</style>
