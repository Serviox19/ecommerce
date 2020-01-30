import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import Collection from '../views/Collection.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
