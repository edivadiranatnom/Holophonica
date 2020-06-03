<template>
  <v-app>
    <Navbar />
    <v-content style="margin-top: 68px !important">
      <Cover />
      <v-container fluid>
        <v-divider class="mr-12 ml-12"></v-divider>
      </v-container>
      <Studio />
      <v-container fluid>
        <v-divider class="mr-12 ml-12"></v-divider>
      </v-container>
      <Packs />
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
    <Footer />
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
      this.fab = top > (window.innerHeight / 10) * 22;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style lang="scss">
.v-divider {
  background-color: white;
}
</style>
