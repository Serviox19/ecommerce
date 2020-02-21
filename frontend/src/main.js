import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker';
import '../public/scss/main.scss';
import router from './router'
import store from './store';

//importing layouts and defining them globally
import Default from './layouts/Default';
import Checkout from './layouts/CheckoutLayout';

Vue.component('default-layout', Default);
Vue.component('checkout-layout', Checkout);

// import firebase from "firebase";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
