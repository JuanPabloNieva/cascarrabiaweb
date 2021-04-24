<template>
  <div id="app">
    <Loader/>
    <Browser/>
    <BrowserExtended/>
    <router-view/>
    <Whatsapp/>
    <pie/>
  </div>
</template>

<script>
import Loader from './components/Loader.vue'
import Browser from './components/Browser.vue'
import BrowserExtended from './components/BrowserExtended.vue'
import Pie from './components/Pie.vue'
import Whatsapp from './components/Whatsapp.vue'

export default {
  components: { Browser, BrowserExtended, Loader, Pie, Whatsapp }
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

.logo-home {
  display: flex;
  background-color: var(--main-color);
}

#logo {
  margin: auto;
  padding: 10px;
  width: 25vw;
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
