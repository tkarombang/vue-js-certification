<script setup>
import { defineProps } from "vue";
const { questionPage, barPercentage } = defineProps(["questionPage", "barPercentage"]);
</script>
<template>
  <header>
    <h1>Questions {{ questionPage }}</h1>
    <div class="bar">
      <div class="bar-progress" :style="{ width: barPercentage}"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  margin-top: 1rem;
}
header h4 {
  font-size: 2.5rem;
}
.bar {
  width: 100%;
  height: 2.5rem;
  border: 3px solid #adf7b6;
}

.bar-progress {
  height: 100%;
  width: 0%;
  background-color: #adf7b6;
}
</style>
