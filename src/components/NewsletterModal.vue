<template>
  <div class="newslettermodal">
    <v-dialog v-model="dialog" overlay-opacity="0.8" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Newsletter</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <medium>
              Subscribe to our newsletter to receive the latest news on our
              sample packs, tutorials etc.
            </medium>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="First Name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Last Name*" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
            </v-row>
            <small>*required field</small>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Subscribe</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "NewsletterModal"
};
</script>

<style lang="sass"></style>