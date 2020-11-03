import Vue from 'vue';
import VueRouter from 'vue-router';

import Cards from '../views/Cards.vue';
import CreateCard from '../views/CreateCard.vue';
import UpdateCard from '../views/UpdateCard.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Cards',
    component: Cards
  },
  {
    path: '/create',
    name: 'create',
    component: CreateCard
  },
  {
    path: '/update/:id',
    name: 'update',
    component: UpdateCard,
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
