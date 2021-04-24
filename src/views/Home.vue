<template>
  <div class="home">
    <Categories/>
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
import Categories from '@/components/Categories.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Product,
    Categories
  },
  computed: {
    ...mapState({
      filter: state => state.filter,
      products: state => state.products
    })
  },
  methods: {
    ...mapActions(['getProducts', 'getCategories'])
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
