<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      ref="form"
      overlay-opacity="0.8"
      persistent
      max-width="600px"
    >
      <v-container fluid v-if="preSubscription" id="dialogContainer">
        <v-btn id="upperCloseDialog" icon @click="dialog = !dialog">
          <v-icon class="mdi-36px">mdi-close</v-icon>
        </v-btn>
        <v-form v-if="preSubscription" ref="form">
          <span class="headline">Newsletter</span>
          <v-container>
            Subscribe to our newsletter to receive the latest news.
            <v-row>
              <v-col cols="12" sm="8" md="12">
                <v-text-field
                  ref="firstname"
                  v-model="subscriber.firstname"
                  :rules="rules.nameRules"
                  label="First Name*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="8" md="12">
                <v-text-field
                  ref="lastname"
                  v-model="subscriber.lastname"
                  :rules="rules.nameRules"
                  label="Last name*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="8" md="12">
                <v-text-field
                  ref="email"
                  v-model="subscriber.mail"
                  :rules="rules.emailRules"
                  label="E-mail*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <small>*required field</small>
          </v-container>
          <v-spacer></v-spacer>
          <v-btn ref="subscribe" color="blue darken-1" text @click="validate"
            >Subscribe</v-btn
          >
        </v-form>
      </v-container>
      <v-container v-else fluid style="top: 10%">
        <v-row>
          <v-col cols="3"></v-col>
          <v-col cols="6">
            <v-row>
              <p style="text-align: center">
                Thanks for subscribing, you'll receive a lot of exclusive
                material!
              </p>
            </v-row>
          </v-col>
          <v-col cols="3"></v-col>
        </v-row>
        <v-row>
          <v-col cols="3"></v-col>
          <v-col cols="6">
            <v-row>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = !dialog"
                >Close</v-btn
              >
            </v-row>
          </v-col>
          <v-col cols="3"></v-col>
        </v-row>
      </v-container>
    </v-dialog>
  </v-row>
</template>

<script>
import newsletterService from "../../services/newsletterService";

export default {
  name: "NewsletterModal",
  data: () => ({
    dialog: true,
    valid: true,
    preSubscription: true,
    agreement: false,
    subscriber: {
      firstname: "",
      lastname: "",
      mail: ""
    },
    rules: {
      nameRules: [
        v => !!v || "Name is required",
        v => v.length > 0 || "Insert name"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    }
  }),
  methods: {
    validate() {
      let data = {
        firstname: this.subscriber.firstname,
        lastname: this.subscriber.lastname,
        mail: this.subscriber.mail
      };
      if (
        data.firstname != "" &&
        data.lastname != "" &&
        data.mail != "" &&
        /.+@.+/.test(data.mail)
      ) {
        newsletterService
          .subscribe(data)
          .then(response => {
            this.preSubscription = false;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        console.log("Empty fields");
      }
    }
  }
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
