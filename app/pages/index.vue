<script setup lang="ts">
  import { onMounted } from "vue";


  const techs = [
    { name: "HTML", class: "html", icon: "fa-html5", color: "#e44d26" },
    { name: "CSS", class: "css", icon: "fa-css3", color: "#264de4" },
    { name: "JavaScript", class: "js", icon: "fa-js", color: "#f0db4f" },
    { name: "Vue", class: "vue", icon: "fa-vuejs", color: "#42b883" },
    {
      name: "Nuxt",
      class: "nuxt",
      image: "/images/nuxt.svg",
      color: "#00c58e",
    },
    { name: "PHP", class: "php", icon: "fa-php", color: "#777bb3" },
    { name: "Laravel", class: "laravel", icon: "fa-laravel", color: "#ff2d20" },
    { name: "MySQL", class: "mysql", text: "MySQL", color: "#00758f" },
    {
      name: "Github",
      class: "github ",
      icon: "fa-github",
      color: "#33333",
    },
    {
      name: "Figma",
      class: "figma ",
      icon: "fa-figma",
      color: "#f24e1e",
    },
  ];

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

<template>
  <div class="bg-darkPurpleBody galaxy ">
    <!-- Background Animation -->
    <div class="main"></div>

    <!-- Hero Section -->
    <section
      class="relative w-full mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10"
    >
      <!-- Profile Card -->
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
                  <i :class="`fa-brands ${tech.icon} text-3xl `"></i>
                </template>

                <template v-else>
                  {{ tech.text }}
                </template>
              </span>
            </div>
          </div>

          <!-- Floating Elements - Adjusted for mobile -->
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
          <!-- Greeting -->
          <p
            data-aos="fade-down"
            class="text-purple-300 text-lg sm:text-xl mb-4"
          >
            Hey there, I'm
            <span class="text-purple-400 font-semibold">Yinyong</span>
          </p>

          <!-- Personal Tagline -->
          <p
            data-aos="fade-up"
            class="text-white text-xl sm:text-2xl font-semibold mb-6"
          >
            I'm a Web Developer
          </p>

          <!-- Main Title -->
          <h1
            data-aos="fade-up"
            class="text-white text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            Crafting Visual Experiences<br class="hidden sm:block" />
            <span class="sm:hidden">That Speak Louder Than Words</span>
            <span class="hidden sm:inline"
              >That Speak Louder<br />Than Words</span
            >
          </h1>

          <!-- Description Paragraph -->
          <p
            data-aos="fade-right"
            class="text-gray-300 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0"
          >
            I'm a passionate UI/UX and web designer who believes that strong
            visuals and thoughtful design can tell powerful stories. Let's make
            your ideas stand out beautifully.
          </p>

          <!-- Social Media Icons -->
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

      <!-- Professional Description -->
      <div
        class="text-center mb-16 px-4 sm:px-6 flex flex-col lg:flex-row justify-between items-center gap-12"
      >
        <div
          data-aos="fade-right"
          class="flex-1 text-center lg:text-left order-2 lg:order-2 max-w-2xl"
        >
          <h2
            data-aos="fade-up"
            class="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
          >
            I'm a Web Developer
          </h2>
          <p data-aos="fade-up" class="text-gray-300 mb-6 text-base sm:text-lg">
            Currently, I'm working as a Web Developer at
            <a
              href=""
              class="text-blue-400 hover:text-blue-300 transition-colors"
              >Norton University</a
            >.
          </p>
          <p
            data-aos="fade-up"
            class="text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg sm:text-base"
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
            class="absolute w-full h-full rounded-full bg-indigo-900 blur-3xl opacity-60 animate-glow"
          ></div>

          <!-- Profile Image -->
          <img
            src="/images/pf1.jpg"
            alt=""
            class="h-56 sm:w-64 sm:h-64 lg:w-96 lg:h-96 object-cover rounded-2xl ml-8 shadow-lg relative z-10"
          />
        </div>
      </div>

      <!-- Knowledge Section -->
      <section class="mb-20 w-full max-w-6xl px-4 sm:px-6">
        <h3
          id="skills"
          data-aos="fade-down"
          class="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-12 flex relative z-10"
        >
          Knowledge and Skills
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <!-- Card 1 -->
          <div
            data-aos="fade-right"
            class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-105 transition-transform duration-500"
          >
            <!-- Galaxy Background -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[24px] z-0"
            ></div>

            <!-- Glass Frosted Card -->
            <div
              class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500"
            >
              <!-- Icon -->
              <div
                class="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg mb-6"
              >
                <svg
                  class="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2L2 7V10C2 16 6 21.5 12 23C18 21.5 22 16 22 10V7L12 2Z"
                  />
                </svg>
              </div>

              <!-- Title -->
              <h3 class="text-white text-2xl font-semibold mb-3">HTML & CSS</h3>

              <!-- Description -->
              <p class="text-purple-200 text-sm leading-relaxed mb-6">
                Build modern UI with stunning design and layout flexibility
                using HTML & CSS.
              </p>

              <!-- Button -->
              <button
                class="text-purple-300 hover:text-purple-100 transition-colors font-semibold text-sm"
              >
                LEARN MORE
              </button>
            </div>
          </div>

          <!-- Repeat the same style for other cards, changing icon & text -->

          <!-- Card 2 -->
          <div
            data-aos="fade-left"
            class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-105 transition-transform duration-500"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-black animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[24px] z-0"
            ></div>
            <div
              class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500"
            >
              <div
                class="w-14 h-14 rounded-full bg-gradient-to-tr from-orange-500 to-red-600 flex items-center justify-center shadow-lg mb-6"
              >
                <svg
                  class="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </div>
              <h3 class="text-white text-2xl font-semibold mb-3">JavaScript</h3>
              <p class="text-purple-200 text-sm leading-relaxed mb-6">
                Interactive and dynamic client-side scripting for rich
                experiences.
              </p>
              <button
                class="text-orange-300 hover:text-orange-100 transition-colors font-semibold text-sm"
              >
                LEARN MORE
              </button>
            </div>
          </div>

          <!-- Card 3 -->
          <div
            data-aos="fade-right"
            class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-105 transition-transform duration-500"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[24px] z-0"
            ></div>
            <div
              class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500"
            >
              <div
                class="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mb-6"
              >
                <svg
                  class="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.5 3A6.5 6.5 0 0 1 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3M9.5 5C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"
                  />
                </svg>
              </div>
              <h3 class="text-white text-2xl font-semibold mb-3">Vue 3</h3>
              <p class="text-purple-200 text-sm leading-relaxed mb-6">
                Modern frontend framework for building fast and reactive web
                apps.
              </p>
              <button
                class="text-blue-300 hover:text-blue-100 transition-colors font-semibold text-sm"
              >
                LEARN MORE
              </button>
            </div>
          </div>

          <!-- Card 4 -->
          <div
            data-aos="fade-left"
            class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-105 transition-transform duration-500"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-pink-900 via-violet-900 to-black animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[24px] z-0"
            ></div>
            <div
              class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500"
            >
              <div
                class="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 to-violet-600 flex items-center justify-center shadow-lg mb-6"
              >
                <svg
                  class="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                  />
                </svg>
              </div>
              <h3 class="text-white text-2xl font-semibold mb-3">Nuxt.js</h3>
              <p class="text-purple-200 text-sm leading-relaxed mb-6">
                Meta-framework for Vue to build SSR-ready performant websites.
              </p>
              <button
                class="text-pink-300 hover:text-pink-100 transition-colors font-semibold text-sm"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Work Experience Section -->
      <section class="mb-20 w-full max-w-6xl px-4 sm:px-6">
        <h3
          id="experience"
          data-aos="fade-down"
          class="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-12 flex relative z-10"
        >
          Work Experience
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <!-- Card 1 -->
          <div
            data-aos="fade-right"
            class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-105 transition-transform duration-500"
          >
            <!-- Galaxy Background -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[24px] z-0"
            ></div>

            <!-- Glass Frosted Card -->
            <div
              class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500"
            >
              <!-- Icon -->
              <div
                class="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg mb-6"
              >
                <svg
                  class="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2L2 7V10C2 16 6 21.5 12 23C18 21.5 22 16 22 10V7L12 2Z"
                  />
                </svg>
              </div>

              <!-- Title -->
              <h3 class="text-white text-2xl font-semibold mb-3">
                Web Developer at Norton University
              </h3>

              <!-- Description -->
              <p class="text-purple-200 text-sm leading-relaxed mb-6">
                Build modern UI with stunning design and layout flexibility
                using HTML & CSS.
              </p>

              <!-- Button -->
              <button
                class="text-purple-300 hover:text-purple-100 transition-colors font-semibold text-sm"
              >
                LEARN MORE
              </button>
            </div>
          </div>

          <!-- Repeat the same style for other cards, changing icon & text -->

          <!-- Card 2 -->
          <div
            data-aos="fade-left"
            class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-105 transition-transform duration-500"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-black animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[24px] z-0"
            ></div>
            <div
              class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500"
            >
              <div
                class="w-14 h-14 rounded-full bg-gradient-to-tr from-orange-500 to-red-600 flex items-center justify-center shadow-lg mb-6"
              >
                <svg
                  class="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </div>
              <h3 class="text-white text-2xl font-semibold mb-3">JavaScript</h3>
              <p class="text-purple-200 text-sm leading-relaxed mb-6">
                Interactive and dynamic client-side scripting for rich
                experiences.
              </p>
              <button
                class="text-orange-300 hover:text-orange-100 transition-colors font-semibold text-sm"
              >
                LEARN MORE
              </button>
            </div>
          </div>

          <!-- Card 3 -->
          <div
            data-aos="fade-right"
            class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-105 transition-transform duration-500"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[24px] z-0"
            ></div>
            <div
              class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500"
            >
              <div
                class="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mb-6"
              >
                <svg
                  class="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.5 3A6.5 6.5 0 0 1 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3M9.5 5C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"
                  />
                </svg>
              </div>
              <h3 class="text-white text-2xl font-semibold mb-3">Vue 3</h3>
              <p class="text-purple-200 text-sm leading-relaxed mb-6">
                Modern frontend framework for building fast and reactive web
                apps.
              </p>
              <button
                class="text-blue-300 hover:text-blue-100 transition-colors font-semibold text-sm"
              >
                LEARN MORE
              </button>
            </div>
          </div>

          <!-- Card 4 -->
          <div
            data-aos="fade-left"
            class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-105 transition-transform duration-500"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-pink-900 via-violet-900 to-black animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[24px] z-0"
            ></div>
            <div
              class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500"
            >
              <div
                class="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 to-violet-600 flex items-center justify-center shadow-lg mb-6"
              >
                <svg
                  class="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                  />
                </svg>
              </div>
              <h3 class="text-white text-2xl font-semibold mb-3">Nuxt.js</h3>
              <p class="text-purple-200 text-sm leading-relaxed mb-6">
                Meta-framework for Vue to build SSR-ready performant websites.
              </p>
              <button
                class="text-pink-300 hover:text-pink-100 transition-colors font-semibold text-sm"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>
      <!-- Projects Section -->
      <section class="mb-20 w-full max-w-6xl px-4 sm:px-6">
        <h3
          id="projects"
          data-aos="fade-down"
          class="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-12 flex text-start relative z-10"
        >
          Projects
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <!-- Project Card 1 -->
          <div
            data-aos="fade-right"
            class="group relative bg-gradient-to-br from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div class="flex items-start sm:items-center gap-3 sm:gap-4 mb-4">
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2L2 7V10C2 16 6 21.5 12 23C18 21.5 22 16 22 10V7L12 2Z"
                  />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-white font-semibold text-sm sm:text-base mb-1">
                  Web Developer at Norton University
                </h4>
                <p class="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </p>
              </div>
            </div>
            <button
              class="text-purple-400 hover:text-purple-300 text-xs sm:text-sm font-medium transition-colors"
            >
              LEARN MORE
            </button>
          </div>

          <!-- Project Card 2 -->
          <div
            data-aos="fade-left"
            class="group relative bg-gradient-to-br from-orange-800/50 to-red-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div class="flex items-start sm:items-center gap-3 sm:gap-4 mb-4">
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-white font-semibold text-sm sm:text-base mb-1">
                  CIB on the Mobile
                </h4>
                <p class="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </p>
              </div>
            </div>
            <button
              class="text-orange-400 hover:text-orange-300 text-xs sm:text-sm font-medium transition-colors"
            >
              LEARN MORE
            </button>
          </div>

          <!-- Project Card 3 -->
          <div
            data-aos="fade-right"
            class="group relative bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div class="flex items-start sm:items-center gap-3 sm:gap-4 mb-4">
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.5 3A6.5 6.5 0 0 1 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3M9.5 5C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"
                  />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-white font-semibold text-sm sm:text-base mb-1">
                  CIB on the Mobile
                </h4>
                <p class="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </p>
              </div>
            </div>
            <button
              class="text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium transition-colors"
            >
              LEARN MORE
            </button>
          </div>

          <!-- Project Card 4 -->
          <div
            data-aos="fade-left"
            class="group relative bg-gradient-to-br from-violet-800/50 to-pink-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div class="flex items-start sm:items-center gap-3 sm:gap-4 mb-4">
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                  />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-white font-semibold text-sm sm:text-base mb-1">
                  CIB on the Mobile
                </h4>
                <p class="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </p>
              </div>
            </div>
            <button
              class="text-violet-400 hover:text-violet-300 text-xs sm:text-sm font-medium transition-colors"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
