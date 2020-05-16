<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="pack.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="vol">Vol</label>
        <input class="form-control" id="vol" v-model="pack.vol" name="vol" />
      </div>

      <div class="form-group">
        <label for="artist">Artist</label>
        <input
          class="form-control"
          id="artist"
          required
          v-model="pack.artist"
          name="artist"
        />
      </div>

      <div class="form-group">
        <label for="genre">Genre</label>
        <input
          class="form-control"
          id="genre"
          required
          v-model="pack.genre"
          name="genre"
        />
      </div>

      <div class="form-group">
        <label for="img">Image</label>
        <input
          class="form-control"
          id="img"
          required
          v-model="pack.img"
          name="img"
        />
      </div>

      <div class="form-group">
        <label for="file">File</label>
        <input
          class="form-control"
          id="file"
          required
          v-model="pack.file"
          name="file"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          v-model="pack.description"
          name="description"
        ></textarea>
      </div>
      <button @click="savePack" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import packsService from "../services/packsService";

export default {
  name: "AddPack",
  data() {
    return {
      pack: {
        id: null,
        name: "",
        vol: "",
        artist: "",
        genre: "",
        img: "",
        file: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    savePack() {
      var data = {
        name: this.pack.name,
        vol: this.pack.vol,
        artist: this.pack.artist,
        genre: this.pack.genre,
        img: this.pack.img,
        file: this.pack.file,
        description: this.pack.description
      };

      packsService
        .create(data)
        .then(response => {
          this.pack.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log("porcoddì");
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.pack = {};
    }
  }
};
</script>

<style lang="scss">
.submit-form {
  max-width: 300px;
  margin: 5% auto;
}
</style>
