<template>
    <div>
      <div id="nav-bar-extended" v-on:click="clickOutsideMenu">
        <div id="nav-bar-items">
            <div id="equis-nav-bar">
                <a id="equis" href="#" @click="expandMenu">X</a>
            </div>
            <router-link id="products" to="/" @click.native="expandSubmenu">Productos</router-link>
            <transition name="fade">
              <ProductsSubmenu v-if="showSubmenu"></ProductsSubmenu>
            </transition>
            <router-link to="/about" @click.native="expandMenu">Nosotros</router-link>
            <router-link to="/servicios" @click.native="expandMenu">Ayuda</router-link>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ProductsSubmenu from './ProductsSubmenu.vue'

export default {
  components: { ProductsSubmenu },
  computed: {
    ...mapState({
      showMenu: state => state.showMenu,
      showSubmenu: state => state.showSubmenu
    })
  },
  methods: {
    ...mapMutations(['expandMenu', 'expandSubmenu']),
    clickOutsideMenu (e) {
      const clic = e.target
      const div = document.getElementById('nav-bar-items')
      const prod = document.getElementById('products')
      // Si el menu esta expandido y se hace clic fuera de products o fuera del menu
      if (this.showMenu && clic !== div && clic !== prod) {
        this.$store.commit('expandMenu')
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
    display: flex;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
