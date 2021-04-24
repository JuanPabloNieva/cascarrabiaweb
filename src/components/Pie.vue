<template>
  <div id="footer">
    <div class="redes"><p>Visita nuestro Instagram <a href="https://www.instagram.com/cascarrabia.socks/" target="_blank"><i class="fab fa-instagram"></i></a></p></div>
    <div class="copy">
      <p>
        <i class="far fa-copyright"></i> 2021 - Desarrollado por
        <a href="https://www.linkedin.com/in/juan-pablo-nieva/" target="_blank"
          >Juan Pablo Nieva</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
li {
    list-style: none;
}

#footer {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 15vh;
  border-top: 1px solid #000000;
  background-color: #ffee2f;
}

.copy {
  margin: auto 20px;
  font-size: 1rem;
}

.redes {
  margin: auto;
  padding: 10px;
  font-size: 1rem;
}
</style>
