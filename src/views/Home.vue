<template>
  <v-app style="background: black !important">
    <Navbar />
    <v-content style="margin-top: 60px !important">
      <Cover style="background: black !important" />
      <v-container id="studio" style="background: black !important" fluid>
        <v-divider class="mr-6 ml-6 mr-md-12 ml-md-12 mr-lg-12 ml-lg-12"></v-divider>
      </v-container>
      <Studio style="background: black !important" />
      <v-container id="packs" style="background: black !important" fluid>
        <v-divider class="mr-6 ml-6 mr-md-12 ml-md-12 mr-lg-12 ml-lg-12"></v-divider>
      </v-container>
      <Packs style="background: black !important" />
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        class="ma-6"
        small
        fixed
        fab
        bottom
        right
        color="white"
        direction="top"
        @click="toTop"
      >
        <v-icon color="black">mdi-arrow-up</v-icon>
      </v-btn>
    </v-content>

    <Footer style="background: black !important" />

    <NewsletterModal />
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NewsletterModal from "../components/home/NewsletterModal.vue";
import Cover from "../components/home/Cover.vue";
import Studio from "../components/home/Studio.vue";
import Footer from "../components/Footer.vue";
import Packs from "../components/home/Packs.vue";

export default {
  name: "Home",
  components: {
    Navbar: Navbar,
    NewsletterModal: NewsletterModal,
    Cover: Cover,
    Studio: Studio,
    Packs: Packs,
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
    serviceText: "",
    fab: false
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    onScroll(e) {
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > (window.innerHeight / 10) * 18;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style lang="scss">
@import url("../assets/font/stylesheet.css");
.v-divider {
  background-color: white;
}

.border {
  border: solid red 1px;
}
</style>
