<template>
 <Button label="Go to Main Page" @click="goToMainPage"/>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Button from '../components/buttons/Button.vue';

const router = useRouter();

function goToMainPage() {
    router.push('/');
}
</script>

<style scoped>

</style>
