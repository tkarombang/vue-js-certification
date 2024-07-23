<script setup>
// import Quizes from "./components/Quizes.vue";
// import Memo from "./views/Memo.vue";
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
</script>

<template>
  <Nav />
  <main>
    <RouterView />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  text-decoration: none;
  box-sizing: border-box;
}
main {
  max-width: 80%;
  margin: 0 auto;
}
</style>
