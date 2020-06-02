<template>
  <v-hover v-slot:default="{ hover }">
    <v-container class="mb-12 mt-12" id="packs" fluid>
      <v-row align="center" justify="center">
        <!-- SPACE -->
        <v-col cols="0" lg="1" md="1" sm="0"></v-col>
        <!--  -->

        <!-- LEFT ARROW -->
        <v-col v-show="mobile" cols="1" lg="1" md="1" sm="1">
          <v-row justify="center">
            <a @click="slide--">
              <v-img
                min-width="50"
                width="60"
                src="../../assets/leftArrow.png"
              ></v-img>
            </a>
          </v-row>
        </v-col>
        <!--  -->

        <!-- SPACE IN BETWEEN -->
        <v-col cols="0" lg="1" md="1" sm="1"></v-col>
        <!--  -->

        <!-- CAROUSEL -->
        <v-col cols="10" lg="4" md="6" sm="6">
          <p v-if="mobile" class="text-center display-2 font-weigth-medium">
            Sample Packs
          </p>
          <p v-else class="text-center display-1 font-weigth-medium">
            Sample Packs
          </p>

          <v-carousel
            v-if="mobile"
            :show-arrows="false"
            v-model="slide"
            cycle
            height="400"
            hide-delimiters
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-img :aspect-ratio="1 / 1" :src="slide">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    $14.99
                  </div>
                </v-expand-transition>
              </v-img>
            </v-carousel-item>
          </v-carousel>
          <v-carousel
            v-else
            :show-arrows="false"
            v-model="slide"
            cycle
            height="100%"
            hide-delimiter-background
            show-arrows-on-hover
            delimiter-icon="mdi-minus"
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-img :aspect-ratio="1 / 1" :src="slide"></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <!--  -->

        <!-- SPACE IN BETWEEN -->
        <v-col cols="0" lg="1" md="1" sm="1"></v-col>
        <!--  -->

        <!-- RIGHT ARROW -->
        <v-col v-show="mobile" cols="1" lg="1" md="1" sm="1">
          <v-row justify="center">
            <a @click="slide++">
              <v-img
                min-width="50"
                width="60"
                src="../../assets/rightArrow.png"
              ></v-img>
            </a>
          </v-row>
        </v-col>
        <!--  -->

        <!-- SPACE -->
        <v-col cols="0" lg="1" md="1" sm="1"></v-col>
        <!--  -->
      </v-row>
    </v-container>
  </v-hover>
</template>

<script>
import packs from "../../data/home/packs.json";

export default {
  name: "Packs",
  data: () => ({
    packs: packs,
    mobile: false,
    slide: 0,
    slides: [
      require("@/assets/matty_png/coverComingSoon.png"),
      require("@/assets/matty_png/coverComingSoon.png")
    ]
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
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
