<template>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">

    <MealItem v-for="meal of props.meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!props.meals?.length" class="flex justify-center text-gray-600 p-8">
    There are no meals
  </div>
</template>

<script setup>

import {defineProps} from "vue";
import MealItem from "./MealItem.vue";
const props = defineProps({
     meals:{
        required:true,
        type:Array
     }
});


</script>