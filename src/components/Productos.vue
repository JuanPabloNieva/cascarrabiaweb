<template>
  <div id="lista-productos">
    <div v-for="producto of productos" :key="producto.id">
        <div class="producto-card">
          <div class="producto-card-img">
            <img :src="producto.url_imagen" alt="" style="width:4em" />
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    padding: .5em;
    /* margin-top: 4em; */
}

.producto-card {
    display: flex;
    flex-direction: column;
    margin: .5em auto;
    border-radius: 5px;
    background-color: #ffffff;
}

.producto-card-img {
    display: flex;
}

.producto-card-img img {
    margin: auto;
    width: 45vw;
    height: 60vw;
    margin: auto;
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
    padding: 1em 0px .5em 0px;
    font-size: 3vw;
}

.producto-card-price {
    margin: auto;
    padding-bottom: .5em;
    font-size: 4vw;
}
</style>
