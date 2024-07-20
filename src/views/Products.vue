<script setup>
import { useRoute } from "vue-router";
import products from "../components/data/products.json";

const route = useRoute();
const productFilter = products.find((product) => product.id === parseInt(route.params.id));
</script>
<template>
  <div>
    <h1>Products</h1>
    <div>
      <h2>{{ productFilter.nama }} - {{ productFilter.price }}</h2>
      <h4>Tahun: {{ productFilter.year }}</h4>
    </div>
  </div>
</template>
