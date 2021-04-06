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
        <router-link to="/" @click.native="cerrarMenu">Productos</router-link>
        <router-link to="/about" @click.native="cerrarMenu">Nosotros</router-link>
        <router-link to="/servicios" @click.native="cerrarMenu">Ayuda</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    expandirMenu () {
      document.getElementById('nav-bar-extend').style.display = 'flex'
    },
    cerrarMenu () {
      document.getElementById('nav-bar-extend').style.display = 'none'
    },
    clickearFueraMenu (e) {
      const clic = e.target
      const div = document.getElementById('nav-bar-items')
      const el = window.getComputedStyle(div)
      if (el.getPropertyValue('display') === 'flex' && clic !== div) {
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
    padding: .4em;
}

#equis {
  font-size: 1.5em;
  /* width: 10vh; */
  padding: 15px;
  text-align: center;
  text-decoration: none;
}

#nav-bar-items > a{
  display: flex;
  padding: .4em;
  margin-left: 10px;
  text-decoration: none;
  font-size: 1.5em;
}
</style>
