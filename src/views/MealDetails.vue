<template>
 <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" class="max-w-[100%]"/>
    <div class="grid grid-cols-1 md:grid-cols-3">
        <div>
           <strong class="font-bold">Category: {{ meal.strCategory }}</strong> 
        </div>
        <div>
           <strong class="font-bold">Area: {{ meal.strArea }}</strong> 
        </div>
        <div>
           <strong class="font-bold">Tags: {{ meal.strTags }}</strong> 
        </div>
    </div>
    <div class="my-3">{{ meal.strInstructions }}</div>
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
            <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul>
                <template :key="index" v-for="(i,index) of new Array(20)">
                <li v-if="meal[`strIngredient${index + 1}`]">
                    {{ index }}.
                    {{ meal[`strIngredient${index + 1}`] }}</li>
                </template>
            </ul>
        </div>
        <div>
            <h2>Meausers</h2>
            <ul>
                <template :key="index" v-for="(i,index) of new Array(20)">
                <li v-if="meal[`strMeasure${index + 1}`]">
                    {{ index }}.
                    {{ meal[`strMeasure${index + 1}`] }}</li>
                </template>
            </ul>
        </div>
    </div>
 </div>
</template>
<script setup>
import axiosClient from "@/axiosClient";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const meal = ref({})

onMounted(() =>{
    axiosClient.get(`lookup.php?i=${route.params.id}`).then(({data}) =>{
        meal.value = data.meals[0];
    })
})
</script>