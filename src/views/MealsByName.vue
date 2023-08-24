<template>
    <div class="p-8">
        <input @change="searchMeals" v-model="keyword" type="text" placeholder="Search meals" class="rounded border-2 w-full border-gray-200"/>
    </div>
<Meals :meals="meals"/>
</template>
<script setup>
import store from '@/store';
import { computed, onMounted, ref } from 'vue';
import Meals from "../components/Meals";
import { useRoute } from 'vue-router';
 const meals = computed(() => store.state.searchedMeals)
 

const keyword = ref('');
function searchMeals(){
store.dispatch('searchMeals',keyword.value)
}
const route = useRoute()
onMounted(() =>{
   keyword.value= route.params.name
   if(keyword.value){
    searchMeals()
   }
})

</script>