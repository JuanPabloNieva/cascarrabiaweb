<template>
  <div id="app">
    <Loader/>
    <Browser/>
    <router-view/>
    <Whatsapp/>
    <Footer/>
  </div>
</template>

<script>
import Loader from './components/Loader.vue'
import Browser from './components/Browser.vue'
import Footer from './components/Footer.vue'
import Whatsapp from './components/Whatsapp.vue'
import './assets/css/style.css'

export default {
  components: { Browser, Loader, Footer, Whatsapp }
}
</script>
