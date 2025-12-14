<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  regions: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const selectedRegion = ref(props.modelValue);

watch(selectedRegion, (value) => {
  emit("update:modelValue", value);
});
</script>

<template>
  <div class="select-container">
    <h1>Selectionnez une région :</h1>
    <select v-model="selectedRegion" name="Region">
      <option value="" disabled>Sélectionnez une région</option>
      <option v-for="region in regions" :key="region" :value="region">
        {{ region }}
      </option>
    </select>
  </div>
</template>

<style lang="scss">
.select-container {
  h1 {
    font-size: 20px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @include card;
  padding: 5px;
  margin: 5rem auto;
  max-width: 100%;
  width: 30%;

  select {
    width: 300px;
    height: 40px;
    color: white;
    font-size: 15px;
    @include card;
    @include overlay;
  }
}
</style>
