import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import MainScreen from '../pages/MainScreen.vue';
import PageTest from '../pages/PageTest.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: MainScreen },
  { path: '/test', component: PageTest },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
