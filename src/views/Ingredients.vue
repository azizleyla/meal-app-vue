<template>
  <div
    v-for="ingredient of ingredients"
    :key="ingredient.id"
    class="bg-white rounded-3 p-3 mb-3 shadow"
  >
  <router-link :to="{name:'byIngredient',params:{ingredient:ingredient.idIngredient}}">
    <h3>{{ ingredient.strIngredient }}</h3>
    <p>{{ ingredient.strDescription }}</p>
  </router-link>
  
  </div>
</template>
<script setup>
import axiosClient from "@/axiosClient";
import { onMounted, ref } from "vue";

const ingredients = ref([]);

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>