import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Settings from "../views/Settings.vue";
import Open from "../views/Open.vue";
import Closed from "../views/Closed.vue";
import MoneyChecker from "../views/MoneyChecker.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Overview",
    name: "Overview",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Overview.vue"),
  },
  {
    path: "/Settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/Open",
    name: "Open",
    component: Open,
  },
  {
    path: "/Closed",
    name: "Closed",
    component: Closed,
  },
  {
    path: "/MoneyChecker",
    name: "MoneyChecker",
    component: MoneyChecker,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
