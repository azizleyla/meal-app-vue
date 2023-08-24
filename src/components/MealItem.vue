<template>
    <div
      class="bg-white shadow rounded-xl hover:scale-105 transition-all"
    >
      <router-link :to="{ name: 'mealDetails', params: { id: props.meal.idMeal } }">
        <img
          :src="props.meal.strMealThumb"
          :alt="props.meal.strMeal"
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </router-link>
      <div class="p-3">
        <h3 class="font-bold">{{ props.meal.strMeal }}</h3>
        <p class="mb-4">
        </p>
        <div class="flex items-center justify-between">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import {defineProps} from "vue";

  const props = defineProps({
    meal: {
      required: true,
      type: Object
    }
  })
  
  </script>
  