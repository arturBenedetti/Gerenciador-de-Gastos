<template>
  <Header :title="'Expense Manager Stage 1'" />
  <div class="container-content">
    <div class="divider-cards">
      <div class="items-card card-expenses">
        <h3>Expenses</h3>
        <ExpenseCard v-for="(expense, index) in expenses" :key="index" :expense="expense" />
      </div>
      <div class="items-card card-income">
        <h3>Incomes</h3>
        <ExpenseCard v-for="(income, index) in incomes" :key="index" :expense="income" />
      </div>
    </div>
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

const incomes = [
  {
    name: "Playstation 5",
    category: "Brick",
    amount: 2500.00
  },
  {
    name: "Payback from friend",
    category: "Payback",
    amount: 50.00
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

.divider-cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  gap: 40px;
  padding: 0 40px;
}

.card-income,
.card-expenses {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 250px;
}

.items-card {
  background: linear-gradient(145deg, rgb(58, 58, 58), rgb(44, 44, 44));
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px 20px 20px 20px;
}

</style>
