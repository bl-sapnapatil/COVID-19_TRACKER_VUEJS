import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../components/SideBar";
import Home from "../components/Home.vue";
import DistictMap from "../components/DistrictMap.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "",
        name: "Home",
        component: Home
      }
    ]
  },
  {
    path:"/map",
    name:"DistictMap",
    component:DistictMap
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
