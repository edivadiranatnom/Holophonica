<template>
  <v-app>
    <Navbar />
    <v-content>
      <full-page ref="fullpage" :options="options">
        <Cover />
        <Studio />
        <Packs />
      </full-page>
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
    serviceText: ""
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="scss">
#cover {
  background-color: black;
}
</style>
