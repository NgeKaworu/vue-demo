import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import global from './modules/global'
import loading from '@/plugins/loading'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    global,
    cart,
    products
  },
  plugins:[loading],
  strict: debug,
})
