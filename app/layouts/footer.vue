<template>
  <footer class="bg-darkPurpleFooter text-white">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col md:flex-row md:gap-8">
        <!-- Profile / Branding -->
        <div data-aos="fade-right" class="space-y-4 md:w-1/3">
          <div class="flex items-center space-x-3">
            <img
              src="/images/me-banner.png"
              alt="Logo"
              class="w-10 h-10 rounded-full border-2 border-pink-500"
            />

            <div class="flex flex-col">
              <h3 class="text-xl font-bold">Keo Yinyong</h3>

              <!-- Social Glass Icons -->
              <div class="flex space-x-3 mt-3">
                <!-- Facebook -->
                <a
                  href="https://www.facebook.com/yong.kawaii"
                  class="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-blue-400 hover:shadow-[0_0_12px_#3b82f6] transition duration-300"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>

                <!-- Telegram -->
                <a
                  href="https://t.me/yong_24"
                  class="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-sky-400 hover:shadow-[0_0_12px_#38bdf8] transition duration-300"
                >
                  <i class="fab fa-telegram-plane"></i>
                </a>

                <!-- Website / Link -->
                <a
                  href="https://www.linkedin.com/in/keo-yinyong-396277330/"
                  class="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-purple-400 hover:shadow-[0_0_12px_#a855f7] transition duration-300"
                >
                <i class="fab fa-linkedin-in"></i>

                </a>
              </div>
            </div>
          </div>

          <!-- Button-style Description -->
          <div
            class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm rounded-lg shadow-md hover:from-pink-600 hover:to-purple-600 transition"
          >
            <i class="fas fa-code mr-2"></i>
            Passionate about crafting beautiful and functional web experiences.
          </div>
        </div>

        <!-- Links & Info -->
        <div class="flex flex-wrap gap-2 md:gap-8 mt-8 md:mt-0 md:flex-1 justify-end">
          <!-- Navigation -->
          <div data-aos="fade-up" class="min-w-[150px]">
            <h4 class="text-lg font-semibold mb-4">Explore</h4>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="#banner" class="text-gray-400 hover:text-white"
                  >Home</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="#skills" class="text-gray-400 hover:text-white"
                  >Skills</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="#projects" class="text-gray-400 hover:text-white"
                  >Projects</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/resume" class="text-gray-400 hover:text-white"
                  >Resume</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/contact" class="text-gray-400 hover:text-white"
                  >Contact</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div data-aos="fade-up" class="min-w-[150px]">
            <h4 class="text-lg font-semibold mb-4">What I Do</h4>
            <ul class="space-y-2">
              <li><span class="text-gray-400">Web Development</span></li>
              <li><span class="text-gray-400">UI/UX Design</span></li>
              <li><span class="text-gray-400">Responsive Design</span></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div data-aos="fade-left" class="min-w-[200px]">
            <h4 class="text-lg font-semibold mb-4">Contact</h4>
            <div class="text-gray-400 text-sm space-y-2">
              <p>
                <i class="fas fa-envelope mr-2 text-purple-400"></i
                >yongkeo9@gmail.com
              </p>
              <p>
                <i class="fas fa-map-marker-alt mr-2 text-purple-400"></i>Phnom
                Penh, Cambodia
              </p>
              <p>
                <i class="fas fa-phone mr-2 text-purple-400"></i>+855 12 345 678
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="bg-lightPurpleFooter">
      <div
        class="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
      >
        <p class="text-gray-400 text-sm">
          &copy; {{ new Date().getFullYear() }} Keo Yinyong. All rights
          reserved.
        </p>
        <div class="flex space-x-4">
          <NuxtLink to="/privacy" class="text-gray-400 hover:text-white text-sm"
            >Privacy</NuxtLink
          >
          <NuxtLink to="/terms" class="text-gray-400 hover:text-white text-sm"
            >Terms</NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>
