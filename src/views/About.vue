<template>
  <v-app>
    <Navbar />
    <div>
      <v-container fluid fill-height style="background-color: black !important">
        <v-row class="mt-12">
          <LoremIpsum />
          <LoremIpsum />
        </v-row>
        <v-row>
          <v-col cols="0" lg="2" md="2" sm="2"></v-col>
          <v-col cols="12" lg="2" md="2" sm="2">
            <v-row justify="center">
              <p class="headline">Francesco</p>
            </v-row>
            <v-row justify="center">
              <v-img
                src="https://picsum.photos/510/300?random"
                max-width="200"
                aspect-ratio="1"
              ></v-img>
            </v-row>
          </v-col>
          <v-col cols="0" lg="1" md="1" sm="1"></v-col>
          <v-col cols="12" lg="2" md="2" sm="2">
            <v-row justify="center">
              <p class="headline">Mattia</p>
            </v-row>
            <v-row justify="center">
              <v-img
                src="https://picsum.photos/510/300?random"
                max-width="200"
                aspect-ratio="1"
              ></v-img>
            </v-row>
          </v-col>
          <v-col cols="0" lg="1" md="1" sm="1"></v-col>
          <v-col cols="12" lg="2" md="2" sm="2">
            <v-row justify="center">
              <p class="headline">Davide</p>
            </v-row>
            <v-row justify="center">
              <v-img
                src="https://picsum.photos/510/300?random"
                max-width="200"
                aspect-ratio="1"
              ></v-img>
            </v-row>
          </v-col>
          <v-col cols="0" lg="2" md="2" sm="2"></v-col>
        </v-row>
      </v-container>
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import LoremIpsum from "../components/LoremIpsum.vue";
export default {
  name: "About",
  components: {
    Navbar: Navbar,
    LoremIpsum: LoremIpsum,
    Footer: Footer
  },
  data() {
    return {
      pasteurs: ["Matteone", "Davidone", "Impetrone"]
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 10%;
  padding: 0 5% 0 5%;
  background-color: black !important;
}
.container .row:nth-child(1),
.container .row:nth-child(2) {
  padding: 5%;
}

.container .row .v-image {
  border-radius: 5%;
}
</style>
