<template>
  <input type="text" v-model="keyword"
    class="rounded border-2 my-2 w-2/4 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 "
    placeholder="Search for Ingredients..." />
  <div v-for="ingredient of computedIngredients" :key="ingredient.id" class="bg-white rounded-3 p-3 mb-3 shadow">
    <router-link :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }">
      <h3>{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>

  </div>
</template>
<script setup>
import axiosClient from "@/axiosClient";
import { computed, onMounted, ref } from "vue";

const ingredients = ref([]);
const keyword = ref('')

const computedIngredients = computed(() => {
  return ingredients.value.filter(item => item.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
})
onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>