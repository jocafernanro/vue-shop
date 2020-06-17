import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import localForage from "localforage"

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: localForage,
  modules: ['cart']
})
 

import products from './modules/products'
import cart from './modules/cart'

export default new Vuex.Store({
  modules: {
    products,
    cart
  },
  plugins: [vuexLocal.plugin]
})