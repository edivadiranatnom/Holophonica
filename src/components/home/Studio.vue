<template>
  <div id="studio" class="section">
    <v-container fluid fill-heigth>
      <v-row v-if="mobile" class="ma-12">
        <v-col cols="1" lg="3" md="3" sm="2"></v-col>
        <v-col cols="10" lg="6" md="6" sm="8">
          <h3 class="display-2 text-center font-weight-medium mb-4">STUDIO</h3>
          <h3 class="font-weight-thin text-center">
            Thanks to our team of experienced producers and sound engineers we
            offer a wide variety of services to help your music meet the highest
            professional standards.
          </h3>
        </v-col>
        <v-col cols="1" lg="3" md="3" sm="2"></v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="1" lg="0" md="2" sm="2"></v-col>
        <v-col cols="10" lg="12" md="8" sm="8">
          <h3 class="display-2 text-center font-weight-medium mb-4">STUDIO</h3>
          <h3 class="font-weight-thin text-center">
            Thanks to our team of experienced producers and sound engineers we
            offer a wide variety of services to help your music meet the highest
            professional standards.
          </h3>
        </v-col>
        <v-col cols="1" lg="0" md="0" sm="0"></v-col>
      </v-row>
      <v-row>
        <v-col cols="1" lg="2" md="3" sm="2"></v-col>
        <v-col v-if="mobile" cols="10" lg="8" md="8" sm="8">
          <v-row>
            <v-col id="leftStudio" cols="12" lg="5" md="5" sm="12">
              <v-row>
                <v-col cols="2"></v-col>
                <v-col cols="8">
                  <h3 class="headline font-weight-thin mt-4 text-center">
                    Improve your music
                  </h3>
                </v-col>
                <v-col cols="2"></v-col>
              </v-row>
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="11">
                  <h3 class="font-weight-thin ma-6">Mix</h3>
                  <h3 class="font-weight-thin ma-6">Mastering</h3>
                  <h3 class="font-weight-thin ma-6">Stem Mastering</h3>
                  <h3 class="font-weight-thin ma-6">Aod Production</h3>
                  <v-btn
                    class="mr-12 mb-12 float-right text-lowercase"
                    outlined
                    rounded
                    color="white"
                    href="https://soundbetter.com/profiles/239809-holophonica-studios"
                    target="_blank"
                    >Learn more</v-btn
                  >
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="2" lg="2" md="2" sm="2"></v-col>
            <v-col id="rightStudio" cols="12" lg="5" md="5" sm="12">
              <v-row>
                <v-col cols="2"></v-col>
                <v-col cols="8">
                  <h3 class="headline font-weight-thin mt-4 text-center">
                    Create your music
                  </h3>
                </v-col>
                <v-col cols="2"></v-col>
              </v-row>
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="11">
                  <h3 class="font-weight-thin ma-6">Ghost Production</h3>
                  <h3 class="font-weight-thin ma-6">Beatmaking</h3>
                  <h3 class="font-weight-thin ma-6">Programmed Drums</h3>
                  <h3 class="font-weight-thin ma-6">Sound Design</h3>
                  <v-btn
                    class="mr-12 mb-12 float-right text-lowercase"
                    outlined
                    rounded
                    color="white"
                    href="https://soundbetter.com/profiles/239809-holophonica-studios"
                    target="_blank"
                    >Learn more</v-btn
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-else cols="10" lg="8" md="6" sm="8">
          <v-carousel height="100%" cycle :show-arrows="false" interval="4000">
            <v-carousel-item>
              <v-col id="leftStudio" cols="12">
                <v-row>
                  <v-col cols="1"></v-col>
                  <v-col cols="10">
                    <h3 class="headline font-weight-thin mt-4 text-center">
                      Improve your music
                    </h3>
                  </v-col>
                  <v-col cols="1"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="1"></v-col>
                  <v-col cols="11">
                    <h3 class="font-weight-thin ma-2">Mix</h3>
                    <h3 class="font-weight-thin ma-2">Mastering</h3>
                    <h3 class="font-weight-thin ma-2">Stem Mastering</h3>
                    <h3 class="font-weight-thin ma-2">Aod Production</h3>
                    <v-btn
                      class="mr-6 mb-12 float-right text-lowercase learnmore"
                      outlined
                      rounded
                      small
                      color="white"
                      href="https://soundbetter.com/profiles/239809-holophonica-studios"
                      >Learn more</v-btn
                    >
                  </v-col>
                </v-row>
              </v-col>
            </v-carousel-item>
            <v-carousel-item>
              <v-col id="rightStudio" cols="12">
                <v-row>
                  <v-col cols="2"></v-col>
                  <v-col cols="8">
                    <h3 class="headline font-weight-thin mt-4 text-center">
                      Create your music
                    </h3>
                  </v-col>
                  <v-col cols="2"></v-col>
                </v-row>
                <v-row>
                  <v-col cols="1"></v-col>
                  <v-col cols="11">
                    <h3 class="font-weight-thin ma-2">Ghost Production</h3>
                    <h3 class="font-weight-thin ma-2">Beatmaking</h3>
                    <h3 class="font-weight-thin ma-2">Programmed Drums</h3>
                    <h3 class="font-weight-thin ma-2">Sound Design</h3>
                    <v-btn
                      class="mr-6 mb-12 float-right text-lowercase learnmore"
                      outlined
                      rounded
                      small
                      color="white"
                      href="https://soundbetter.com/profiles/239809-holophonica-studios"
                      >Learn more</v-btn
                    >
                  </v-col>
                </v-row>
              </v-col>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="1" lg="2" md="3" sm="2"></v-col>
      </v-row>
      <v-row class="ma-12"></v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Studio",
  data() {
    return {
      mobile: false
    };
  },
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
#leftStudio,
#rightStudio {
  padding: 0 2% 0 2%;
  background-color: #212121;
}

#studio {
  background-color: black !important;
}
</style>
