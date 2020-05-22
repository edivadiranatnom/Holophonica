<template>
  <div id="packs" class="section">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="0" lg="3" md="3" sm="0"></v-col>

        <v-col v-if="mobile" cols="2" lg="1" md="1" sm="2" align="center">
          <v-row justify="center">
            <a @click="model--" class="mr-12">
              <v-img
                min-width="50"
                width="60"
                src="../../assets/leftArrow.png"
              ></v-img>
            </a>
          </v-row>
        </v-col>
        <v-col v-else></v-col>
        <v-col cols="8" lg="4" md="4" sm="8" align="center" justify="center">
          <v-row justify="center" align="center">
            <h1 class="display-2 font-weight-medium text-uppercase">
              Sample Pack
            </h1>
            <v-carousel
              v-model="model"
              cycle
              hide-delimiters
              :show-arrows="false"
              interval="3000"
            >
              <v-carousel-item v-for="(pack, i) in packs" :key="i">
                <v-col cols="12">
                  <v-row>
                    <v-img
                      :src="require('@/assets/' + pack.img)"
                      class="white--text align-end"
                    ></v-img>
                  </v-row>
                </v-col>
              </v-carousel-item>
            </v-carousel>
          </v-row>
        </v-col>

        <v-col v-if="mobile" cols="2" lg="1" md="1" sm="2">
          <v-row justify="center">
            <a @click="model++" class="ml-12">
              <v-img
                min-width="50"
                width="60"
                src="../../assets/rightArrow.png"
              ></v-img>
            </a>
          </v-row>
        </v-col>
        <v-col v-else></v-col>
        <v-col cols="0" lg="3" md="3" sm="0"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import packs from "../../data/home/packs.json";

export default {
  name: "Packs",
  data: () => ({
    packs: packs,
    model: 1,
    mobile: false
  }),
  created() {
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.mobile = true;
    }
  }
};
</script>

<style lang="scss">
#packs {
  background-color: black !important;
}
</style>
