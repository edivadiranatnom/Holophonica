<template>
  <div id="packs" class="section">
    <v-container fluid>
      <v-row>
        <v-col cols="0" lg="3" md="3" sm="3"></v-col>
        <v-col cols="12" lg="6" md="6" sm="6">
          <v-row justify="center">
            <p class="display-2">Sample</p>
          </v-row>
          <v-row align="center">
            <v-carousel
              cycle
              hide-delimiters
              show-arrows-on-hover
              interval="15000"
              @change="onChangeSlide"
            >
              <v-carousel-item v-for="(pack, i) in packs" :key="i" class="pa-9">
                <v-img
                  :src="require('@/assets/' + pack.img)"
                  class="white--text align-end"
                ></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-row>
          <v-row justify="center">
            <p class="display-2 mt-12">Pack</p>
          </v-row>
        </v-col>
        <v-col cols="0" lg="3" md="3" sm="3"></v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "../Footer.vue";
import packs from "../../data/home/packs.json";

export default {
  name: "Packs",
  components: {
    Footer: Footer
  },
  data: () => ({
    packs: packs
  })
};
</script>

<style lang="scss">
#packs {
  background-color: black !important;
}
</style>
