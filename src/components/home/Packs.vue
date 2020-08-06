<template>
  <v-container class="mt-md-12 mt-sm-12 mb-md-12 mb-sm-12" id="packs" fluid>
    <v-row v-if="mobile" align="center" justify="center">
      <v-col cols="1" lg="3" md="3" sm="2"></v-col>
      <v-col cols="10" lg="6" md="6" sm="8">
        <p
          class="display-2 text-center font-weight-medium mb-4"
          style="font-family: 'Helvetica Now Text' !important"
        >SAMPLE PACKS</p>
        <p
          class="title font-weight-thin text-center"
          style="font-family: 'Helvetica Now Text' !important; font-weight: 200 !important;"
        >Our sample packs are the best sample packs in the sample packs market.</p>
      </v-col>
      <v-col cols="1" lg="3" md="3" sm="2"></v-col>
    </v-row>
    <v-row align="center" justify="center">
      <!-- SPACE -->
      <v-col cols="0" lg="1" md="1" sm="0"></v-col>
      <!--  -->

      <!-- LEFT ARROW -->
      <v-col v-show="mobile" v-if="!resize" cols="0" lg="1" md="1" sm="0">
        <v-row justify="center">
          <a @click="slide--">
            <v-img min-width="50" width="60" src="../../assets/leftArrow.png"></v-img>
          </a>
        </v-row>
      </v-col>
      <!--  -->

      <!-- SPACE IN BETWEEN -->
      <v-col cols="0" lg="1" md="1" sm="1"></v-col>
      <!--  -->

      <!-- DESKTOP CAROUSEL -->
      <v-col cols="10" lg="4" md="6" sm="8">
        <p
          v-show="!mobile"
          class="display-1 text-center font-weight-medium mb-4"
          style="font-family: 'Helvetica Now Text' !important"
        >SAMPLE PACKS</p>
        <p
          v-show="!mobile"
          class="font-weight-thin text-center"
          style="font-family: 'Helvetica Now Text' !important"
        >Our sample packs range from Trap to Techno with high quality standards.</p>
        <v-carousel v-if="mobile" :show-arrows="false" v-model="slide" cycle hide-delimiters>
          <v-carousel-item v-for="(slide, i) in slides" target="_blank" :key="i">
            <div class="img-contain">
              <transition name="flip" mode="out-in">
                <slot v-if="!isShowing"></slot>
                <v-img
                  v-else
                  class="carousel mt-12"
                  aspect-ratio="1"
                  max-width="400"
                  :src="slide"
                  style="margin: auto; border-radius: 1%"
                >
                  <a href="https://splice.com/" target="_blank" style="text-decoration: none">
                    <div class="overlay pa-6">
                      <p
                        class="sample-description subtitle-1 text-justify ma-lg-12 ma-6"
                        style="font-family: 'Helvetica Now Text' !important"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla facilisis nec risus et sodales. Nam sodales
                        vulputate quam ultrices pellentesque.
                      </p>
                    </div>
                  </a>
                </v-img>
              </transition>
            </div>
          </v-carousel-item>
        </v-carousel>
        <!-- MOBILE CAROUSEL -->
        <v-carousel
          v-else
          :show-arrows="false"
          v-model="slide"
          cycle
          height="120%"
          hide-delimiter-background
          show-arrows-on-hover
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
      <v-col v-show="mobile" v-if="!resize" cols="0" lg="1" md="1">
        <v-row justify="center">
          <a @click="slide++">
            <v-img min-width="50" width="60" src="../../assets/rightArrow.png"></v-img>
          </a>
        </v-row>
      </v-col>
      <!--  -->

      <!-- SPACE -->
      <v-col cols="0" lg="1" md="1" sm="0"></v-col>
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
    resize: false,
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
      ) |
      (window.innerWidth > 768)
    ) {
      this.mobile = true;
    }
    if (window.innerWidth < 768) {
      this.resize = true;
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleWindowResize);
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
  methods: {
    handleWindowResize(e) {
      let width = e.currentTarget.innerWidth;
      if (width < 960) {
        this.resize = true;
      } else {
        this.resize = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  font-family: "Helvetica Now Text" !important;
}

.sample-description {
  color: white;
}

.carousel {
  border-radius: 1%;
  background: #1e1e1e;
}

img {
  cursor: pointer;
  transform: scaleY(1) translateZ(0);
  margin: 5px;
}

.img-contain:hover .overlay {
  opacity: 1;
  background: hsla(50, 0%, 0%, 0.75);
  backdrop-filter: blur(3px);
  transition: 0.2s opacity ease-out;
}

.img-contain .overlay {
  height: 100%;
  opacity: 0;
  overflow: hidden;
  transition: 0.2s opacity ease-in;
}

.flip-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
}

.flip-leave-active {
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
}

.flip-enter,
.flip-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}
</style>
