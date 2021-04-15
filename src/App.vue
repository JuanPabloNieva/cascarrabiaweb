<template>
  <div id="app">
    <div id="loader" class="fondo-cargando">
      <img class="cargando" src="@/assets/Logo-circular.png">
      <p class="text-cargando">cargando...</p>
    </div>
    <navegador/>
    <nav-extendido/>
    <router-view/>
  </div>
</template>

<script>
import Navegador from './components/Navegador.vue'
import NavExtendido from './components/NavExtendido.vue'

export default {
  components: { Navegador, NavExtendido },
  mounted: function () {
    const div = document.getElementById('loader')
    const el = window.getComputedStyle(div)
    if (el.getPropertyValue('display') === 'flex') {
      div.style.display = 'none'
    }
  }
}
</script>

<style>
:root {
  --main-color : #000000;
  --links-color : #FF4DB1;
  --fondo-light-color : #FFE4F9;
  --fondo-color: #222222;
  --link-focus-color : #FFEE2F;
  --text-color : #000000;
  --text-light-color: #FFE4F9;
  --fondo-transparente: rgb(0, 0, 0, .7);
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: var(--links-color);
}

a:active, a:focus {
  color: var(--link-focus-color);
}

html {
  background-color: var(--fondo-light-color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}

.logo-home {
  display: flex;
  background-color: var(--main-color);
}

#logo {
  margin: auto;
  padding: 10px;
  width: 25vw;
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

@media (prefers-color-scheme:dark){
  #app {
    color: var(--text-color);
  }
  html {
    background-color: var(--fondo-light-color);
  }
}
</style>
