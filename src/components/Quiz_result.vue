<script setup>
import { RouterLink } from 'vue-router';
const { quizQuestionsLength, noCorrectAnswer } = defineProps(["quizQuestionsLength", "noCorrectAnswer"])
</script>
<template>
  <section class="result">
    <p>Score</p>
    <h1>{{ noCorrectAnswer }} | {{ quizQuestionsLength }}</h1>
    <RouterLink to="/">Go Back</RouterLink>
  </section>
 <h1>Success!</h1> 
</template>