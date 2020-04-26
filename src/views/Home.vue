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
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <v-row justify="center">
                  <h1 class="display-1 font-weight-thin mb-4">Holophonica</h1>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div id="samples" class="section">
          <v-container fluid>
            <!-- Header Text -->
            <v-row align="start" justify="center">
              <v-col class="text-start" cols="12">
                <h1 class="display-1 mb-4">Our Latest Sample Packs</h1>
              </v-col>
            </v-row>
            <!-- Text about our sample packs -->
            <v-row no-gutters>
              <v-col cols="12" lg="6" md="6" sm="6">
                <v-card class="pa-2" outlined tile>
                  <LoremIpsum />
                </v-card>
              </v-col>
              <!-- Carousel showing the latest five sample packs -->
              <v-col cols="12" lg="6" md="6" sm="6">
                <v-card class="pa-2" outlined tile>
                  <PacksCarousel />
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div id="third" class="section">
          <Footer />
        </div>
      </full-page>
    </div>
    <!-- Newsletter Modal -->
    <NewsletterModal />
  </v-app>
</template>

<script>
import LoremIpsum from "../components/LoremIpsum.vue";
import NewsletterModal from "../components/home/NewsletterModal.vue";
import PacksCarousel from "../components/home/PacksCarousel.vue";
import Footer from "../components/home/Footer.vue";

export default {
  name: "Home",
  components: {
    LoremIpsum,
    NewsletterModal,
    PacksCarousel,
    Footer
  },
  props: {
    source: String
  },
  data: () => ({
    alignments: ["start"],
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
  position: absolute;
  bottom: 0;
  color: linear-gradient(
    to right,
    rgb(194, 255, 182),
    rgb(255, 163, 182),
    rgb(221, 169, 255),
    rgb(162, 209, 255)
  );
}

#cover {
  background-image: url("../assets/1234.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
}

#samples .container {
  margin: auto;
  width: 60%;
}

#samples .container .row.no-gutters {
  border: 2px;
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
</style>
