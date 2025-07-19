<script setup lang="ts">
  const techs = [
    { name: "HTML", class: "html", icon: "fa-html5", color: "#e44d26" },
    { name: "CSS", class: "css", icon: "fa-css3", color: "#264de4" },
    { name: "JavaScript", class: "js", icon: "fa-js", color: "#f0db4f" },
    { name: "Vue", class: "vue", icon: "fa-vuejs", color: "#42b883" },
    {
      name: "Nuxt",
      class: "nuxt",
      image: "/images/nuxt.svg",
      color: "#00c58e",
    },
    { name: "PHP", class: "php", icon: "fa-php", color: "#777bb3" },
    { name: "Laravel", class: "laravel", icon: "fa-laravel", color: "#ff2d20" },
    { name: "MySQL", class: "mysql", text: "MySQL", color: "#00758f" },
    {
      name: "Github",
      class: "github ",
      icon: "fa-github",
      color: "#33333",
    },
    {
      name: "Figma",
      class: "figma ",
      icon: "fa-figma",
      color: "#f24e1e",
    },
  ];
</script>

<template>
  <div class="bg-darkPurpleBody galaxy">
    <!-- Background Animation -->
    <div class="main"></div>

    <!-- Hero Section -->
    <section
      class="relative w-full mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10"
    >
      <!-- Profile Card -->
      <banner :techs="techs" />

      <!-- Professional Description -->
      <div
        class="text-center mb-16 px-4 sm:px-6 flex flex-col lg:flex-row justify-between items-center gap-12"
      >
        <div
          data-aos="fade-right"
          class="flex-1 text-center lg:text-left order-2 lg:order-2 max-w-2xl"
        >
          <h2
            data-aos="fade-up"
            class="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
          >
            I'm a Web Developer
          </h2>
          <p data-aos="fade-up" class="text-gray-300 mb-6 text-base sm:text-lg">
            Currently, I'm working as a Web Developer at
            <a
              href=""
              class="text-blue-400 hover:text-blue-300 transition-colors"
              >Norton University</a
            >.
          </p>
          <p
            data-aos="fade-up"
            class="text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg sm:text-base"
          >
            I'm a self-taught UI/UX designer with over 3 years of experience,
            crafting meaningful and delightful digital products. My focus is on
            creating seamless user experiences that balance both user needs and
            business objectives.
          </p>
        </div>

        <div
          data-aos="fade-left"
          class="flex-1 text-center lg:text-left order-1 lg:order-2 max-w-2xl"
        >
          <!-- Animated Glow Background -->
          <div
            class="absolute w-full h-full rounded-full bg-indigo-900 blur-3xl opacity-60 animate-glow"
          ></div>

          <!-- Profile Image -->
          <img
            src="/images/pf1.jpg"
            alt=""
            class="h-56 sm:w-64 sm:h-64 lg:w-96 lg:h-96 object-cover rounded-2xl ml-8 shadow-lg relative z-10"
          />
        </div>
      </div>

      <!-- Knowledge Section -->
      <skill />

      <!-- Work Experience Section -->
      <experience />

      <!-- Projects Section -->
      <project />
    </section>
  </div>
</template>
