<script setup>
    import { ref, watch } from 'vue';
    
    const props = defineProps({
      regions: {
        type: Array,
        required: true
      },
      modelValue: {
        type: String,
        required: true
      }
    });
    
    const emit = defineEmits(['update:modelValue']);
    
    const selectedRegion = ref(props.modelValue);
    
    watch(selectedRegion, (value) => {
      emit('update:modelValue', value);
    });
    </script>
    
    <template>
      <div class="select-container">
        <select v-model="selectedRegion" name="Region">
          <option value="" disabled>Sélectionnez une région</option>
          <option v-for="region in regions" :key="region" :value="region">
            {{ region }}
          </option>
        </select>
        <p>Région choisie : {{ selectedRegion }}</p>
      </div>
    </template>
    
    <style scoped lang="scss">
    .select-container {
      text-align: center;
      margin-top: 2rem;
    
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