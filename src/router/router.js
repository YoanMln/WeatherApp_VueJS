import { createRouter, createWebHistory } from "vue-router";

import citiesList from "@/views/citiesList.vue";
import home from "@/views/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/villes",
      name: "citiesList",
      component: citiesList,
    },
  ],
});

export default router;
