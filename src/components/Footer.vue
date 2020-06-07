<template>
  <v-footer absolute app>
    <v-row justify="center">
      <v-card class="lighten-1 white--text text-center">
        <v-card-title v-if="mobile">
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
        <v-card-title v-else>
          <v-btn
            icon
            x-small
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
        <v-card-text
          class="title white--text"
          style="font-family: 'Helvetica Now Text' !important"
        >Holophonica&reg;</v-card-text>
        <v-row justify="center">
          <p class="caption" style="font-family: 'Helvetica Now Text' !important">
            <router-link to="/privacy" style="color: white">Privacy Policy</router-link>
            <router-link class="ml-4" to="/terms" style="color: white">Terms & Conditions</router-link>
          </p>
        </v-row>
      </v-card>
    </v-row>
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
          url: "mailto:holophonica.studios@gmail.com"
        }
      ],
      mobile: false
    };
  },
  created() {
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) |
      (window.innerWidth > 568)
    ) {
      this.mobile = true;
    }
  }
};
</script>

<style lang="scss" scoped>
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
