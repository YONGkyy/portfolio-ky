<script setup lang="ts">
import appFooter from './footer.vue';
import appHeader from './header.vue';
</script>

<template>
  <div>
    <appHeader />

    <main class="min-h-screen max-w-full bg-white">
      <NuxtPage />
    </main>

    <appFooter />
  </div>
</template>
