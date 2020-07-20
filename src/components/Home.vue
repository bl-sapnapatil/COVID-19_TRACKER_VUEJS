<template>
<div class="container">
    <div class="row">
      <div class="card">
        <div class="card-body">
          <Main />
        </div>
      </div>
      <div class="card">
        <div class="card-body">
           <MainSide />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Main from "./StateCards"
import MainSide from "./AllCasesInIndia"
export default {
  components:{
    Main, MainSide
  }
}
</script>
<style lang="scss" scoped>
@import "../styles/Home.sass";
</style>