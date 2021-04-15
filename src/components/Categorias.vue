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
    background-color: #000000;
    font-weight: bold;
    position: -webkit-sticky;
    position: sticky;
    top: 0%;
}

.title-categoria {
  text-align: center;
  color: #ff4db1;
}

.categorias-items {
  display: flex;
  margin-top: 10px;
}

.categorias-item {
  margin: 10px auto;
  padding: .5em;
  border-radius: 5px;
  background-color: #111111;
  font-size: 3vw;
}

.categorias-item > a {
  color: #FFE4F9;
}

.categorias-item > a:focus {
  color: #ffee2f;
}
</style>
