<script setup lang="ts">
const { status, data, signIn, signOut } = useSession();
</script>
<template>
  <button v-if="status === 'unauthenticated'" @click="() => signIn()">Sign in</button>
  <button v-if="status === 'authenticated'" @click="() => signOut()">Sign out</button>
  <pre>{{ data }}</pre>
</template>