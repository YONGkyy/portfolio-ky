<template>
  <section
    id="banner"
    data-aos="fade-up"
    class="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-8 lg:py-0 relative"
  >
    <!-- Profile Image Section -->
    <div data-aos="fade-right" class="relative order-1 lg:order-1">
      <!-- Profile Image with Animated Glow -->
      <div
        class="relative flex items-center justify-center w-44 h-44 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
      >
        <!-- Animated Glow Background -->
        <div
          class="absolute w-full h-full rounded-full bg-indigo-800 blur-3xl opacity-60 animate-glow"
        ></div>

        <!-- Profile Image -->
        <img
          src="/images/me-banner.png"
          alt="Profile"
          class="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover rounded-full z-10"
        />

        <!-- Floating Tech Icons -->
        <div
          class="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        >
          <span
            v-for="(tech, index) in techs"
            :key="tech.name"
            :class="[
              'absolute floating-icon',
              floatClasses[index % floatClasses.length],
            ]"
            :style="{ color: tech.color }"
          >
            <template v-if="tech.image">
              <img :src="tech.image" :alt="tech.name" class="w-8 h-8" />
            </template>

            <template v-else-if="tech.icon">
              <i :class="`fa-brands ${tech.icon} text-3xl`"></i>
            </template>

            <template v-else>
              {{ tech.text }}
            </template>
          </span>
        </div>
      </div>

      <!-- Floating Decorative Elements -->
      <div
        class="absolute -top-8 -right-1 sm:-top-12 sm:-right-2 lg:-top-16 lg:-right-2 w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-400 rounded-full animate-pulse"
      ></div>
      <div
        class="absolute -top-4 -right-1 sm:-top-6 sm:-right-2 lg:-top-8 lg:-right-2 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-blue-400 rounded-full animate-pulse"
      ></div>
      <div
        class="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full animate-pulse delay-300"
      ></div>
    </div>

    <!-- Text Content Section -->
    <div
      data-aos="fade-left"
      class="flex-1 text-center lg:text-left order-2 lg:order-2 max-w-2xl"
    >
      <p data-aos="fade-down" class="text-purple-300 text-lg sm:text-xl mb-4">
        Hey there, I'm
        <span class="text-purple-400 font-semibold">Yinyong</span>
      </p>

      <p
        data-aos="fade-up"
        class="text-white text-xl sm:text-2xl font-semibold mb-6"
      >
        I'm a Web Developer
      </p>

      <h1
        data-aos="fade-up"
        class="text-white text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
      >
        Crafting Visual Experiences<br class="hidden sm:block" />
        <span class="sm:hidden">That Speak Louder Than Words</span>
        <span class="hidden sm:inline">That Speak Louder<br />Than Words</span>
      </h1>

      <p
        data-aos="fade-right"
        class="text-gray-300 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0"
      >
        I'm a passionate UI/UX and web designer who believes that strong visuals
        and thoughtful design can tell powerful stories. Let's make your ideas
        stand out beautifully.
      </p>

      <div
        data-aos="fade-up"
        class="mt-6 flex justify-center lg:justify-start gap-6 flex-wrap"
      >
        <a
          href="https://www.facebook.com/yong.kawaii"
          target="_blank"
          class="social-icon text-blue-500 hover:text-blue-400"
          aria-label="Facebook"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://t.me/yong_24"
          target="_blank"
          class="social-icon text-cyan-400 hover:text-cyan-300"
          aria-label="Telegram"
        >
          <i class="fab fa-telegram-plane"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/keo-yinyong-396277330/"
          target="_blank"
          class="social-icon text-blue-600 hover:text-blue-500 animate-float-fast"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/YONGKyy"
          target="_blank"
          class="social-icon text-white hover:text-slate-400 animate-float-fast"
          aria-label="Github"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    techs: {
      type: Array,
      required: true,
    },
  });

  // Floating position & animation classes for icons
  const floatClasses = [
    "top-[30%] left-10 md:top-0 md:left-1/2 -translate-x-1/2 animate-float-slow",
    "top-1/3 left-[70%] animate-float-fast",
    "top-[70%] left-[80%] md:left-[90%] animate-float-medium",
    "bottom-10 md:bottom-0 left-1/3  -translate-x-1/2 animate-float-fast",
    "bottom-1/4 left-[10%] animate-float-slow",
    "top-1/2 left-5 md:left-0 -translate-y-1/2 animate-float-medium",
    "top-[80%] md:top-0 left-[10%] animate-float-medium",
    "bottom-10 md:bottom-0 right-[20%] animate-float-slow",
    "top-[20%] left-[20%] animate-float-medium",
    "top-[40%] right-[5%] animate-float-fast",
  ];
</script>
