<template>
  <v-app>
    <Navbar />
    <v-content style="margin-top: 68px !important">
      <div>
        <v-container fluid>
          <v-row justify="center">
            <p
              v-if="mobile"
              class="display-1 text-center"
              style="font-family: 'Helvetica Now Text' !important"
            >Holophonica</p>
            <p
              v-else
              class="display-4"
              style="font-family: 'Helvetica Now Text' !important"
            >Holophonica Studios</p>
          </v-row>
          <v-divider class="mr-6 ml-6 mb-12"></v-divider>
          <v-row class="ml-12 mr-12">
            <div v-if="mobile"></div>
            <div v-else>
              <p
                class="headline mb-12 text-justify"
                style="font-family: 'Helvetica Now Text' !important"
              >
                Holophonica is the brainchild of three friends and producers who
                decided to offer their knowledge to help people bring their
                ideas to life.
              </p>
              <p class="body-1 text-justify" style="font-family: 'Helvetica Now Text' !important">
                Credits include releases on Universal, Spinnin', Monstercat,
                STMPD. Through the years, we gained extensive experience in
                multiple genres. We worked with artists such as Khalid, Martin
                Garrix, OG Maco as well as Edit Select and Antonio Ruscito for
                the techno/ambient scene. Besides this, we specialize in
                Mix/Mastering and Sound Design services. Davide, Francesco and
                Mattia are 3 producers from Italy; they have been producing,
                mixing and mastering full time for over 8 years.
              </p>
              <p class="body-1 text-justify" style="font-family: 'Helvetica Now Text' !important">
                Davide (Surt) works in the techno/ambient field with releases on
                Planet Rhythm, Edit Select, Informa, Northallsen and Affuté
                under his belt. He is particularly skilled in producing huge
                melodic/trancey techno anthems with catchy leads and oneiric
                celestial soundscapes, as well as 4/4 to the floor techno tracks
                with strong basslines and throbbing drum patterns.
              </p>
              <p class="body-1 text-justify" style="font-family: 'Helvetica Now Text' !important">
                Mattia (Goja/Falling Down) works in the EDM/electronic scene. He
                started playing the piano at 5 and the bass guitar at 12. At 20,
                he founded "Goja"; through this project, he had the chance to
                work alongside big acts such as Martin Garrix, Khalid, Dyro and
                more, releasing tracks on STMPD (Martin Garrix's label),
                Universal Music, Monstercat, Spinnin' Records, Axtone (Axwell's
                label), Musical Freedom (Tiësto's label), Kannibalen Records,
                and Wolv (Dyro's label). In 2020 he started to write his first
                album under his new project "Falling Down".
              </p>
              <p class="body-1 text-justify" style="font-family: 'Helvetica Now Text' !important">
                Francesco (Frank The Traveler) co-founded Goja and has been part
                of the project until 2018; he is now producing under his new
                project 'Frank The Traveler' for Pop and Hip Hop artists.
              </p>
            </div>
            <v-col v-if="mobile" cols="12">
              <v-carousel height="100%" cycle hide-delimiters :show-arrows="false" interval="2000">
                <v-carousel-item>
                  <v-row justify="center">
                    <v-img src="../assets/portraits/francesco.png" max-width="200" aspect-ratio="1"></v-img>
                  </v-row>
                  <v-row justify="center">
                    <v-btn
                      class="text-lowercase"
                      target="_blank"
                      icon
                      href="https://www.instagram.com/frankthetraveler"
                      style="font-family: 'Helvetica Now Text' !important"
                    >
                      <v-icon small>mdi-instagram</v-icon>&nbsp;frankthetraveler
                    </v-btn>
                  </v-row>
                </v-carousel-item>
                <v-carousel-item>
                  <v-row justify="center">
                    <v-img src="../assets/portraits/mattia.png" max-width="200" aspect-ratio="1"></v-img>
                  </v-row>
                  <v-row justify="center">
                    <v-btn
                      class="text-lowercase"
                      target="_blank"
                      icon
                      href="https://www.instagram.com/itsgoja"
                      style="font-family: 'Helvetica Now Text' !important"
                    >
                      <v-icon small>mdi-instagram</v-icon>&nbsp;itsgoja
                    </v-btn>
                  </v-row>
                </v-carousel-item>
                <v-carousel-item>
                  <v-row justify="center">
                    <v-img src="../assets/portraits/davide.jpg" max-width="200" aspect-ratio="1"></v-img>
                  </v-row>
                  <v-row justify="center">
                    <v-btn
                      class="text-lowercase"
                      target="_blank"
                      icon
                      href="https://www.instagram.com/iamsurt"
                      style="font-family: 'Helvetica Now Text' !important"
                    >
                      <v-icon small>mdi-instagram</v-icon>&nbsp;iamsurt
                    </v-btn>
                  </v-row>
                </v-carousel-item>
              </v-carousel>
            </v-col>
            <v-row v-else>
              <v-col cols="0" lg="2" md="2" sm="2"></v-col>
              <v-col class="mt-12" lg="2" md="2" sm="2">
                <v-row justify="center">
                  <v-img src="../assets/portraits/francesco.png" max-width="200" aspect-ratio="1"></v-img>
                </v-row>
                <v-row justify="center">
                  <v-btn
                    class="text-lowercase"
                    target="_blank"
                    icon
                    href="https://www.instagram.com/frankthetraveler"
                    style="font-family: 'Helvetica Now Text' !important"
                  >
                    <v-icon small>mdi-instagram</v-icon>&nbsp;frankthetraveler
                  </v-btn>
                </v-row>
              </v-col>
              <v-col cols="0" lg="1" md="1" sm="1"></v-col>
              <v-col class="mt-12" lg="2" md="2" sm="2">
                <v-row justify="center">
                  <v-img src="../assets/portraits/mattia.png" max-width="200" aspect-ratio="1"></v-img>
                </v-row>
                <v-row justify="center">
                  <v-btn
                    class="text-lowercase"
                    target="_blank"
                    icon
                    href="https://www.instagram.com/gojamusic"
                    style="font-family: 'Helvetica Now Text' !important"
                  >
                    <v-icon small>mdi-instagram</v-icon>&nbsp;gojamusic
                  </v-btn>
                </v-row>
              </v-col>
              <v-col cols="0" lg="1" md="1" sm="1"></v-col>
              <v-col class="mt-12" lg="2" md="2" sm="2">
                <v-row justify="center">
                  <v-img src="../assets/portraits/davide.jpg" max-width="200" aspect-ratio="1"></v-img>
                </v-row>
                <v-row justify="center">
                  <v-btn
                    class="text-lowercase"
                    target="_blank"
                    icon
                    href="https://www.instagram.com/iamsurt"
                    style="font-family: 'Helvetica Now Text' !important"
                  >
                    <v-icon small>mdi-instagram</v-icon>&nbsp;iamsurt
                  </v-btn>
                </v-row>
              </v-col>
              <v-col cols="0" lg="2" md="2" sm="2"></v-col>
            </v-row>
          </v-row>
          <v-divider v-if="mobile" class="mr-6 ml-6"></v-divider>
          <v-divider v-else class="mr-6 ml-6 mb-12"></v-divider>
          <v-row justify="center" align="center">
            <v-col cols="0" lg="6" md="6" sm="0">
              <v-row justify="center">
                <div v-if="mobile"></div>
                <div v-else class="holo-sphere"></div>
              </v-row>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12">
              <div v-if="mobile">
                <p
                  class="body-1 text-justify mr-6 ml-6"
                  style="font-family: 'Helvetica Now Text' !important"
                >
                  Holophonica is the brainchild of three friends and producers
                  who decided to offer their knowledge to help people bring
                  their ideas to life.
                </p>
              </div>
              <div v-else></div>
              <div class="inquiry-form">
                <p class="body-1 text-justify" style="font-family: 'Helvetica Now Text' !important">
                  We also offer placing services and additional production, if
                  needed. Just send us a message!
                </p>
                <InquiryForm />
              </div>
            </v-col>
            <v-col cols="0" lg="4" md="4" sm="0"></v-col>
          </v-row>
        </v-container>
      </div>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import InquiryForm from "../components/services/InquiryForm.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "About",
  components: {
    Navbar: Navbar,
    InquiryForm: InquiryForm,
    Footer: Footer
  },
  data() {
    return {
      pasteurs: ["Matteone", "Davidone", "Impetrone"],
      mobile: false
    };
  },
  created() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.mobile = true;
    }
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 10%;
  padding: 0 5% 0 5%;
}
.container .row:nth-child(1),
.container .row:nth-child(2) {
  padding: 5%;
}

.container .row .v-image {
  border-radius: 50%;
}

.inquiry-form {
  padding: 6%;
}

.holo-sphere {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #f0f,
    inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
    0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
  margin: auto;
}
</style>
