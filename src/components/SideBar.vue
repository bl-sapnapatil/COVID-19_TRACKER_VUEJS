<template>
  <v-app>
      <v-navigation-drawer id="drawer"
        fixed permanent clipped
        v-model="drawer"
        :width="300"
        :mini-variant-width="75"
        expand-on-hover
      >
        <v-list-item id="toptitle">
          <v-title style="color:DimGray">COVID19</v-title>
          <v-subtitle style="color:RoyalBlue">India</v-subtitle>
        </v-list-item>
        <v-list id="listItems" style="margin:2px">
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon id="title">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content id="title">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            <br />
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
          <router-view></router-view>
  </v-app>
</template>
<script>
export default {
  name:"SideBar",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-36px mdi-home-outline" },
        { title: "Blog", icon: "mdi-36px mdi-book-open-page-variant" },
        { title: "About", icon: "mdi-36px mdi-help-circle-outline" },
        {
          title: "A crowdresourced inititative",
          icon: "mdi-36px mdi-checkbox-multiple-blank-circle-outline",
        },
      ],
      mini: true,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../style/SideBar.scss";
</style>