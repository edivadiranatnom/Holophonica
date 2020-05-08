<template>
  <v-app>
    <Navbar />
    <div id="cover">
      <v-container fluid fill-height>
        <v-row style="padding: 2%">
          <v-col cols="12" lg="12" md="12" sm="12">
            <p class="display-1">Studio Services</p>
            <p class="subtitle-1">
              In this section you can check our studio services and the relative
              cost.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <!-- Giga Sliderone con Effettone -->
        </v-row>
        <v-row>
          <Footer />
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

<style lang="scss"></style>
