<template>
  <div class="card">
    <h3>{{ expense.name }}</h3>
    <div class="card-content">
      <p><span>Category: </span> {{ expense.category }} </p>
      <p><span>Amount: </span> R${{ expense.amount.toFixed(2) }} </p>
    </div>
    <img v-if="expense.image" :src="expense.image" alt="Expense image" class="card-img" />
  </div>
</template>

<script>
export default {
  props: {
    expense: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
}

h3 {
  margin: 0;
}

.card-content {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.card-content span {
  color: #00b5ad;
}

.card-img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}
</style>
