<script setup lang="ts">
const { data } = await useFetch('/api');
</script>
<template>
  <div>
    <p v-for="item in data" :key="item">
      {{ item }}
    </p>
    <hr />
  </div>
</template>
