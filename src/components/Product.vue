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
