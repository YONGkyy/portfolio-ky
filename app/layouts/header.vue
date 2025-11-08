<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue";

  const isMobileMenuOpen = ref(false);
  const activeSection = ref('banner');
  const isScrolled = ref(false);
  const isDarkMode = ref(true); // Default to dark mode

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  }

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
    // Apply theme to document
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  function smoothScrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    isMobileMenuOpen.value = false;
  }

  function handleScroll() {
    isScrolled.value = window.scrollY > 50;
    
    // Update active section based on scroll position
    const sections = ['banner', 'aboutme', 'skills', 'experience', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          activeSection.value = section;
          break;
        }
      }
    }
  }

  onMounted(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDarkMode.value = savedTheme === 'dark';
    } else {
      // Default to dark mode
      isDarkMode.value = true;
    }
    
    // Apply initial theme
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-300',
      isDarkMode
        ? isScrolled
          ? 'bg-darkPurpleHeader/95 backdrop-blur-md shadow-2xl border-b border-purple-500/20'
          : 'bg-darkPurpleHeader shadow-lg'
        : isScrolled
          ? 'bg-lightHeader/95 backdrop-blur-md shadow-2xl border-b border-lightCardBorder'
          : 'bg-lightHeader shadow-lg'
    ]"
  >
    <div class="flex items-center justify-between px-4 md:px-16 py-2">
      <!-- Logo -->
      <div :class="isDarkMode ? 'text-white' : 'text-lightText'" class="text-2xl font-bold">
        <button @click="smoothScrollTo('banner')" class="transition-transform hover:scale-105">
          <img src="/images/ky-logo.png" alt="KY Logo - Keo Yinyong Web Developer Brand" class="h-12 md:h-16" loading="eager" />
        </button>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-4">
        <button
          @click="smoothScrollTo('banner')"
          :class="[
            'px-2 py-2 rounded-lg transition-all duration-300 font-medium',
            activeSection === 'banner'
              ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
              : isDarkMode
                ? 'text-white hover:text-purple-300 hover:bg-purple-500/10'
                : 'text-lightText hover:text-lightAccent hover:bg-lightAccent/10'
          ]"
        >
          Home
        </button>
        <button
          @click="smoothScrollTo('aboutme')"
           :class="[
            'px-2 py-2 rounded-lg transition-all duration-300 font-medium',
            activeSection === 'aboutme'
              ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
              : isDarkMode
                ? 'text-white hover:text-purple-300 hover:bg-purple-500/10'
                : 'text-lightText hover:text-lightAccent hover:bg-lightAccent/10'
          ]"
        >About</button>
        <button
          @click="smoothScrollTo('skills')"
          :class="[
            'px-2 py-2 rounded-lg transition-all duration-300 font-medium',
            activeSection === 'skills'
              ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
              : isDarkMode
                ? 'text-white hover:text-purple-300 hover:bg-purple-500/10'
                : 'text-lightText hover:text-lightAccent hover:bg-lightAccent/10'
          ]"
        >
          Skills
        </button>
        <button
          @click="smoothScrollTo('experience')"
          :class="[
            'px-2 py-2 rounded-lg transition-all duration-300 font-medium',
            activeSection === 'experience'
              ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
              : isDarkMode
                ? 'text-white hover:text-purple-300 hover:bg-purple-500/10'
                : 'text-lightText hover:text-lightAccent hover:bg-lightAccent/10'
          ]"
        >
          Experience
        </button>
        <button
          @click="smoothScrollTo('projects')"
          :class="[
            'px-2 py-2 rounded-lg transition-all duration-300 font-medium',
            activeSection === 'projects'
              ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
              : isDarkMode
                ? 'text-white hover:text-purple-300 hover:bg-purple-500/10'
                : 'text-lightText hover:text-lightAccent hover:bg-lightAccent/10'
          ]"
        >
          Projects
        </button>
        <button
          @click="smoothScrollTo('contact')"
          :class="[
            'px-2 py-2 rounded-lg transition-all duration-300 font-medium',
            activeSection === 'contact'
              ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
              : isDarkMode
                ? 'text-white hover:text-purple-300 hover:bg-purple-500/10'
                : 'text-lightText hover:text-lightAccent hover:bg-lightAccent/10'
          ]"
        >
          Contact
        </button>

        <!-- Dark/Light Mode Toggle -->
        <button
          @click="toggleDarkMode"
          :class="[
            'ml-4 p-2 rounded-lg transition-all duration-300',
            isDarkMode
              ? 'text-white hover:bg-purple-500/10 hover:text-purple-300'
              : 'text-lightText hover:bg-lightAccent/10 hover:text-lightAccent'
          ]"
          :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <svg v-if="isDarkMode" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
          </svg>
          <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd"/>
          </svg>
        </button>
      </nav>

      <!-- Mobile Actions -->
      <div class="md:hidden flex items-center space-x-2">
        <!-- Dark/Light Mode Toggle Mobile -->
        <button
          @click="toggleDarkMode"
          :class="[
            'p-2 rounded-lg transition-all duration-300',
            isDarkMode
              ? 'text-white hover:bg-purple-500/10 hover:text-purple-300'
              : 'text-lightText hover:bg-lightAccent/10 hover:text-lightAccent'
          ]"
          :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <svg v-if="isDarkMode" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
          </svg>
          <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd"/>
          </svg>
        </button>

        <!-- Mobile menu button -->
        <button
          @click="toggleMobileMenu"
          aria-label="Toggle navigation menu"
          :aria-expanded="isMobileMenuOpen"
          :class="[
            'p-2 rounded-lg transition-colors',
            isDarkMode
              ? 'text-white hover:bg-purple-500/10'
              : 'text-lightText hover:bg-lightAccent/10'
          ]"
        >
        <svg
          v-if="!isMobileMenuOpen"
          class="w-6 h-6 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="w-6 h-6 transition-transform duration-300 rotate-90"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-show="isMobileMenuOpen"
      :class="[
        'md:hidden backdrop-blur-md px-4 pt-2 pb-4 space-y-2 border-t',
        isDarkMode
          ? 'bg-darkPurpleHeader/95 border-purple-500/20'
          : 'bg-lightHeader/95 border-lightCardBorder'
      ]"
    >
      <button
        @click="smoothScrollTo('banner')"
        :class="[
          'block w-full text-left px-3 py-2 rounded-lg transition-all duration-300',
          activeSection === 'banner'
            ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
            : isDarkMode
              ? 'text-white hover:text-purple-300 hover:bg-purple-500/10'
              : 'text-lightText hover:text-lightAccent hover:bg-lightAccent/10'
        ]"
      >
        Home
      </button>
      <button
        @click="smoothScrollTo('skills')"
        :class="[
          'block w-full text-left px-3 py-2 rounded-lg transition-all duration-300',
          activeSection === 'skills'
            ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
            : isDarkMode
              ? 'text-white hover:text-purple-300 hover:bg-purple-500/10'
              : 'text-lightText hover:text-lightAccent hover:bg-lightAccent/10'
        ]"
      >
        Skills
      </button>
      <button
        @click="smoothScrollTo('experience')"
        :class="[
          'block w-full text-left px-3 py-2 rounded-lg transition-all duration-300',
          activeSection === 'experience'
            ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
            : isDarkMode
              ? 'text-white hover:text-purple-300 hover:bg-purple-500/10'
              : 'text-lightText hover:text-lightAccent hover:bg-lightAccent/10'
        ]"
      >
        Experience
      </button>
      <button
        @click="smoothScrollTo('projects')"
        :class="[
          'block w-full text-left px-3 py-2 rounded-lg transition-all duration-300',
          activeSection === 'projects'
            ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
            : isDarkMode
              ? 'text-white hover:text-purple-300 hover:bg-purple-500/10'
              : 'text-lightText hover:text-lightAccent hover:bg-lightAccent/10'
        ]"
      >
        Projects
      </button>
      <button
        @click="smoothScrollTo('contact')"
        :class="[
          'block w-full text-left px-3 py-2 rounded-lg transition-all duration-300',
          activeSection === 'contact'
            ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
            : isDarkMode
              ? 'text-white hover:text-purple-300 hover:bg-purple-500/10'
              : 'text-lightText hover:text-lightAccent hover:bg-lightAccent/10'
        ]"
      >
        Contact
      </button>
    </div>
  </header>
</template>
