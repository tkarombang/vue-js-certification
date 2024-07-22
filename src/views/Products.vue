<script setup>
import { RouterLink } from "vue-router";
import productsJson from "../components/data/products.json";
</script>

<template>
  <div class="container">
    <div class="footer">
      <RouterLink id="route" v-for="product in productsJson" :key="product.id" :to="`/products/${product.id}`"> {{ product.nama }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 50vw;
  margin: auto;
}
h1 {
  margin: 1.5rem auto;
  text-align: center;
}
#route {
  color: teal;
  margin: 1rem;
  padding: 1rem;
}
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10rem auto;
}
</style>
