<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/servicios">Servicios</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  background-color: #eeeeee;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  text-align: center;
  padding: 15px;
  background-color: #ffee2f;
}

#nav a {
  font-weight: bold;
  color: #ff4db1;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}

a {
  text-decoration: none;
}

</style>
