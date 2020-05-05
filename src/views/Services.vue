<template>
  <v-app>
    <Navbar />
    <div id="cover">
      <v-container fluid>
        <v-row dense>
          <v-col></v-col>
        </v-row>
      </v-container>
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Navbar from "../components/services/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Services",
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="scss">
#cover {
  background-image: url("../assets/black.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
