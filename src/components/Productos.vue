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
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Productos',
  props: {
    productos: {}
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
  background-color: #ffffff;
  /* background-color: #fff27e; */
  border-bottom: 2px solid #ffee2f;
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
  /* padding: .5em; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.producto-card-title {
  margin-top: 5px;
  font-size: 3vw;
}

.producto-card-price {
  margin: auto;
  padding-bottom: .6em;
  font-size: 4vw;
}
</style>
