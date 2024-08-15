import { createRouter, createWebHashHistory } from 'vue-router';
import RecipeDetails from '@/components/Recipes/RecipeDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Easy Recipes by LadyVamp',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'About',
    },
  },
  {
    path: '/dev',
    name: 'Dev',
    component: () => import('@/views/DevView.vue'),
    meta: {
      title: 'Dev',
    },
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

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
