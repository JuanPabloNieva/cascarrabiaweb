<template>
  <div class="category">
    <a href="#" @click="filterBy(nombre)">{{nombre}}</a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Category',
  props: {
    nombre: String
  },
  methods: {
    ...mapActions(['filterBy'])
  }
}
</script>
