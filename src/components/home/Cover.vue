<template>
  <!-- <v-container class="mt-12 mt-md-6 mt-sm-6" id="cover" fluid> -->
  <v-container id="cover" fluid>
    <v-row class="mt-3 mt-lg-0 mt-md-0 mt-sm-12" justify="center" align="center">
      <v-col cols="0" lg="2" md="1" sm="1"></v-col>
      <v-col class="mt-3 mt-lg-0 mt-md-6 mt-sm-12" cols="12" lg="8" md="10" sm="10">
        <vue-video-section
          style="z-index: 0 !important"
          elementId="video"
          :mp4Source="require('../../assets/video.mp4')"
          :webmSource="require('../../assets/video.webm')"
          :mobileBreakpoint="600"
          :mobileHeight="350"
          :desktopHeight="680"
          :playsinline="true"
          :autoplay="true"
          :loop="false"
        ></vue-video-section>
        <p
          id="soundsgood"
          v-if="!mobile"
          class="title font-weight-thin mt-8 mt-sm-12 mb-4 text-center"
        >SOUNDS GOOD</p>
        <p id="soundsgood" v-else class="title font-weight-thin mt-8 mb-4 text-center">SOUNDS GOOD.</p>
        <v-row class="mt-0 mt-xl-6 mt-lg-0 mt-md-12 mt-sm-6"></v-row>
        <v-row class="mt-6 mt-xl-6 mt-lg-0 mt-md-12 mt-sm-6"></v-row>
        <v-row :class="{ 'mt-12': !mobile }" class="mt-xl-0 mt-lg-0 mt-md-12 mt-sm-0"></v-row>
        <v-row :class="{ 'mt-12': !mobile }" class="mt-xl-0 mt-lg-0 mt-md-0 mt-sm-0"></v-row>
        <v-row :class="{ 'mt-12': !mobile }" class="mt-xl-0 mt-lg-0 mt-md-0 mt-sm-12"></v-row>
        <v-row class="mt-12 mt-xl-6 mt-lg-8 mt-md-0 mt-sm-12 mb-6">
          <v-img
            class="mx-auto"
            src="../../assets/arrowdown.png"
            max-width="40"
            @click="$vuetify.goTo('#studio')"
            style="cursor: pointer"
          ></v-img>
        </v-row>
      </v-col>
      <v-col cols="0" lg="2" md="1" sm="1"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Cover",
  data() {
    return {
      videoId: "YbD_TkBXH1w",
      playerVars: {
        autoplay: 1,
        showinfo: 0,
        controls: 0
      },
      mobile: true
    };
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  },
  created() {
    if (
      !/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.mobile = false;
    } else {
      this.responsive = "mt-6";
    }
  }
};
</script>

<style lang="scss">
.vue-video-section__overlay-content-wrapper__background {
  visibility: hidden !important;
}
.vue-video-section-wrapper {
  background-color: black !important;
}
#soundsgood {
  font-family: "Helvetica Now Text" !important;
  letter-spacing: 5px !important;
  font-weight: 400 !important;
}
</style>
