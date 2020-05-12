<template>
  <v-app>
    <Navbar />
    <v-container fluid fill-height>
      <v-row
        style="margin-left: 1%; margin-right: 1%; border-bottom: solid 1px white"
      >
        <v-col cols="12" lg="12" md="12" sm="12">
          <p class="display-1">Sample Packs</p>
          <p class="subtitle-1">
            In this section you can find our sample packs and filter them.
          </p>
        </v-col>
      </v-row>
      <v-row
        style="margin-left: 1%; margin-right: 1%; border-bottom: solid 1px white"
      >
        <v-col cols="0" sm="3" xs="1">
          <Filters />
        </v-col>
        <v-col
          cols="12"
          sm="9"
          offset-xs="1"
          id="samplePacks"
          fill-heigth
          style="min-heigth: 100%"
        >
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
                  <v-card flat class="d-flex flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front" style="border-radius: 2%;">
                        <img
                          :src="require('@/assets/' + pack.img)"
                          alt="Avatar"
                          style="width:100%;height:100%; border-radius: 2%;"
                          class="grey lighten-2"
                        />
                      </div>
                      <div class="flip-card-back" style="border-radius: 2%">
                        <v-card-subtitle class="pb-0">
                          <h2 class="font-weight-thin">
                            {{ pack.name }} Vol. {{ pack.vol }}
                          </h2>
                        </v-card-subtitle>
                        <v-card-subtitle class="pb-0">{{
                          pack.artist
                        }}</v-card-subtitle>
                        <v-card-text class="pb-0">{{ pack.genre }}</v-card-text>
                        <Player :file="audiofile" />
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="1" lg="2" sm="0" offset-sm="0"></v-col>
      </v-row>
      <v-row>
        <Footer />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Filters from "../components/packs/Filters.vue";
import Player from "../components/packs/Player.vue";
import Footer from "../components/Footer.vue";
import packs from "../data/packs/packs.json";

export default {
  name: "Packs",
  components: {
    Navbar: Navbar,
    Filters: Filters,
    Player: Player,
    Footer: Footer
  },
  data: () => ({
    currentTag: "",
    selectedTags: { artists: [], genres: [] },
    audiofile: require("@/data/audio/soundlogo.mp3"),
    packs: packs
  }),
  methods: {
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

.flip-card {
  background-color: transparent;
  height: 100%;
  perspective: 1000px;
}

.flip-card:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateX(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: grey;
  color: white;
  transform: rotateX(180deg);
}
</style>
