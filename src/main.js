import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import Trend from 'vuetrend';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))
Vue.component('menu-icon', MenuIcon);
Vue.use(Trend);
require('dotenv').config()
Vue.use(VueMaterial)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
