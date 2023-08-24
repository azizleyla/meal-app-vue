<template>
                <a :href="props.href" class="bg-red-500 rounded-md text-white px-3 py-2  border-2 hover:bg-red-600 " target="_blank">
                
                    <slot>YouTube</slot>
</a>

</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    href:String
})


</script>