<template>
  <v-app>
    <Navbar />
    <v-container fluid fill-height>
      <v-row style="margin-top: 5%">
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="(pack, i) in packs"
                  :key="i"
                  class="d-flex child-flex"
                  cols="12"
                  lg="4"
                  md="4"
                  sm="6"
                >
                  <v-card flat tile class="d-flex">
                    <v-img
                      :src="require('@/assets/' + pack.img)"
                      aspect-ratio="1"
                      class="grey lighten-2"
                    >
                      <v-card-title>
                        <h5 class="font-weight-thin">{{ pack.name }}</h5>
                      </v-card-title>
                      <v-card-subtitle class="pb-0">Vol. {{ pack.vol }}</v-card-subtitle>
                      <v-card-subtitle class="pb-0">{{ pack.artist }}</v-card-subtitle>
                      <v-card-actions>
                        <v-btn color="orange" text @click="souncloudPrev()">Listen</v-btn>
                      </v-card-actions>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" lg="3" md="4" sm="0"></v-col>
        <v-col cols="12" lg="6" md="4" sm="12" align-self="center">
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            :src="packs[0].soundcloud"
          ></iframe>
        </v-col>
        <v-col cols="0" lg="3" md="4" sm="0"></v-col>
      </v-row>
      <Footer />
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "../components/packs/Navbar.vue";
import Footer from "../components/Footer.vue";
import packs from "../data/packs/packs.json";

export default {
  name: "Packs",
  components: {
    Navbar: Navbar,
    Footer: Footer
  },
  data: () => ({
    packs: packs
  }),
  methods: {
    souncloudPrev() {
      document
        .getElementsByTagName("iframe")[0]
        .setAttribute("src", this.packs.souncloud);
    }
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

.v-card__title,
.v-card__subtitle {
  color: black !important;
}
</style>
