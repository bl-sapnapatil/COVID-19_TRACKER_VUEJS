<template>
  <div class="header">
    <div class="label">
      <v-chip class="ma-2">
        Search your city, resources, etc
      </v-chip>
    </div>
    <div class="search">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        class="ma-2"
        flat
        outlined
        dense
        hide-details
        placeholder="Search"
        autocomplete="off"
      >
      </v-text-field>
    </div>
    <div class="statusCards">
      <v-container>
        <v-layout row wrap>
          <v-flex xs6 sm4 md2 lg2 v-for="card in n" :key="card">
            <v-card class="ma-2">
              <v-card-title class="headline">Type</v-card-title>
              <v-card-subtitle>
                Total Count
              </v-card-subtitle>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "StateCards",
  data() {
    return {
      n: 4
    };
  }
};
</script>

<style></style>
