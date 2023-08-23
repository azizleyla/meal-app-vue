import { createRouter, createWebHistory } from "vue-router";
import CountryDetail from "../components/CountryDetail.vue";
import CountryList from "../components/CountryList.vue";

const routes=  [
    {
        path:'/',component:CountryList,
        
    },
    {
        path: '/country/:name',
        name: 'country-details', // Name for the route
        component: CountryDetail,
        props: true, // Pass route params as props
      },
  
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
export default router