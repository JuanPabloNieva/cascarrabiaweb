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

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
/* Cargando pagina*/

.fondo-cargando {
  display: flex;
  position: absolute;
  z-index: 10;
  flex-direction: column;
  justify-items: start;
  width: 100vw;
  height: 100vh;
  background-color: var(--fondo-transparente);
}

.text-cargando {
  margin: 50px auto;
  font-size: 30px;
  font-weight: bold;
  color:var(--link-focus-color)
}

.cargando {
  margin: 150px auto;
  width: 100px;
  height: 100px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 1.5s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
