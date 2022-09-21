<template>
  <div class="homediv">
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
   mounted(){
      console.log(process.env)
   }
};
</script>
<style lang="scss" scoped>
@import "../styles/Home.sass";
</style>