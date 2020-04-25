<template>
  <v-app>
    <v-app-bar app dense flat hide-on-scroll>
      <v-toolbar-items class="pa-2" v-for="el in navItems" :key="el">
        <v-divider class="mx-4" vertical></v-divider>
        <router-link :to="el.url">{{ el.text }}</router-link>
      </v-toolbar-items>
    </v-app-bar>
    <div>
      <full-page ref="fullpage" :options="options">
        <div id="cover" class="section">
          <p class="site-title">Holophonica</p>
        </div>
        <div id="samples" class="section">
          <v-container fluid>
            <v-row no-gutters>
              <v-col cols="12" lg="6" md="6" sm="6">
                <v-card class="pa-2" outlined tile>
                  <LoremIpsum />
                </v-card>
              </v-col>
              <v-col cols="12" lg="6" md="6" sm="6">
                <v-card class="pa-2" outlined tile>
                  <v-carousel
                    cycle
                    height="400"
                    hide-delimiter-background
                    show-arrows-on-hover
                  >
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                      <v-sheet :color="colors[i]" height="100%">
                        <v-row
                          class="fill-height"
                          align="center"
                          justify="center"
                        >
                          <div class="display-3">{{ slide }} Slide</div>
                        </v-row>
                      </v-sheet>
                    </v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div id="third" class="section">
          <p>Sticazzi</p>
          <v-footer absolute class="pa-2">
            <v-btn icon v-for="el in socialIcons" :key="el" :href="el.url">
              <v-icon :color="el.color" dark>{{ el.icon }}</v-icon>
            </v-btn>
          </v-footer>
        </div>
      </full-page>
    </div>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Close</v-btn
            >
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Send</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>

<script>
import LoremIpsum from "../components/LoremIpsum.vue";
export default {
  name: "Home",
  components: { LoremIpsum },
  props: {
    source: String
  },
  data: () => ({
    alignments: ["start"],
    dialog: true,
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
    },
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4"
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"]
  }),
  computed: {},
  methods: {},
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="scss">
.container--fluid .pa-2.v-card {
  height: 100%;
}

.lorem {
  margin: 11%;
}

#cover {
  background-image: url("../assets/1234.jpg");
  background-size: cover;
}

#samples {
  margin: auto;
  width: 80%;
  text-align: center;
}

.pa-2 v-card {
  height: 1000px;
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
  border: 1px;
  border-style: solid;
  border-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent !important;
  position: absolute;
}
</style>
