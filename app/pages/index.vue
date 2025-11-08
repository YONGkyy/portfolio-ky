<script setup lang="ts">
  import Aboutme from "~/components/sections/aboutme.vue";
  import Banner from "~/components/sections/banner.vue";
  import Contact from "~/components/sections/contact.vue";
  import Experience from "~/components/sections/experience.vue";
  import Skill from "~/components/sections/skill.vue";

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Vue.js",
    "Nuxt.js",
    "Tailwind CSS",
    "TypeScript",
    "Git",
    "PHP",
    "Laravel",
    "MySQL",
    "SQLServer",
    "Figma",
  ];
</script>

<template>
  <div
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Grid Pattern -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]"
      ></div>

      <!-- Gradient Orbs -->
      <div
        class="absolute top-1/4 left-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
      ></div>

      <div
        class="absolute bottom-1/4 -right-48 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-700"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
    </div>

    <!-- Background Animation (only in dark mode) -->
    <div class="main dark:block hidden"></div>

    <!-- Hero Section -->
    <section class="relative flex flex-col justify-center items-center z-10">
      <!-- Profile Card -->
      <Banner profiles="/images/prof.png" />

      <!-- About Me Section -->
      <Aboutme
        profile-image="/images/sadness.png"
        :skills="skills"
        :stats="{ experience: 3, projects: 50 }"
      />

      <!-- Rest of sections -->
      <Skill />
      <Experience />
      <!-- <project /> -->
      <!-- <testimonials /> -->
      <Contact />
    </section>
  </div>
</template>
