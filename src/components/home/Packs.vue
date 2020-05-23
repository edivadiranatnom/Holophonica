<template>
  <div id="packs" class="section">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="0" lg="1" md="1" sm="0"></v-col>
        <v-col v-if="mobile" cols="0" lg="1" md="1" sm="1">
          <v-row justify="center">
            <a @click="$refs.slider.show('prev')">
              <v-img
                min-width="50"
                width="60"
                src="../../assets/leftArrow.png"
              ></v-img>
            </a>
          </v-row>
        </v-col>
        <v-col v-else></v-col>
        <v-col cols="0" lg="1" md="1" sm="1"></v-col>
        <v-col cols="12" lg="4" md="4" sm="4">
          <p class="display-1 text-center">SAMPLE</p>
          <div style="padding:10%; border: solid white 1px; border-radius: 1%">
            <vue-flux
              :options="vfOptions"
              :images="vfImages"
              :transitions="vfTransitions"
              ref="slider"
              style="margin: auto;"
            >
              <template v-slot:preloader>
                <flux-preloader />
              </template>
            </vue-flux>
          </div>
          <p class="display-1 text-center mt-4">PACKS</p>
        </v-col>
        <v-col cols="0" lg="1" md="1" sm="1"></v-col>
        <v-col v-if="mobile" cols="0" lg="1" md="1" sm="1">
          <v-row justify="center">
            <a @click="$refs.slider.show('next')">
              <v-img
                min-width="50"
                width="60"
                src="../../assets/rightArrow.png"
              ></v-img>
            </a>
          </v-row>
        </v-col>
        <v-col v-else></v-col>
        <v-col cols="0" lg="1" md="1" sm="1"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import packs from "../../data/home/packs.json";
import { VueFlux, FluxPreloader } from "vue-flux";

export default {
  name: "Packs",
  components: {
    VueFlux: VueFlux,
    FluxPreloader: FluxPreloader
  },
  data: () => ({
    packs: packs,
    model: 1,
    mobile: false,
    vfOptions: {
      autoplay: true,
      enableGestures: true,
      aspectRatio: "9:16"
    },
    vfImages: [
      require("@/assets/testimg.jpg"),
      require("@/assets/testTour.jpg")
    ],
    vfTransitions: ["cube", "fade", "fall", "slide", "swipe"]
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

.vue-flux {
  height: 50vh;
}
</style>
