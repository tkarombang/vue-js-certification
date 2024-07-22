import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchall(.*)*",
      name: "404 NOT FOUND",
      component: () => import("../views/error/404.vue"),
    },
    {
      path: "/home",
      redirect: "/",
    },
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
      path: "/products",
      name: "products",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/products/:id",
      name: "id",
      component: () => import("../views/Product.vue"),
      children: [
        {
          path: "owner",
          name: "owner",
          component: () => import("../views/Owner.vue"),
        },
      ],
    },
  ],
});

export default router;
