<template>
  <v-app>
    <Navbar />
    <v-content style="background-color: black !important">
      <div>
        <v-container fluid fill-height>
          <v-row justify="center" class="mt-12">
            <p class="display-4">Holophonica Studios</p>
          </v-row>
          <v-divider class="mr-6 ml-6 mb-12"></v-divider>
          <v-row class="mt-12 mb-12">
            <p class="body-1">
              Credits include releases on Universal, Spinnin', Monstercat, STMPD. Through the years, we gained extensive experience in multiple genres. We worked with artists such as Khalid, Martin Garrix, OG Maco as well as Edit Select and Antonio Ruscito for the techno/ambient scene. Besides this, we specialize in Mix/Mastering and Sound Design services.
              Davide, Francesco and Mattia are 3 producers from Italy; they have been producing, mixing and mastering full time for over 8 years.
            </p>
            <p class="body-1">
              Davide (Surt) works in the techno/ambient field with releases on Planet Rhythm, Edit Select, Informa, Northallsen and Affuté under his belt.
              He is particularly skilled in producing huge melodic/trancey techno anthems with catchy leads and oneiric celestial soundscapes, as well as 4/4 to the floor techno tracks with strong basslines and throbbing drum patterns.
            </p>
            <p class="body-1">
              Mattia (Goja/Falling Down) works in the EDM/electronic scene. He started playing the piano at 5 and the bass guitar at 12. At 20, he founded "Goja"; through this project, he had the chance to work alongside big acts such as Martin Garrix, Khalid, Dyro and more, releasing tracks on STMPD (Martin Garrix's label), Universal Music, Monstercat, Spinnin' Records, Axtone (Axwell's label), Musical Freedom (Tiësto's label), Kannibalen Records, and Wolv (Dyro's label).
              In 2020 he started to write his first album under his new project "Falling Down".
            </p>
            <p
              class="body-1"
            >Francesco (Frank The Traveler) co-founded Goja and has been part of the project until 2018; he is now producing under his new project 'Frank The Traveler' for Pop and Hip Hop artists.</p>
            <v-col cols="0" lg="2" md="2" sm="2"></v-col>
            <v-col class="mt-12" cols="12" lg="2" md="2" sm="2">
              <v-row justify="center">
                <v-img src="https://picsum.photos/510/300?random" max-width="200" aspect-ratio="1"></v-img>
              </v-row>
              <p class="headline text-center mt-2">Francesco</p>
              <v-row justify="center">
                <v-btn
                  class="text-lowercase"
                  target="_blank"
                  icon
                  href="https://www.instagram.com/frankthetraveler"
                >
                  <v-icon small>mdi-instagram</v-icon>&nbsp;frankthetraveler
                </v-btn>
              </v-row>
            </v-col>
            <v-col cols="0" lg="1" md="1" sm="1"></v-col>
            <v-col class="mt-12" cols="12" lg="2" md="2" sm="2">
              <v-row justify="center">
                <v-img src="https://picsum.photos/510/300?random" max-width="200" aspect-ratio="1"></v-img>
              </v-row>
              <p class="headline text-center mt-2">Mattia</p>
              <v-row justify="center">
                <v-btn
                  class="text-lowercase"
                  target="_blank"
                  icon
                  href="https://www.instagram.com/gojamusic"
                >
                  <v-icon small>mdi-instagram</v-icon>&nbsp;gojamusic
                </v-btn>
              </v-row>
            </v-col>
            <v-col cols="0" lg="1" md="1" sm="1"></v-col>
            <v-col class="mt-12" cols="12" lg="2" md="2" sm="2">
              <v-row justify="center">
                <v-img src="https://picsum.photos/510/300?random" max-width="200" aspect-ratio="1"></v-img>
              </v-row>
              <p class="headline text-center mt-2">Davide</p>
              <v-row justify="center">
                <v-btn
                  class="text-lowercase"
                  target="_blank"
                  icon
                  href="https://www.instagram.com/iamsurt"
                >
                  <v-icon small>mdi-instagram</v-icon>&nbsp;iamsurt
                </v-btn>
              </v-row>
            </v-col>
            <v-col cols="0" lg="2" md="2" sm="2"></v-col>
          </v-row>
          <v-divider class="mr-6 ml-6 mb-12"></v-divider>
          <v-row justify="center" align="center">
            <v-col cols="0" lg="6" md="6" sm="0">
              <v-row justify="center">
                <div class="holo-sphere"></div>
              </v-row>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12">
              <div class="inquiry-form">
                <p class="body-1 text-center">
                  We also offer placing services and additional production, if needed. Just send us a message!
                  Tell me about your project and how I can help, through the 'Contact' button above.
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
      pasteurs: ["Matteone", "Davidone", "Impetrone"]
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 10%;
  padding: 0 5% 0 5%;
  background-color: black !important;
}
.container .row:nth-child(1),
.container .row:nth-child(2) {
  padding: 5%;
}

.container .row .v-image {
  border-radius: 5%;
}

.inquiry-form {
  border-left: white solid 1px;
  padding: 15%;
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
