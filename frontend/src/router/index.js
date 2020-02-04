import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Collection from '../views/Collection.vue';
import ProductDetail from '../views/ProductDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/collections/:collection_id',
    name: 'collections',
    component: Collection
  },
  {
    path: '/collections/:collection_id/products/:product_id',
    name: 'product-detail',
    component: ProductDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
})

export default router
