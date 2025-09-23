<script setup lang="ts">
import ExpenseCard from '../components/cards/ExpenseCard.vue';

function buttonClick() {
  console.log('Botão clicado!');
}

const expenses = [
  {
    name: "Supermarket Shopping",
    category: "Food",
    amount: 150.75
  },
  {
    name: "Netflix Subscription",
    category: "Entertainment",
    amount: 49.90
  }
];


</script>

<template>
  <div class="container">
    <ExpenseCard v-for="(expense, index) in expenses" :key="index" :expense="expense" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  gap: 5px;
}
</style>
