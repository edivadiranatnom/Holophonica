<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card>
              <v-toolbar dark flat>
                <v-toolbar-title>
                  <h2>Holophonica Admin</h2>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="user"
                    label="User"
                    name="login"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="pwd"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    user: "",
    pwd: ""
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    login: function() {
      let user = this.user;
      let pwd = this.pwd;
      console.log(user, pwd);
    }
  }
};
</script>

<style lang="scss">
.v-toolbar__content {
  float: left !important;
}
</style>