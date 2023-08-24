import Vue from 'vue';
import VueRouter from 'vue-router';
import demoRouters from './modules/demo';
import { isQiankun } from '@/utils/env';

Vue.use(VueRouter);

const routes = [...demoRouters];

const router = new VueRouter({
  mode: 'history',
  base: isQiankun() ? import.meta.env.VITE_MICRO_APP_BASE_URL : import.meta.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
