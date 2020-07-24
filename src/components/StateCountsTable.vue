<template>
  <div class="table">
    
    <div class="tableContainer">
      <div class="tabletitles">
      <span class="tabletitlestate">State/UT</span>
      <span class="tabletitleC">C</span>
      <span class="tabletitleA">A</span>
      <span class="tabletitleR">R</span>
      <span class="tabletitleD">D</span>
      <span class="tabletitleT">T</span>
    </div>
      <v-layout
        v-for="data in covidPatientData"
        :key="data.statecode"
      >
        <div class="stateName">{{ data.state }}</div>
        <div class="confirmCount">{{ data.confirmed }}</div>
        <div class="activeCount">{{ data.active }}</div>
        <div class="recoveredCount">{{ data.recovered }}</div>
        <div class="deceasedCount">{{ data.deaths }}</div>
        <div class="totalCount">{{ data.confirmed }}</div>
      </v-layout>
    </div>
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
@import "../styles/StateCountsTable.scss";
</style>
