<template>
    <div>
        <h1>Welcome to Index</h1>
        <pre>{{ data }}</pre>
    </div>
</template>


<script lang="ts" setup>
//ssr
//const data = await useFetch('https://jsonplaceholder.typicode.com/todos/1');
//csr
//const data = await $fetch('https://jsonplaceholder.typicode.com/todos/1');
//csr with key, when key given it will cache the data
//const data = await useAsyncData("key", () => fetch('https://jsonplaceholder.typicode.com/todos/1'));


//nuxt still uses fetch to get data
const data = await useFetch('https://jsonplaceholder.typicode.com/todos/1');
</script>