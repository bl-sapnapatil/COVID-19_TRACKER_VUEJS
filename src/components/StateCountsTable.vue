<template>
  <div>
    <div class="tabletitles">
      <span class="tabletitlestate">State/UT</span>
      <span class="tabletitleC">C</span>
      <span class="tabletitleA">A</span>
      <span class="tabletitleR">R</span>
      <span class="tabletitleD">D</span>
      <span class="tabletitleT">T</span>
    </div>
    <v-container class="tableContainer">
      <v-layout
        class="tablerow"
        v-for="data in covidPatientData"
        :key="data.statecode"
      >
        <span class="stateName">{{ data.state }}</span>
        <span class="confirmCount">{{ data.confirmed }}</span>
        <span class="activeCount">{{ data.active }}</span>
        <span class="recoveredCount">{{ data.recovered }}</span>
        <span class="deceasedCount">{{ data.deaths }}</span>
        <span class="totalCount">{{ data.confirmed }}</span>
      </v-layout>
    </v-container>
    <input type="text" v-model="message" />
  </div>
</template>
<script>
import covidData from "../data/data.json";
export default {
    name:'StateCountsTable',
     data() {
    return {
      covidPatientData: [],
      message:"Data To Check Watchers",
    };
  },
  watch:{
    message(newValue, oldValue) {
      console.log(">>>>>>INSIDE DECEASED GRAPH>>>>>>>");
      console.log("New Graph Data>>>>" + newValue);
      console.log("Old Graph Data>>>>" + oldValue);
  }
  },
  mounted(){
      this.covidPatientData = covidData;
  }
}
</script>
<style lang="scss" scoped>
@import "../styles/StateCountsTable.sass";
</style>
