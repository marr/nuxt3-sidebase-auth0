<template>
  You are {{ user?.name || 'unknown'}}
  <pre v-if="user">
    {{ user }}
  </pre>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
const user = await useUser();
</script>