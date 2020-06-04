<template>
  <v-container id="cover" fluid>
    <v-container>
      <v-row class="mt-12" align="center">
        <v-col cols="1" lg="3" md="3" sm="2"></v-col>
        <v-col class="mt-12" cols="10" lg="6" md="6" sm="8" justify="center">
          <v-img
            class="imgLogo mx-auto"
            min-width="80"
            max-width="700"
            src="../../assets/logo.png"
          ></v-img>
          <v-row class="mb-lg-12 mt-lg-12 mt-9">
            <v-img
              class="mb-6"
              src="../../assets/textLogo.png"
              ratio="1"
            ></v-img>
          </v-row>
          <p
            id="soundsgood"
            class="display-1 font-italic font-weight-thin mt-8 mb-4 text-center"
          >
            Sounds good.
          </p>
          <v-row class="mt-lg-12 mt-sm-12 mt-md-12 mt-9">
            <a class="mx-auto">
              <v-img
                src="../../assets/arrowdown.png"
                max-width="40"
                @click="$vuetify.goTo('#studio')"
              ></v-img>
            </a>
          </v-row>
        </v-col>
        <v-col cols="1" lg="3" md="3" sm="2"></v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Cover"
};
</script>

<style lang="scss">
#cover {
  height: 95vh;
}

#soundsgood {
  font-family: "Helvetica Now Text" !important;
}
</style>
