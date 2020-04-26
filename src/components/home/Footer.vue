<template>
  <v-footer padless absolute class="pa-2">
    <v-row align="end" justify="center">
      <v-col class="text-center" cols="12">
        <p class="display-1 font-weight-thin mb-4">Visit us:</p>
      </v-col>
    </v-row>
    <v-btn icon v-for="el in socialIcons" :key="el" :href="el.url">
      <v-icon :color="el.color" dark>{{ el.icon }}</v-icon>
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      socialIcons: [
        {
          color: "pink",
          icon: "mdi-instagram",
          url: "https://www.instagram.com/holophonica/"
        },
        { color: "blue", icon: "mdi-facebook", url: "" },
        { color: "orange", icon: "mdi-soundcloud", url: "" },
        { color: "orange", icon: "mdi-patreon", url: "" },
        { color: "green", icon: "mdi-soundbetter", url: "" }
      ]
    };
  }
};
</script>

<style lang="scss">
.v-footer {
  border: 1px;
  border-style: solid;
  border-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent !important;
  position: absolute;
}
</style>
