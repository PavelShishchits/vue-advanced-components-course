import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ComponentBindings from '../views/ComponentBindings.vue';
import GlobalEvents from '../views/GlobalEvents.vue';
import Portals from '../views/Portals.vue';
import ScopedSlots from '../views/ScopedSlots.vue';
import DataProvider from '../views/DataProvider.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/component-bindings',
    name: 'ComponentBindings',
    component: ComponentBindings
  },
  {
    path: '/global-events',
    name: 'GlobalEvents',
    component: GlobalEvents
  },
  {
    path: '/portals',
    name: 'Portals',
    component: Portals
  },
  {
    path: '/scoped-slots',
    name: 'ScopedSlots',
    component: ScopedSlots
  },
  {
    path: '/data-provider',
    name: 'DataProvider',
    component: DataProvider
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
