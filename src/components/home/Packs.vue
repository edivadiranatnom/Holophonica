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
                src="../../assets/matty_png/freccia sx.png"
              ></v-img>
            </a>
          </v-row>
        </v-col>
        <v-col v-else></v-col>
        <v-col cols="0" lg="1" md="1" sm="1"></v-col>
        <v-col cols="12" lg="4" md="6" sm="6">
          <div class="samplepackParent">
            <v-img src="../../assets/matty_png/Sample.png"></v-img>
          </div>
          <div id="artworkContainer">
            <vue-flux
              :options="vfOptions"
              :images="vfImages"
              :transitions="vfTransitions"
              ref="slider"
              class="preloader"
            >
              <template v-slot:preloader>
                <flux-preloader />
              </template>
            </vue-flux>
          </div>
          <div class="samplepackParent">
            <v-img src="../../assets/matty_png/packs.png"></v-img>
          </div>
        </v-col>
        <v-col cols="0" lg="1" md="1" sm="1"></v-col>
        <v-col v-if="mobile" cols="0" lg="1" md="1" sm="1">
          <v-row justify="center">
            <a @click="$refs.slider.show('next')">
              <v-img
                min-width="50"
                width="60"
                src="../../assets/matty_png/freccia dx.png"
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
      require("@/assets/matty_png/coverComingSoon.png"),
      require("@/assets/matty_png/coverComingSoon.png")
    ],
    vfTransitions: ["slide"]
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
#artworkContainer {
  border-radius: 0.5%;
  background-color: #1d1d1d;
  border: solid white 1px;
  padding-top: 10%;
  padding-bottom: 5%;
}

#packs {
  background-color: black !important;
}

.vue-flux {
  margin: auto;
  height: 50vh;
  width: 40vh;
}

.samplepackParent {
  width: 80%;
  border-radius: 1%;
  margin: auto;
}
</style>
