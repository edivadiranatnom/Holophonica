<template>
  <v-app>
    <v-app-bar app dense flat hide-on-scroll>
      <v-toolbar-items class="pa-2" v-for="(el, i) in navItems" :key="i">
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
        <div id="services" class="section">
          <v-container fluid fill-height>
            <v-row no-gutters>
              <v-col cols="12" lg="6" md="6" sm="6">
                <v-card class="pa-2" outlined tile>
                  <LoremIpsum />
                </v-card>
              </v-col>
              <v-col cols="12" lg="6" md="6" sm="6">
                <v-card class="pa-2" outlined tile>
                  <ServicesCarousel />
                </v-card>
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
import PacksCarousel from "../components/home/samplepacks/PacksCarousel.vue";
import Footer from "../components/home/Footer.vue";
import ServicesCarousel from "../components/home/ServicesCarousel.vue";

export default {
  name: "Home",
  components: {
    LoremIpsum: LoremIpsum,
    NewsletterModal: NewsletterModal,
    PacksCarousel: PacksCarousel,
    ServicesCarousel: ServicesCarousel,
    Footer: Footer
  },
  props: {
    source: String
  },
  data: () => ({
    alignments: ["start"],
    navItems: [
      { text: "Sample Packs", url: "/packs" },
      { text: "Services", url: "/" },
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
}

#cover {
  background-image: url("../assets/marmo.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
}

#upperRow {
  height: 10%;
}

#samples .container {
  margin: auto;
  width: 80%;
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

// .v-toolbar__items {
// }

.v-sheet.v-sheet--tile.theme--dark.v-toolbar.v-toolbar--dense.v-toolbar--flat.v-app-bar.v-app-bar--fixed {
  background-color: black !important;
}

.pa-2 a {
  font-size: 1.2em;
  color: white !important;
  text-decoration: none;
}

#services {
  border-bottom: solid 1px white;
}

div.v-toolbar__items.pa-2 a:after,
div.v-toolbar__items.pa-2 a:before {
  backface-visibility: hidden;
  border: 1px solid rgba(#fff, 0);
  bottom: 0px;
  content: " ";
  display: block;
  margin: 0 auto;
  position: relative;
  transition: all 280ms ease-in-out;
  width: 0;
}

div.v-toolbar__items.pa-2 a:hover:after,
div.v-toolbar__items.pa-2 a:hover:before {
  backface-visibility: hidden;
  border-color: #fff;
  transition: width 350ms ease-in-out;
  width: 100%;
}

div.v-toolbar__items.pa-2 a:hover:before {
  bottom: auto;
  top: 0;
  width: 100%;
}

#services .col {
  border: solid 1px white;
  height: 100vh;
  width: 100%;
}

#services .container {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  height: 100%;
}

.services-container {
  max-width: 90% !important;
}

#services div.row.no-gutters {
  margin-right: 5%;
  margin-left: 5%;
  height: 60%;
}
</style>
