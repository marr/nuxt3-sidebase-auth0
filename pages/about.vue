<template>
  <NTextInput readonly :model-value="user.name" />
  <NTextInput
    :placeholder="user?.nickname"
    @change="handleChange"
  />
</template>
<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

function handleChange(e) {
  setUser({
    user_metadata: {
      username: e.target.value,
    },
  });
}

const [user, setUser] = await useUser();
</script>
