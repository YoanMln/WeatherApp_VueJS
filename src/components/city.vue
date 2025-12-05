<script setup>
import { format } from "timeago.js";
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  weather: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
});

const formattedDate = computed(() => {
  return format(props.updatedAt, "fr");
});
</script>

<template>
  <div class="city">
    <h1>{{ name }}</h1>
    <p>Météo : {{ weather }}</p>
    <p>Température : {{ temperature }}°C</p>
    <p>MAJ : {{ formattedDate }}</p>
  </div>
</template>

<style scoped lang="scss">
.city {
  text-align: center;
  margin-top: 5rem;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
  @include card;
  font-weight: bold;
}
h1 {
  color: black;
}
</style>
