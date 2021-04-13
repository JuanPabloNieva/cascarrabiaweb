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
      await axios
        .get('https://cascarrabia.herokuapp.com/api/productos_all')
        .then(response => {
          const productos = response.data.productos
          commit('cargarProductos', productos)
        })
        .catch(e => console.log(e))
    },
    filtrarPor: async function ({ commit }, value) {
      await axios
        .get('https://cascarrabia.herokuapp.com/api/productos_all')
        .then(response => {
          let productos = response.data.productos
          if (value !== 'Todas') {
            productos = productos.filter(p => p.categoria === value.toUpperCase())
          }
          commit('cargarProductos', productos)
        })
        .catch(e => console.log(e))
    }
  },
  modules: {
  }
})
