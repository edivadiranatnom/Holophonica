<template>
  <v-container class="mt-12 mb-12" fluid fill-heigth>
    <v-row v-if="!mobile" class="ma-12" justify="center">
      <v-col cols="1" xl="3" lg="3" md="1" sm="1"></v-col>
      <v-col cols="10" xl="6" lg="6" md="10" sm="10">
        <p
          class="display-2 text-center font-weight-medium mb-4"
          style="font-family: 'Helvetica Now Text' !important"
        >STUDIO</p>
        <p
          class="title font-weight-regular text-center"
          style="font-family: 'Helvetica Now Text' !important"
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
      <v-col cols="1" lg="1" md="1" sm="1"></v-col>
      <v-col v-if="!mobile" cols="10" lg="10" md="10" sm="10">
        <v-row align="center" justify="center">
          <v-col lg="4" md="4" sm="12">
            <div class="studio pa-12">
              <p
                class="headline font-weight-medium mt-4 text-center"
                style="font-family: 'Helvetica Now Text' !important"
              >Improve your music</p>
              <p
                v-for="(el, i) in improve"
                :key="i"
                class="subtitle-1 font-weight-thin ma-2"
                style="font-family: 'Helvetica Now Text' !important"
              >{{ el }}</p>
              <v-btn
                class="float-right text-capitalize"
                text
                color="white"
                href="https://soundbetter.com/profiles/239809-holophonica-studios"
                target="_blank"
                style="font-family: 'Helvetica Now Text' !important"
              >Learn more</v-btn>
            </div>
          </v-col>
          <v-col lg="4" md="4" sm="12">
            <div class="studio pa-12">
              <p
                class="headline font-weight-medium mt-4 text-center"
                style="font-family: 'Helvetica Now Text' !important"
              >Create your music</p>
              <p
                v-for="(el, i) in create"
                :key="i"
                class="subtitle-1 font-weight-thin ma-2"
                style="font-family: 'Helvetica Now Text' !important"
              >{{ el }}</p>
              <v-btn
                class="float-right text-capitalize"
                text
                color="white"
                href="https://soundbetter.com/profiles/239809-holophonica-studios"
                target="_blank"
                style="font-family: 'Helvetica Now Text' !important"
              >Learn more</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-else cols="10" lg="8" md="10" sm="10">
        <v-carousel
          height="100%"
          cycle
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          interval="4000"
        >
          <v-carousel-item>
            <v-col class="studio" cols="12">
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="11">
                  <p class="headline font-weight-thin mt-4">Improve your music</p>
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
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="11">
                  <p class="headline font-weight-thin mt-4">Create your music</p>
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
      <v-col cols="1" lg="1" md="1" sm="1"></v-col>
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
p {
  font-family: 'Helvetica Now Text' !important;
}

.studio {
  background: #1e1e1e;
  border-radius: 1%;
}
</style>
