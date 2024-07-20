import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/memo",
      name: "memo",
      component: () => import("../views/Memo.vue"),
    },
    {
      path: "/quiz",
      name: "quiz",
      component: () => import("../views/Quizes.vue"),
    },
    {
      path: "/products/:id",
      name: "products",
      component: () => import("../views/Products.vue"),
    },
  ],
});

export default router;
