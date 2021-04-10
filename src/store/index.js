import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filtro: 'Todas',
    productos: [],
    productosAll: []
  },
  mutations: {
    cargarProductos (state, productos) {
      state.productos = productos
    }
  },
  actions: {
    obtenerProductos: async function ({ commit }) {
      const data = await axios.get('https://cascarrabia.herokuapp.com/api/productos_all')
      const productos = data.data.productos
      commit('cargarProductos', productos)
    },
    filtrarPor: async function ({ commit }, value) {
      const data = await axios.get('https://cascarrabia.herokuapp.com/api/productos_all')
      let productos = data.data.productos
      if (value !== 'Todas') {
        productos = productos.filter(p => p.categoria === value.toUpperCase())
      }
      commit('cargarProductos', productos)
    }
  },
  modules: {
  }
})
