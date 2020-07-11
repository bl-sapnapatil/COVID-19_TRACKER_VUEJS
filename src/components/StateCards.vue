<template>
  <div class="homeleft">
    <div class="searchTitle">Search your district or state</div>
    <div class="searchDiv">
      <img style="padding-left:1%" src="../assets/searchIcon.png" />
      <input class="search" placeholder="Search" autocomplete="off" />
    </div>
    <div class="main-overview">
      <div class="confirmed">
        <p>
          <span>Confirmed</span>
          <span>+127</span>
          <span class="count">543897</span>
        </p>
      </div>
      <div class="active">
        <p>
          <span>Active</span>
          <span>+1530</span>
          <span class="count">657488</span>
        </p>
      </div>
      <div class="recovered">
        <p>
          <span>Recovered</span>
          <span>+2000</span>
          <span class="count">254555</span>
        </p>
      </div>
      <div class="deceased">
        <p>
          <span>Deceased</span>
          <span>+45</span>
          <span class="count">18214</span>
        </p>
      </div>
    </div>
    <div >
      
    </div>
    <div>
      <v-container class="tableContainer">
        <v-layout
          class="tablerow"
          v-for="data in covidPatientData"
          :key="data.statecode"
        >
          <v-card class="stateName">
            <span>{{ data.state }}</span>
          </v-card>
          <v-card class="confirmCount">
            <span>{{ data.confirmed }}</span>
          </v-card>
          <v-card class="activeCount">
            <span>{{ data.active }}</span>
          </v-card>
          <v-card class="recoveredCount">
            <span>{{ data.recovered }}</span>
          </v-card>
          <v-card class="deceasedCount">
            <span>{{ data.deaths }}</span>
          </v-card>
          <v-card class="totalCount">
            <span>{{ data.confirmed }}</span>
          </v-card>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
<script>
import covidData from "../data/data.json";
export default {
  name: "StateCards",
  data() {
    return {
      covidPatientData: [],
    };
  },
  mounted() {
    this.covidPatientData = covidData;
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/StateCards.scss";
</style>
