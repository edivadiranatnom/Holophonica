<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiters
    show-arrows-on-hover
    interval="15000"
    @change="onChangeSlide"
  >
    <v-carousel-item v-for="(pack, i) in packs" :key="i">
      <v-card height="50%">
        <v-img
          :src="require('@/assets/' + pack.img)"
          class="white--text align-end"
          height="200px"
        >
          <v-card-title>{{ pack.name + " Vol. " + pack.vol }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">{{ pack.genre }}</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ pack.artist }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text>Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import packs from "../../../data/home/packs.json";
export default {
  name: "PacksCarousel",
  data: () => ({
    packs: packs
  }),
  methods: {
    onChangeSlide(slide) {
      this.$eventHub.$emit("slideChanged", {
        name: slide
      });
    }
  }
};
</script>

<style lang="scss"></style>
