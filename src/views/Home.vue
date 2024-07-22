<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <h1>Wellcome to Dashboard!</h1>
  <div class="container">
    <RouterLink to="/memo" id="route">
      <div class="card">
        <span>Memo</span>
        <span>&raquo;</span>
      </div>
    </RouterLink>
    <RouterLink to="/quiz" id="route">
      <div class="card">
        <span>Quizes</span>
        <span>&raquo;</span>
      </div>
    </RouterLink>
    <RouterLink to="/products" id="route">
      <div class="card">
        <span>Products</span>
        <span>&raquo;</span>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
* {
  text-decoration: none;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  margin: 2.5rem auto;
  text-align: center;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin: 5rem auto;
  padding: 2rem;
  width: 60%;
}
.card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  border-radius: 0.2rem;
  color: whitesmoke;
  font-weight: 800;
  background-color: teal;
  cursor: pointer;
}
.card:active {
  transform: translate(0.2px, 0.5px);
}
#route {
  color: teal;
}
.footer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
</style>
