<template>
  <v-container id="studio" fluid fill-heigth>
    <v-row v-if="mobile" class="ma-12">
      <v-col cols="1" lg="3" md="3" sm="2"></v-col>
      <v-col cols="10" lg="6" md="6" sm="8">
        <p class="display-2 text-center font-weight-medium mb-4">STUDIO</p>
        <p class="font-weight-thin text-center">
          Our team of experienced producers and sound engineers offer a wide
          variety of services to help your music meet the highest professional
          standards.
        </p>
      </v-col>
      <v-col cols="1" lg="3" md="3" sm="2"></v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="1" lg="0" md="2" sm="2"></v-col>
      <v-col cols="10" lg="12" md="8" sm="8">
        <p class="display-2 text-center font-weight-medium mb-4">STUDIO</p>
        <p class="font-weight-thin text-center">
          Our team offers a variety of services to help your music meet the
          highest professional standards.
        </p>
      </v-col>
      <v-col cols="1" lg="0" md="0" sm="0"></v-col>
    </v-row>
    <v-row>
      <v-col cols="1" lg="2" md="3" sm="2"></v-col>
      <v-col v-if="mobile" cols="10" lg="8" md="8" sm="8">
        <v-row>
          <v-col id="leftStudio" cols="12" lg="5" md="5" sm="12">
            <v-row>
              <v-col cols="1"></v-col>
              <v-col cols="10">
                <p class="headline font-weight-thin mt-4 text-center">
                  Improve your music
                </p>
              </v-col>
              <v-col cols="1"></v-col>
            </v-row>
            <v-row>
              <v-col cols="1"></v-col>
              <v-col v-if="mobile" cols="9">
                <p
                  v-for="(el, i) in improve"
                  :key="i"
                  class="title font-weight-thin ma-2"
                >
                  {{ el }}
                </p>
              </v-col>
              <v-col v-else cols="9">
                <p
                  v-for="(el, i) in improve"
                  :key="i"
                  class="font-weight-thin ma-2"
                >
                  {{ el }}
                </p>
              </v-col>
              <v-col cols="2">
                <v-btn
                  class="float-right text-lowercase"
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
                <p class="headline font-weight-thin mt-4 text-center">
                  Create your music
                </p>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <v-row>
              <v-col cols="1"></v-col>
              <v-col v-if="mobile" cols="9">
                <p
                  v-for="(el, i) in create"
                  :key="i"
                  class="title font-weight-thin ma-2"
                >
                  {{ el }}
                </p>
              </v-col>
              <v-col v-else cols="9">
                <p
                  v-for="(el, i) in create"
                  :key="i"
                  class="font-weight-thin ma-2"
                >
                  {{ el }}
                </p>
              </v-col>
              <v-col cols="2">
                <v-btn
                  class="float-right text-lowercase"
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

      <v-col v-else cols="10" lg="8" md="8" sm="8">
        <v-carousel
          height="110%"
          cycle
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          interval="4000"
        >
          <v-carousel-item>
            <v-col id="leftStudio" cols="12">
              <v-row>
                <v-col cols="12">
                  <p class="headline font-weight-thin mt-4 text-center">
                    Improve your music
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="11">
                  <p
                    v-for="(el, i) in improve"
                    :key="i"
                    class="font-weight-thin ma-2"
                  >
                    {{ el }}
                  </p>
                  <v-btn
                    x-small
                    class="text-capitalize float-right"
                    outlined
                    rounded
                    color="white"
                    href="https://soundbetter.com/profiles/239809-holophonica-studios"
                    target="_blank"
                    >More</v-btn
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-carousel-item>
          <v-carousel-item>
            <v-col id="rightStudio" cols="12">
              <v-row>
                <v-col cols="12">
                  <p class="headline font-weight-thin mt-4 text-center">
                    Create your music
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="11">
                  <p
                    v-for="(el, i) in create"
                    :key="i"
                    class="font-weight-thin ma-2"
                  >
                    {{ el }}
                  </p>
                  <v-btn
                    x-small
                    class="text-capitalize float-right"
                    outlined
                    rounded
                    color="white"
                    href="https://soundbetter.com/profiles/239809-holophonica-studios"
                    target="_blank"
                    >More</v-btn
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="1" lg="2" md="3" sm="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Studio",
  data() {
    return {
      mobile: false,
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
      )
    ) {
      this.mobile = true;
    }
  }
};
</script>
