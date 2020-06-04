<template>
  <v-container class="mt-12 mb-12" fluid fill-heigth>
    <v-row v-if="!mobile" class="ma-12" justify="center">
      <v-col cols="3"></v-col>
      <v-col cols="6">
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
      <v-col cols="3"></v-col>
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
      <v-col cols="1" lg="1" md="3" sm="3"></v-col>
      <v-col v-if="!mobile" cols="10" lg="10" md="6" sm="6">
        <v-row align="center" justify="space-around">
          <div class="studio pa-12" style="width: 25vw">
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
          <div class="studio pa-12" style="width: 25vw">
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
        </v-row>
      </v-col>

      <v-col v-else cols="10" lg="8" md="6" sm="6">
        <v-carousel
          height="110%"
          cycle
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          interval="4000"
        >
          <v-carousel-item>
            <v-col class="studio" cols="12">
              <v-row>
                <v-col cols="12">
                  <p class="headline font-weight-thin mt-4 text-center">Improve your music</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="11">
                  <p v-for="(el, i) in improve" :key="i" class="font-weight-thin ma-2">{{ el }}</p>
                  <v-btn
                    x-small
                    class="float-right text-capitalize"
                    text
                    color="white"
                    href="https://soundbetter.com/profiles/239809-holophonica-studios"
                    target="_blank"
                  >learn more</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-carousel-item>
          <v-carousel-item>
            <v-col class="studio" cols="12">
              <v-row>
                <v-col cols="12">
                  <p class="headline font-weight-thin mt-4 text-center">Create your music</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="11">
                  <p v-for="(el, i) in create" :key="i" class="font-weight-thin ma-2">{{ el }}</p>
                  <v-btn
                    x-small
                    class="float-right text-capitalize"
                    text
                    color="white"
                    href="https://soundbetter.com/profiles/239809-holophonica-studios"
                    target="_blank"
                  >learn more</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="1" lg="1" md="3" sm="3"></v-col>
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
