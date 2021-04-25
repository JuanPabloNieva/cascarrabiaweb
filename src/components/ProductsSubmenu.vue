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

<style scoped>
:root {
  --main-color : #000000;
  --links-color : #FF4DB1;
  --fondo-light-color : #FFE4F9;
  --fondo-color: #222222;
  --link-focus-color : #FFEE2F;
  --text-color : #000000;
  --text-light-color: #FFE4F9;
  --fondo-transparente: rgb(0, 0, 0, .7);
}
/* products-submenu */
#products-submenu {
  display: flex;
  flex-direction: column;
  background-color: var(--main-color);
}

.submenu-item {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--links-color);
}

.submenu-item > a {
  padding: 20px;
  padding-left: 40px;
  text-align: start;
  width: 100%;
  font-weight: bold;
  color: var(--fondo-light-color);
}
</style>
