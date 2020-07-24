import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../components/SideBar";
import Home from "../components/Home.vue";
import SideBar from "../components/Side.vue";

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
        component: Home,
      },
    ],
  },
  {
    path: "/side",
    name: "SideBar",
    component: SideBar,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
