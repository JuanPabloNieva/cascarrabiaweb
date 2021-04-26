<template>
    <div id="nav">
        <nav class="nav-bar">
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
