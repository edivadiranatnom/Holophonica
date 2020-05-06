<template>
  <v-footer absolute class="pa-2">
    <v-card class="lighten-1 white--text text-center">
      <v-card-title>
        <v-btn
          icon
          v-for="(el, i) in socialIcons"
          :key="i"
          :href="el.url"
          class="mx-4 white--text text-center socialIcon"
          dark
        >
          <v-icon size="24px" :color="el.color" dark>{{ el.icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="white--text"
        >{{ new Date().getFullYear() }} — Holophonica</v-card-text
      >
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
          color: "pink",
          icon: "mdi-instagram",
          url: "https://www.instagram.com/holophonica/"
        },
        { id: "facebook", color: "blue", icon: "mdi-facebook", url: "" },
        { id: "soundcloud", color: "orange", icon: "mdi-soundcloud", url: "" },
        { id: "twitch", color: "purple", icon: "mdi-twitch", url: "" },
        { id: "patreon", color: "#002647", icon: "mdi-patreon", url: "" }
      ]
    };
  }
};
</script>

<style lang="scss">
.v-footer {
  align-items: center;
  justify-content: center;
  background-color: transparent !important;
  position: absolute;
}
.pa-2 {
  padding: 0 !important;
}

.v-footer .lighten-1 {
  background-color: #121212 !important;
  width: 100%;
}
.v-footer .lighten-1 .v-card__title {
  display: block !important;
}
</style>
