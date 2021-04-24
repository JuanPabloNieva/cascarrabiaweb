<template>
    <div>
        <div id="nav-bar-extended" v-on:click="clickOutsideMenu">
        <div id="nav-bar-items">
            <div id="equis-nav-bar">
                <a id="equis" href="#" v-on:click="closeMenu">X</a>
            </div>
            <router-link id="products" to="/" @click.native="expandSubmenu">Productos</router-link>
            <ProductsSubmenu/>
            <router-link to="/about" @click.native="closeMenu">Nosotros</router-link>
            <router-link to="/servicios" @click.native="closeMenu">Ayuda</router-link>
        </div>
        </div>
    </div>
</template>

<script>
import ProductsSubmenu from './ProductsSubmenu.vue'

export default {
  components: { ProductsSubmenu },
  methods: {
    expandSubmenu () {
      const div = document.getElementById('products-submenu')
      const el = window.getComputedStyle(div)
      if (el.getPropertyValue('display') === 'flex') {
        div.style.display = 'none'
      } else {
        div.style.display = 'flex'
      }
    },
    closeMenu () {
      document.getElementById('nav-bar-extended').style.display = 'none'
    },
    clickOutsideMenu (e) {
      const clic = e.target
      const div = document.getElementById('nav-bar-items')
      const prod = document.getElementById('products')
      const el = window.getComputedStyle(div)
      /* Si el elemento esta en display:flex y se clickea fuera del elemento o en products */
      if (el.getPropertyValue('display') === 'flex' && clic !== div && clic !== prod) {
        document.getElementById('nav-bar-extended').style.display = 'none'
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

#nav-bar-extended {
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
