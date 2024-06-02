<template>
    <div>
        <h1>User index</h1>
        <pre>{{ data }}</pre>
        <button @click="refresh">Refresh</button>
    </div>
</template>

<script lang="ts" setup>

//cached request
// const data = await useFetch('/api/hello', {
//     lazy: true,
//     key: "key_hello"
// });

// const cacheData = useNuxtData("key_hello");

// clearNuxtData("key_hello");
// refreshNuxtData("key_hello");

//this param onChange  will trigger the fetch
const param = ref();
const { data, refresh } = await useFetch('/api/hello', {
    key: "key_hello",
    watch: [param],
});

/*const data = await useLazyFetch('/api/hello');*/
</script>