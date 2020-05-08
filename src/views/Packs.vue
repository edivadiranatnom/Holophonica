<template>
  <v-app>
    <Navbar />
    <v-container fluid fill-height>
      <v-row style="padding: 2%">
        <v-col cols="12" lg="12" md="12" sm="12">
          <p class="display-1">Sample Packs</p>
          <p class="subtitle-1">
            In this section you can find our sample packs and filter them.
          </p>
        </v-col>
      </v-row>
      <v-row style="padding: 2%">
        <v-col cols="0" sm="3" xs="1">
          <Filters />
        </v-col>
        <v-col cols="12" sm="9" offset-xs="1" id="samplePacks">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="(pack, i) in visibility"
                  :key="i"
                  class="d-flex child-flex"
                  cols="12"
                  lg="3"
                  md="4"
                  sm="6"
                >
                  <v-card flat tile class="d-flex">
                    <v-img
                      :src="require('@/assets/' + pack.img)"
                      aspect-ratio="1"
                      class="grey lighten-2"
                    >
                      <v-card-title>
                        <h5 class="font-weight-thin">{{ pack.name }}</h5>
                      </v-card-title>
                      <v-card-subtitle class="pb-0"
                        >Vol. {{ pack.vol }}</v-card-subtitle
                      >
                      <v-card-subtitle class="pb-0">{{
                        pack.artist
                      }}</v-card-subtitle>
                      <v-card-text class="pb-0">{{ pack.genre }}</v-card-text>
                      <v-card-actions>
                        <v-btn
                          color="orange"
                          text
                          @click="souncloudPrev(pack.soundcloud, false)"
                          >Listen</v-btn
                        >
                      </v-card-actions>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="1" lg="2" sm="0" offset-sm="0"></v-col>
      </v-row>
      <v-row>
        <v-col cols="0" lg="3" md="3" sm="3"></v-col>
        <v-col cols="12" lg="6" md="9" sm="9">
          <v-expand-transition>
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              :src="iframeURL"
            ></iframe>
          </v-expand-transition>
        </v-col>
        <v-col cols="0" lg="3" md="0" sm="0"></v-col>
      </v-row>
      <v-row>
        <Footer />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "../components/packs/Navbar.vue";
import Filters from "../components/packs/Filters.vue";
import Footer from "../components/Footer.vue";
import packs from "../data/packs/packs.json";

export default {
  name: "Packs",
  components: {
    Navbar: Navbar,
    Filters: Filters,
    Footer: Footer
  },
  data: () => ({
    iframeURL: "",
    expand: false,
    currentTag: "",
    selectedTags: { artists: [], genres: [] }
  }),
  methods: {
    souncloudPrev(src, expand) {
      this.iframeURL = src;
      this.expand = !expand;
    },
    setFilterValue(value) {
      this.currentTag = value;
    }
  },
  created() {
    this.$vuetify.theme.dark = true;
    this.$eventHub.$on("filterByGenre", this.setFilterValue);
    this.$eventHub.$on("filterByArtist", this.setFilterValue);
  },
  beforeDestroy() {
    this.$eventHub.$off("filterByGenre", () => {});
    this.$eventHub.$off("filterByArtist", () => {});
  },
  computed: {
    visibility: function() {
      let filteredPacks = packs;
      if (this.currentTag.category == "artist") {
        filteredPacks = packs.filter(pack => {
          return this.selectedTags.artists.includes(pack.artist);
        });
      } else if (this.currentTag.category == "genre") {
        filteredPacks = packs.filter(pack => {
          return this.selectedTags.genres.includes(pack.genre);
        });
      } else if (
        this.selectedTags.artists.length === 0 &&
        this.selectedTags.genres.length === 0
      ) {
        return packs;
      }
      return filteredPacks;
    }
  },
  watch: {
    currentTag: function() {
      if (this.currentTag.state) {
        if (this.currentTag.category == "artist")
          this.selectedTags.artists.push(this.currentTag.name);
        if (this.currentTag.category == "genre")
          this.selectedTags.genres.push(this.currentTag.name);
      } else {
        if (this.currentTag.category == "genre")
          this.selectedTags.genres = this.selectedTags.genres.filter(item => {
            return item != this.currentTag.name;
          });
        if (this.currentTag.category == "artist")
          this.selectedTags.artists = this.selectedTags.artists.filter(item => {
            return item != this.currentTag.name;
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#cover {
  background-image: url("../assets/black.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
}

.v-card__title,
.v-card__subtitle,
.v-card__text {
  color: black !important;
}

.v-footer {
  bottom: unset !important;
}
</style>
