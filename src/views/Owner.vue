<script setup>
import { useRoute } from "vue-router";
import products from "../components/data/products.json";

const route = useRoute();
const { owner } = products.find((item) => item.id === parseInt(route.params.id));
</script>

<template>
  <div>
    <h1>Owner</h1>
    <p>{{ owner.name }}</p>
    <p>{{ owner.email }}</p>
  </div>
</template>
