<script setup>
import { defineProps } from "vue";
const { question } = defineProps(["question"]);
const  emit  = defineEmits(["selectOption"])

function emitSelectionOption(option){
  emit('selectOption', option)
}
</script>
<template>
  <section id="question-container">
    <h1 class="question-title">{{ question.text }}</h1>
  </section>
  <section id="option-container">
    <div class="option" v-for="option in question.answers" :key="option.id" @click="emitSelectionOption(option)">
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">{{ option.text }}</div>
    </div>
  </section>
</template>

<style scoped>
#question-container {
  margin-top: 2rem;
}

.question-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
}
.option {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  cursor: pointer;
}

.option-label {
  font-size: 1.2rem;
  font-weight: bold;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #a0ced9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.option-value {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0 1.2rem;
  background-color: #e2e2e2;
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
}
</style>
