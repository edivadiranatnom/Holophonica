<template>
  <v-container class="mt-12 mt-md-6 mt-sm-6" id="cover" fluid>
    <v-row class="pa-6 mt-3 mt-lg-12 mt-md-4 mt-sm-12" justify="center" align="center">
      <v-col cols="0" lg="2" md="1" sm="1"></v-col>
      <v-col class="mt-3 mt-lg-12 mt-md-6 mt-sm-12" cols="12" lg="8" md="10" sm="10">
        <v-img class="imgLogo mx-auto" min-width="200" width="600" src="../../assets/logo.png"></v-img>
        <v-img
          class="mb-6 mb-lg-12 mt-lg-12 mt-md-12 mt-sm-6 mt-9 mx-auto"
          min-width="100"
          width="700"
          src="../../assets/textLogo.png"
        ></v-img>
        <p
          id="soundsgood"
          v-if="!mobile"
          class="display-1 font-italic font-weight-thin mt-8 mt-sm-12 mb-4 text-center"
        >Sounds good.</p>
        <p
          id="soundsgood"
          v-else
          class="title font-italic font-weight-thin mt-8 mb-4 text-center"
        >Sounds good.</p>
        <v-row class="mt-6 mt-xl-6 mt-lg-0 mt-md-12 mt-sm-6"></v-row>
        <v-row class="mt-6 mt-xl-6 mt-lg-8 mt-md-12 mt-sm-6"></v-row>
        <v-row :class="{ 'mt-12': !mobile }" class="mt-xl-0 mt-lg-0 mt-md-12 mt-sm-0"></v-row>
        <v-row :class="{ 'mt-12': !mobile }" class="mt-xl-0 mt-lg-0 mt-md-0 mt-sm-0"></v-row>
        <v-row :class="{ 'mt-12': !mobile }" class="mt-xl-0 mt-lg-0 mt-md-0 mt-sm-12"></v-row>
        <v-row class="mt-6 mt-xl-6 mt-lg-8 mt-md-12 mt-sm-12 mb-6">
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
  }
};
</script>

<style lang="scss">
#soundsgood {
  font-family: "Helvetica Now Text" !important;
}
</style>
