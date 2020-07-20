<template>
  <div>
    <div class="graphactions">
      <h1>Spread Trends</h1>
      <span v-on:click="displaynumbers" class="cumulative">
        Cumulative
      </span>
      <span v-on:click="changeToDailyCount" class="daily">
        Daily
      </span>
    </div>
    <div class="graphs">
      <span>{{ message }}</span>
      <v-card flat class="confirmedgraph">
        <v-card-title>Confirmed</v-card-title>
        <apexchart
          type="line"
          height="250"
          :options="confirmedChartOptions"
          :series="confirmedData"
        ></apexchart>
      </v-card>
      <v-card flat class="activegraph">
        <v-card-title>Active</v-card-title>
        <apexchart
          type="line"
          height="250"
          :options="activeChartOptions"
          :series="activeData"
        ></apexchart>
      </v-card>
      <v-card flat class="recoveredgraph">
        <v-card-title>Recovered</v-card-title>
        <apexchart
          type="line"
          height="250"
          :options="recoveredChartOptions"
          :series="recoveredData"
        ></apexchart>
      </v-card>
      <v-card flat class="deceasedgraph">
        <v-card-title>Deceased</v-card-title>
        <apexchart
          v-model="deceasedgraph"
          type="line"
          height="250"
          :options="deceasedChartOptions"
          :series="deceasedData"
        ></apexchart>
      </v-card>
    </div>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "Graphs",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      num1: 100,
      num2: 200,
      total: "",
      message: "not updated",
      deceasedgraph: "",
      confirmedData: [
        {
          name: "Confirmed",
          data: [100, 3978, 53000, 107650, 245687, 768972, 1028462],
        },
      ],
      confirmedChartOptions: {
        chart: {
          zoom: {
            enabled: false,
          },
        },
        stroke: {
          curve: "smooth",
          colors: "#FF0000",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
      },
      activeData: [
        {
          name: "Active",
          data: [50, 368, 1489, 18624, 50487, 98787, 248462],
        },
      ],
      activeChartOptions: {
        chart: {
          zoom: {
            enabled: false,
          },
        },
        stroke: {
          curve: "smooth",
          colors: "#0000FF",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
      },
      recoveredData: [
        {
          name: "Recovered",
          data: [100, 4587, 8459, 19874, 36874, 168972, 528462],
        },
      ],
      recoveredChartOptions: {
        chart: {
          zoom: {
            enabled: false,
          },
        },
        stroke: {
          curve: "smooth",
          colors: "#2E8B57",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
      },

      deceasedData: [
        {
          name: "Deceased",
          data: [5, 45, 174, 898, 5540, 17045, 24245],
        },
      ],
      deceasedChartOptions: {
        chart: {
          zoom: {
            enabled: false,
          },
        },
        stroke: {
          curve: "smooth",
          colors: "#696969",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
      },
    };
  },
  methods: {
    displaynumbers: function(event) {
      console.log(event);
      alert((this.total = this.num1 + this.num2));
    },
    changeToDailyCount: function() {
      let confirmedPatientsData = [
        890412,
        914352,
        935608,
        956741,
        965874,
        1011589,
        1248410,
      ];
      this.confirmedData = [
        {
          data: confirmedPatientsData,
        },
      ];
      let activePatientsData = [
        84412,
        91352,
        93608,
        95741,
        96874,
        100589,
        128410,
      ];
      this.activeData = [
        {
          data: activePatientsData,
        },
      ];
      let recoveredPatientsData = [
        4412,
        9352,
        15608,
        16674,
        17574,
        20589,
        22841,
      ];
      this.recoveredData = [
        {
          data: recoveredPatientsData,
        },
      ];
      let deceasedPatientsData = [42, 55, 60, 121, 90, 100, 120];
      this.deceasedData = [
        {
          data: deceasedPatientsData,
        },
      ];
      this.xaxis = [
        "14 Jul",
        "15 Jul",
        "16 Jul",
        "17 Jul",
        "18 Jul",
        "19 Jul",
        "20 Jul",
      ];
      this.confirmedData.confirmedChartOptions.xaxis = [
        {
          categories: this.xaxis,
        },
      ];
    },
    updateMessage: function() {
      this.message = "updated";
      console.log(this.$el.textContent); // => 'not updated'
      this.$nextTick(function() {
        console.log(this.$el.textContent); // => 'updated'
      });
    },
  },
  watch: {
    deceasedgraph(newValue, oldValue) {
      console.log(">>>>>>INSIDE DECEASED GRAPH>>>>>>>");
      console.log("New Graph Data>>>>" + newValue);
      console.log("Old Graph Data>>>>" + oldValue);
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "../styles/Graphs.sass";
</style>

