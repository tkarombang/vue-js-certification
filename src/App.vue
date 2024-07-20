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
