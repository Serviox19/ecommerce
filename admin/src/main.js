
import Vue from "vue";
import VueRouter from "vue-router";
import DashboardPlugin from "./material-dashboard";

// Plugins
import App from "./App.vue";
import Chartist from "chartist";
import firebase from "firebase";
import { firestorePlugin } from "vuefire";

// router setup
import router from "@/router";

// plugin setup
Vue.use(VueRouter);
Vue.use(DashboardPlugin);
Vue.use(firestorePlugin);
Vue.config.productionTip = false;



// global library setup
Object.defineProperty(Vue.prototype, "$Chartist", {
  get() {
    return this.$root.Chartist;
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
});
