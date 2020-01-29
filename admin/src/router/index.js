import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";

import routes from "./routes";

// configure router
const router = new VueRouter({
  mode: "history",
  routes, // short for routes: routes
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});


export default router