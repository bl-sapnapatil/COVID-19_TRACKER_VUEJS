<template>
  <v-app>
    <v-navigation-drawer
      class="drawer"
      fixed
      clipped
      permanent
      v-model="drawer"
      :width="310"
      :mini-variant-width="90"
      expand-on-hover
    >
      <v-list-item class="toptitle">
        <v-title class="subtitle">COVID19</v-title>
      </v-list-item>
      <v-list-item>
        <v-subtitle class="subtitle">INDIA</v-subtitle>
      </v-list-item>
      <v-list >
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon class="title">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="title">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
      items: [
        { title: "Home", icon: "mdi-36px mdi-home-outline" },
        { title: "Blog", icon: "mdi-36px mdi-book-open-page-variant" },
        { title: "About", icon: "mdi-36px mdi-help-circle-outline" },
        {
          title: "A crowdresourced inititative",
          icon: "mdi-36px mdi-checkbox-multiple-blank-circle-outline"
        }
      ],
      mini: true
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/SideBar.scss";
</style>