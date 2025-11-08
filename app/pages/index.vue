<script setup lang="ts">
  import Banner from "~/components/banner.vue";

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
    <section
      class="relative w-full mx-auto m flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10"
    >
      <!-- Profile Card -->
      <Banner />

      <!-- Professional Description -->
      <div
        id="explore"
        class="text-center min-h-screen mb-16 px-4 
         flex flex-col  lg:flex-row-reverse justify-between items-center gap-12"
      >
        <div
          data-aos="fade-right"
          class="flex-1 text-center lg:text-left order-2 lg:order-2 max-w-3xl"
        >
          <h2
            data-aos="fade-up"
            class="text-lightText dark:text-white text-2xl sm:text-3xl lg:text-4xl font-bold "
          >
            I'm a Web Developer
          </h2>
          <p
            data-aos="fade-up"
            class="text-lightTextSecondary dark:text-gray-300 mb-6 text-base sm:text-lg"
          >
            Currently, I'm working as a Web Developer at
            <a
              href=""
              class="text-lightAccent dark:text-blue-400 hover:text-lightAccentHover dark:hover:text-blue-300 transition-colors"
              >Norton University</a
            >.
          </p>
          <p
            data-aos="fade-up"
            class="text-lightTextSecondary dark:text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg sm:text-base"
          >
            I'm a self-taught UI/UX designer with over 3 years of experience,
            crafting meaningful and delightful digital products. My focus is on
            creating seamless user experiences that balance both user needs and
            business objectives.
          </p>
        </div>

        <div
          data-aos="fade-left"
          class="flex-1 text-center lg:text-left order-1 lg:order-2 max-w-2xl"
        >
          <!-- Animated Glow Background -->
          <div
            class="absolute w-full h-full rounded-full bg-lightAccent/20 dark:bg-indigo-900 blur-3xl opacity-60 animate-glow"
          ></div>

          <!-- Profile Image -->
          <img
            src="/images/sadness.png"
            alt="Keo Yinyong professional photo"
            class="w-64 h-64 sm:w-64 sm:h-64 lg:w-[500px] lg:h-[500px] object-cover justify-center rounded-2xl ml-8 shadow-lg dark:shadow-2xl relative z-10"
          />
        </div>
      </div>

      <!-- Rest of sections -->
      <skill />
      <experience />
      <!-- <project /> -->
      <!-- <testimonials /> -->
      <contact />
    </section>
  </div>
</template>
