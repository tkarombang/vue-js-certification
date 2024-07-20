<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <RouterLink active-class="active" to="/">Home</RouterLink>
    <RouterLink active-class="active" to="/memo">Memo</RouterLink>
    <RouterLink active-class="active" to="/quiz">Quizes</RouterLink>
  </div>
</template>

<style scoped>
* {
  text-decoration: none;
  font-family: sans-serif;
  color: antiquewhite;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  background-color: teal;
}
.active {
  color: whitesmoke;
  font-weight: 800;
  text-decoration: none;
}
</style>
