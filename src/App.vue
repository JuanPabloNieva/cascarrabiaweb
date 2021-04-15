<template>
  <div id="app">
    <div id="loader" class="fondo-cargando">
      <img class="cargando" src="@/assets/Logo-circular.png">
      <p class="text-cargando">cargando...</p>
    </div>
    <nav id="nav-bar">
      <div id="menu" class="nav-bar-menu"> <a href="#" type="button" v-on:click="expandirMenu"><i class="fas fa-bars"></i></a> </div>
      <div class="logo-home"><router-link to="/"><img id="logo" src="@/assets/Logo.png" alt="Logo de cascarrabia"></router-link></div>
      <div class="nav-bar-menu"><i class="fas fa-shopping-cart"></i></div>
    </nav>
    <div id="nav-bar-extend" v-on:click="clickearFueraMenu">
      <div id="nav-bar-items">
        <div id="equis-nav-bar">
          <a id="equis" href="#" v-on:click="cerrarMenu">X</a>
        </div>
        <router-link id="productos" to="/" @click.native="expandirSubmenu">Productos</router-link>
        <div id="submenu-productos">
          <div class="submenu-item"><a href="#" @click="filtrarPor('Todas')">Quiero ver todo</a></div>
          <div class="submenu-item"><a href="#" @click="filtrarPor('Pilusos')">Quiero ver pilusos</a></div>
          <div class="submenu-item"><a href="#" @click="filtrarPor('Gorras')">Quiero ver gorras</a></div>
          <div class="submenu-item"><a href="#" @click="filtrarPor('Medias')">Quiero ver medias</a></div>
          <div class="submenu-item"><a href="#" @click="filtrarPor('Gorritos')">Quiero ver gorritos</a></div>
        </div>
        <router-link to="/about" @click.native="cerrarMenu">Nosotros</router-link>
        <router-link to="/servicios" @click.native="cerrarMenu">Ayuda</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  mounted: function () {
    const div = document.getElementById('loader')
    const el = window.getComputedStyle(div)
    if (el.getPropertyValue('display') === 'flex') {
      div.style.display = 'none'
    }
  },
  computed: {
    ...mapState({
      filtro: state => state.filtro
    })
  },
  methods: {
    ...mapActions(['filtrarPor']),
    expandirMenu () {
      document.getElementById('nav-bar-extend').style.display = 'flex'
    },
    expandirSubmenu () {
      const div = document.getElementById('submenu-productos')
      const el = window.getComputedStyle(div)
      if (el.getPropertyValue('display') === 'flex') {
        div.style.display = 'none'
      } else {
        div.style.display = 'flex'
      }
    },
    cerrarMenu () {
      document.getElementById('nav-bar-extend').style.display = 'none'
    },
    clickearFueraMenu (e) {
      const clic = e.target
      const div = document.getElementById('nav-bar-items')
      const prod = document.getElementById('productos')
      const el = window.getComputedStyle(div)

      /* Si el elemento esta en display:flex y se clickea fuera del elemento o en productos */
      if (el.getPropertyValue('display') === 'flex' && clic !== div && clic !== prod) {
        document.getElementById('nav-bar-extend').style.display = 'none'
      }
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

#nav-bar {
    display: flex;
    justify-content: space-between;
    background-color: var(--main-color);
}

/* boton menu - boton carrito */

.nav-bar-menu {
    margin: 1rem;
    color: var(--links-color);
}

#nav-bar-extend {
    display: none;
    position: absolute;
    justify-content: flex-start;
    z-index: 5;
    top: 0%;
    width: 100vw;
    height: 100vh;
    background-color: var(--fondo-transparente);
    font-weight: bold;
}

#nav-bar-items {
    display: flex;
    flex-direction: column;
    z-index: 10;
    padding: 0%;
    width: 70vw;
    height: 100vh;
    background-color: var(--main-color);
}

#equis-nav-bar {
    display: flex;
    justify-content: flex-end;
    padding: 4px;
}

#equis {
  font-size: 1.5em;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
}

#nav-bar-items > a{
  display: flex;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 1.5em;
}

/* SUBMENU-PRODUCTOS */
#submenu-productos {
  display: none;
  flex-direction: column;
  background-color: var(--main-color);
}

.submenu-item {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--links-color);
}

.submenu-item > a {
  padding: 20px;
  padding-left: 40px;
  text-align: start;
  width: 100%;
  font-weight: bold;
  color: var(--fondo-light-color);
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
