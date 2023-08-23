<template>
    <div class="flex justify-between items-center mt-5">
        <div class="flex items-center w-[60%]  rounded-md shadow-lg bg-white">
            <input     @input="handleSearchInput"  v-model="searchValue" class="p-3 w-[95%] outline-none rounded-md " type="text" placeholder="Search for country"/>
        <img class="w-6 h-6" src="../assets/images/search.png"/>
        </div>
       
        <select class="flex ml-auto mt-3" @change="handleSelect">
            <option value="">Filter by region</option>
   <option v-for="(region,index) in regions" :value="region" :key="index">{{ region }}</option>

</select>
    </div>

<div class="grid grid-cols-4 gap-10 mt-10">
    <template v-for="(country,index) in filteredCountries" :key="index">
        <div @click="navigateRoute(country)" class="shadow-lg bg-white rounded-md cursor-pointer">
            <img class="w-full h-44" :src="country.flags.png"/>
        <div class="p-4">
            <h4 class="text-xl font-semibold">{{ country.name.common }}</h4>
            <ul>
                <li class="my-1">Population: {{ country.population.toLocaleString() }}<span></span></li>
                <li class="my-1">Region: <span>{{ country.region }}</span></li>
                <li>Capital: {{country.capital &&  country.capital[0] }} <span></span></li>
            </ul>
       </div>
    </div>
    </template>
 
</div>

</template>

<script setup>
import { computed, onMounted, ref } from "vue"
import axios from "axios"
import {  useRouter } from "vue-router"
const countries = ref([])
const originalCountries = ref([])
const selectValue= ref('')
const searchValue = ref('')
const router = useRouter()

const regions = computed(() =>{
    const allRegions = originalCountries.value.map(x => x.region);
    return [...new Set(allRegions)]
})

const handleSelect = (e) =>{
    console.log(e.target.value)
    selectValue.value = e.target.value;
}

const getCountries = async() =>{
 return axios('https://restcountries.com/v3.1/all').then(res =>{
    countries.value = res.data
    originalCountries.value = res.data
    console.log(countries)
  }).catch(err => console.log(err))
}

const navigateRoute = (country) =>{
    const countryNameParam = country.name.common.replace(/%20/g, '').replace(/ /g, '');
    router.push({ name: 'country-details', params: { name: countryNameParam },query:{countryName:country.name.common} });
}
const filteredCountries = computed(() =>{

    if(selectValue.value === ""){
        return countries.value
    }else{
        return countries.value.filter(item => item.region === selectValue.value)

    }
})

const getSearched = async() =>{
    return axios(`https://restcountries.com/v3.1/name/${searchValue.value}`).then(res =>{
        countries.value = res.data
    }).catch(err => console.log(err))
}
const handleSearchInput = () =>{
    getSearched()
}
onMounted(() =>{
getCountries();

})
// const sortedCountries = computed(() => {
//       return countries.value.slice().sort((a, b) => {
//         return a.name.common.localeCompare(b.name.common);
//       });
//     });




</script>