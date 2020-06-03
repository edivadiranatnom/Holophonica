<template>
  <v-container id="packs" fluid>
    <v-row v-if="mobile" align="center" justify="center">
      <v-col cols="1" lg="3" md="3" sm="2"></v-col>
      <v-col cols="10" lg="6" md="6" sm="8">
        <p class="display-2 text-center font-weight-medium mb-4">
          SAMPLE PACKS
        </p>
        <p class="font-weight-thin text-center">
          Our sample packs are the best sample packs in the sample packs market.
        </p>
      </v-col>
      <v-col cols="1" lg="3" md="3" sm="2"></v-col>
    </v-row>
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
        <p
          v-show="!mobile"
          class="display-1 text-center font-weight-medium mb-4"
        >
          SAMPLE PACKS
        </p>
        <p v-show="!mobile" class="font-weight-thin text-center">
          Our sample packs are the best sample packs in the sample packs market.
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
            <div class="img-contain">
              <transition name="flip" mode="out-in">
                <slot v-if="!isShowing"></slot>
                <v-img v-else :src="slide" alt>
                  <div class="overlay pa-12">
                    <a
                      href="https://splice.com/"
                      target="_blank"
                      style="text-decoration: none; color: white"
                    >
                      <p class="title font-weight-thin">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla facilisis nec risus et sodales. Nam sodales
                        vulputate quam ultrices pellentesque. Ut malesuada purus
                        vulputate, rhoncus metus consectetur, pulvinar lectus.
                        Donec eu volutpat tortor, sed congue nisi. Praesent
                        feugiat ex vel odio viverra tempor.
                      </p>
                    </a>
                  </div>
                </v-img>
              </transition>
            </div>
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
    <v-row></v-row>
  </v-container>
</template>

<script>
import packs from "../../data/home/packs.json";

export default {
  name: "Packs",
  data: () => ({
    packs: packs,
    isShowing: true,
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

<style lang="scss" scoped>
img {
  cursor: pointer;
  transform: scaleY(1) translateZ(0);
  margin: 5px;
}

.img-contain:hover .overlay {
  opacity: 1;
  background: hsla(50, 0%, 0%, 0.6);
  transition: 0.3s opacity ease-out;
}

.img-contain .overlay {
  height: 100%;
  opacity: 0;
  overflow: hidden;
  transition: 0.3s opacity ease-in;
}

.flip-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
}

.flip-leave-active {
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
}

.flip-enter,
.flip-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}
</style>
