<template>
  <div class="header">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Expense Manager',
    },
  }
}
</script>

<style scoped>
.header {
  background: linear-gradient(145deg, rgb(58, 58, 58), rgb(44, 44, 44));
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 181, 173, 1);
  position: relative;
}

/* content behide the header */
.header::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  background: rgba(0, 181, 173, 0.3);
  border-radius: 10px;
  z-index: -1;
}

.header h1 {
  font-family:'Courier New', Courier, monospace;
  font-size: 2rem;
  color: rgba(0, 181, 173, 0.7);
  margin: 0;
}
</style>