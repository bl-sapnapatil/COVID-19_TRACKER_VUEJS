<template>
  <div class="homeleft">
    <div class="searchTitle">Search your district or state</div>
    <div class="searchDiv">
      <img style="padding-left:1%" src="../assets/searchIcon.png" />
      <input class="search" placeholder="Search" autocomplete="off" />
    </div>
    <div>
      <span class="showdatetime">{{ date }}</span>
    </div>
    <div class="main-overview">
      <div class="confirmed">
        <p>
          <span class="cardtag">Confirmed</span>
          <span>+127</span>
          <span class="count">543897</span>
          <trend
            class="trend"
            :data="[7, 3, 5, 6, 7, 8, 6, 5, 7, 8, 9, 7, 10, 12, 15]"
            :gradient="['#FF0000']"
            auto-draw
            smooth
          >
          </trend>
        </p>
      </div>
      <div class="active">
        <p>
          <span class="cardtag">Active</span>
          <span>+1530</span>
          <span class="count">657488</span>
          <trend
            class="trend"
            :data="[0, 3, 2, 4, 5, 6, 8, 4, 7, 9, 5, 6, 6, 7]"
            :gradient="['#0000FF']"
            auto-draw
            smooth
          >
          </trend>
        </p>
      </div>
      <div class="recovered">
        <p>
          <span class="cardtag">Recovered</span>
          <span>+2000</span>
          <span class="count">254555</span>
          <trend
            class="trend"
            :data="[5, 3, 4, 5, 6, 3, 2, 3, 2, 4, 5, 7, 8, 5, 9, 10]"
            :gradient="['#2E8B57']"
            auto-draw
            smooth
          >
          </trend>
        </p>
      </div>
      <div class="deceased">
        <p>
          <span class="cardtag">Deceased</span>
          <span>+45</span>
          <span class="count">18214</span>
          <trend
            class="trend"
            :data="[0.2, 0.4, 0.5, 0.7, 1, 1.3, 1.5, 1, 1.5, 1, 1.5, 1, 1.5]"
            :gradient="['#696969']"
            auto-draw
            smooth
          >
          </trend>
        </p>
      </div>
    </div>
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
      date: "",
      helptable: false,
    };
  },
  methods: {
    showDate() {
      var d = new Date(),
        minutes =
          d.getMinutes().toString().length == 1
            ? "0" + d.getMinutes()
            : d.getMinutes(),
        hours =
          d.getHours().toString().length == 1
            ? "0" + d.getHours()
            : d.getHours(),
        months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return (
        days[d.getDay()] +
        " " +
        months[d.getMonth()] +
        " " +
        d.getDate() +
        " " +
        d.getFullYear() +
        " " +
        hours +
        ":" +
        minutes
      );
    },
    showInfoTable() {
      if (this.helptable == true) this.helptable = false;
      else this.helptable = true;
    },
  },
  mounted() {
    this.covidPatientData = covidData;
    this.date = this.showDate();
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/StateCards.scss";
</style>
