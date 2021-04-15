<template>
    <div>
        <div id="nav-bar-extend" v-on:click="clickearFueraMenu">
        <div id="nav-bar-items">
            <div id="equis-nav-bar">
                <a id="equis" href="#" v-on:click="cerrarMenu">X</a>
            </div>
            <router-link id="productos" to="/" @click.native="expandirSubmenu">Productos</router-link>
            <submenu-productos/>
            <router-link to="/about" @click.native="cerrarMenu">Nosotros</router-link>
            <router-link to="/servicios" @click.native="cerrarMenu">Ayuda</router-link>
        </div>
        </div>
    </div>
</template>

<script>
import SubmenuProductos from './SubmenuProductos.vue'

export default {
  components: { SubmenuProductos },
  methods: {
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

<style scoped>
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
</style>
