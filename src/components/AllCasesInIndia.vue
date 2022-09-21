<template>
  <div class="homeright">
    <h1>{{ msg }}</h1>
    <div>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            India
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in states" :key="index">
            <v-list-item-title>{{ item }}</v-list-item-title>
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
    <div class="indiamap">
      <Graphs />
    </div>
  </div>
</template>
<script>
import Map from "./DistrictMap";
import Graphs from "./Graphs";
import service from "../services/service.js"
export default {
  name: "AllCasesInIndia",
  components: {
    Map,
    Graphs,
  },
  data() {
    return {
      date: "",
      //msg: 'Welcome to Your Vue.js App',
      states:[],
      statenames:[]
    };
  },
  methods: {
     async stateNames() {
      let count=0;
      let array=[];
      try {
        const response = await service.getStates();
        this.statenames = response.statewise;
        this.statenames.forEach(element => {
          if (element.state!='Total') {
            array[count]=element.state
            count++;
          }
        });
        this.states=array;
        console.log(">>>>>>>>>>>>>>>>",this.states.toString());
      } catch (error) {
        console.log("error" + error);
      }
    },
  },
  mounted() {
    this.date = new Date();
    this.stateNames();
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/AllCasesInIndia.sass";
</style>
