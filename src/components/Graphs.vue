<template>
  <div>
    <div  class="titleongraph">
      <v-title>Spread Trends</v-title>
    </div>
      <div class="graphactions">
      <span v-on:click="displaynumbers" class="cumulative">
        Cumulative
      </span>
      <span v-on:click="changeToDailyCount" class="daily">
        Daily
      </span>
    </div>
    <div class="graphs">
      <v-card flat >
        <span class="graphtitle">Confirmed</span>
        <apexchart
          type="line"
          class="confirmedgraph"
          :options="confirmedChartOptions"
          :series="confirmedData"
        ></apexchart>
      </v-card>
      <v-card flat >
        <span class="graphtitle">Active</span>
        <apexchart
          type="line"
          class="activegraph"
          :options="activeChartOptions"
          :series="activeData"
        ></apexchart>
      </v-card>
      <v-card flat >
        <span class="graphtitle">Recovered</span>
        <apexchart
          type="line"
          class="recoveredgraph"
          :options="recoveredChartOptions"
          :series="recoveredData"
        ></apexchart>
      </v-card>
      <v-card flat >
        <span class="graphtitle">Deceased</span>
        <apexchart
          v-model="deceasedgraph"
          type="line"
          class="deceasedgraph"
          :options="deceasedChartOptions"
          :series="deceasedData"
        ></apexchart>
      </v-card>
      <v-card flat >
        <span class="graphtitle">Total</span>
        <apexchart
          v-model="totalgraph"
          type="line"
          class="totalgraph"
          :options="totalChartOptions"
          :series="totalData"
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
          data: [107650, 245687, 768972, 1028462],
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
          categories: ["Apr", "May", "Jun", "Jul"],
        },
      },
      activeData: [
        {
          name: "Active",
          data: [18624, 50487, 98787, 248462],
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
          categories: ["Apr", "May", "Jun", "Jul"],
        },
      },
      recoveredData: [
        {
          name: "Recovered",
          data: [19874, 36874, 168972, 528462],
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
          categories: ["Apr", "May", "Jun", "Jul"],
        },
      },

      deceasedData: [
        {
          name: "Deceased",
          data: [898, 5540, 16045, 24245],
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
          categories: ["Apr", "May", "Jun", "Jul"],
        },
      },
      totalData: [
        {
          name: "Total",
          data: [107650, 345687, 898972, 1128462],
        },
      ],
      totalChartOptions: {
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
          categories: ["Apr", "May", "Jun", "Jul"],
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
      let confirmedPatientsData = [956741, 965874, 1011589, 1248410];
      this.confirmedData = [
        {
          data: confirmedPatientsData,
        },
      ];
      let activePatientsData = [95741, 96874, 100589, 128410];
      this.activeData = [
        {
          data: activePatientsData,
        },
      ];
      let recoveredPatientsData = [16674, 17574, 20589, 22841];
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
      this.xaxis = ["17 Jul", "18 Jul", "19 Jul", "20 Jul", "21 Jul"];
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
@import "../styles/Graphs.scss";
</style>
