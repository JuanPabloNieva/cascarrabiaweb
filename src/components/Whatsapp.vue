<template>
    <div>
        <a v-bind:href="dirWhatsapp" target="_blank">whatsapp</a>
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
