<template>
    <div id="categorias">
        <!-- <div v-for="categoria of categorias" :key="categoria.id">
            <a href="#" type="button">{{categoria.nombre}}</a>
        </div> -->
        <div class="categorias-item"><a href="#">Pilusos</a></div>
        <div class="categorias-item"><a href="#">Gorras</a></div>
        <div class="categorias-item"><a href="#">Medias</a></div>
        <div class="categorias-item"><a href="#">Gorritos</a></div>
    </div>
</template>

<script>
export default {
  name: 'Categoria',
  props: {
  }
}
</script>

<style scoped>

#categorias {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1em;
    padding: .5em;
    /* width: 100%; */
    background-color: #ffee2f;
    /* background-color: #fff27e; */
    font-weight: bold;
    /* position: fixed; */
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
