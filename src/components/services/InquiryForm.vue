<template>
  <v-form ref="form">
    <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>

    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Service"
      required
    ></v-select>
    <v-container fluid>
      <v-textarea
        v-model="text"
        name="input-7-1"
        filled
        dark
        :rules="textRules"
        label="Inquiry"
        auto-grow
        required
      ></v-textarea>
    </v-container>

    <v-btn class="mr-4" @click="submit">Submit</v-btn>
    <v-snackbar v-model="snackbar">
      Your inquiry has been succesfully sent to the team!
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-form>
</template>

<script>
import inquiryService from "../../services/inquiryService";
export default {
  name: "InquiryForm",
  data: () => ({
    name: "",
    nameRules: [v => !!v || "Name is required"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    text: "",
    textRules: [v => !!v || "Text is required"],
    select: null,
    items: ["Mix & Master", "Sound Design", "Production", "Other"],
    snackbar: false
  }),

  methods: {
    submit() {
      let data = {
        name: this.name,
        email: this.email,
        service: this.select,
        text: this.text
      };
      this.$refs.form.validate();
      if (
        data.name != "" &&
        data.service != null &&
        data.email != "" &&
        /.+@.+/.test(data.email) &&
        data.text != ""
      ) {
        inquiryService
          .inquire(data)
          .then(response => {
            this.snackbar = true;
            this.name = "";
            this.email = "";
            this.select = null;
            this.text = "";
            console.log(response.statusCode);
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  }
};
</script>
