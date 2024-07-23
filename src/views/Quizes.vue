<script setup>
import { ref, watch } from "vue";
import srcQuiz from "../components/data/quizes.json";
import Component_Quizes from "../components/Component_Quizes.vue";

const quizes = ref(srcQuiz);
const search = ref("");

watch(search, () => {
  quizes.value = srcQuiz.filter((quiz) => {
    return quiz.title.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<template>
  <div>
    <header>
      <h1 id="title">Quizes</h1>
      <input v-model.trim="search" type="text" id="search-input" placeholder="Search" />
    </header>
    <section id="quiz-container">
      <Component_Quizes v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </section>
  </div>
</template>

<style scoped>
header {
  margin: 2rem 0.5rem;
  display: flex;
  align-items: center;
}

#title {
  font-weight: 800;
  margin-right: 2rem;
}

#search-input {
  border: none;
  background-color: #c9c9c9a9;
  padding: 0.5rem;
  border-radius: 0.3rem;
}

#quiz-container {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 0.2rem;
}
</style>
