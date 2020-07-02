<template>
  <v-container class="studiocontainer mt-12 mb-12" fluid>
    <v-row v-if="!mobile" class="ma-12" justify="center">
      <v-col cols="1" xl="3" lg="3" md="1" sm="1"></v-col>
      <v-col cols="10" xl="6" lg="6" md="10" sm="10">
        <p
          class="display-2 text-center font-weight-medium mb-4"
          style="font-family: 'Helvetica Now Text' !important"
        >STUDIO</p>
        <p
          class="title font-weight-thin text-center"
          style="font-family: 'Helvetica Now Text' !important; font-weight: 200 !important;"
        >
          Our team of experienced producers and sound engineers offer a wide
          variety of services to help your music meet the highest professional
          standards.
        </p>
      </v-col>
      <v-col cols="1" xl="3" lg="3" md="1" sm="1"></v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="2" lg="3" md="3"></v-col>
      <v-col cols="8" lg="6" md="3">
        <p
          class="display-2 text-center font-weight-medium mb-4"
          style="font-family: 'Helvetica Now Text' !important"
        >STUDIO</p>
        <p class="title font-weight-thin text-center">
          Our team offers a variety of services to help your music meet the
          highest professional standards.
        </p>
      </v-col>
      <v-col cols="2" lg="3" md="3"></v-col>
    </v-row>
    <v-row>
      <v-col cols="1" lg="1" md="1" sm="3"></v-col>
      <v-col v-if="!mobile" cols="10" lg="10" md="10" sm="10">
        <v-row align="center" justify="center">
          <!-- LEFT SPACER -->
          <v-col cols="0" lg="2" md="auto" sm="2"></v-col>

          <!-- LEFT BOX -->
          <v-col id="leftBox" cols="12" lg="3" md="4" sm="8">
            <v-card class="studio pa-12" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title
                    class="title font-weight-medium text-center mb-4"
                    style="font-family: 'Helvetica Now Text' !important"
                  >Improve your music</v-list-item-title>
                  <v-list-item-subtitle
                    v-for="(el, i) in improve"
                    :key="i"
                    class="subtitle-1 font-weight-thin ma-2"
                    style="font-family: 'Helvetica Now Text' !important"
                  >{{ el }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-row align="center" justify="end">
                <v-btn
                  class="text-capitalize"
                  text
                  color="white"
                  href="https://soundbetter.com/profiles/239809-holophonica-studios"
                  target="_blank"
                  style="font-family: 'Helvetica Now Text' !important"
                >Learn More</v-btn>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="0" lg="2" md="1" sm="2"></v-col>

          <!-- RIGHT BOX -->
          <v-col id="rightBox" cols="12" lg="3" md="4" sm="8">
            <v-card class="studio pa-12" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title
                    class="title font-weight-medium text-center mb-4"
                    style="font-family: 'Helvetica Now Text' !important"
                  >Create your music</v-list-item-title>
                  <v-list-item-subtitle
                    v-for="(el, i) in create"
                    :key="i"
                    class="subtitle-1 font-weight-thin ma-2"
                    style="font-family: 'Helvetica Now Text' !important"
                  >{{ el }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-row align="center" justify="end">
                <v-btn
                  class="text-capitalize"
                  text
                  color="white"
                  href="https://soundbetter.com/profiles/239809-holophonica-studios"
                  target="_blank"
                  style="font-family: 'Helvetica Now Text' !important"
                >Learn More</v-btn>
              </v-row>
            </v-card>
          </v-col>
          <!-- RIGHT SPACER -->
          <v-col cols="0" lg="2" md="auto" sm="2"></v-col>
        </v-row>
      </v-col>
      <v-col v-else cols="10" lg="8" md="10" sm="6">
        <v-carousel
          height="120%"
          cycle
          :show-arrows="false"
          hide-delimiter-background
          interval="4000"
        >
          <v-carousel-item>
            <v-col class="studio" cols="12">
              <v-row dense>
                <v-col cols="1"></v-col>
                <v-col cols="11">
                  <p class="headline font-weight-thin mt-4 mb-6">Improve your music</p>
                  <p
                    v-for="(el, i) in improve"
                    :key="i"
                    class="subtitle-2 font-weight-thin"
                  >{{ el }}</p>
                  <v-btn
                    x-small
                    class="float-right text-capitalize mr-4"
                    text
                    outlined
                    color="white"
                    href="https://soundbetter.com/profiles/239809-holophonica-studios"
                    target="_blank"
                    style="bottom: 16%"
                  >learn more</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-carousel-item>
          <v-carousel-item>
            <v-col class="studio" cols="12">
              <v-row dense>
                <v-col cols="1"></v-col>
                <v-col cols="11">
                  <p class="headline font-weight-thin mt-4 mb-6">Create your music</p>
                  <p v-for="(el, i) in create" :key="i" class="subtitle-2 font-weight-thin">{{ el }}</p>
                  <v-btn
                    x-small
                    class="float-right text-capitalize mr-4"
                    text
                    outlined
                    color="white"
                    href="https://soundbetter.com/profiles/239809-holophonica-studios"
                    target="_blank"
                    style="bottom: 16%"
                  >learn more</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="1" lg="1" md="1" sm="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Studio",
  data() {
    return {
      mobile: true,
      improve: ["Mix", "Mastering", "Stem Mastering", "Aod Production"],
      create: [
        "Ghost Production",
        "Beatmaking",
        "Programmed Drums",
        "Sound Design"
      ]
    };
  },
  created() {
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) |
      (window.innerWidth > 768)
    ) {
      this.mobile = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@media only screen and (min-width: 600px) and (max-width: 960px) {
  #rightBox, #leftBox {
    margin-left: 2vw;
  }
}

@media only screen and (max-width: 513px) {
  #rightBox, #leftBox {
    margin-left: 10%;
  }
}

@media only screen and (min-width: 514px) and (max-width: 599px) {
  #rightBox, #leftBox {
    margin-left: 20vw;
  }
}

@media only screen and (min-width: 687px) and (max-width: 959px) {
  #rightBox, #leftBox {
    margin-left: 25vw;
  }
}

.v-card {
  background-color: #1e1e1e !important;
  border: 0px !important;
}

.v-ripple__container {
  background: transparent;
  opacity: 0;
}

.theme--dark.v-btn:hover:before {
  opacity: 0;
}

p {
  font-family: 'Helvetica Now Text' !important;
}

.studio {
  background: #1e1e1e;
  border-radius: 1%;
}
</style>
