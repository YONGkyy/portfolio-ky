<script setup lang="ts">
  import { ref } from "vue";

  const isMobileMenuOpen = ref(false);

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  }
</script>

<template>
  <header
    class="min-h-full bg-darkPurpleHeader sticky top-0 z-50 shadow-lg "
  >
    <div class="flex items-center justify-between px-4 md:px-16">
      <!-- Logo -->
      <div class="text-white text-2xl font-bold">
        <span
          class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          ><img src="/images/ky-logo.png" alt="" class="h-16"
        /></span>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex space-x-8">
        <NuxtLink
          href="#banner"
          class="text-white hover:text-purple-300 h-full transition-colors duration-300"
          >Home</NuxtLink
        >
        <NuxtLink
          href="#skills"
          class="text-white hover:text-purple-300 h-full transition-colors duration-300"
          >Skills</NuxtLink
        >
        <NuxtLink
          href="#experience"
          class="text-white hover:text-purple-300 h-full transition-colors duration-300"
          >Experience</NuxtLink
        >
        <NuxtLink
          href="#projects"
          class="text-white hover:text-purple-300 h-full transition-colors duration-300"
          >Projects</NuxtLink
        >
      </div>

      <!-- Mobile menu button -->
      <button
        @click="toggleMobileMenu"
        aria-label="Toggle navigation menu"
        :aria-expanded="isMobileMenuOpen"
        class="md:hidden text-white"
      >
        <svg
          v-if="!isMobileMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-show="isMobileMenuOpen"
      class="md:hidden bg-darkPurpleHeader px-4 pt-2 pb-4 space-y-2"
    >
      <NuxtLink
        href="#banner"
        class="block text-white hover:text-purple-300 transition-colors duration-300"
        @click="isMobileMenuOpen = false"
        >Home</NuxtLink
      >
      <NuxtLink
        href="#skills"
        class="block text-white hover:text-purple-300 transition-colors duration-300"
        @click="isMobileMenuOpen = false"
        >Skills</NuxtLink
      >
      <NuxtLink
        href="#experience"
        class="block text-white hover:text-purple-300 transition-colors duration-300"
        @click="isMobileMenuOpen = false"
        >Experience</NuxtLink
      >
      <NuxtLink
        href="#projects"
        class="block text-white hover:text-purple-300 transition-colors duration-300"
        @click="isMobileMenuOpen = false"
        >Projects</NuxtLink
      >
    </div>
  </header>
</template>
