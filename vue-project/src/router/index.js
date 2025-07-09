import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataBinding from "../views/DataBinding.vue";
import DataBindingAttr from "../views/DataBindingAttr.vue";
import DataBindingList from "../views/DataBindingList.vue";
import EventClick from "../views/EventClick.vue";
import ShowVue from "../views/ShowVue.vue";
import ComputedView from "../views/ComputedView.vue";
import WatchView from "../views/WatchView.vue";
import TodoView from "../views/TodoView.vue";
import NestedComponent from "../views/NestedComponent.vue";
import ParentComponent from "../views/ParentComponent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/data",
    name: "data",
    component: DataBinding,
  },
  {
    path: "/dataAttr",
    name: "dataAttr",
    component: DataBindingAttr,
  },
  {
    path: "/dataList",
    name: "dataList",
    component: DataBindingList,
  },
  {
    path: "/eventClick",
    name: "eventClick",
    component: EventClick,
  },
  {
    path: "/showVue",
    name: "showVue",
    component: ShowVue,
  },
  {
    path: "/computedVue",
    name: "conputedVue",
    component: ComputedView,
  },
  {
    path: "/watchVue",
    name: "watchVue",
    component: WatchView,
  },
  {
    path: "/todoVue",
    name: "todoVue",
    component: TodoView,
  },
  {
    path: "/nestedComponent",
    name: "nestedComponent",
    component: NestedComponent,
  },
  {
    path: "/parentComponent",
    name: "parentComponent",
    component: ParentComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
