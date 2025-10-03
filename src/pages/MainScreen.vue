<template>
  <div class="container-header">
    <Header :title="'Expense Manager Stage 1'" />
  </div>
  <div class="container-content">
    <div class="divider-cards">
      <div class="items-card column-expenses">
        <h3>Expenses</h3>
        <ExpenseCard v-for="(expense, index) in expenses" :key="index" :expense="expense" />
      </div>
      <div class="items-card column-income">
        <h3>Incomes</h3>
        <ExpenseCard v-for="(income, index) in incomes" :key="index" :expense="income" />
      </div>
    </div>
    <Button class="add-bill-btn" label="Add Bill" @click="goToPageTest"/>
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
  },
  {
    name: "Playstation 5",
    category: "Brick",
    amount: 2200.00
  },
  {
    name: "Cinema",
    category: "Entertainment",
    amount: 89.90
  },
  {
    name: "Uber",
    category: "Transport",
    amount: 14.40
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
.container-header {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}

.container-header > * {
  width: 90vw;
}

.container-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  width: 100%;
  gap: 5px;
}

.divider-cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 93.5%;
  gap: 40px;
  padding: 0 40px;
}

.column-expenses,
.column-income{
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 250px;
}

.items-card {
  background: linear-gradient(145deg, rgb(58, 58, 58), rgb(44, 44, 44));
  border-radius: 10px;
  padding: 20px 20px 20px 20px;
  box-shadow: 0 4px 10px rgba(0, 181, 173, 1);
  height: 60vh;
  max-height: 1000px;
  overflow-y: auto;
}

.add-bill-btn {
  margin-top: 10px;
}

</style>
