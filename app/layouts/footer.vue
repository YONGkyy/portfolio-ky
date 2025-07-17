<template>
  <footer class="bg-darkPurpleFooter text-white">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Profile / Branding -->
        <div data-aos="fade-right" class="space-y-4">
          <div class="flex items-center space-x-3">
            <img
              src="/images/me-banner.png"
              alt="Logo"
              class="w-10 h-10 rounded-full border-2 border-pink-500"
            />
            <h3 class="text-xl font-bold">Keo Yinyong</h3>
          </div>
          <p class="text-gray-400 text-sm">
            Passionate about crafting beautiful and functional web experiences.
          </p>
          <!-- Socials -->
          <div class="flex space-x-4">
            <a href="#" class="hover:text-pink-400 transition">
              <i class="fab fa-github text-xl"></i>
            </a>
            <a href="#" class="hover:text-pink-400 transition">
              <i class="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" class="hover:text-pink-400 transition">
              <i class="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div data-aos="fade-up" class="space-y-4">
          <h4 class="text-lg font-semibold">Explore</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="#banner" class="text-gray-400 hover:text-white"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="#projects" class="text-gray-400 hover:text-white"
                >Projects</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="#skills" class="text-gray-400 hover:text-white"
                >Skills</NuxtLink
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

        <!-- Services (Optional) -->
        <div data-aos="fade-up" class="space-y-4">
          <h4 class="text-lg font-semibold">What I Do</h4>
          <ul class="space-y-2">
            <li><span class="text-gray-400">Web Development</span></li>
            <li><span class="text-gray-400">UI/UX Design</span></li>
            <li><span class="text-gray-400">Responsive Design</span></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div data-aos="fade-left" class="space-y-4">
          <h4 class="text-lg font-semibold">Contact</h4>
          <div class="text-gray-400 text-sm space-y-2">
            <p>
              <i class="fas fa-envelope mr-2 text-purple-400"></i
              >yongkeo9@gmail.com
            </p>
            <p>
              <i class="fas fa-map-marker-alt mr-2 text-purple-400"></i>Phnom
              Penh, Cambodia
            </p>
            <p><i class="fas fa-phone mr-2 text-purple-400"></i></p>
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
