<template>
 
{{ country?.name?.common }}
<p>Population: {{ country?.population }}</p>
<p>Region: {{ country?.region }}</p>


<ul>

   <li>    Capital:{{ country?.capital?.map(x => x).join(',') }}</li>
    </ul>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
const country = ref(null);
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route)

const getCountryByName = async() =>{
    return axios(`https://restcountries.com/v3.1/name/${route.query.countryName}`).then(res =>{
      country.value = res.data[0];
        console.log(country)
    }).catch(err => console.log(err))
}

onMounted(() =>{
    getCountryByName()
})
</script>y