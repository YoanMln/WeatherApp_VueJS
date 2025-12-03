<script setup>
import { reactive } from "vue";

const city = reactive({
  name: "Annecy",
  weather: "Nuageux",
  temperature: "8 degrés",
  updateAt: new Date(),
});
</script>

<template>
  <h1>{{ city.name }}</h1>
  <p>Météo {{ city.weather }}</p>
  <p>Température {{ city.temperature }}</p>
  <p>MAJ {{ city.updateAt.toLocaleString() }}</p>
</template>

<style scoped lang="scss"></style>
