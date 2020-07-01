import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../components/SideBar.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
 
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
