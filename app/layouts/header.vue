<script setup lang="ts">
  // Nuxt 4 script setup
  useHead({
    title: "Ibrahim Memon - Software Engineer & Designer",
    meta: [
      {
        name: "description",
        content:
          "A Software Engineer and UI/UX Designer with 3+ years of experience creating meaningful digital products.",
      },
    ],
  });
</script>

<template>
  <header class="min-h-full  bg-darkPurpleHeader sticky top-0 z-50">
    <div class=" flex items-center justify-between px-16">
      <!-- Logo -->
      <div class="text-white text-2xl font-bold">
        <span
          class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          ><img src="/images/ky-logo.png" alt="" class=" h-16"></span
        >
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-8">
        <a
          href="#home"
          class="text-white hover:text-purple-300 h-full transition-colors duration-300"
          >Home</a
        >
        <a
          href="#about"
          class="text-white hover:text-purple-300 transition-colors duration-300"
          >About</a
        >
        <a
          href="#lab"
          class="text-white hover:text-purple-300 transition-colors duration-300"
          >Lab</a
        >
      </div>

      <!-- Mobile menu button -->
      <button class="md:hidden text-white">
        <svg
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
          ></path>
        </svg>
      </button>
    </div>
  </header>
</template>
