<template>
  <v-app>
    <v-content>
      <v-row>
        <v-col cols="12" lg="4" md="2" sm="2"></v-col>
        <v-col cols="12" lg="4" md="8" sm="8" id="center">
          <h2>Add a new sample pack to the catalogue:</h2>
          <div class="submit-form">
            <v-form v-if="!submitted" ref="form" v-model="valid">
              <v-text-field color="white" v-model="pack.name" label="Name" name="name" required></v-text-field>
              <v-text-field color="white" v-model="pack.vol" label="Vol" name="vol" required></v-text-field>
              <v-text-field
                color="white"
                v-model="pack.artist"
                label="Artist"
                name="artist"
                required
              ></v-text-field>
              <v-text-field color="white" v-model="pack.genre" label="Genre" name="genre" required></v-text-field>
              <v-file-input
                v-model="pack.artwork"
                type="file"
                color="white"
                accept="image/*"
                label="Artwork"
                name="artwork"
              ></v-file-input>
              <v-file-input
                v-model="pack.audio"
                type="file"
                color="white"
                accept="audio/*"
                label="Audio"
                name="audio"
              ></v-file-input>
              <v-textarea v-model="pack.description" color="white" label="Description"></v-textarea>
              <v-btn class="mr-4" @click="savePack">Add pack</v-btn>
            </v-form>
            <div v-else>
              <h4>You submitted successfully!</h4>
              <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="4" md="2" sm="2"></v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import packsService from "../../services/packsService";

export default {
  name: "AddPack",
  data() {
    return {
      valid: true,
      pack: {
        name: "",
        vol: "",
        artist: "",
        genre: "",
        artwork: null,
        audio: null,
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    savePack() {
      let formData = new FormData();
      formData.append("name", this.pack.name);
      formData.append("vol", this.pack.vol);
      formData.append("artist", this.pack.artist);
      formData.append("genre", this.pack.genre);
      formData.append("artwork", this.pack.artwork);
      formData.append("audio", this.pack.audio);
      formData.append("description", this.pack.description);
      packsService
        .create(formData)
        .then(response => {
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    reset() {
      this.submitted = false;
      this.pack = {};
    }
  }
};
</script>

<style lang="scss">
.submit-form {
  min-width: 50%;
  margin: auto;
}
@media (max-width: 768px) {
  #center {
    padding: 15%;
  }
}
</style>
