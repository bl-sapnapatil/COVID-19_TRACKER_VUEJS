<template>
  <div class="homeleft">
    <div class="searchTitle">Search your district or state</div>
    <div class="searchDiv">
      <img style="padding-left:1%" src="../assets/searchIcon.png" />
      <input class="search" placeholder="Search" autocomplete="off" />
    </div>
    <div class="main-overview">
      <div class="confirmed">
        <p>
          <span>Confirmed</span>
          <span>543897</span>
          <span>+127</span>
        </p>
      </div>
      <div class="active">
        <p>
          <span>Active</span>
          <span>657488</span>
          <span>+1530</span>
        </p>
      </div>
      <div class="recovered">
        <p>
          <span>Recovered</span>
          <span>254555</span>
          <span>+2000</span>
        </p>
      </div>
      <div class="deceased">
        <p>
          <span>Deceased</span>
          <span>18214</span>
          <span>+45</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StateCards",
  data() {
    return {
      n: 4,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../scss/Home.scss";
</style>
