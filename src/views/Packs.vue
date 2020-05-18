<template>
  <v-app>
    <Navbar />
    <v-container fluid fill-height>
      <v-row style="margin-left: 1%; margin-right: 1%; border-bottom: solid 1px white">
        <v-col cols="12" lg="12" md="12" sm="12">
          <p class="display-1">Sample Packs</p>
          <p class="subtitle-1">In this section you can find our sample packs and filter them.</p>
        </v-col>
      </v-row>
      <v-row style="margin-left: 1%; margin-right: 1%; border-bottom: solid 1px white">
        <v-col cols="0" sm="3" xs="1">
          <v-navigation-drawer permanent hide-overlay>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">Filters</v-list-item-title>
                <v-list-item-subtitle>Select the packs you prefer.</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list flat>
              <v-checkbox
                v-model="all"
                value="all"
                label="All"
                @click="allVisible"
                style="padding-left:12%"
              ></v-checkbox>
              <v-list-group
                v-for="item in filters"
                :key="item.action"
                v-model="item.active"
                :class="item.action"
                no-action
                disabled
              >
                <template v-slot:activator>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </template>

                <v-list-item v-for="subItem in item.items" :key="subItem.name" inactive>
                  <v-list-item-content>
                    <v-checkbox
                      v-model="selected"
                      :value="subItem.name"
                      :label="subItem.name"
                      @click="exclusiveCheck(subItem.name)"
                    ></v-checkbox>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-navigation-drawer>
        </v-col>
        <v-col cols="12" sm="9" offset-xs="1" id="samplePacks">
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
                      <h2 class="font-weight-thin">{{ pack.name }} Vol. {{ pack.vol }}</h2>
                    </v-card-subtitle>
                    <v-card-subtitle class="pb-0">
                      {{
                      pack.artist
                      }}
                    </v-card-subtitle>
                    <v-card-text class="pb-0">{{ pack.genre }}</v-card-text>
                    <Player :file="audiofile" />
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
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
import Player from "../components/packs/Player.vue";
import Footer from "../components/Footer.vue";
import packs from "../data/packs/packs.json";
import filters from "../data/packs/filters.json";

export default {
  name: "Packs",
  components: {
    Navbar: Navbar,
    Player: Player,
    Footer: Footer
  },
  data: () => ({
    audiofile: require("@/data/audio/soundlogo.mp3"),
    packs: packs,
    filters: filters,
    selected: [],
    all: true
  }),
  methods: {
    allVisible() {
      if (this.selected.length === 0) {
        this.all = true;
      } else {
        this.selected = [];
        this.all = true;
      }
    },
    exclusiveCheck(value) {
      this.selected = [];
      this.selected.push(value);
    }
  },
  created() {
    this.$vuetify.theme.dark = true;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      for (let i = 0; i < filters.length; i++) filters[i].active = false;
    }
  },
  computed: {
    visibility: function() {
      return packs.filter(pack => {
        if (this.selected.length === 0) {
          this.all = true;
          return packs;
        } else {
          this.all = false;
          return (
            this.selected.includes(pack.artist) ||
            this.selected.includes(pack.genre)
          );
        }
      });
    }
  }
};
</script>

<style lang="scss">
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

.v-navigation-drawer {
  background-color: transparent !important;
}
.v-navigation-drawer__border {
  visibility: hidden;
}

.v-navigation-drawer.v-navigation-drawer--open {
  width: unset !important;
}

.v-list-item__icon {
  margin: 0 !important;
}

.v-list-item__content {
  height: 60px !important;
}

.v-list-item--active {
  color: white;
}

.v-list-item__title {
  flex: 1 0 100% !important;
}

.v-application .primary--text {
  color: white !important;
  caret-color: white !important;
}

.v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 30px !important;
  height: 40px;
}

.v-label.theme--dark:hover:active {
  color: white;
}

.v-input--selection-controls__input {
  visibility: collapse !important;
}

.v-ripple__container {
  visibility: hidden !important;
}

#samplePacks {
  min-height: 100vh;
}
</style>
