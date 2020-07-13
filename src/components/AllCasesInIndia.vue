<template>
  <div class="homeright">
    <h1>{{ msg }}</h1>
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
      <h5 class="lastupdated">Last Updated {{ date }}</h5>
    </div>
    <v-divider class="divider"></v-divider>
    <div class="indiamap">
      <Map />
    </div>
  </div>
</template>
<script>
import Map from './IndiaMap'
import stateNames from '../data/states.json'
export default {
  name: "AllCasesInIndia",
  components:{
    Map,
  },
  data() {
    return {
      date: "",
      //msg: 'Welcome to Your Vue.js App',
      items: stateNames,
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