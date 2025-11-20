<script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed } from "vue";

  const isMobileMenuOpen = ref(false);
  const activeSection = ref("banner");
  const isScrolled = ref(false);
  const isThemeMenuOpen = ref(false);

  // Use Nuxt's color mode composable
  const colorMode = useColorMode();

  console.log("Current color mode:", colorMode.preference);

  // Computed property for dark mode state
  const isDarkMode = computed(() => colorMode.value === "dark");

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  }

  function toggleThemeMenu() {
    isThemeMenuOpen.value = !isThemeMenuOpen.value;
  }

  function setTheme(theme: "light" | "dark" | "system") {
    colorMode.preference = theme;
    isThemeMenuOpen.value = false;
  }

  function smoothScrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    isMobileMenuOpen.value = false;
  }

  function handleScroll() {
    isScrolled.value = window.scrollY > 50;

    // Update active section based on scroll position
    const sections = [
      "banner",
      "aboutme",
      "skills",
      "experience",
      "projects",
      "contact",
    ];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          activeSection.value = section;
          break;
        }
      }
    }
  }

  // Close theme menu when clicking outside
  function handleClickOutside(event: MouseEvent) {
    const themeMenu = document.getElementById("theme-menu");
    const themeButton = document.getElementById("theme-button");
    if (
      themeMenu &&
      themeButton &&
      !themeMenu.contains(event.target as Node) &&
      !themeButton.contains(event.target as Node)
    ) {
      isThemeMenuOpen.value = false;
    }
  }

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    handleScroll(); // Initial check
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    document.removeEventListener("click", handleClickOutside);
  });
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-500',
      isDarkMode
        ? isScrolled
          ? // 💎 Glass effect when scrolled (dark mode)
            'bg-white/10 border border-purple-500/20 shadow-2xl backdrop-blur-lg'
          : // 🌌 Gradient background when not scrolled (dark mode)
            'bg-gradient-to-br dark:from-slate-900 dark:via-purple-900 dark:to-blue-900 border border-white/10 shadow-md'
        : isScrolled
        ? // 💎 Glass effect when scrolled (light mode)
          'bg-blue-500/10 border border-blue-400/20 shadow-2xl backdrop-blur-lg'
        : // 🌤 Gradient background when not scrolled (light mode)
          'bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 border border-purple-400/10 shadow-md',
    ]"
  >
    <div class="flex items-center justify-between px-4 md:px-16 py-2">
      <!-- Debug info - remove in production -->
      <!-- <div class="text-xs text-white/70">
        Mode: {{ $colorMode.preference }} | Dark: {{ isDarkMode }}
      </div> -->

      <!-- Logo -->
      <div
        :class="isDarkMode ? 'text-white' : 'text-slate-800'"
        class="text-2xl font-bold"
      >
        <button
          @click="smoothScrollTo('banner')"
          class="transition-transform hover:scale-105"
        >
          <img
            src="/images/ky-logo.png"
            alt="KY Logo - Keo Yinyong Web Developer Brand"
            class="h-12 md:h-16"
            loading="eager"
          />
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
              : 'text-slate-700 hover:text-blue-600 hover:bg-blue-500/10',
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
              : 'text-slate-700 hover:text-blue-600 hover:bg-blue-500/10',
          ]"
        >
          About
        </button>
        <button
          @click="smoothScrollTo('skills')"
          :class="[
            'px-2 py-2 rounded-lg transition-all duration-300 font-medium',
            activeSection === 'skills'
              ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
              : isDarkMode
              ? 'text-white hover:text-purple-300 hover:bg-purple-500/10'
              : 'text-slate-700 hover:text-blue-600 hover:bg-blue-500/10',
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
              : 'text-slate-700 hover:text-blue-600 hover:bg-blue-500/10',
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
              : 'text-slate-700 hover:text-blue-600 hover:bg-blue-500/10',
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
              : 'text-slate-700 hover:text-blue-600 hover:bg-blue-500/10',
          ]"
        >
          Contact
        </button>

        <!-- Theme Selector Dropdown -->
        <div class="relative ml-4">
          <button
            id="theme-button"
            @click="toggleThemeMenu"
            :class="[
              'p-2 rounded-lg transition-all duration-300 flex items-center gap-2',
              isDarkMode
                ? 'text-white hover:bg-purple-500/10 hover:text-purple-300'
                : 'text-slate-700 hover:bg-blue-500/10 hover:text-blue-600',
            ]"
            :title="`Current theme: ${colorMode.preference}`"
          >
            <!-- Dark Mode Icon -->
            <svg
              v-if="colorMode.value === 'dark'"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clip-rule="evenodd"
              />
            </svg>
            <!-- Light Mode Icon -->
            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
              />
            </svg>
            <!-- Chevron -->
            <svg
              class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-180': isThemeMenuOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <!-- Dropdown Menu -->
          <Transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-show="isThemeMenuOpen"
              id="theme-menu"
              :class="[
                'absolute right-0 mt-2 w-48 rounded-lg shadow-xl border overflow-hidden z-50',
                isDarkMode
                  ? 'bg-slate-900/95 backdrop-blur-md border-purple-500/20'
                  : 'bg-white/95 backdrop-blur-md border-blue-400/20',
              ]"
            >
              <!-- Light Option -->
              <button
                @click="setTheme('light')"
                :class="[
                  'w-full px-4 py-3 flex items-center gap-3 transition-colors',
                  colorMode.preference === 'light'
                    ? isDarkMode
                      ? 'bg-purple-500/20 text-purple-300'
                      : 'bg-blue-500/20 text-blue-600'
                    : isDarkMode
                    ? 'text-white hover:bg-purple-500/10'
                    : 'text-slate-700 hover:bg-blue-500/10',
                ]"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
                  />
                </svg>
                <span class="font-medium">Light</span>
                <svg
                  v-if="colorMode.preference === 'light'"
                  class="w-4 h-4 ml-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <!-- Dark Option -->
              <button
                @click="setTheme('dark')"
                :class="[
                  'w-full px-4 py-3 flex items-center gap-3 transition-colors',
                  colorMode.preference === 'dark'
                    ? isDarkMode
                      ? 'bg-purple-500/20 text-purple-300'
                      : 'bg-blue-500/20 text-blue-600'
                    : isDarkMode
                    ? 'text-white hover:bg-purple-500/10'
                    : 'text-slate-700 hover:bg-blue-500/10',
                ]"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="font-medium">Dark</span>
                <svg
                  v-if="colorMode.preference === 'dark'"
                  class="w-4 h-4 ml-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <!-- System Option -->
              <button
                @click="setTheme('system')"
                :class="[
                  'w-full px-4 py-3 flex items-center gap-3 transition-colors',
                  colorMode.preference === 'system'
                    ? isDarkMode
                      ? 'bg-purple-500/20 text-purple-300'
                      : 'bg-blue-500/20 text-blue-600'
                    : isDarkMode
                    ? 'text-white hover:bg-purple-500/10'
                    : 'text-slate-700 hover:bg-blue-500/10',
                ]"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M4 6a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM4 18a2 2 0 012-2h12a2 2 0 012 2v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1z"
                  />
                </svg>
                <span class="font-medium">System</span>
                <svg
                  v-if="colorMode.preference === 'system'"
                  class="w-4 h-4 ml-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </Transition>
        </div>
      </nav>

      <!-- Mobile Actions -->
      <!-- Mobile Actions -->
      <div class="md:hidden flex items-center space-x-2">
        <!-- Theme Selector Mobile -->
        <div class="relative">
          <button
            @click="toggleThemeMenu"
            :class="[
              'p-2 rounded-lg transition-all duration-300',
              isDarkMode
                ? 'text-white hover:bg-purple-500/10 hover:text-purple-300'
                : 'text-slate-700 hover:bg-blue-500/10 hover:text-blue-600',
            ]"
          >
            <svg
              v-if="colorMode.value === 'dark'"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clip-rule="evenodd"
              />
            </svg>
            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
              />
            </svg>
          </button>

          <!-- Mobile Theme Menu -->
          <Transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-show="isThemeMenuOpen"
              :class="[
                'absolute right-0 mt-2 w-40 rounded-lg shadow-xl border overflow-hidden z-50',
                isDarkMode
                  ? 'bg-slate-900/95 backdrop-blur-md border-purple-500/20'
                  : 'bg-white/95 backdrop-blur-md border-blue-400/20',
              ]"
            >
              <button
                @click="setTheme('light')"
                :class="[
                  'w-full px-4 py-2 text-left text-sm transition-colors',
                  colorMode.preference === 'light'
                    ? 'bg-purple-500/20 text-purple-300'
                    : isDarkMode
                    ? 'text-white hover:bg-purple-500/10'
                    : 'text-slate-700 hover:bg-blue-500/10',
                ]"
              >
                ☀️ Light
              </button>
              <button
                @click="setTheme('dark')"
                :class="[
                  'w-full px-4 py-2 text-left text-sm transition-colors',
                  colorMode.preference === 'dark'
                    ? 'bg-purple-500/20 text-purple-300'
                    : isDarkMode
                    ? 'text-white hover:bg-purple-500/10'
                    : 'text-slate-700 hover:bg-blue-500/10',
                ]"
              >
                🌙 Dark
              </button>
              <button
                @click="setTheme('system')"
                :class="[
                  'w-full px-4 py-2 text-left text-sm transition-colors',
                  colorMode.preference === 'system'
                    ? 'bg-purple-500/20 text-purple-300'
                    : isDarkMode
                    ? 'text-white hover:bg-purple-500/10'
                    : 'text-slate-700 hover:bg-blue-500/10',
                ]"
              >
                💻 System
              </button>
            </div>
          </Transition>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="toggleMobileMenu"
          aria-label="Toggle navigation menu"
          :aria-expanded="isMobileMenuOpen"
          :class="[
            'p-2 rounded-lg transition-colors',
            isDarkMode
              ? 'text-white hover:bg-purple-500/10'
              : 'text-slate-700 hover:bg-blue-500/10',
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
          ? 'bg-slate-950/95 border-purple-500/20'
          : 'bg-blue-50/95 border-blue-400/20',
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
            : 'text-slate-700 hover:text-blue-600 hover:bg-blue-500/10',
        ]"
      >
        Home
      </button>
      <button
        @click="smoothScrollTo('aboutme')"
        :class="[
          'block w-full text-left px-3 py-2 rounded-lg transition-all duration-300',
          activeSection === 'aboutme'
            ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
            : isDarkMode
            ? 'text-white hover:text-purple-300 hover:bg-purple-500/10'
            : 'text-slate-700 hover:text-blue-600 hover:bg-blue-500/10',
        ]"
      >
        About
      </button>
      <button
        @click="smoothScrollTo('skills')"
        :class="[
          'block w-full text-left px-3 py-2 rounded-lg transition-all duration-300',
          activeSection === 'skills'
            ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
            : isDarkMode
            ? 'text-white hover:text-purple-300 hover:bg-purple-500/10'
            : 'text-slate-700 hover:text-blue-600 hover:bg-blue-500/10',
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
            : 'text-slate-700 hover:text-blue-600 hover:bg-blue-500/10',
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
            : 'text-slate-700 hover:text-blue-600 hover:bg-blue-500/10',
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
            : 'text-slate-700 hover:text-blue-600 hover:bg-blue-500/10',
        ]"
      >
        Contact
      </button>
    </div>
  </header>
</template>
