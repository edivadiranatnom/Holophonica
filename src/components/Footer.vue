<template>
  <v-footer absolute app color="black">
    <v-card class="lighten-1 white--text text-center">
      <v-card-title>
        <v-btn
          icon
          v-for="(el, i) in socialIcons"
          :key="i"
          :href="el.url"
          target="_blank"
          class="mx-4 white--text text-center socialIcon"
          dark
        >
          <v-icon large>{{ el.icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="title white--text">Holophonica</v-card-text>
      <v-row justify="center">
        <p class="caption">
          <router-link to="Privacy" style="color: white"
            >Privacy Policy</router-link
          >
        </p>
      </v-row>
      <v-row justify="center">
        <p class="caption">
          <router-link to="Terms" style="color: white"
            >Terms and Conditions</router-link
          >
        </p>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      socialIcons: [
        {
          id: "instagram",
          icon: "mdi-instagram",
          url: "https://www.instagram.com/holophonica/"
        },
        { id: "facebook", icon: "mdi-facebook", url: "" },
        {
          id: "soundcloud",
          icon: "mdi-soundcloud",
          url: "https://soundcloud.com/user-580792470"
        },
        {
          id: "gmail",
          icon: "mdi-gmail",
          url: "mailto:holophonica.studio@gmail.com"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
footer.v-footer.pa-2 {
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0 !important;
  width: 100%;
}
.pa-2 {
  padding: 0 !important;
}

.v-footer .lighten-1 {
  width: 100%;
}
.v-footer .lighten-1 .v-card__title {
  display: block !important;
}

.v-icon {
  color: #cfcfcf !important;
}

.v-icon:hover {
  color: white !important;
}
</style>
