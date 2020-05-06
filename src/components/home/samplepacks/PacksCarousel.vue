<template>
  <v-carousel cycle height="400" hide-delimiters show-arrows-on-hover>
    <v-carousel-item v-for="(pack, i) in packs" :key="i">
      <v-card :color="pack.color" height="50%">
        <v-img
          :src="require('@/assets/' + pack.url)"
          class="white--text align-end"
          height="200px"
        >
          <v-card-title>{{ pack.name }} sample pack</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">{{ pack.genre }}</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text>Share</v-btn>

          <v-btn color="orange" text>Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "PacksCarousel",
  data: () => ({
    packs: [
      {
        name: "First",
        url: "1234.jpg",
        color: "indigo",
        genre: "Pop"
      },
      { name: "Second", url: "1234.jpg", color: "warning", genre: "Trap" },
      {
        name: "Third",
        url: "1234.jpg",
        color: "pink darken-2",
        genre: "Techno"
      },
      {
        name: "Fourth",
        url: "1234.jpg",
        color: "red lighten-1",
        genre: "Electronic"
      },
      {
        name: "Fifth",
        url: "1234.jpg",
        color: "deep-purple accent-4",
        genre: "Ambient"
      }
    ]
  })
};
</script>

<style lang="scss"></style>
