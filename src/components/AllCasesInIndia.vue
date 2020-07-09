<template>
  <div class="homeright">
    <div class="indiaButton">
      <v-menu class="myDropDown">
        <template v-slot:activator="{ on, attrs }">
          <v-btn x-large text v-bind="attrs" v-on="on">
            India
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div>
      <h6 class="lastupdated">Last Updated {{ date }}</h6>
    </div>
    <v-divider ></v-divider>
    <div class="lastupdated">
      <h3>India</h3>
      <span>Total Cases :: </span>
    </div>
    <div class="map">
      <Map />
    </div>
  </div>
</template>
<script>
import Map from './IndiaMap'
import stateJson from '../data/states.json'
export default {
  name: "AllCasesInIndia",
  components:{
    Map,
  },
  data() {
    return {
      date: "",
      items: stateJson,
    };
  },
  mounted() {
    this.date = new Date();
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/AllCasesInIndia.scss";
</style>