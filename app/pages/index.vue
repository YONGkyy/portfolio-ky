<script setup>
  import { onMounted } from "vue";
  import { initBackground } from "@/utils/background.js";

  onMounted(() => {
    initBackground();
  });
</script>

<template>
  <div class="bg-darkPurpleBody">
    <div class="geometric-background" id="geometric-background"></div>
    <div class="particles" id="particles"></div>
    <!-- Hero Section -->
    <section
      class=" relative w-full mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10"
    >
      <!-- Profile Card -->
      <div
        data-aos="fade-up"
        class= " min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-8 lg:py-0"
      >
        <!-- Profile Image Section -->
        <div data-aos="fade-right" class="relative order-1 lg:order-1">
          <!-- Profile Image with Animated Glow -->
          <div
            class="relative flex items-center justify-center w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
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
          <p class="text-purple-300 text-lg sm:text-xl mb-4">
            Hey there, I'm
            <span class="text-purple-400 font-semibold">Yinyong</span>
          </p>

          <!-- Main Title -->
          <h1
            class="text-white text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            Crafting Visual Experiences<br class="hidden sm:block" />
            <span class="sm:hidden">That Speak Louder Than Words</span>
            <span class="hidden sm:inline"
              >That Speak Louder<br />Than Words</span
            >
          </h1>

          <p
            class="text-gray-300 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0"
          >
            I'm a passionate UI/UX and web designer who believes that strong
            visuals and thoughtful design can tell powerful stories. Let's make
            your ideas stand out beautifully.
          </p>
        </div>
      </div>

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
              href="#"
              class="text-blue-400 hover:text-blue-300 transition-colors"
              >📘 Facebook</a
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

      <!-- Work Experience Section -->
      <section class="mb-20 w-full max-w-6xl px-4 sm:px-6">
        <h3
          data-aos="fade-up"
          class="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-12"
        >
          Work Experience
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
                  CIB on the Mobile
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
