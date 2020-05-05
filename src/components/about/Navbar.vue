<template>
  <v-app-bar app dense flat hide-on-scroll>
    <v-toolbar-items class="pa-2" v-for="(el, i) in navItems" :key="i">
      <v-divider class="mx-4" vertical></v-divider>
      <router-link :to="el.url">{{ el.text }}</router-link>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    navItems: [
      { text: "Home", url: "/" },
      { text: "Samples", url: "/packs" },
      { text: "Services", url: "/services" }
    ]
  })
};
</script>

<style lang="scss">
.v-toolbar__content {
  float: right;
}

.v-sheet.v-sheet--tile.theme--dark.v-toolbar.v-toolbar--dense.v-toolbar--flat.v-app-bar.v-app-bar--fixed {
  background-color: black !important;
}

div.v-toolbar__items.pa-2 a:after,
div.v-toolbar__items.pa-2 a:before {
  backface-visibility: hidden;
  border: 1px solid rgba(#fff, 0);
  bottom: 0px;
  content: " ";
  display: block;
  margin: 0 auto;
  position: relative;
  transition: all 280ms ease-in-out;
  width: 0;
}

div.v-toolbar__items.pa-2 a:hover:after,
div.v-toolbar__items.pa-2 a:hover:before {
  backface-visibility: hidden;
  border-color: #fff;
  transition: width 350ms ease-in-out;
  width: 100%;
}

div.v-toolbar__items.pa-2 a:hover:before {
  bottom: auto;
  top: 0;
  width: 100%;
}
</style>
