<template>
  <!-- <v-container class="mt-12 mt-md-6 mt-sm-6" id="cover" fluid> -->
  <v-container id="cover" fluid>
    <v-row class="mt-3 mt-lg-0 mt-md-0 mt-sm-0" justify="center" align="center">
      <v-col cols="0" lg="2" md="1" sm="1"></v-col>
      <v-col class="mt-3 mt-lg-0 mt-md-1 mt-sm-0" cols="12" lg="8" md="10" sm="10">
        <vue-video-section
          style="z-index: 0 !important"
          elementId="video"
          ref="coverVideo"
          :mp4Source="require('../../assets/video.mp4')"
          :webmSource="require('../../assets/video.webm')"
          :mobileBreakpoint="600"
          :mobileHeight="350"
          :desktopHeight="680"
          :playsinline="true"
          :loop="false"
        ></vue-video-section>
        <p
          id="soundsgood"
          v-if="!mobile"
          class="title font-weight-thin mt-8 mt-sm-0 mt-md-6 mt-lg-4 mb-4 text-center"
        >SOUNDS GOOD</p>
        <p id="soundsgood" v-else class="title font-weight-thin mt-8 mb-4 text-center">SOUNDS GOOD.</p>
        <v-row class="mt-6 mt-xl-6 mt-lg-0 mt-md-0 mt-sm-8"></v-row>
        <v-row class="mt-4 mt-xl-6 mt-lg-8 mt-md-4 mt-sm-6 mb-6">
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
      coverVideo: "",
      mobile: true
    };
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
  },
  mounted() {
    if (this.$store.getters.getStartVideo == false)
      this.$refs.coverVideo.pauseVideo();
    else this.$refs.coverVideo.playVideo();
  },
  computed: {
    boolVideo() {
      return this.$store.getters.getStartVideo;
    }
  },
  watch: {
    boolVideo(val) {
      if (val) this.$refs.coverVideo.playVideo();
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
