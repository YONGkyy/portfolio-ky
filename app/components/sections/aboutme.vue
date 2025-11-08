<template>
  <section
    id="aboutme"
    class="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
  >
    <div class="relative max-w-7xl mx-auto">
      <!-- Section Label -->
      <Motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 0.8, ease: 'easeOut' }"
        class="flex items-center gap-4 mb-12 justify-center lg:justify-start"
      >
        <div
          data-aos="fade-left"
          class="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"
        ></div>
        <span
          data-aos="fade-down"
          class="text-purple-400 uppercase tracking-wider text-sm md:text-lg font-semibold"
        >
          About Me
        </span>
        <div
          data-aos="fade-right"
          class="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent max-w-xs"
        ></div>
      </Motion>
      <!-- <div
     
      >
        <div
          class="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"
        ></div>
        <span
          class="text-purple-400 uppercase tracking-wider text-sm font-semibold"
        >
          About Me
        </span>
        <div
          class="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent max-w-xs"
        ></div>
      </div> -->

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Image Section - FIRST COLUMN -->
        <div class="relative order-2 lg:order-1">
          <!-- Decorative Background Elements -->
          <div class="absolute inset-0 -z-10">
            <!-- Gradient Glow -->
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-indigo-500/30 rounded-3xl blur-3xl animate-pulse"
            ></div>

            <!-- Grid Pattern -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl"
            ></div>
          </div>

          <!-- Image Container -->
          <div data-aos="fade-right" class="relative group">
            <!-- Decorative Frame -->
            <div
              class="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"
            ></div>

            <!-- Main Image Card -->
            <div
              class="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <!-- Image -->
              <NuxtImg
                :src="profileImage"
                alt="Keo Yinyong, Web Developer and UI/UX Designer at Norton University"
                class="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                width="800"
                height="1000"
                format="webp"
                loading="lazy"
                placeholder
              />

              <!-- Overlay Gradient -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
            </div>

            <!-- Floating Badge -->
            <div
              class="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-xl"
            >
              <div class="flex items-center gap-3">
                <div class="relative">
                  <span
                    class="absolute inset-0 animate-ping bg-green-500 rounded-full opacity-75"
                  ></span>
                  <span
                    class="relative block w-3 h-3 bg-green-500 rounded-full"
                  ></span>
                </div>
                <span class="text-white text-sm font-medium"
                  >Available for Projects</span
                >
              </div>
            </div>

            <!-- Corner Decorations -->
            <div
              class="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"
            ></div>
            <div
              class="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"
            ></div>
          </div>

          <!-- Stats Overlay -->
          <div
            data-aos="fade-up"
            class="absolute -left-8 top-1/4 hidden xl:block"
          >
            <div
              class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl animate-float"
            >
              <div class="text-center">
                <div
                  class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  {{ stats.experience }}+
                </div>
                <div class="text-xs text-gray-400 mt-1">Years Exp</div>
              </div>
            </div>
          </div>

          <div class="absolute -right-8 bottom-1/3 hidden xl:block">
            <div
              class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl animate-float-delayed"
            >
              <div class="text-center">
                <div
                  class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  {{ stats.projects }}+
                </div>
                <div class="text-xs text-gray-400 mt-1">Projects</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Text Content - SECOND COLUMN -->
        <div class="space-y-8 text-center lg:text-left order-1 lg:order-2">
          <!-- Main Title -->
          <div class="space-y-4">
            <h2
              data-aos="fade-down"
              class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Crafting Digital
              <span
                class="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent"
              >
                Experiences
              </span>
            </h2>

            <!-- Subtitle with Company -->
            <div
              data-aos="fade-up"
              class="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xl text-gray-300"
            >
              <span>Web Developer at</span>
              <NuxtLink
                to="https://www.norton-u.com/"
                target="_blank"
                external
                class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold group"
              >
                Norton University
                <svg
                  class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Description -->
          <div
            class="space-y-6 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            <p data-aos="fade-up">
              I'm a
              <span class="text-white font-semibold"
                >self-taught UI/UX designer</span
              >
              and
              <span class="text-white font-semibold">
                full-stack developer</span
              >
              with over
              <span class="text-purple-400 font-semibold">
                3+ years of experience</span
              >
              crafting meaningful and delightful digital products.
            </p>

            <p data-aos="fade-up">
              My passion lies in creating
              <span class="text-white font-semibold"
                >seamless user experiences</span
              >
              that perfectly balance user needs with business objectives. I
              believe great design is invisible—it just works.
            </p>

            <p
              data-aos="fade-left"
              class="text-gray-400 text-base italic border-l-2 border-purple-500 pl-4"
            >
              "Design is not just what it looks like and feels like. Design is
              how it works." — This philosophy drives every project I undertake.
            </p>
          </div>

          <!-- Skills Highlight -->
          <div
            class="flex flex-wrap gap-3 justify-center lg:justify-start pt-4"
          >
            <span
              data-aos="fade-up"
              v-for="(skill, index) in skills"
              :key="skill"
              :style="{ animationDelay: `${index * 100}ms` }"
              class="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-default"
            >
              {{ skill }}
            </span>
          </div>

          <!-- CTA Buttons -->
          <!-- <div
            class="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
          >
            <button
              @click="handleViewPortfolio"
              class="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all hover:scale-105"
            >
              <span class="flex items-center gap-2">
                View Portfolio
                <svg
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>

            <button
              @click="handleDownloadCV"
              class="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold text-white hover:bg-white/10 hover:border-purple-500/50 transition-all hover:scale-105"
            >
              Download CV
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  interface Principle {
    title: string;
    description: string;
  }

  interface Stats {
    experience: number;
    projects: number;
    clients?: number;
  }

  interface Props {
    profileImage?: string;
    skills?: string[];
    stats?: Stats;
    principles?: Principle[];
  }

  // Props with defaults
  const props = withDefaults(defineProps<Props>(), {
    profileImage: "/images/me-banner.png",
    skills: () => [
      "UI/UX Design",
      "Frontend Dev",
      "Vue.js",
      "Nuxt.js",
      "Laravel",
    ],
    stats: () => ({
      experience: 3,
      projects: 50,
      clients: 30,
    }),
    principles: () => [
      {
        title: "Design First",
        description: "User-centered approach to every project",
      },
      {
        title: "Clean Code",
        description: "Maintainable and scalable solutions",
      },
      {
        title: "Fast Delivery",
        description: "Efficient workflow and timely results",
      },
    ],
  });

  // Reactive state
  const imageRef = ref<HTMLElement | null>(null);
  const isVisible = ref(false);

  // Intersection Observer for scroll animation
  onMounted(() => {
    if (!imageRef.value) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(imageRef.value);

    // Cleanup
    onBeforeUnmount(() => {
      observer.disconnect();
    });
  });
</script>

<style scoped>
  /* @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  } */

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-float-delayed {
    animation: float 3s ease-in-out infinite;
    animation-delay: 1s;
  }

  /* Smooth transitions */
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .duration-800 {
    transition-duration: 800ms;
  }

  /* Focus states for accessibility */
  button:focus-visible,
  a:focus-visible {
    outline: 2px solid #a855f7;
    outline-offset: 2px;
  }
</style>
