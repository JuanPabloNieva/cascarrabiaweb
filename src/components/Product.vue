<template>
  <div id="product">
    <div class="product-card">
      <div class="product-card-img">
        <img :src="url_imagen" alt=""/>
      </div>
      <div class="product-card-body">
        <p class="product-card-title">{{ nombre }}</p>
        <p class="product-card-price">${{ precio }}</p>
        <!-- <button class="product-card-button">Agregar a carrito</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    url_imagen: String,
    nombre: String,
    precio: Number
  }
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  margin: .3em;
  border-bottom: 2px solid #ff4db1;
}

.product-card-img {
  display: flex;
}

.product-card-img img {
  margin: auto;
  width: 40vw;
  height: 50vw;
  object-fit: contain;
  background-color: #000000;
}

.product-card-body {
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.product-card-title {
  margin: auto;
  margin-top: 10px;
  font-size: 3vw;
}

.product-card-price {
  margin: auto;
  padding: 12px;
  font-size: 4vw;
}

</style>
