import { createRouter, createWebHistory } from "vue-router";
import BlankLayout from "@/layout/BlankLayout";

export default createRouter({
  history: createWebHistory(), // pages
  routes: [
    {
      path: "/",
      name: "root",
      component: BlankLayout,
      children: [
        {
          path: "main",
          name: "메인",
          component: () => import("@/view/MainView.vue"),
        },
      ],
    },
  ],
});
