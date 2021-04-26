<template>
    <div id="whatsapp">
        <a v-bind:href="dirWhatsapp" target="_blank"><i class="fab fa-whatsapp"></i></a>
    </div>
</template>

<script>
export default {
  data () {
    return {
      dirWhatsapp: process.env.VUE_APP_WA_API
    }
  }
}
</script>
