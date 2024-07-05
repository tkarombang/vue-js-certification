<script setup>
import { ref } from "vue";

const showForm = ref(false);
const newMemo = ref("");
</script>

<template>
  <main>
    <div class="container">
      <header>
        <h1 class="header-title">Memo</h1>
        <button @click="showForm = true" class="btn-header">+</button>
      </header>
      <div class="card-container">
        <div class="card">
          <h3>Title of Card</h3>
          <p class="card-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio odio a neque quas assumenda nihil veniam beatae cupiditate adipisci?</p>
          <h5 class="card-date">12/12/2024</h5>
        </div>
        <div class="card">
          <h3>Title of Card</h3>
          <p class="card-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio odio a neque quas assumenda nihil veniam beatae cupiditate adipisci?</p>
          <h5 class="card-date">12/12/2024</h5>
        </div>
        <div class="card">
          <h3>Title of Card</h3>
          <p class="card-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio odio a neque quas assumenda nihil veniam beatae cupiditate adipisci?</p>
          <h5 class="card-date">12/12/2024</h5>
        </div>
      </div>
    </div>
    <div v-if="showForm" class="form-overlay">
      <div class="form-modal">
        <button @click="showForm = false" class="form-btn-close">&times;</button>
        <textarea v-model="newMemo" name="memo" id="memo" cols="30" rows="10"></textarea>
        <button class="form-btn-save">Save</button>
        {{ newMemo }}
      </div>
    </div>
  </main>
</template>

<style scoped>
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
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 2rem;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.3rem;
  background-color: salmon;
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
