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
          <v-parallax alt src="../assets/1234.jpg">
            <v-row align="end" justify="center">
              <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-thin mb-4">Holophonica</h1>
              </v-col>
            </v-row>
          </v-parallax>
        </div>
        <div id="samples" class="section">
          <v-container fluid>
            <v-row align="start" justify="center">
              <v-col class="text-start" cols="12">
                <h1 class="display-1 mb-4">Sample Packs</h1>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" lg="6" md="6" sm="6">
                <v-card class="pa-2" outlined tile>
                  <LoremIpsum />
                </v-card>
              </v-col>
              <v-col cols="12" lg="6" md="6" sm="6">
                <v-card class="pa-2" outlined tile>
                  <v-carousel cycle height="400" hide-delimiters show-arrows-on-hover>
                    <v-carousel-item v-for="(pack, i) in packs" :key="i">
                      <v-card :color="colors[i]" height="100%">
                        <v-row class="fill-height" align="center" justify="center">
                          <div class="display-3">{{ pack.name }} Pack</div>
                          <v-avatar class="ma-3" size="125" tile>
                            <v-img :src="pack.artwork"></v-img>
                          </v-avatar>
                        </v-row>
                      </v-card>
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
    <!-- Newsletter Modal -->
    <v-row justify="center">
      <v-dialog v-model="dialog" overlay-opacity="0.5" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Newsletter</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <medium>
                Subscribe to our newsletter to receive the latest news on our
                sample packs, tutorials etc.
              </medium>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="First Name*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Last Name*" required></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="8">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
              </v-row>
              <small>*required field</small>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Subscribe</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <NewsletterModal />
    </v-row>
  </v-app>
</template>

<script>
import LoremIpsum from "../components/LoremIpsum.vue";
import NewsletterModal from "../components/NewsletterModal.vue";
export default {
  name: "Home",
  components: {
    LoremIpsum,
    NewsletterModal
  },
  props: {
    source: String
  },
  data: () => ({
    alignments: ["start"],
    dialog: true,
    socialIcons: [
      {
        color: "pink",
        icon: "mdi-instagram",
        url: "https://www.instagram.com/holophonica/"
      },
      { color: "blue", icon: "mdi-facebook", url: "" },
      { color: "orange", icon: "mdi-soundcloud", url: "" },
      { color: "orange", icon: "mdi-patreon", url: "" },
      { color: "green", icon: "mdi-soundbetter", url: "" }
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
    packs: [
      { name: "First", artwork: "../assets/logo.png" },
      { name: "Second", artwork: "" },
      { name: "Third", artwork: "" },
      { name: "Fourth", artwork: "" },
      { name: "Fifth", artwork: "" }
    ]
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

#cover h1 {
  color: linear-gradient(
    to right,
    rgb(194, 255, 182),
    rgb(255, 163, 182),
    rgb(221, 169, 255),
    rgb(162, 209, 255)
  );
}

#samples .container {
  margin: auto;
  width: 80%;
}

#samples .container .col-sm-6 {
  border: 5px;
  border-style: solid;
  border-color: white;
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

.v-parallax {
  height: 100% !important;
}

.pa-2 a {
  font-size: 1.2em;
  color: white !important;
  text-decoration: none;
}

.section {
  border: solid 5px white;
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
