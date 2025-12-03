<script setup>
import { RouterView } from "vue-router";

const onListClick = () => {
  alert("un utilisateur à cliqué :O !");
};
</script>

<template>
  <div class="app">
    <h1>Weather</h1>
    <button @click="onListClick">Cliquez !</button>
    <RouterView></RouterView>
  </div>
</template>

<style scoped lang="scss">
.app {
  background-color: rgba(255, 0, 0, 0.22);
}
</style>
