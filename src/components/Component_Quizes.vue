<script setup>
import { useRouter } from "vue-router";

const { quiz } = defineProps(["quiz"]);

const router = useRouter();

function goToQuiz() {
  router.push({ name: "quiz", params: { id: quiz.id } });
}
</script>

<template>
  <div class="card" @click="goToQuiz">
    <img :src="quiz.img" :alt="quiz.title" />
    <div class="card-body">
      <h1>{{ quiz.title }}</h1>
      <p>{{ quiz.questions.length }} Questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  /* width: 100%; */
  margin: 0.5rem 0.5rem;
  background-color: beige;
  border-radius: 0.2rem;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 40vh;
  object-fit: cover;
  margin: 0;
}

.card-body {
  padding: 0.5rem 1.2rem;
}

.card-body h1 {
  font-weight: 700;
  padding-bottom: 0.5rem;
}
</style>
