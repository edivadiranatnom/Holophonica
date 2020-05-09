<template>
  <v-app>
    <Navbar />
    <v-row style="padding-left: 2%; padding-right: 2%">
      <v-col cols="12" lg="12" md="12" sm="12">
        <v-container fluid>
          <p class="display-1">Studio Services</p>
          <p class="subtitle-1">
            In this section you can check our studio services and the relative
            cost.
          </p>
        </v-container>
      </v-col>
    </v-row>
    <v-row id="carousel" style="border-top: 1px solid white">
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-container fluid fill-height>
          <v-carousel
            hide-delimiters
            cycle
            interval="15000"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            id="serviceImages"
            @change="changeText"
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            >
              <p class="display-1">{{ item.service }}</p>
            </v-carousel-item>
          </v-carousel>
        </v-container>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-container fluid fill-height>
          <p class="display-1">{{ serviceText }}</p>
        </v-container>
      </v-col>
    </v-row>
    <v-row style="border-top: 1px solid white; padding: 2%">
      <v-col
        cols="12"
        lg="6"
        md="6"
        sm="12"
        style="border-right: 1px solid white"
      >
        <v-container fluid fill-height>
          <p class="subtitle-1">
            In this section you can check our studio services and the relative
            cost.
          </p>
        </v-container>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-container fluid style="width: 75%">
          <p class="display-1">Contact us</p>
          <p class="subtitle-1">Send us an email with your request</p>
          <InquiryForm />
        </v-container>
      </v-col>
    </v-row>
    <v-row fill-width>
      <Footer />
    </v-row>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import InquiryForm from "../components/services/InquiryForm.vue";

export default {
  name: "Services",
  components: {
    Navbar: Navbar,
    InquiryForm: InquiryForm,
    Footer: Footer
  },
  data() {
    return {
      serviceText: "",
      items: [
        {
          service: "Additional Production",
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          info: "Additional Production"
        },
        {
          service: "Mix & Mastering",
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          info: "Mix & Mastering"
        },
        {
          service: "Sound Design",
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          info: "Sound Design"
        }
      ]
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    changeText(slide) {
      this.serviceText = this.items[slide].info;
    }
  }
};
</script>

<style lang="scss">
#carousel .container {
  padding-top: unset !important;
}
</style>
