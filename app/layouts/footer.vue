<template>
  <footer class="bg-lightFooter dark:bg-darkPurpleFooter text-lightText dark:text-white transition-colors duration-300">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col md:flex-row md:gap-8">
        <!-- Profile / Branding -->
        <div data-aos="fade-right" class="space-y-4 md:w-1/3">
          <div class="flex items-center space-x-3">
            <img
              src="/images/me-banner.png"
              alt="Keo Yinyong - Professional profile photo for footer branding"
              class="w-20 h-20 rounded-full border-2 border-pink-500"
              loading="lazy"
            />

            <div class="flex flex-col">
              <h3 class="text-xl font-bold text-lightText dark:text-white">Keo Yinyong</h3>

              <!-- Social Glass Icons -->
              <div class="flex space-x-3 mt-3">
                <!-- Facebook -->
                <a
                  href="https://www.facebook.com/yong.kawaii"
                  class="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-lightAccent/10 dark:bg-white/10 border border-lightCardBorder dark:border-white/20 text-blue-400 hover:shadow-[0_0_12px_#3b82f6] transition duration-300"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>

                <!-- Telegram -->
                <a
                  href="https://t.me/yong_24"
                  class="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-lightAccent/10 dark:bg-white/10 border border-lightCardBorder dark:border-white/20 text-sky-400 hover:shadow-[0_0_12px_#38bdf8] transition duration-300"
                >
                  <i class="fab fa-telegram-plane"></i>
                </a>

                <!-- Website / Link -->
                <a
                  href="https://www.linkedin.com/in/keo-yinyong-396277330/"
                  class="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-lightAccent/10 dark:bg-white/10 border border-lightCardBorder dark:border-white/20 text-purple-400 hover:shadow-[0_0_12px_#a855f7] transition duration-300"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/YONGKyy"
                  class="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-lightAccent/10 dark:bg-white/10 border border-lightCardBorder dark:border-white/20 text-slate-600 dark:text-slate-300 hover:shadow-[0_0_12px_#a855f7] transition duration-300"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Button-style Description -->
          <div
            class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-lightAccent to-purple-500 dark:from-pink-500 dark:to-purple-500 text-white text-sm rounded-lg shadow-md hover:from-lightAccentHover hover:to-purple-600 dark:hover:from-pink-600 dark:hover:to-purple-600 transition"
          >
            <i class="fas fa-code mr-2"></i>
            Passionate about crafting beautiful and functional web experiences.
          </div>
        </div>

        <!-- Links & Info -->
        <div class="flex gap-3 md:gap-8 mt-8 md:mt-0 md:flex-1 md:justify-end">
          <!-- Navigation -->
          <div data-aos="fade-up" class="md:min-w-[150px]">
            <h4 class="text-lg font-semibold mb-4 text-lightText dark:text-white">Explore</h4>
            <ul class="md:space-y-2">
              <li>
                <button @click="scrollToSection('banner')" class="text-lightTextSecondary dark:text-gray-400 hover:text-lightAccent dark:hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button @click="scrollToSection('skills')" class="text-lightTextSecondary dark:text-gray-400 hover:text-lightAccent dark:hover:text-white transition-colors">
                  Skills
                </button>
              </li>
              <li>
                <button @click="scrollToSection('experience')" class="text-lightTextSecondary dark:text-gray-400 hover:text-lightAccent dark:hover:text-white transition-colors">
                  Experience
                </button>
              </li>
              <li>
                <button @click="scrollToSection('projects')" class="text-lightTextSecondary dark:text-gray-400 hover:text-lightAccent dark:hover:text-white transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button @click="scrollToSection('contact')" class="text-lightTextSecondary dark:text-gray-400 hover:text-lightAccent dark:hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div data-aos="fade-up" class="md:min-w-[150px]">
            <h4 class="text-lg font-semibold mb-4 text-lightText dark:text-white">What I Do</h4>
            <ul class="md:space-y-2">
              <li><span class="text-lightTextSecondary dark:text-gray-400">Web Development</span></li>
              <li><span class="text-lightTextSecondary dark:text-gray-400">UI/UX Design</span></li>
              <li><span class="text-lightTextSecondary dark:text-gray-400">Responsive Design</span></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div data-aos="fade-left" class="md:min-w-[200px]">
            <h4 class="text-lg font-semibold mb-4 text-lightText dark:text-white">Contact</h4>
            <div class="text-lightTextSecondary dark:text-gray-400 text-sm md:space-y-2">
              <p>
                <i class="fas fa-envelope mr-2 text-lightAccent dark:text-purple-400"></i
                >yongkeo9@gmail.com
              </p>
              <p>
                <i class="fas fa-map-marker-alt mr-2 text-lightAccent dark:text-purple-400"></i>Phnom
                Penh, Cambodia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="bg-lightCardBorder dark:bg-lightPurpleFooter transition-colors duration-300">
      <div
        class="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
      >
        <p class="text-lightTextSecondary dark:text-gray-400 text-sm">
          &copy; {{ new Date().getFullYear() }} Keo Yinyong. All rights
          reserved.
        </p>
        <div class="flex space-x-4">
          <NuxtLink to="/" class="text-lightTextSecondary dark:text-gray-400 hover:text-lightAccent dark:hover:text-white text-sm transition-colors"
            >Privacy</NuxtLink
          >
          <NuxtLink to="/" class="text-lightTextSecondary dark:text-gray-400 hover:text-lightAccent dark:hover:text-white text-sm transition-colors"
            >Terms</NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
function scrollToSection(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
</script>
