import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../components/SideBar.vue";
import StateCards from "../components/StateCards.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "",
        name: "StateCards",
        component: StateCards
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
