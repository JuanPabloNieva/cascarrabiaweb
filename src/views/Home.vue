<template>
  <div class="home">
    <Categorias/>
    <div class="title">
      <h1>Productos</h1>
    </div>
    <Productos/>
  </div>
</template>

<script>
// @ is an alias to /src
import Productos from '@/components/Productos.vue'
import Categorias from '@/components/Categorias.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Productos,
    Categorias
  },
  computed: {
    ...mapState({
      productos: state => state.productos
    })
  },
  methods: {
    ...mapActions(['obtenerProductos'])
  },
  created () {
    this.obtenerProductos()
  }
}
</script>

<style scoped>
.title {
  display: flex;
  margin: 10px;
}

.title h1 {
  margin: auto;
}
</style>
