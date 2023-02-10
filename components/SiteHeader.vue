<template>
  <nav class="flex align-center gap-4 p-4">
    <NLink to="/">Home</NLink>
    <NLink to="/about">About (protected)</NLink>
    <NLink v-if="status === 'authenticated'" @click="() => signOut({ callbackUrl: '/logout' })">Logout</NLink>
    <NLink v-else @click="signIn">Login</NLink>
  </nav>
</template>
<script setup lang="ts">
const { signIn, signOut, status } = useSession();
</script>
