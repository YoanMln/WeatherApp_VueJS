import { createRouter, createWebHistory } from "vue-router";

import citiesList from "@/views/citiesList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "cityList",
      component: citiesList,
    },
  ],
});

export default router;
