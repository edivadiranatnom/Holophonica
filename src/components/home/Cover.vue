<template>
  <div id="cover" class="section">
    <v-container fluid>
      <v-row>
        <v-col cols="1" lg="3" md="3" sm="2"></v-col>
        <v-col cols="10" lg="6" md="6" sm="8" justify="center">
          <v-img
            id="imgLogo"
            class="mx-auto mb-12"
            min-width="100"
            max-width="700"
            src="../../assets/logo.png"
            ratio="1"
          ></v-img>
          <v-row class="mb-12 mt-12">
            <v-img
              class="mb-6"
              src="../../assets/textLogo.png"
              ratio="1"
            ></v-img>
          </v-row>
          <h3 class="display-1 font-weight-thin mt-8 mb-4 text-center">
            The sound you need.
          </h3>
          <v-row class="mt-12">
            <a class="mx-auto">
              <v-img
                src="../../assets/arrowdown.png"
                max-width="20"
                @click="$vuetify.goTo('#studio')"
              ></v-img>
            </a>
          </v-row>
        </v-col>
        <v-col cols="1" lg="3" md="3" sm="2"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Cover"
};
</script>
