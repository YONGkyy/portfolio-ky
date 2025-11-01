<script setup lang="ts">
  import { Motion } from "motion-v";
  import { onMounted, onUnmounted } from "vue";
  import {
    useTypingAnimation,
    useRoleCycling,
  } from "~/composables/useTypingAnimation";

  interface SocialLink {
    name: string;
    icon: string;
    url: string;
  }

  interface TechItem {
    name: string;
    icon: string;
    color: string;
    position: Record<string, string>;
  }

  const props = defineProps<{
    name?: string;
    roles?: string[];
    description?: string;
    socialLinks?: SocialLink[];
  }>();

  const name = props.name || "Keo Yinyong";
  const roles = props.roles || [
    "Web Developer",
    "UI/UX Designer",
    "Creative Developer",
  ];

  // Use composables for typing animations
  const greeting = useTypingAnimation("Hey there, I'm", 80);
  const nameTyping = useTypingAnimation(name, 100);
  const roleCycling = useRoleCycling(roles, {
    typeSpeed: 100,
    deleteSpeed: 50,
    pauseTime: 2000,
  });

  // Sequential animation on mount
  onMounted(async () => {
    await greeting.type();
    await new Promise((resolve) => setTimeout(resolve, 300));
    await nameTyping.type();
    await new Promise((resolve) => setTimeout(resolve, 500));
    roleCycling.start();
  });

  onUnmounted(() => {
    roleCycling.stop();
  });

  const description =
    props.description ||
    "Passionate about creating beautiful, functional digital experiences that solve real problems. I blend design thinking with technical expertise to craft solutions that users love.";

  const socialLinks = props.socialLinks || [
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/YONGKyy",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/keo-yinyong-396277330/",
    },
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      url: "https://www.facebook.com/yong.kawaii",
    },
    {
      name: "Telegram",
      icon: "fab fa-telegram-plane",
      url: "https://t.me/yong_24",
    },
  ];

  const visibleTechStack: TechItem[] = [
    {
      name: "JavaScript",
      icon: "fab fa-js-square",
      color: "#F7DF1E",
      position: { top: "-6%", left: "45%" },
    },
    {
      name: "Vue.js",
      icon: "fab fa-vuejs",
      color: "#4FC08D",
      position: { top: "-10%", right: "-10%" },
    },
    {
      name: "Node.js",
      icon: "fab fa-node-js",
      color: "#339933",
      position: { bottom: "10%", left: "-15%" },
    },
    {
      name: "CSS3",
      icon: "fab fa-css3-alt",
      color: "#1572B6",
      position: { top: "10%", right: "-20%" },
    },
    {
      name: "HTML5",
      icon: "fab fa-html5",
      color: "#E34F26",
      position: { bottom: "-10%", left: "-15%" },
    },
    {
      name: "GitHub",
      icon: "fab fa-github",
      color: "#181717",
      position: { bottom: "-10%", left: "30%" },
    },
    {
      name: "TypeScript",
      icon: "fab fa-js-square",
      color: "#007ACC",
      position: { top: "15%", left: "-30%" },
    },
    {
      name: "Tailwind CSS",
      icon: "fab fa-css3-alt",
      color: "#06B6D4",
      position: { top: "57%", right: "-20%" },
    },
    {
      name: "Nuxt.js",
      icon: "fab fa-vuejs",
      color: "#00DC82",
      position: { bottom: "-5%", right: "-8%" },
    },
  ];

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
</script>

<template>
  <section
    id="banner"
    class="relative pt-8 md:pt-0 min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Main Content Container -->
    <div class="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Text Content - Left Side -->
        <Motion
          :initial="{ opacity: 0, x: -60 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }"
          class="order-2 lg:order-1 text-center lg:text-left space-y-8"
        >
          <!-- Greeting Badge -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.2 }"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-purple-500/20 mx-auto lg:mx-0"
          >
            <span class="relative flex h-3 w-3">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"
              ></span>
            </span>
            <span class="text-purple-300 text-sm font-medium"
              >Available for work</span
            >
          </Motion>

          <!-- Main Headline -->
          <div class="space-y-4">
            <!-- Greeting -->
            <Motion
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }"
              :transition="{ delay: 0.2 }"
            >
              <h2
                class="text-xl sm:text-2xl text-purple-300 font-light tracking-wide min-h-[2rem]"
              >
                {{ greeting.displayText }}
                <span v-if="!greeting.isComplete" class="animate-blink">|</span>
              </h2>
            </Motion>

            <!-- Name -->
            <Motion
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }"
              :transition="{ delay: 0.1 }"
            >
              <h1
                class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight min-h-[4rem] sm:min-h-[5rem] lg:min-h-[6rem]"
              >
                <span
                  class="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
                >
                  {{ nameTyping.displayText }}
                  <span v-if="!nameTyping.isComplete" class="animate-blink"
                    >|</span
                  >
                </span>
              </h1>
            </Motion>

            <!-- Role (only shows after name completes) -->
            <Motion
              v-if="nameTyping.isComplete"
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5 }"
            >
              <div
                class="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300"
              >
                <span>I'm a</span>
                <span class="relative inline-flex items-center">
                  <span
                    class="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent"
                  >
                    <span
                      class="inline-block min-w-[200px] sm:min-w-[280px] text-left"
                    >
                      {{ roleCycling.currentRole
                      }}<span class="animate-blink ml-1">|</span>
                    </span>
                  </span>
                </span>
              </div>
            </Motion>
          </div>

          <!-- Description -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.6 }"
            class="max-w-2xl mx-auto lg:mx-0"
          >
            <p class="text-lg sm:text-xl text-gray-400 leading-relaxed">
              {{ description }}
            </p>
          </Motion>

          <!-- CTA Buttons -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.7 }"
            class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a href="#explore">
              <Motion
                :whileHover="{ scale: 1.05 }"
                :whileTap="{ scale: 0.95 }"
                class="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-shadow cursor-pointer"
              >
                <span class="relative z-10 flex items-center gap-2">
                  Explore
                  <i
                    class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"
                  ></i>
                </span>
              </Motion>
            </a>

            <a href="/files/keo-yinyong-cv.pdf" download>
              <Motion
                :whileHover="{ scale: 1.05 }"
                :whileTap="{ scale: 0.95 }"
                class="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer inline-block"
              >
                Download CV
              </Motion>
            </a>
          </Motion>

          <!-- Social Links -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.8 }"
            class="flex items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <span class="text-gray-500 text-sm font-medium">Connect:</span>
            <div class="flex gap-3">
              <Motion
                v-for="(social, index) in socialLinks"
                :key="social.name"
                :initial="{ opacity: 0, scale: 0 }"
                :animate="{ opacity: 1, scale: 1 }"
                :transition="{ delay: 0.9 + index * 0.1 }"
                :whileHover="{ scale: 1.1, y: -2 }"
                :whileTap="{ scale: 0.95 }"
                class="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-pointer"
                @click="openLink(social.url)"
              >
                <i :class="social.icon" class="text-lg"></i>
              </Motion>
            </div>
          </Motion>

          <!-- Stats -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 1 }"
            class="grid grid-cols-3 gap-6 pt-8 max-w-lg mx-auto lg:mx-0"
          >
            <div class="text-center lg:text-left">
              <div
                class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                2+
              </div>
              <div class="text-sm text-gray-500 mt-1">Years Exp</div>
            </div>
          </Motion>
        </Motion>

        <!-- Profile Image - Right Side -->
        <Motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }"
          class="order-1 lg:order-2 flex justify-center items-center"
        >
          <div class="relative w-full max-w-md lg:max-w-lg">
            <!-- Glowing Background -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full blur-3xl opacity-40 animate-pulse"
            ></div>

            <!-- Rotating Ring -->
            <Motion
              :animate="{ rotate: 360 }"
              :transition="{ duration: 20, repeat: Infinity, ease: 'linear' }"
              class="absolute inset-0"
            >
              <div
                class="absolute inset-0 rounded-full border-4 border-dashed border-purple-500/30"
              ></div>
            </Motion>

            <Motion
              :animate="{ rotate: -360 }"
              :transition="{ duration: 25, repeat: Infinity, ease: 'linear' }"
              class="absolute inset-8"
            >
              <div
                class="absolute inset-0 rounded-full border-2 border-dotted border-pink-500/30"
              ></div>
            </Motion>

            <!-- Main Profile Card -->
            <div
              class="relative aspect-square rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 p-8 shadow-2xl"
            >
              <!-- Inner Glow -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"
              ></div>

              <!-- Profile Image -->
              <Motion
                :whileHover="{ scale: 1.05 }"
                :transition="{ type: 'spring', stiffness: 300 }"
                class="relative w-full h-full rounded-2xl overflow-hidden shadow-xl"
              >
                <div
                  class="w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 flex items-center justify-center"
                >
                  <!-- <div class="text-9xl text-white/90 font-bold">KY</div> -->
                  <img
                    src="/images/prof.png"
                    alt="Profile Image"
                    class="w-full object-cover"
                  />
                </div>
                <!-- Hover Overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity"
                ></div>
              </Motion>

              <!-- Floating Tech Badges -->
              <Motion
                v-for="(tech, index) in visibleTechStack"
                :key="tech.name"
                :initial="{ opacity: 0, scale: 0 }"
                :animate="{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                }"
                :transition="{
                  opacity: { delay: 1.2 + index * 0.15 },
                  scale: { delay: 1.2 + index * 0.15 },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  },
                }"
                :style="tech.position"
                class="absolute hidden lg:block box-content px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg"
              >
                <div class="flex items-center gap-2 w-full h-full">
                  <i
                    :class="tech.icon"
                    :style="{ color: tech.color }"
                    class="text-lg"
                  ></i>
                  <span class="text-xs font-medium text-white">{{
                    tech.name
                  }}</span>
                </div>
              </Motion>
            </div>

            <!-- Corner Decorations -->
            <div
              class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50"
            ></div>
            <div
              class="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-50"
            ></div>
          </div>
        </Motion>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <Motion
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1, y: [0, 10, 0] }"
      :transition="{
        opacity: { delay: 2 },
        y: { duration: 2, repeat: Infinity },
      }"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
    >
      <span class="text-xs uppercase tracking-wider">Scroll</span>
      <i class="fas fa-chevron-down text-sm"></i>
    </Motion>
  </section>
</template>

<style scoped>
  @keyframes pulse {
    0%,
    100% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.8;
    }
  }

  .delay-700 {
    animation-delay: 700ms;
  }

  .delay-1000 {
    animation-delay: 1000ms;
  }

  /* Ensure Font Awesome loads */
  /* @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"); */
</style>
