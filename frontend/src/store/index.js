import Vue from 'vue'
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
  //Function that passes the state and returns the state with only the objects you want to store.
  //reducer: state => state
})

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    addProduct(state, product) {
      state.cart.push(product)
    },
    deleteProduct(state, index) {
      state.cart.splice(index, 1)
    },
    clearCart(state) {
      state.cart = []
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocalStorage.plugin]
})
