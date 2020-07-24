<template>
  <div>
    <div class="row">
    <div class="leftcard">
        <Main />
    </div>
    <div class="rightcard">
        <MainSide />
    </div>
  </div>
  </div>
</template>
<script>
import Main from "./StateCards";
import MainSide from "./AllCasesInIndia";
export default {
  components: {
    Main,
    MainSide,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/Home.scss";
</style>
