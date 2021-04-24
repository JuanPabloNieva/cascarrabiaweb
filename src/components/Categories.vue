<template>
    <div id="categories">
      <p class="title-categoria">Categorías</p>
      <div class="categories-items">
        <div class="categories-item"><a href="#" @click="filterBy('TODO')">TODAS</a></div>
        <div class="categories-item" v-for="categoria of categories" :key="categoria.id"><a href="#" @click="filterBy(categoria.nombre)">{{categoria.nombre}}</a></div>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Categoria',
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
#categories {
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

.categories {
  display: flex;
  flex-direction: column;
}

.title-categoria {
  text-align: center;
  color: #ff4db1;
}

.categories-items {
  display: flex;
  margin-top: 10px;
}

.categories-item {
  margin: 10px auto;
  padding: .5em;
  border-radius: 5px;
  background-color: #111111;
  font-size: 3vw;
}

.categories-item > a {
  color: #FFE4F9;
}

.categories-item > a:focus {
  color: #ffee2f;
}
</style>
