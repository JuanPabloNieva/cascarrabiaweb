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

<style scoped>

.category {
  margin: 10px auto;
  padding: .5em;
  border-radius: 5px;
  background-color: #111111;
  font-size: 3vw;
}

.category > a {
  color: #FFE4F9;
}

.category > a:focus {
  color: #ffee2f;
}
</style>
