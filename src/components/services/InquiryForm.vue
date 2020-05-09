<template>
  <v-form ref="form">
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
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

    <v-btn class="mr-4" @click="submit">
      <v-icon left>mdi-send</v-icon>Submit
    </v-btn>
    <v-snackbar v-model="snackbar">
      Your inquiry has been succesfully sent to the team!
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-form>
</template>

<script>
const axios = require("axios");

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
      axios.post("http://localhost:3000", {
        name: this.name,
        email: this.email,
        text: this.text
      });
      this.$refs.form.validate();
      this.snackbar = true;
      // this.$refs.form.reset();
    }
  }
};
</script>
