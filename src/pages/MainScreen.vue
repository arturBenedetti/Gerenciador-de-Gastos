<template>
  <Header :title="'Expense Manager Stage 1'" />
  <div class="container-content">
    <ExpenseCard v-for="(expense, index) in expenses" :key="index" :expense="expense" />
    <Button @click="goToPageTest"/>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ExpenseCard from '../components/cards/ExpenseCard.vue';
import Header from '../components/headers/Header.vue';
import Button from '../components/buttons/Button.vue';

const router = useRouter();

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

function goToPageTest() {
  router.push('/test');
}

</script>

<style scoped>
.container-content {
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
