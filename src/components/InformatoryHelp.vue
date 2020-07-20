<template>
  <div>
    <img
      class="iconsontable"
      src="../assets/building.svg"
      alt=""
      width="28px"
      height="28px"
    />
    <!-- <span class="iconsontable">Unassigned</span> -->
    <v-btn icon class="iconsontable"><span>1M</span></v-btn>
    <v-btn icon class="iconsontable"
      ><span @click="showInfoTable()"> ? </span></v-btn
    >
    <div class="helptable" v-show="helptable">
      <p>
        <span class="tablecontent"
          ><img src="../assets/building.svg" width="30px" height="30px" />
          Toggle between States/Districts</span
        >
        <span class="tablecontent"
          ><v-icon class="iconinhelp">mdi-filter-outline</v-icon> Patients per 1
          Million Population</span
        >
        <span class="tablecontent"
          ><v-icon class="iconinhelp">mdi-sort-descending</v-icon> Sort By
          Descending</span
        >
        <span class="tablecontent"
          ><v-icon class="iconinhelp">mdi-sort-ascending</v-icon> Sort By
          Ascending</span
        >
        <span class="tablecontent">
          <v-icon class="iconinhelp">mdi-sort-ascending</v-icon> Sort By Delta [
          Long Press ]</span
        >
        <span class="tablecontent"
          ><v-icon class="iconinhelp">mdi-information-outline</v-icon> Notes
        </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "InformatoryHelp",
  components: {},
  data() {
    return {
      helptable: false,
    };
  },
  methods: {
    showInfoTable() {
      if (this.helptable == true) this.helptable = false;
      else this.helptable = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/InformatoryHelp.sass";
</style>