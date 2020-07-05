<template>
  <div>
    <v-card id="drawer">
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
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
    </v-card>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-36px mdi-home-outline" },
        {
          title: "Demographics",
          icon: "mdi-36px mdi-account-multiple-outline"
        },
        { title: "Essentials", icon: "mdi-36px mdi-cube-outline" },
        { title: "About", icon: "mdi-36px mdi-help-circle-outline" },
        { title: "Blog", icon: "mdi-36px mdi-book-open-page-variant" },
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
<style lang="stylus" scoped>
#drawer {
  font-family: 'Varela Round';
  color: #2c3e50;
  height: 100%;
  font-weight: bold;
  font-color: DimGray;
}

#title {
  color: DimGray;
}

#toptitle {
  margin-top: 20px;
  color: #e;
  font-size: 8px;
  font-weight: bold;
}
</style>
