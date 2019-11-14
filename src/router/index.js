import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/use-vue3-simple',
    name: 'simple',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "simple" */ '../components/UseVue3Simple.vue'),
  },
  {
    path: '/article',
    name: 'article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "article" */ '../views/Articles.vue'),
  },
  {
    path: '/item/:id',
    name: 'news-item',
    component: () => import(/* webpackChunkName: "article" */ '../views/NewsItemView.vue'),
  },
  {
    path: '/:type',
    name: 'i:',
    component: () => import(/* webpackChunkName: "article" */ '../views/Articles.vue'),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
