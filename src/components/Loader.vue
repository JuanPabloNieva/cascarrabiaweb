<template>
    <div id="loader" class="fondo-cargando" v-if="!isloaded">
      <img class="cargando" src="@/assets/images/Logo-circular.png">
      <p class="text-cargando">cargando...</p>
    </div>
</template>

<script>
export default {
  data: () => {
    return {
      isloaded: false
    }
  },
  mounted () {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        this.isloaded = true
      }
    }
  }
}
</script>
