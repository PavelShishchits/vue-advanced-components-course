import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ComponentBindings from '../views/ComponentBindings.vue';
import GlobalEvents from '../views/GlobalEvents.vue';
import Portals from '../views/Portals.vue';
import ScopedSlots from '../views/ScopedSlots.vue';
import DataProvider from '../views/DataProvider.vue';
import RenderLessComponents from '../views/RenderLessComponents.vue';
import ProvideInject from '../views/ProvideInject.vue';
import SortableList from '../views/SortableList.vue';
import SearchSelect from '../views/SearchSelect.vue';
import RecursiveMenu from '../views/RecursiveMenu.vue';

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
  {
    path: '/render-less-components',
    name: 'RenderLessComponents',
    component: RenderLessComponents
  },
  {
    path: '/provide-inject',
    name: 'ProvideInject',
    component: ProvideInject
  },
  {
    path: '/sortable-list',
    name: 'SortableList',
    component: SortableList
  },
  {
    path: '/search-select',
    name: 'SearchSelect',
    component: SearchSelect
  },
  {
    path: '/recursive-menu',
    name: 'RecursiveMenu',
    component: RecursiveMenu
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
