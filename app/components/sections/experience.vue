
<script setup lang="ts"></script>


<template>
  <section class="mb-20 w-full max-w-6xl px-4 sm:px-6">
       <Motion
      id="experience"
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
         Work Experience
      </span>
      <div
        data-aos="fade-right"
        class="h-px flex-1 bg-gradient-to-r from-purple-500 to-transparent max-w-xs"
      ></div>
    </Motion>


    <!-- Main Experience Card -->
    <div class="mb-12">
      <div
        data-aos="fade-up"
        class="relative rounded-3xl overflow-hidden p-[2px] group hover:scale-[1.02] transition-all duration-700"
      >
        <!-- Enhanced Galaxy Background -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 animate-[pulse_8s_ease-in-out_infinite] opacity-70 blur-[30px] z-0"
        ></div>

        <!-- Premium Glass Card -->
        <div
          class="relative z-10 bg-white/8 backdrop-blur-3xl border border-white/30 rounded-3xl p-10 shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-all duration-700"
        >
          <!-- Header with Company Logo & Duration -->
          <div class="flex items-start justify-between mb-8">
            <div class="flex items-center space-x-4">
              <div
                class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center shadow-2xl animate-[float_6s_ease-in-out_infinite]"
              >
                <i class="fas fa-university text-white text-2xl"></i>
              </div>
              <div>
                <h3 class="text-white text-3xl font-bold mb-1">
                  Web Developer
                </h3>
                <p class="text-purple-200 text-lg font-medium">
                  Norton University
                </p>
              </div>
            </div>
            <div class="text-right">
              <div
                class="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full px-4 py-2 border border-purple-300/30"
              >
                <span class="text-purple-200 text-sm font-semibold"
                  >2023 - present</span
                >
              </div>
              <p class="text-purple-300 text-sm mt-1">2 Years</p>
            </div>
          </div>

          <!-- Job Description -->
          <div class="mb-8">
            <p class="text-purple-100 text-lg leading-relaxed mb-4">
              Designed and developed modern, responsive web applications for
              academic and administrative purposes, serving thousands of
              students and faculty members at Norton University.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span class="text-purple-200 text-sm">Student Management System</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-indigo-400 rounded-full"></div>
                <span class="text-purple-200 text-sm">Course Registration Portal</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span class="text-purple-200 text-sm">Academic Records System</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span class="text-purple-200 text-sm">Faculty Dashboard</span>
              </div>
            </div>
          </div>

          <!-- Key Achievements -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div class="bg-white/5 rounded-xl p-6 border border-white/20">
              <div class="flex items-center mb-3">
                <i class="fas fa-code text-purple-400 text-xl mr-3"></i>
                <h4 class="text-white font-semibold">Frontend Development</h4>
              </div>
              <p class="text-purple-200 text-sm">
                Built responsive UIs using HTML, CSS, Tailwind CSS, Vue 3, and
                TypeScript
              </p>
            </div>

            <div class="bg-white/5 rounded-xl p-6 border border-white/20">
              <div class="flex items-center mb-3">
                <i class="fas fa-server text-indigo-400 text-xl mr-3"></i>
                <h4 class="text-white font-semibold">Backend Integration</h4>
              </div>
              <p class="text-purple-200 text-sm">
                Developed APIs and database solutions using Laravel and SQL
                Server
              </p>
            </div>

            <div class="bg-white/5 rounded-xl p-6 border border-white/20">
              <div class="flex items-center mb-3">
                <i class="fas fa-users text-blue-400 text-xl mr-3"></i>
                <h4 class="text-white font-semibold">User Experience</h4>
              </div>
              <p class="text-purple-200 text-sm">
                Improved user experience for 5,000+ students and faculty with
                modern web applications
              </p>
            </div>
          </div>

          <!-- Technologies Used -->
          <div class="mb-8">
            <h4 class="text-white text-lg font-semibold mb-4">
              Technologies Used
            </h4>
            <div class="flex flex-wrap gap-3">
              <span
                class="bg-orange-500/20 text-orange-200 px-3 py-1 rounded-full text-sm border border-orange-400/30"
                >HTML5</span
              >
              <span
                class="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-400/30"
                >CSS3</span
              >
              <span
                class="bg-cyan-500/20 text-cyan-200 px-3 py-1 rounded-full text-sm border border-cyan-400/30"
                >Tailwind CSS</span
              >
              <span
                class="bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-sm border border-green-400/30"
                >Vue 3</span
              >
              <span
                class="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                >TypeScript</span
              >
              <span
                class="bg-red-500/20 text-red-200 px-3 py-1 rounded-full text-sm border border-red-400/30"
                >Laravel</span
              >
              <span
                class="bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-full text-sm border border-indigo-400/30"
                >SQL Server</span
              >
              <span
                class="bg-gray-500/20 text-gray-200 px-3 py-1 rounded-full text-sm border border-gray-400/30"
                >GitHub</span
              >
            </div>
          </div>

          <!-- Performance Metrics -->
          <div class="mb-8">
            <h4 class="text-white text-lg font-semibold mb-4">Key Achievements</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-white/5 rounded-lg p-4 border border-white/10">
                <div class="text-2xl font-bold text-green-400 mb-1">99.9%</div>
                <div class="text-purple-200 text-sm">System Uptime</div>
              </div>
              <div class="bg-white/5 rounded-lg p-4 border border-white/10">
                <div class="text-2xl font-bold text-blue-400 mb-1">40%</div>
                <div class="text-purple-200 text-sm">Performance Boost</div>
              </div>
              <div class="bg-white/5 rounded-lg p-4 border border-white/10">
                <div class="text-2xl font-bold text-purple-400 mb-1">5000+</div>
                <div class="text-purple-200 text-sm">Active Users</div>
              </div>
            </div>
          </div>

          <!-- Action Button -->
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <i class="fas fa-map-marker-alt text-purple-400"></i>
                <span class="text-purple-200 text-sm"
                  >Phnom Penh, Cambodia</span
                >
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-briefcase text-purple-400"></i>
                <span class="text-purple-200 text-sm">Full-time</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-calendar text-purple-400"></i>
                <span class="text-purple-200 text-sm">2+ Years</span>
              </div>
            </div>
            <button
              class="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover-lift"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Experience Cards (Optional) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Freelance/Project Work -->
      <div
        data-aos="fade-right"
        class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-105 transition-transform duration-500"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-black animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[24px] z-0"
        ></div>
        <div
          class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500"
        >
          <div
            class="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg mb-6"
          >
            <i class="fas fa-laptop-code text-white text-xl"></i>
          </div>
          <h3 class="text-white text-xl font-semibold mb-3">
            Freelance Projects
          </h3>
          <p class="text-emerald-200 text-sm leading-relaxed mb-6">
            Developed custom websites and web applications for local businesses
            and startups.
          </p>
          <button
            class="text-emerald-300 hover:text-emerald-100 transition-colors font-semibold text-sm"
          >
            VIEW PORTFOLIO
          </button>
        </div>
      </div>

      <!-- Education/Training -->
      <div
        data-aos="fade-left"
        class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-105 transition-transform duration-500"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-black animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[24px] z-0"
        ></div>
        <div
          class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500"
        >
          <div
            class="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center shadow-lg mb-6"
          >
            <i class="fas fa-graduation-cap text-white text-xl"></i>
          </div>
          <h3 class="text-white text-xl font-semibold mb-3">
            Continuous Learning
          </h3>
          <p class="text-amber-200 text-sm leading-relaxed mb-6">
            Constantly updating skills with latest web technologies and
            development practices.
          </p>
          <button
            class="text-amber-300 hover:text-amber-100 transition-colors font-semibold text-sm"
          >
            VIEW CERTIFICATES
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
