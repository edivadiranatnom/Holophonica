<template>
  <v-form ref="form" style="font-family: 'Helvetica Now Text' !important">
    <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>

    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Service"
      required
    ></v-select>
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

    <v-btn
      class="mr-4 float-right"
      @click="submit"
      style="font-family: 'Helvetica Now Text' !important"
    >Submit</v-btn>
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
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(v) ||
        "E-mail must be valid"
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
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(data.email) &&
        data.text != ""
      ) {
        console.log();
        inquiryService
          .inquire(data)
          .then(response => {
            this.snackbar = true;
            this.$refs.form.reset();
            console.log(response);
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-list.v-select-list.v-sheet.v-sheet--tile.theme--dark.theme--dark {
  background-color: #121212 !important;
}
</style>
