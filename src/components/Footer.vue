<template>
  <v-footer absolute class="pa-2">
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
          <v-icon size="24px" color="white">{{ el.icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="white--text">{{ new Date().getFullYear() }} — Holophonica</v-card-text>
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
        { id: "soundcloud", icon: "mdi-soundcloud", url: "" },
        { id: "twitch", icon: "mdi-twitch", url: "" },
        { id: "patreon", icon: "mdi-patreon", url: "" }
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
</style>
