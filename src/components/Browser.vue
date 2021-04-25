<template>
    <div id="nav">
        <nav id="nav-bar">
            <div id="menu" class="nav-bar-menu"> <a href="#" type="button" @click="expandMenu"><i class="fas fa-bars"></i></a> </div>
            <div class="logo-home"><router-link to="/"><img id="logo" src="@/assets/images/Logo.png" alt="Logo de cascarrabia"></router-link></div>
            <div class="nav-bar-menu"><i class="fas fa-shopping-cart"></i></div>
        </nav>
        <transition name="fade">
          <BrowserExtended v-if="showMenu"></BrowserExtended>
        </transition>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BrowserExtended from './BrowserExtended.vue'

export default {
  components: {
    BrowserExtended
  },
  computed: {
    ...mapState({
      showMenu: state => state.showMenu
    })
  },
  methods: {
    ...mapMutations(['expandMenu'])
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
