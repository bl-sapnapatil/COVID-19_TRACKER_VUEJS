<template>
  <v-app>
    <v-navigation-drawer
      class="drawer"
      fixed
      permanent
      v-model="drawer"
      :width="350"
      height="100%"
      :mini-variant-width="90"
      expand-on-hover
    >
      <v-list-item class="toptitle">
        <span class="subtitle">COVID19</span>
      </v-list-item>
      <v-list-item>
        <span class="subtitle">INDIA</span>
      </v-list-item>
      <v-list>
        <v-list-item>
          <v-list-item-icon class="listicon">
            <b-icon icon="house" font-scale="1.5" variant="secondary"></b-icon>
          </v-list-item-icon>
          <v-list-item-content class="listcontent">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon class="listicon">
            <b-icon icon="book" font-scale="1.5" variant="secondary"></b-icon>
          </v-list-item-icon>
          <v-list-item-content class="listcontent">
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon class="listicon">
            <b-icon
              icon="question-circle"
              font-scale="1.5"
              variant="secondary"
            ></b-icon>
          </v-list-item-icon>
          <v-list-item-content class="listcontent">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon class="listicon">
            <b-icon icon="moon" font-scale="1.5" variant="secondary"></b-icon>
          </v-list-item-icon>
          <v-list-item-content class="listcontent">
            <v-list-item-title>A crowdresourced inititative</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </v-app>
</template>
<script>
export default {
  name: "SideBar",
  data() {
    return {
      drawer: true,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/SideBar.sass";
</style>
