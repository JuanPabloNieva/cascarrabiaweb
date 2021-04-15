<template>
  <div id="submenu-productos">
    <div class="submenu-item"><a href="#" @click="filtrarPor('Todas')">Quiero ver todo</a></div>
    <div class="submenu-item"><a href="#" @click="filtrarPor('Pilusos')">Quiero ver pilusos</a></div>
    <div class="submenu-item"><a href="#" @click="filtrarPor('Gorras')">Quiero ver gorras</a></div>
    <div class="submenu-item"><a href="#" @click="filtrarPor('Medias')">Quiero ver medias</a></div>
    <div class="submenu-item"><a href="#" @click="filtrarPor('Gorritos')">Quiero ver gorritos</a></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      filtro: state => state.filtro
    })
  },
  methods: {
    ...mapActions(['filtrarPor'])
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
/* SUBMENU-PRODUCTOS */
#submenu-productos {
  display: none;
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
