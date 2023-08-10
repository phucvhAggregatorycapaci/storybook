import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import auth from "@/middleware/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/app",
    name: "home",
    redirect: "/app/home",
    // component: () => import("../views/HomeView.vue"),
    meta: {
      middleware: [auth],
    },
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("../views/garage/ListGarage.vue"),
        meta: {
          hide: true,
        },
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/auth/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(async (to, from) => {
  if (to.path =='/'){
    return '/app'
  }
  const canAccess = await auth(to)
  if (!canAccess) return '/login'
})

export default router;
