<template>
  <div class="homeleft">
    <div class="statecards">
    <div class="searchTitle">Search your district or state</div>
    <div class="searchDiv">
      <img src="../assets/searchIcon.png" />
      <input class="search" placeholder="Search" autocomplete="off" />
    </div>
    <div>
      <span class="showdatetime">{{ date }}</span>
    </div>
    <div class="main-overview">
      <div class="confirmed">
        <p>
          <span class="cardtag">Confirmed</span>
          <span class="incresedecrease">+35127</span>
          <span class="count">10,20,897</span>
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
          <span class="incresedecrease">+2548</span>
          <span class="count">3,37,488</span>
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
          <span class="incresedecrease">+17570</span>
          <span class="count">6,15,635</span>
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
          <span class="incresedecrease">+685</span>
          <span class="count">24,928</span>
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
    </div>
    <div>
     <InformatoryHelp />
    </div>
    <div>
      <state-counts-table />
    </div>
  </div>
</template>
<script>
import StateCountsTable from "./StateCountsTable.vue";
import InformatoryHelp from "./InformatoryHelp.vue"
export default {
  name: "StateCards",
  components: {
    StateCountsTable,InformatoryHelp
  },
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
    this.date = this.showDate();
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/StateCards.sass";
</style>
