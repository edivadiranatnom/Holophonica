<template>
  <v-app>
    <!-- <v-toolbar dense flat>
      <v-toolbar-items class="pa-2" v-for="el in navItems" :key="el">
        <router-link :to="el.url">{{ el.text }}</router-link>
      </v-toolbar-items>
    </v-toolbar>-->
    <v-app-bar app dense flat hide-on-scroll>
      <v-toolbar-items class="pa-2" v-for="el in navItems" :key="el">
        <router-link :to="el.url">{{ el.text }}</router-link>
      </v-toolbar-items>
    </v-app-bar>
    <div>
      <full-page ref="fullpage" :options="options">
        <div id="first" class="section">
          <p class="site-title">Holophonica</p>
        </div>
        <div class="section">Second section ...</div>
        <v-footer class="pa-2">
          <v-btn icon v-for="el in socialIcons" :key="el" :href="el.url">
            <v-icon :color="el.color" dark>{{ el.icon }}</v-icon>
          </v-btn>
        </v-footer>
      </full-page>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  components: {},
  props: {
    source: String
  },
  data: () => ({
    socialIcons: [
      { color: "pink", icon: "mdi-instagram", url: "" },
      { color: "blue", icon: "mdi-facebook", url: "" },
      { color: "orange", icon: "mdi-soundcloud", url: "" },
      { color: "orange", icon: "mdi-patreon", url: "" }
    ],
    navItems: [
      { text: "Sample Packs", url: "/packs" },
      { text: "Services", url: "/" },
      { text: "Tutorials", url: "/" },
      { text: "About", url: "/about" }
    ],
    options: {
      autoScrolling: false
    }
  }),
  computed: {},
  methods: {},
  created() {}
};
</script>

<style lang="scss">
#first {
  background-image: url("../assets/1234.jpg");
  background-size: cover;
}

.site-title {
  font-size: 1.5em;
  position: relative;
  top: 45%;
  left: 0;
  right: 0;
  color: white;
  text-align: center;
}

.v-toolbar__content {
  float: right;
}

.v-app-bar {
  background-color: transparent !important;
}

.pa-2 a {
  font-size: 1.2em;
  color: white !important;
  text-decoration: none;
}

.v-footer {
  border: 5px;
  border-style: solid;
  border-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent !important;
  height: 8%;
  position: absolute;
}
</style>
