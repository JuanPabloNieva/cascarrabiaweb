import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filter: 'TODO',
    products: [],
    categories: []
  },
  mutations: {
    loadProducts (state, products) {
      state.products = products
    },
    loadCategories (state, categories) {
      state.categories = categories
    }
  },
  actions: {
    getProducts: async function ({ commit }) {
      await axios
        .get(process.env.VUE_APP_PRODUCTS_API)
        .then(response => {
          const products = response.data.productos
          commit('loadProducts', products)
        })
        .catch(e => console.log(e))
    },
    filterBy: async function ({ commit }, value) {
      await axios
        .get(process.env.VUE_APP_PRODUCTS_API)
        .then(response => {
          let products = response.data.productos
          if (value !== 'TODO') {
            products = products.filter(p => p.categoria === value.toUpperCase())
          }
          this.state.filter = value
          commit('loadProducts', products)
        })
        .catch(e => console.log(e))
    },
    getCategories: async function ({ commit }) {
      await axios
        .get(process.env.VUE_APP_CATEGORIES_API)
        .then(response => {
          const categories = response.data.categorias
          commit('loadCategories', categories)
        })
        .catch(e => console.log(e))
    }
  },
  modules: {
  }
})
