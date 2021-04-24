<template>
  <div class="home">
    <div class="categories">
      <p class="title-category">Categorías</p>
      <div class="categories-list">
        <div class="categories-item"><a href="#" @click="filterBy('TODO')">TODAS</a></div>
        <Category
          v-for="category of categories"
          v-bind:key="category.id"
          v-bind:nombre="category.nombre"></Category>
      </div>
    </div>
    <div class="products-title">
      <h1>Productos</h1>
      <p class="subtitle">{{ filter }}</p>
    </div>
    <div class="products-list">
      <Product
      v-for="product of products"
      v-bind:key="product.id"
      v-bind:nombre="product.nombre"
      v-bind:url_imagen="product.url_imagen"
      v-bind:precio="product.precio"></Product>
    </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
import Category from '@/components/Category.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Product,
    Category
  },
  computed: {
    ...mapState({
      filter: state => state.filter,
      products: state => state.products,
      categories: state => state.categories
    })
  },
  methods: {
    ...mapActions(['getProducts', 'getCategories', 'filterBy'])
  },
  created () {
    this.getProducts()
    this.getCategories()
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.categories {
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

.title-category {
  text-align: center;
  color: #ff4db1;
}

.categories-list {
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

.products-title {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.subtitle {
  text-align: center;
}

.products-title h1 {
  margin: auto;
}

.products-list {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5px;
  font-weight: bold;
}
</style>
