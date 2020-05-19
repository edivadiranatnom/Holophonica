<template>
  <v-app>
    <Navbar />
    <div>
      <full-page ref="fullpage" :options="options">
        <div id="cover" class="section">
          <v-container fluid style="height:90%; padding-top:7.5%">
            <v-row>
              <v-col cols="1" lg="3" md="3" sm="2"></v-col>
              <v-col cols="10" lg="6" md="6" sm="8" style="text-align:center">
                <v-img src="../assets/logo.png" ratio="1"></v-img>
                <div>
                  <v-img src="../assets/textLogo.png" ratio="1"></v-img>
                  <div>
                    <h3 class="display-1 font-weight-thin mb-4">The sound you need.</h3>
                    <v-btn id="down" fab icon @click="$vuetify.goTo('#services')">
                      <v-icon>mdi-chevron-double-down</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-col>
              <v-col cols="1" lg="3" md="3" sm="2"></v-col>
            </v-row>
          </v-container>
        </div>
        <div id="services" class="section">
          <v-container fluid fill-heigth style="height:100%">
            <v-row>
              <v-col cols="1" lg="3" md="3" sm="2"></v-col>
              <v-col cols="10" lg="6" md="6" sm="8" style="text-align:center">
                <h3 class="display-2 font-weight-medium mb-4">STUDIO</h3>
                <h3 class="font-weight-thin">Lorem ipsum sit amet.</h3>
              </v-col>
              <v-col cols="1" lg="3" md="3" sm="2"></v-col>
            </v-row>
            <v-row style="text-align:center; border: solid 1px white">
              <v-col cols="2" lg="2" md="2" sm="2"></v-col>
              <v-col cols="8" lg="8" md="8" sm="8">
                <v-row>
                  <v-col cols="5" lg="5" md="5" sm="5" style="background-color:purple">
                    <h3 class="display-2 font-weight-medium mb-4">STUDIO</h3>
                    <h3 class="font-weight-thin">Lorem ipsum sit amet.</h3>
                  </v-col>
                  <v-col cols="2" lg="2" md="2" sm="2"></v-col>
                  <v-col cols="5" lg="5" md="5" sm="5" style="background-color:purple">
                    <h3 class="display-2 font-weight-medium mb-4">STUDIO</h3>
                    <h3 class="font-weight-thin">Lorem ipsum sit amet.</h3>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="2" lg="2" md="2" sm="2"></v-col>
            </v-row>
          </v-container>
        </div>
        <div id="samples" class="section">
          <v-container fluid>
            <v-row>
              <v-col cols="0" lg="3" md="3" sm="3"></v-col>
              <v-col cols="12" lg="6" md="6" sm="6">
                <h1 class="display-1 mb-4">Our Latest Sample Packs</h1>
              </v-col>
              <v-col cols="0" lg="3" md="3" sm="3"></v-col>
              <v-col cols="0" lg="3" md="3" sm="3"></v-col>
              <v-col cols="12" lg="6" md="6" sm="6">
                <v-card class="pa-2" outlined tile>
                  <PacksCarousel />
                </v-card>
              </v-col>
              <v-col cols="0" lg="3" md="3" sm="3"></v-col>
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
import Navbar from "../components/Navbar.vue";
import NewsletterModal from "../components/home/NewsletterModal.vue";
import PacksCarousel from "../components/home/samplepacks/PacksCarousel.vue";
import Footer from "../components/Footer.vue";
import packs from "../data/home/packs.json";

export default {
  name: "Home",
  components: {
    Navbar: Navbar,
    NewsletterModal: NewsletterModal,
    PacksCarousel: PacksCarousel,
    Footer: Footer
  },
  props: {
    source: String
  },
  data: () => ({
    alignments: ["start"],
    options: {
      autoScrolling: false,
      fitToSection: false,
      licenseKey: ""
    },
    slide: "",
    serviceText: ""
  }),
  computed: {},
  methods: {
    updateSlide(slide) {
      console.log("slide: " + slide.name);
      this.slide = slide.name;
    }
  },
  created() {
    this.$vuetify.theme.dark = true;
    this.$eventHub.$on("slideChanged", this.updateSlide);
  },
  beforeDestroy() {
    this.$eventHub.$off("slideChanged", () => {});
  },
  watch: {
    slide: function(slide) {
      this.serviceText = packs[slide].description;
    }
  }
};
</script>

<style lang="scss">
.container--fluid .pa-2.v-card {
  height: 100%;
}

.v-btn:not(.v-btn--text):not(.v-btn--outlined):hover::before:after {
  opacity: 0;
}

#cover {
  background-color: black;
}

#upperRow {
  height: 10%;
}

#services {
  background-color: black !important;
}
#samples {
  background-color: black !important;
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

.pa-2 a {
  font-size: 1.2em;
  color: white !important;
  text-decoration: none;
}

@media (max-width: 767px) {
  #samples .container .row.no-gutters div.col-12:nth-child(1) {
    visibility: hidden;
    height: 0;
  }
  #samples .container .row.no-gutters div.col-12:nth-child(2) {
    height: 350px;
  }
}
</style>
