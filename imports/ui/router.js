import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

// here we setup all the routes and decide which components to render for each path
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
    },
  ],
});
