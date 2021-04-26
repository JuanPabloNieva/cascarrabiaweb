<template>
  <div id="products-submenu">
    <div class="submenu-item"><a href="#" @click="filterBy('TODO')">Quiero ver TODO</a></div>
    <div class="submenu-item" v-for="categoria of categories" :key="categoria.id"><a href="#" @click="filterBy(categoria.nombre)">Quiero ver {{categoria.nombre}}</a></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      categories: state => state.categories
    })
  },
  methods: {
    ...mapActions(['filterBy'])
  }
}
</script>
