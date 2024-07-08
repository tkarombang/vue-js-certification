<script setup>
import { ref, watch } from "vue";

const showForm = ref(false);
const newMemo = ref("");
const titleMemo = ref("");
const memos = ref([]);
const errorMsg = ref("");
const placeHolderClass = ref("");

function addMemo() {
  if (!newMemo.value || !titleMemo.value) {
    errorMsg.value = "Note still Blank";
    return;
  }
  memos.value.push({
    id: Date.now(),
    title: titleMemo.value,
    note: newMemo.value,
    date: new Date().toLocaleDateString("en-GB"),
    background: getRandomColor(),
  });
  newMemo.value = "";
  titleMemo.value = "";
  showForm.value = false;
}

function deleteMemo(id) {
  memos.value = memos.value.filter((memo) => memo.id !== id);
}

watch(errorMsg, (newValue) => {
  if (newValue) {
    placeHolderClass.value = "error-placeholder";
  } else {
    placeHolderClass.value = "";
  }
});

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
</script>

<template>
  <main>
    <div class="container">
      <header>
        <h1 class="header-title">Memo</h1>
        <button @click="showForm = true" class="btn-header">+</button>
      </header>
      <div class="card-container">
        <div v-for="(memo, index) in memos" :key="index" class="card" :style="{ backgroundColor: memo.background }">
          <div class="header-content">
            <button class="btn-delete" @click="deleteMemo(memo.id)">&times;</button>
            <h3>{{ memo.title }}</h3>
          </div>
          <p class="card-content">{{ memo.note }}</p>
          <h5 class="card-date">{{ memo.date }}</h5>
        </div>
      </div>
    </div>
    <div v-if="showForm" class="form-overlay">
      <div class="form-modal">
        <!-- <p v-if="errorMsg" class="text-err">{{ errorMsg }}</p> -->
        <button @click="showForm = false" class="form-btn-close">&times;</button>
        <input v-model="titleMemo" type="text" name="title" id="title" :placeholder="errorMsg ? errorMsg : 'Title...'" :class="placeHolderClass" />
        <textarea v-model="newMemo" name="memo" id="memo" cols="30" rows="10" :placeholder="errorMsg ? errorMsg : 'Enter your Text Here...'" :class="placeHolderClass"></textarea>
        <button @click="addMemo" class="form-btn-save">Save</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  font-family: sans-serif;
}
main {
  width: 100%;
}
.container {
  max-width: 70vw;
  padding: 1rem;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #495a7d;
}

.btn-header {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 1rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  border-radius: 100%;
  background-color: #495a7d;
  color: white;
}
.card-container {
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 1rem;
}

.card {
  display: flex;
  width: 12rem;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.3rem;
  background-color: salmon;
}

.header-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row-reverse;
}

.btn-delete {
  padding: 0.7rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  font-size: 1.2rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  background-color: rgb(163, 67, 67);
  border: none;
  cursor: pointer;
}

.header-content h3 {
  color: white;
}

.form-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-modal {
  width: 25rem;
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
}

.text-err {
  color: brown;
  font-weight: 600;
}

.form-btn-close {
  position: absolute;
  top: 0.1rem;
  right: 0.3rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: transparent;
  border: none;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  color: #495a7d;
}

input::placeholder,
textarea::placeholder {
  color: gray;
}
input.error-placeholder::placeholder,
textarea.error-placeholder::placeholder {
  color: red;
}

.form-btn-save {
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  background-color: #495a7d;
  border: none;
  cursor: pointer;
  border-radius: 0.2rem;
  margin-top: 1rem;
  color: white;
}
</style>
