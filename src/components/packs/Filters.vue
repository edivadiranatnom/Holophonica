<template>
  <v-navigation-drawer permanent>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">Filters</v-list-item-title>
        <v-list-item-subtitle
          >Select the packs your prefer.</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-group
        v-for="item in filters"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </template>

        <v-list-item v-for="subItem in item.items" :key="subItem.name" dense>
          <v-list-item-content dense>
            <v-checkbox
              v-model="checkbox"
              color="white"
              :label="subItem.name"
            ></v-checkbox>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import filters from "../../data/packs/filters.json";
export default {
  name: "Filters",
  data: () => ({
    filters: filters
  }),
  methods: {
    myFilter() {
      return 0;
    }
  }
};
</script>

<style lang="scss">
.v-navigation-drawer {
  background-color: transparent !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-top: 15%;
  width: 100% !important;
}
.v-navigation-drawer__border {
  visibility: hidden;
}
.v-list-item__icon {
  margin: 0 !important;
}

.v-list-item__content {
  height: 60px !important;
}

.v-list-item--active {
  color: white;
}

.v-list-item__title {
  flex: 1 0 100% !important;
}

.v-application .primary--text {
  color: white !important;
  caret-color: white !important;
}
</style>
