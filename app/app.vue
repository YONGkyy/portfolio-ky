<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <div :class="{ dark: colorMode.value === 'dark' }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
