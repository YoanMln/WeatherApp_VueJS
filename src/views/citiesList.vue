<script setup>
import City from "@/components/City.vue";
import { reactive } from "vue";
const cities = reactive([
  {
    id: 1,
    name: "🇫🇷Annecy",
    weather: "⛅️Ensoleillé",
    temperature: 8,
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "🇨🇦Québec",
    weather: "☁️Peu nuageux",
    temperature: -5,
    updatedAt: new Date(),
  },
]);
</script>

<template>
  <div class="container-title">
    <h1 class="title-citiesList">Weather</h1>
    <h2>Liste des villes</h2>
  </div>
  <City
    v-for="city in cities"
    :key="city.id"
    :name="city.name"
    :weather="city.weather"
    :temperature="city.temperature"
    :updatedAt="city.updatedAt"
  />
</template>

<style scoped>
.container-title {
  text-align: center;
}
</style>
