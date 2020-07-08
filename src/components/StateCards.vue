<template>
  <div class="homeleft">
    <div class="searchTitle">Search your district or state</div>
    <!-- <v-text-field
        prepend-inner-icon="mdi-magnify"
        class="ma-2"
        flat
        dense
        hide-details
        placeholder="Search"
        autocomplete="off"
    ></v-text-field>-->
    <div class="searchDiv">
      <!-- <v-icon>fas fa-search</v-icon> -->
      <img style="padding-left:1%" src="../assets/searchIcon.png" />
      <input class="search" placeholder="Search" autocomplete="off" />
    </div>
    <div>
      <v-container>
        <v-layout>
          <v-flex xs6 sm4 md2 lg3 v-for="card in n" :key="card">
            <v-card class="ma-2">
              <v-card-title class="headline">Type</v-card-title>
              <v-card-subtitle>Total Count</v-card-subtitle>
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
<style lang="scss" scoped>
@import "../styles/Home.scss";
</style>