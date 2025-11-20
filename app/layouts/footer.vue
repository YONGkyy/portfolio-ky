<script setup lang="ts">
import { computed } from 'vue';

// 1. Import Color Mode to detect theme changes
const colorMode = useColorMode();
const isDarkMode = computed(() => colorMode.value === "dark");

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

<template>
  <footer 
    :class="[
      'relative transition-colors duration-500 border-t',
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 border-white/10 text-slate-300' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-white border-blue-100 text-slate-600'
    ]"
  >
    <div v-if="isDarkMode" class="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <div class="flex flex-col md:flex-row md:gap-12 lg:gap-16">
        
        <div class="space-y-6 md:w-1/3">
          <div class="flex items-start space-x-4">
            <div class="relative group">
              <div 
                :class="[
                  'absolute -inset-0.5 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000',
                  isDarkMode ? 'bg-gradient-to-r from-pink-600 to-purple-600' : 'bg-gradient-to-r from-blue-400 to-purple-400'
                ]"
              ></div>
              <img
                src="/images/me-banner.png"
                alt="Keo Yinyong"
                class="relative w-20 h-20 rounded-full border-2 object-cover"
                :class="isDarkMode ? 'border-slate-800' : 'border-white'"
                loading="lazy"
              />
            </div>

            <div class="flex flex-col pt-1">
              <h3 
                class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r"
                :class="isDarkMode ? 'from-white to-purple-200' : 'from-slate-800 to-blue-600'"
              >
                Keo Yinyong
              </h3>
              <p class="text-sm mt-1" :class="isDarkMode ? 'text-slate-400' : 'text-slate-500'">
                Web Developer & Designer
              </p>
            </div>
          </div>

          <div class="flex space-x-3">
            <a
              href="https://www.facebook.com/yong.kawaii"
              target="_blank"
              :class="[
                'w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:-translate-y-1 border',
                isDarkMode 
                  ? 'bg-white/5 border-white/10 hover:bg-blue-600/20 hover:border-blue-500/50 text-blue-400' 
                  : 'bg-blue-500/5 border-blue-200 hover:bg-blue-500/20 hover:border-blue-400 text-blue-600'
              ]"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              href="https://t.me/yong_24"
              target="_blank"
              :class="[
                'w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:-translate-y-1 border',
                isDarkMode 
                  ? 'bg-white/5 border-white/10 hover:bg-sky-500/20 hover:border-sky-500/50 text-sky-400' 
                  : 'bg-sky-500/5 border-sky-200 hover:bg-sky-500/20 hover:border-sky-400 text-sky-600'
              ]"
            >
              <i class="fab fa-telegram-plane"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/keo-yinyong-396277330/"
              target="_blank"
              :class="[
                'w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:-translate-y-1 border',
                isDarkMode 
                  ? 'bg-white/5 border-white/10 hover:bg-purple-500/20 hover:border-purple-500/50 text-purple-400' 
                  : 'bg-purple-500/5 border-purple-200 hover:bg-purple-500/20 hover:border-purple-400 text-purple-600'
              ]"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a
              href="https://github.com/YONGKyy"
              target="_blank"
              :class="[
                'w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 hover:-translate-y-1 border',
                isDarkMode 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/50 text-slate-300' 
                  : 'bg-slate-500/5 border-slate-200 hover:bg-slate-500/20 hover:border-slate-400 text-slate-700'
              ]"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>

          <div 
            class="inline-flex items-center px-4 py-2 text-sm rounded-lg border backdrop-blur-sm"
            :class="isDarkMode ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-white/60 border-blue-200 text-slate-600'"
          >
            <i class="fas fa-code mr-2 text-purple-500"></i>
            Crafting digital experiences.
          </div>
        </div>

        <div class="flex flex-wrap gap-10 mt-8 md:mt-0 md:flex-1 md:justify-end">
          
          <div class="min-w-[140px]">
            <h4 class="text-lg font-semibold mb-4" :class="isDarkMode ? 'text-white' : 'text-slate-800'">Explore</h4>
            <ul class="space-y-3">
              <li v-for="item in ['banner', 'skills', 'experience', 'projects', 'contact']" :key="item">
                <button 
                  @click="scrollToSection(item)" 
                  class="text-sm capitalize transition-colors duration-300 flex items-center group"
                  :class="isDarkMode ? 'hover:text-purple-300' : 'hover:text-blue-600'"
                >
                  <span class="w-0 h-[1px] mr-0 bg-current transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                  {{ item }}
                </button>
              </li>
            </ul>
          </div>

          <div class="min-w-[140px]">
            <h4 class="text-lg font-semibold mb-4" :class="isDarkMode ? 'text-white' : 'text-slate-800'">Expertise</h4>
            <ul class="space-y-3 text-sm">
              <li class="flex items-center">
                <span class="w-1.5 h-1.5 rounded-full mr-2" :class="isDarkMode ? 'bg-purple-500' : 'bg-blue-500'"></span>
                Vue.js / Nuxt
              </li>
              <li class="flex items-center">
                <span class="w-1.5 h-1.5 rounded-full mr-2" :class="isDarkMode ? 'bg-purple-500' : 'bg-blue-500'"></span>
                UI/UX Design
              </li>
              <li class="flex items-center">
                <span class="w-1.5 h-1.5 rounded-full mr-2" :class="isDarkMode ? 'bg-purple-500' : 'bg-blue-500'"></span>
                Responsive Layouts
              </li>
            </ul>
          </div>

          <div class="min-w-[160px]">
            <h4 class="text-lg font-semibold mb-4" :class="isDarkMode ? 'text-white' : 'text-slate-800'">Contact</h4>
            <div class="space-y-4 text-sm">
              <div class="flex items-start">
                <i class="fas fa-envelope mt-1 mr-3" :class="isDarkMode ? 'text-purple-400' : 'text-blue-500'"></i>
                <span>yongkeo9@gmail.com</span>
              </div>
              <div class="flex items-start">
                <i class="fas fa-map-marker-alt mt-1 mr-3" :class="isDarkMode ? 'text-purple-400' : 'text-blue-500'"></i>
                <span>Phnom Penh,<br>Cambodia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div 
      class="backdrop-blur-md border-t transition-colors duration-300"
      :class="isDarkMode ? 'bg-black/20 border-white/5' : 'bg-blue-900/5 border-blue-100'"
    >
      <div class="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm" :class="isDarkMode ? 'text-slate-500' : 'text-slate-500'">
          &copy; {{ new Date().getFullYear() }} Keo Yinyong. All rights reserved.
        </p>
        <div class="flex space-x-6 text-sm">
          <NuxtLink to="/" class="transition-colors" :class="isDarkMode ? 'text-slate-400 hover:text-purple-300' : 'text-slate-500 hover:text-blue-600'">Privacy Policy</NuxtLink>
          <NuxtLink to="/" class="transition-colors" :class="isDarkMode ? 'text-slate-400 hover:text-purple-300' : 'text-slate-500 hover:text-blue-600'">Terms of Service</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>