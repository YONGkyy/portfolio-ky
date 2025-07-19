<script setup>
  const skills = [
    {
      title: "HTML5",
      subtitle: "with CSS3",
      icons: [
        { class: "fab fa-html5", bg: "from-purple-500 to-indigo-600" },
        { class: "fab fa-css3", bg: "from-orange-500 to-red-600" },
      ],
      gradient: "from-purple-900 via-indigo-900 to-black",
      aos: "fade-right",
    },
    {
      title: "JavaScript",
      subtitle: "",
      icons: [
        { class: "fab fa-js", bg: "from-blue-500 to-purple-600", circle: true },
      ],
      gradient: "from-blue-900 via-purple-900 to-black",
      aos: "fade-left",
    },
    {
      title: "Vue3",
      subtitle: "with Tailwind CSS",
      icons: [
        { class: "fab fa-vuejs", bg: "from-green-500 to-emerald-600" },
        { svg: true, bg: "from-blue-500 to-cyan-600" },
      ],
      gradient: "from-pink-900 via-violet-900 to-black",
      aos: "fade-right",
    },
    {
      title: "Nuxt.js",
      subtitle: "with Tailwind CSS",
      icons: [
        { img: "/images/nuxt.svg", bg: "from-green-800 to-emerald-500" },
        { svg: true, bg: "from-blue-500 to-cyan-600" },
      ],
      gradient: "from-green-900 via-teal-900 to-blue-900",
      aos: "fade-up",
    },
    {
      title: "PHP",
      subtitle: "with Laravel",
      icons: [
        { class: "fab fa-php", bg: "from-indigo-500 to-blue-600" },
        { class: "fab fa-laravel", bg: "from-red-500 to-orange-600" },
      ],
      gradient: "from-indigo-900 via-blue-900 to-black",
      aos: "fade-left",
    },
    {
      title: "MySQL",
      subtitle: "",
      icons: [
        {
          class: "fas fa-database",
          bg: "from-teal-500 to-cyan-600",
          circle: true,
        },
      ],
      gradient: "from-teal-900 via-cyan-900 to-black",
      aos: "fade-up",
    },
    {
      title: "GitHub",
      subtitle: "Version Control",
      icons: [
        { class: "fab fa-github", bg: "from-gray-500 to-slate-600" },
        { class: "fab fa-git-alt", bg: "from-red-500 to-orange-600" },
      ],
      gradient: "from-gray-900 via-slate-900 to-black",
      aos: "fade-left",
    },
  ];
</script>

<template>
  <section class="mb-20 w-full max-w-6xl px-4 sm:px-6">
    <h3
      id="skills"
      data-aos="fade-down"
      class="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-12 flex relative z-10"
    >
      Knowledge and Skills
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        :data-aos="skill.aos"
        class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-105 transition-transform duration-500"
      >
        <div
          class="absolute inset-0 animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[24px] z-0"
          :class="`bg-gradient-to-br ${skill.gradient}`"
        ></div>
        <div
          class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500"
        >
          <!-- Icons -->
          <div class="flex items-center justify-center mb-6 space-x-2">
            <template v-for="(icon, i) in skill.icons" :key="i">
              <div
                :class="[
                  icon.circle
                    ? 'w-14 h-14 rounded-full'
                    : 'w-12 h-12 rounded-xl',
                  `bg-gradient-to-tr ${icon.bg}`,
                  'flex items-center justify-center shadow-lg',
                ]"
              >
                <i
                  v-if="icon.class"
                  :class="[icon.class, 'text-white text-2xl']"
                ></i>
                <img v-else-if="icon.img" :src="icon.img" class="w-6 h-6" />
                <svg
                  v-else-if="icon.svg"
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
                  />
                </svg>
              </div>
              <div
                v-if="i < skill.icons.length - 1"
                class="text-white/60 text-lg font-bold"
              >
                +
              </div>
            </template>
          </div>

          <!-- Title and subtitle -->
          <h3 class="text-white text-2xl font-semibold mb-2">
            {{ skill.title }}
          </h3>
          <p v-if="skill.subtitle" class="text-white/70 text-sm font-medium">
            {{ skill.subtitle }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
