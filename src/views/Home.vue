<template>
  <div class="home">
    <Categorias/>
    <Productos :productos="productos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Productos from '@/components/Productos.vue'
import Categorias from '@/components/Categorias.vue'
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      productos: []
    }
  },
  components: {
    Productos,
    Categorias
  },
  methods: {
    async getProductos () {
      const datos = await axios.get('https://cascarrabia.herokuapp.com/api/productos_all')
      this.productos = datos.data.productos
      console.log(datos)
    }
  },
  created () {
    this.getProductos()
  }
}
</script>
