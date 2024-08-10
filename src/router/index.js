import { createRouter, createWebHashHistory } from 'vue-router';
import RecipeDetails from '@/components/Recipes/RecipeDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/dev',
    name: 'Dev',
    component: () => import('@/views/DevView.vue'),
  },
  {
    path: '/recipe/:id',
    name: 'RecipeDetails',
    component: RecipeDetails,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
