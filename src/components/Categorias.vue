<template>
    <div id="categorias">
        <!-- <div v-for="categoria of categorias" :key="categoria.id">
            <a href="#" type="button">{{categoria.nombre}}</a>
        </div> -->
      <p class="title-categoria">Categorías</p>
      <div class="categorias-items">
        <div class="categorias-item"><a href="#" @click="filtrarPor('Todas')">Todas</a></div>
        <div class="categorias-item"><a href="#" @click="filtrarPor('Pilusos')">Pilusos</a></div>
        <div class="categorias-item"><a href="#" @click="filtrarPor('Gorras')">Gorras</a></div>
        <div class="categorias-item"><a href="#" @click="filtrarPor('Medias')">Medias</a></div>
        <div class="categorias-item"><a href="#" @click="filtrarPor('Gorritos')">Gorritos</a></div>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Categoria',
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

#categorias {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 1em;
    padding: .5em;
    /* width: 100%; */
    background-color: #ffee2f;
    /* background-color: #fff27e; */
    font-weight: bold;
    /* position: fixed; */
}

.title-categoria {
  text-align: center;
}

.categorias-items {
  display: flex;
  margin-top: 10px;
}

.categorias-item {
    margin: auto;
    padding: .5em;
    border-radius: 5px;
    background-color: #ffffff;
    /* background-color: #fff27e; */
    font-size: 3vw;
}
</style>
