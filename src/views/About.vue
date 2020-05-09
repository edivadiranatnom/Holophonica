<template>
  <v-app>
    <Navbar />
    <div>
      <v-container fluid fill-height>
        <v-row style="padding-left: 1%">
          <v-col cols="12" lg="12" md="12" sm="12">
            <p class="display-1">About us</p>
            <p class="subtitle-1"></p>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(pasteur, item) in pasteurs"
            :key="item"
            cols="12"
            lg="4"
            md="4"
            sm="4"
          >
            <v-row justify="center">
              <p class="headline">{{ pasteur }}</p>
            </v-row>
            <v-row>
              <v-img
                src="https://picsum.photos/510/300?random"
                aspect-ratio="1"
              ></v-img>
            </v-row>
            <v-row>
              <LoremIpsum />
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(pasteur, item) in pasteurs"
            :key="item"
            cols="12"
            lg="4"
            md="4"
            sm="4"
          >
            <v-row></v-row>
          </v-col>
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
}
.container .row:nth-child(2),
.container .row:nth-child(3) {
  padding: 5%;
}

.container .row .v-image {
  border-radius: 50%;
}
</style>
