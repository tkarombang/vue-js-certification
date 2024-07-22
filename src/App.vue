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
</style>
