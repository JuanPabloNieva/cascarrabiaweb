<template>
  <div id="app">
    <nav id="nav-bar">
      <div id="menu" class="nav-bar-menu"> <a href="#" type="button" v-on:click="expandirMenu"><i class="fas fa-bars"></i></a> </div>
      <div class="nav-bar-menu"><i class="fas fa-shopping-cart"></i></div>
    </nav>
    <div id="nav-bar-extend" v-on:click="clickearFueraMenu">
      <div id="nav-bar-items">
        <div id="equis-nav-bar">
          <a id="equis" href="#" v-on:click="cerrarMenu">X</a>
        </div>
        <router-link id="productos" to="/" @click.native="expandirSubmenu">Productos</router-link>
        <div id="submenu-productos">
          <div class="submenu-item"><a href="#" @click="filtrarPor('Todas')">Mostrar Todos</a></div>
          <div class="submenu-item"><a href="#" @click="filtrarPor('Pilusos')">Pilusos</a></div>
          <div class="submenu-item"><a href="#" @click="filtrarPor('Gorras')">Gorras</a></div>
          <div class="submenu-item"><a href="#" @click="filtrarPor('Medias')">Medias</a></div>
          <div class="submenu-item"><a href="#" @click="filtrarPor('Gorritos')">Gorritos</a></div>
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
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #333333;
}

html {
  background-color: #ffffff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
}

#nav-bar {
    display: flex;
    justify-content: space-between;
    background-color: #ffee2f;
}

/* boton menu - boton carrito */

.nav-bar-menu {
    margin: 1rem;
}

#nav-bar-extend {
    display: none;
    position: absolute;
    justify-content: flex-start;
    top: 0%;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, .7);
    font-weight: bold;
}

#nav-bar-items {
    display: flex;
    flex-direction: column;
    z-index: 1;
    padding: 0%;
    width: 70vw;
    height: 100vh;
    background-color: #ffee2f;
}

#equis-nav-bar {
    display: flex;
    justify-content: flex-end;
    padding: 4px;
}

#equis {
  font-size: 1.5em;
  /* width: 10vh; */
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
  background-color: #ffffff;
}
.submenu-item {
  /* margin: 10px; */
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-bottom: 2px solid #ffee2f;
}
</style>
