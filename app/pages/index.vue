<!-- pages/index.vue -->
<template>
  <div class="bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900">
    <!-- Hero Section -->
    <section
      class="relative max-w-full mx-auto flex flex-col items-center justify-center text-center"
    >
      <!-- Profile Card -->
      <div
        data-aos="fade-down"
        class="min-h-svh flex items-center justify-center gap-14"
      >
        <div class="relative">
          <!-- Profile Image with Glow Effect -->
          <div
            data-aos="fade-right"
            class="relative h- w-72 rounded-full overflow-hidden animate-float gardient-to-br from-blue-500/20 to-blue-500/20"
          >
            <img
              src="/images/me-banner.png"
              class="relative h-72 rounded-3xl overflow-hidden p-1"
            />
          </div>

          <!-- Floating Elements -->
          <div
  
            class="absolute -top-16 -right-2 w-14 h-14 bg-purple-400 rounded-full animate-pulse"
          ></div>
          <div
            class="absolute -top-8 -right-2 w-8 h-8 bg-blue-400 rounded-full animate-pulse"
          ></div>
          <div
            class="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-300"
          ></div>
        </div>

        <div data-aos="fade-left" class="flex-1 text-center lg:text-left">
          <!-- Greeting -->
          <p class="text-purple-300 text-lg mb-4">
            Hey there, I’m
            <span class="text-purple-400 font-semibold">Yinyong</span>
          </p>

          <!-- Main Title -->
          <h1
            class="text-white text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            Crafting Visual Experiences<br />
            That Speak Louder<br />
            Than Words
          </h1>

          <p class="text-gray-300 text-base mb-8 max-w-xl">
            I'm a passionate UI/UX and web designer who believes that strong
            visuals and thoughtful design can tell powerful stories. Let's make
            your ideas stand out beautifully.
          </p>
        </div>
      </div>

      <!-- Professional Description -->
      <div data-aos="fade-up" class="text-center mb-16">
        <h2 class="text-white text-3xl lg:text-4xl font-bold mb-6">
          I'm a Web Developer
        </h2>

        <p class="text-gray-300 mb-6">
          Currently, I’m working as a Web Developer at
          <a
            href="#"
            class="text-blue-400 hover:text-blue-300 transition-colors"
            >📘 Facebook</a
          >.
        </p>

        <p class="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I’m a self-taught UI/UX designer with over 3 years of experience,
          crafting meaningful and delightful digital products. My focus is on
          creating seamless user experiences that balance both user needs and
          business objectives.
        </p>
      </div>

      <!-- Work Experience Section -->
      <section class="mb-20">
        <h3
          data-aos="fade-up"
          class="text-white text-2xl lg:text-3xl font-bold mb-12 text-center"
        >
          Work Experience
        </h3>

        <div class="grid md:grid-cols-2 gap-6">
          <!-- Project Card 1 -->
          <div
            data-aos="fade-right"
            class="group relative bg-gradient-to-br from-purple-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2L2 7V10C2 16 6 21.5 12 23C18 21.5 22 16 22 10V7L12 2Z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="text-white font-semibold">CIB on the Mobile</h4>
                <p class="text-gray-300 text-sm">
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </p>
              </div>
            </div>
            <button
              class="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
            >
              LEARN MORE
            </button>
          </div>

          <!-- Project Card 2 -->
          <div
            data-aos="fade-left"
            class="group relative bg-gradient-to-br from-orange-800/50 to-red-800/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="text-white font-semibold">CIB on the Mobile</h4>
                <p class="text-gray-300 text-sm">
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </p>
              </div>
            </div>
            <button
              class="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
            >
              LEARN MORE
            </button>
          </div>

          <!-- Project Card 3 -->
          <div
            data-aos="fade-right"
            class="group relative bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.5 3A6.5 6.5 0 0 1 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3M9.5 5C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="text-white font-semibold">CIB on the Mobile</h4>
                <p class="text-gray-300 text-sm">
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </p>
              </div>
            </div>
            <button
              class="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              LEARN MORE
            </button>
          </div>

          <!-- Project Card 4 -->
          <div
            data-aos="fade-left"
            class="group relative bg-gradient-to-br from-violet-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-violet-500 to-pink-500 rounded-xl flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="text-white font-semibold">CIB on the Mobile</h4>
                <p class="text-gray-300 text-sm">
                  Take your client onboard seamlessly by our amazing tool of
                  digital onboard process.
                </p>
              </div>
            </div>
            <button
              class="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
    </section>

    <!-- Background Elements -->
    <div class="fixed inset-0 pointer-events-none">
      <div
        class="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
      <div
        class="absolute bottom-1/4 left-1/3 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

<style scoped>
  /* Additional custom styles if needed */
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
</style>
