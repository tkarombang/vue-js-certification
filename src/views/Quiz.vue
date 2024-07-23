<script setup>
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Quiz_Header from "../components/Quiz_Header.vue";
import Quiz_Content from "../components/Quiz_Content.vue";
import quizDataJson from "../components/data/quizes.json";
import Quiz_Result from "@/components/Quiz_result.vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizDataJson.find((item) => item.id === quizId);

const currentQuestionIndex = ref(0);
const questionPage = computed(() => {
  return `${currentQuestionIndex.value + 1} | ${quiz.questions.length}`
})
// const questionPage = ref(`${currentQuestionIndex.value + 1} / ${quiz.questions.length}`);
// console.log(questionPage);

// watch(
//   function () {
//     return currentQuestionIndex.value;
//   },
//   function () {
//     questionPage.value = `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`;
//     console.log(questionPage.value);
//   },
//   { immediate: true },
// );
const barPercentage = computed(() => {
  return `${((currentQuestionIndex.value + 1) / quiz.questions.length) * 100}%`
})

const noCorrectAnswer = ref(0)
const shwoResult = ref(false)
function onSelectOption(option){
  if(option.correct){
    noCorrectAnswer.value++
  }

  if(currentQuestionIndex.value === quiz.questions.length - 1){
    shwoResult.value = true
    return;
  }
  currentQuestionIndex.value++
}

</script>

<template>
  <Quiz_Header :questionPage="questionPage" :barPercentage="barPercentage"/>
  <Quiz_Content v-if="!shwoResult" 
  :question="quiz.questions[currentQuestionIndex]" @selectOption="onSelectOption"/>
  <Quiz_Result v-else :quizQuestionsLength="quiz.questions.length" :noCorrectAnswer="noCorrectAnswer"/>
  <!-- <button @click="currentQuestionIndex++" :disabled="currentQuestionIndex">Next</button> -->
</template>
