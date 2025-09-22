<script setup lang="ts">
import Button from '../components/buttons/Button.vue';
import Input from '../components/inputs/Input.vue';

function buttonClick() {
  console.log('Botão clicado!');
}

</script>

<template>
  <div class="container">
    <Input label="Input" placeholder="This is an input" />
    <Button label="Button" :color="'teal'" :size="'medium'" :disabled="false" @click="buttonClick" />
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
