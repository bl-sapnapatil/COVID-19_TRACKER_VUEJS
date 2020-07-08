<template>
  <div id="homeright">
    <div class="indiaButton">
      <v-menu class="myDropDown">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">India</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" v-on@click>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="map">
      <v-flex xs6 sm1 md10 lg12>
        <v-card flat>
          <img src="../assets/Map.jpeg" width="110%" height="110%" />
        </v-card>
      </v-flex>
    </div>
  </div>
</template>
<script>
export default {
  name: "AllCasesInIndia",
  data: () => ({
    items: [
      { title: "Andhra Pradesh" },
      { title: "Arunachal Pradesh" },
      { title: "Assam" },
      { title: "Bihar" },
      { title: "Chhattisgarh" },
      { title: "Goa" },
      { title: "Gujrat" },
      { title: "Haryana" },
      { title: "Himachal Pradesh" },
      { title: "Jammu and Kashmir" },
      { title: "Jharkhand" },
      { title: "Karnataka" },
      { title: "Kerala" },
      { title: "Madhya Pradesh" },
      { title: "Maharashtra" },
      { title: "Manipur" },
      { title: "Meghalaya" },
      { title: "Mizoram" },
      { title: "Nagaland" },
      { title: "Odisha" },
      { title: "Punjab" },
      { title: "Rajasthan" },
      { title: "Sikkim" },
      { title: "Tamil Nadu" },
      { title: "Telangana" },
      { title: "Tripura" },
      { title: "Uttar Pradesh" },
      { title: "Uttarakhand" },
      { title: "West Bengal" },
      { title: "Andaman and Nikobar" },
      { title: "Chandigarh" },
      { title: "Dadra and Nagar Haveli" },
      { title: "Daman and Diu" },
      { title: "Delhi" },
      { title: "Lakshadweep" },
      { title: "Pondecherry" }
    ]
  })
};
</script>
<style lang="scss" scoped>
@import "../styles/Home.scss";
</style>
