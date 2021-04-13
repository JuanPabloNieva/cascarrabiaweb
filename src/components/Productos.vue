<template>
  <div id="lista-productos">
    <div v-for="producto of productos" :key="producto.id">
        <div class="producto-card">
          <div class="producto-card-img">
            <img :src="producto.url_imagen" alt=""/>
          </div>
          <div class="producto-card-body">
            <p class="producto-card-title">{{ producto.nombre }}</p>
            <p class="producto-card-price">${{ producto.precio }}</p>
            <!-- <button class="producto-card-button">Agregar a carrito</button> -->
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Productos',
  computed: {
    ...mapState({
      productos: state => state.productos
    })
  }
}
</script>

<style scoped>
#lista-productos {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5px;
  font-weight: bold;
}

.producto-card {
  display: flex;
  flex-direction: column;
  margin: .3em;
  border-bottom: 2px solid #ff4db1;
}

.producto-card-img {
  display: flex;
}

.producto-card-img img {
  margin: auto;
  width: 40vw;
  height: 50vw;
  object-fit: contain;
  background-color: #000000;
}

.producto-card-body {
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.producto-card-title {
  margin: auto;
  margin-top: 10px;
  font-size: 3vw;
}

.producto-card-price {
  margin: auto;
  padding: 12px;
  font-size: 4vw;
}

</style>
