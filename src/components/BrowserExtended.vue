<template>
  <div id="nav-bar-extended" @click="clickOutsideMenu">
    <div id="nav-bar-items">
        <div class="equis-nav-bar">
            <a class="equis" href="#" @click="expandMenu">X</a>
        </div>
        <router-link id="products" to="/" @click.native="expandSubmenu">Productos</router-link>
        <transition name="fade">
          <ProductsSubmenu v-if="showSubmenu"></ProductsSubmenu>
        </transition>
        <router-link to="/about" @click.native="expandMenu">Nosotros</router-link>
        <router-link to="/servicios" @click.native="expandMenu">Ayuda</router-link>
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
