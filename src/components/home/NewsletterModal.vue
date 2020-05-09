<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      overlay-opacity="0.95"
      persistent
      max-width="600px"
    >
      <v-btn id="upperCloseDialog" icon @click="dialog = false">
        <v-icon class="mdi-36px">mdi-close</v-icon>
      </v-btn>
      <div id="dialogContainer">
        <v-card>
          <v-card-title>
            <span class="headline">Newsletter</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              Subscribe to our newsletter to receive the latest news.
              <v-row>
                <v-col cols="12" sm="8" md="12">
                  <v-text-field label="First Name*" required></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="8" md="12">
                  <v-text-field label="Last Name*" required></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="8" md="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="8" md="12">
                  <v-checkbox
                    v-model="agreement"
                    :rules="[rules.required]"
                    color="deep-purple"
                  >
                    <template v-slot:label>
                      I agree to the&nbsp;
                      <a href="#" @click.stop.prevent="dialog = true"
                        >Terms of Service</a
                      >
                      &nbsp;and&nbsp;
                      <a href="#" @click.stop.prevent="dialog = true"
                        >Privacy Policy</a
                      >*
                    </template>
                  </v-checkbox>
                </v-col>
              </v-row>
              <small>*required field</small>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Subscribe</v-btn
            >
          </v-card-actions>
        </v-card>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "NewsletterModal",
  data: () => ({
    dialog: true,
    agreement: false,
    rules: {
      required: v => !!v || "This field is required"
    }
  })
};
</script>

<style lang="scss">
.v-dialog {
  height: 100% !important;
  opacity: 1;
  box-shadow: none !important;
}

#upperCloseDialog {
  float: right;
  z-index: 10;
}

.v-dialog:not(.v-dialog--fullscreen) {
  max-height: 65% !important;
}

.v-card.v-sheet {
  box-shadow: none;
}

.theme--dark.v-sheet {
  background-color: transparent !important;
}
</style>
