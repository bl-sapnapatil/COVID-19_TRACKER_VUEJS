<template>
    <div>
        <div id="homeleft">
            <HomeLeft />
        </div>
        <div id="homeright">
            <HomeRight />
        </div>
    </div>
</template>
<script>
import HomeLeft from "./StateCards"
import HomeRight from "./AllCasesInIndia"
export default {
    name:"Home",
    components:{
        HomeLeft, HomeRight
    }
}
</script>
<style lang="scss" scoped>
@import "../style/Home.scss";
</style>