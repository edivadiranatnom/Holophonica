<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      ref="form"
      overlay-opacity="0.8"
      overlay-color="#121212"
      persistent
      max-width="600px"
      style="font-family: 'Helvetica Now Text' !important"
    >
      <v-container fluid v-if="preSubscription" id="dialogContainer">
        <v-row>
          <v-col cols="11">
            <p v-if="mobile" class="body-1" style="font-family: 'Helvetica Now Text' !important">
              Subscribe to our newsletter, we will send you an exclusive pack as
              a welcome gift!
            </p>
            <p v-else class="body-1" style="font-family: 'Helvetica Now Text' !important">
              Subscribe to our newsletter, stay updated and receive periodic
              sample packs for free. By subscribing now, we will send you right
              away an exclusive pack as a welcome gift. See you on the other
              side!
            </p>
          </v-col>
          <v-col cols="1">
            <v-btn class="ml-12" id="upperCloseDialog" icon @click="dismissDialog">
              <v-icon class="mdi-36px">mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-form v-model="valid" v-if="preSubscription" ref="form" lazy-validation>
          <v-container>
            <v-text-field
              ref="firstname"
              v-model="subscriber.firstname"
              :rules="rules.nameRules"
              label="First Name*"
              required
            ></v-text-field>
            <v-text-field
              ref="lastname"
              v-model="subscriber.lastname"
              :rules="rules.nameRules"
              label="Last name*"
              required
            ></v-text-field>
            <v-text-field
              ref="email"
              v-model="subscriber.mail"
              :rules="rules.emailRules"
              label="E-mail*"
              required
            ></v-text-field>
            <v-row v-if="mobile" align="center">
              <v-col cols="2">
                <v-checkbox
                  v-model="subscriber.accept"
                  value="1"
                  type="checkbox"
                  :rules="rules.checkboxRules"
                  required
                ></v-checkbox>
              </v-col>
              <v-col cols="10">
                <small style="font-family: 'Helvetica Now Text' !important">
                  By submitting you agree to our
                  <router-link to="Privacy" style="color: white; text-decoration: none;">
                    &nbsp;
                    <b>Privacy Policy</b>
                  </router-link>&nbsp;and
                  <router-link to="Terms" style="color: white; text-decoration: none;">
                    &nbsp;
                    <b>Terms and Conditions</b>
                  </router-link>
                </small>
              </v-col>
            </v-row>
            <v-row v-else align="center">
              <v-col cols="1">
                <v-checkbox
                  v-model="subscriber.accept"
                  value="1"
                  type="checkbox"
                  :rules="rules.checkboxRules"
                  required
                ></v-checkbox>
              </v-col>
              <v-col cols="11">
                <small style="font-family: 'Helvetica Now Text' !important">
                  By submitting your informations you agree to our
                  <router-link to="Privacy" style="color: white; text-decoration: none;">
                    &nbsp;
                    <b>Privacy Policy</b>
                  </router-link>&nbsp;and
                  <router-link to="Terms" style="color: white; text-decoration: none;">
                    &nbsp;
                    <b>Terms and Conditions</b>
                  </router-link>
                </small>
              </v-col>
            </v-row>
          </v-container>
          <v-spacer></v-spacer>
          <v-btn
            class="float-right"
            ref="subscribe"
            color="white"
            :disabled="disabled"
            text
            @click="validate"
            style="font-family: 'Helvetica Now Text' !important"
          >Subscribe</v-btn>
        </v-form>
      </v-container>
      <v-container v-else fluid style="top: 10%">
        <v-row>
          <v-col cols="3"></v-col>
          <v-col cols="6">
            <v-row>
              <p style="font-family: 'Helvetica Now Text' !important">
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
              <v-btn
                color="blue darken-1"
                text
                @click="dismissDialog"
                style="font-family: 'Helvetica Now Text' !important"
              >Close</v-btn>
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
    disabled: false,
    preSubscription: true,
    agreement: false,
    mobile: false,
    subscriber: {
      firstname: "",
      lastname: "",
      mail: "",
      accept: false
    },
    rules: {
      nameRules: [
        v => !!v || "Name required",
        v => v.length > 0 || "Insert name"
      ],
      emailRules: [
        v => !!v || "E-mail required",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      checkboxRules: [v => !!v]
    }
  }),
  created() {
    if (!sessionStorage.getItem("dismissDialog"))
      sessionStorage.setItem("dismissDialog", false);
    else this.dialog = !this.dialog;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.mobile = true;
    }
  },
  methods: {
    dismissDialog() {
      sessionStorage.setItem("dismissDialog", true);
      this.dialog = !this.dialog;
    },
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
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(data.mail) &&
        this.accept == true
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
