<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Chrono from './components/Chrono.vue'
</script>

<template>

  <main>
    <Chrono />
  </main>
</template>

<style>
@import './assets/base.css';
main{
  margin: auto;
  width: 50%;
  padding-top: 30vh;
}
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
</style>
