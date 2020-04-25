<template>
  <v-toolbar fixed class="bg-blue">
    <v-toolbar-items class="pa-2">
      <img src="../assets/logo.png" class="logo" />
    </v-toolbar-items>
    <v-toolbar-title class="mr-4">
      <router-link to="/">
        FitnessApp
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      aa
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  
}
</script>
<style scoped>
  .logo{
    height: 35px;
    width: auto;
  }
  .home {
    cursor: pointer;
  }

  .home:hover {
    color: #E9E;
  }
  .bg-blue {
    /*background-color: #3f51b5!important;*/
  }
</style>
