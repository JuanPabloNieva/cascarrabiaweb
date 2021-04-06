<template>
  <div id="app">
    <nav id="nav-bar">
      <div id="menu" class="nav-bar-menu"> <a href="#" type="button" v-on:click="expandirMenu"><i class="fas fa-bars">Menu</i></a> </div>
      <div class="nav-bar-menu"><i class="fas fa-shopping-cart">Carrito</i></div>
    </nav>
    <div id="nav-bar-extend">
      <div id="nav-bar-items">
        <div id="equis-nav-bar">
          <a id="equis" href="#" v-on:click="expandirMenu">X</a>
        </div>
        <router-link to="/">Productos</router-link>
        <router-link to="/about">¿Quienes somos?</router-link>
        <router-link to="/servicios">Ayuda</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    expandirMenu () {
      var menuExp = document.getElementById('nav-bar-extend')
      if (menuExp.style.display === 'none') {
        menuExp.style.display = 'flex'
      } else {
        menuExp.style.display = 'none'
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
}

html {
  background-color: #eeeeee;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
    display: flex;
    display: none;
    position: absolute;
    justify-content: flex-start;
    top: 0%;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, .6);
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
  font-size: 2em;
  width: 10vh;
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
