<template>
  <v-app id="inspire">
    <v-app-bar right app flat>
      <v-toolbar-title>Sample Packs</v-toolbar-title>
      <v-toolbar-item></v-toolbar-item>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-navigation-drawer right v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sample Packs</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Tutorials</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <Hello-World></Hello-World>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <v-btn icon color="pink" href="#">
        <v-icon dark color="pink">mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon color="blue" href="#">
        <v-icon dark color="blue">mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon color="orange" href="#">
        <v-icon dark color="orange">mdi-soundcloud</v-icon>
      </v-btn>
      <v-btn icon color="orange" href="#">
        <v-icon dark color="orange">mdi-patreon</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" }
    ]
  }),
  created() {
    // this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="scss">
.v-toolbar__content {
  float: right;
}

.v-app-bar {
  background-color: transparent !important;
}

.v-application--wrap {
  background-image: url("../assets/1234.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.v-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent !important;
  height: 8%;
}

.v-app-bar-nav-icon {
  color: white !important;
}
</style>