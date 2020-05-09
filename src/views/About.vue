<template>
  <v-app>
    <Navbar />
    <div>
      <v-container fluid fill-height>
        <v-row dense style="min-heigth: 50%; border: solid 1px white">
          <v-col cols="12" sm="12" md="12"></v-col>
        </v-row>
        <v-row dense style="heigth: 50%">
          <v-col cols="12" sm="12" md="12"></v-col>
        </v-row>
      </v-container>
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "About",
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
