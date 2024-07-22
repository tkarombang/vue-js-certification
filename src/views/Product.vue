<script setup>
import { useRoute, useRouter, RouterView } from "vue-router";
import productsJson from "../components/data/products.json";

const route = useRoute();
const router = useRouter();
const productId = parseInt(route.params.id);
const productFilter = productsJson.find((product) => product.id === productId);

function showOwner() {
  router.push({ name: "owner", params: { id: productId } });
}
</script>

<template>
  <div v-if="!productFilter">
    <h1>404 Not Found</h1>
  </div>
  <div v-else>
    <h1>Products</h1>
    <div>
      <div>
        <h2>{{ productFilter.nama }} - {{ productFilter.price }}</h2>
        <h4>Tahun: {{ productFilter.year }}</h4>
      </div>
    </div>
    <div>
      <button @click="showOwner">Show Owner</button>
      <RouterView />
    </div>
  </div>
</template>
