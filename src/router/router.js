import { createRouter, createWebHashHistory } from "vue-router";

import citiesList from "@/views/CitiesList.vue";
import home from "@/views/home.vue";
import CityView from "@/views/CityView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: home },
    { path: "/villes", name: "citiesList", component: citiesList },
    { path: "/ville", name: "city", component: CityView },
  ],
});

export default router;
