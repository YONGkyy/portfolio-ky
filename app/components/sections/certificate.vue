<script setup lang="ts">
  interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    credentialId?: string;
    credentialUrl?: string;
    image: string;
    pdfUrl?: string; // PDF file URL for download
    icon: string;
    orientation: "horizontal" | "vertical";
    color: {
      from: string;
      to: string;
      badge: string;
      text: string;
    };
  }

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "English Language Proficiency Certificate",
      issuer: "Norton University",
      date: "2023",
      credentialId: "0084/24 NU/CAHL",
      image: "/certificates/e1.jpg",
      pdfUrl: "/certificates/e3.pdf", // PDF file path
      icon: "fas fa-language",
      orientation: "vertical",
      color: {
        from: "from-emerald-900",
        to: "to-teal-900",
        badge: "from-emerald-500 to-teal-600",
        text: "text-emerald-200",
      },
    },
    {
      id: 2,
      title: "Certificate of Internship Completion",
      issuer: "Norton University",
      date: "2025",
      credentialId: "1612/25",
      image: "/certificates/i1.jpg",
      pdfUrl: "/certificates/i3.pdf",
      icon: "fas fa-briefcase",
      orientation: "vertical",
      color: {
        from: "from-purple-900",
        to: "to-pink-900",
        badge: "from-purple-500 to-pink-600",
        text: "text-purple-200",
      },
    },
    {
      id: 3,
      title: "Outstanding Certificate",
      issuer: "Norton University",
      date: "2024",
      credentialId: "0163/24 NU",
      image: "/certificates/t1.jpg",
      pdfUrl: "/certificates/t3.pdf",
      icon: "fas fa-award",
      orientation: "horizontal",
      color: {
        from: "from-blue-900",
        to: "to-indigo-900",
        badge: "from-blue-500 to-indigo-600",
        text: "text-blue-200",
      },
    },
  ];

  // Function to open PDF in new tab for viewing
  const viewCertificate = (pdfUrl: string, title: string) => {
    window.open(pdfUrl, '_blank');
  };

  // Function to download PDF directly
  const downloadCertificate = (pdfUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
</script>

<template>
  <section  id="certificates" class="mb-20 w-full max-w-6xl px-4 sm:px-6">
    <!-- Section Header -->
    <Motion
     
      :initial="{ opacity: 0, scale: 0.8 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
      class="flex items-center gap-4 mb-12 justify-center lg:justify-start"
    >
      <div
        data-aos="fade-left"
        class="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"
      ></div>
      <span
        data-aos="fade-down"
        class="text-amber-400 uppercase tracking-wider text-sm md:text-lg font-semibold"
      >
        Certifications & Achievements
      </span>
      <div
        data-aos="fade-right"
        class="h-px flex-1 bg-gradient-to-r from-amber-500 to-transparent max-w-xs"
      ></div>
    </Motion>

    <!-- Certificates Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="cert in certificates"
        :key="cert.id"
        data-aos="fade-up"
        :data-aos-delay="cert.id * 100"
        class="relative rounded-2xl overflow-hidden p-[1px] group hover:scale-105 transition-transform duration-500"
      >
        <!-- Animated Background Glow -->
        <div
          :class="`absolute inset-0 bg-gradient-to-br ${cert.color.from} via-black ${cert.color.to} animate-[pulse_6s_ease-in-out_infinite] opacity-60 blur-[24px] z-0`"
        ></div>

        <!-- Card Content -->
        <div
          class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/25 rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500 hover:bg-white/10"
        >
          <!-- Header with Icon -->
          <div class="flex items-start justify-between mb-6">
            <div
              :class="`w-14 h-14 rounded-full bg-gradient-to-tr ${cert.color.badge} flex items-center justify-center shadow-lg animate-[float_6s_ease-in-out_infinite]`"
            >
              <i :class="`${cert.icon} text-white text-xl`"></i>
            </div>
            <div
              :class="`bg-gradient-to-r ${
                cert.color.badge
              }/20 rounded-full px-3 py-1 border ${
                cert.color.badge.replace('from-', 'border-').split(' ')[0]
              }/30`"
            >
              <span :class="`${cert.color.text} text-xs font-semibold`">
                {{ cert.date }}
              </span>
            </div>
          </div>

          <!-- Certificate Title & Issuer -->
          <div class="mb-6">
            <h3 class="text-white text-xl font-bold mb-2 leading-tight">
              {{ cert.title }}
            </h3>
            <p :class="`${cert.color.text} text-sm font-medium mb-1`">
              Issued by {{ cert.issuer }}
            </p>
            <p v-if="cert.credentialId" class="text-gray-400 text-xs">
              ID: {{ cert.credentialId }}
            </p>
          </div>

          <!-- Certificate Preview Image with A4 Orientation Support -->
          <div
            :class="[
              'mb-6 rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 group-hover:border-white/30 transition-all duration-300 relative cursor-pointer',
              cert.orientation === 'horizontal' ? 'aspect-[1.414/1]' : 'aspect-[1/1.414]'
            ]"
            @click="cert.pdfUrl ? viewCertificate(cert.pdfUrl, cert.title) : null"
          >
            <!-- Actual Certificate Image -->
            <img 
              :src="cert.image" 
              :alt="cert.title" 
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="text-center">
                <i class="fas fa-search-plus text-white text-3xl mb-2"></i>
                <p class="text-white text-sm font-semibold">Click to View</p>
              </div>
            </div>
            
            <!-- Orientation Badge Overlay -->
            <div class="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white/90 font-medium">
              <i :class="`fas ${cert.orientation === 'horizontal' ? 'fa-arrows-alt-h' : 'fa-arrows-alt-v'} mr-1`"></i>
              {{ cert.orientation === 'horizontal' ? 'Landscape' : 'Portrait' }}
            </div>

            <!-- PDF Badge -->
            <div v-if="cert.pdfUrl" class="absolute top-2 left-2 bg-red-600/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-bold">
              <i class="fas fa-file-pdf mr-1"></i>
              PDF
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-3">
            <!-- View PDF Button -->
            <button
              v-if="cert.pdfUrl"
              @click="viewCertificate(cert.pdfUrl, cert.title)"
              :class="`flex-1 bg-gradient-to-r ${cert.color.badge} hover:opacity-90 text-white font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm`"
            >
              <i class="fas fa-eye mr-2"></i>
              View PDF
            </button>

            <!-- External Link Button -->
            <button
              v-else-if="cert.credentialUrl"
              @click="window.open(cert.credentialUrl, '_blank')"
              :class="`flex-1 bg-gradient-to-r ${cert.color.badge} hover:opacity-90 text-white font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm`"
            >
              <i class="fas fa-external-link-alt mr-2"></i>
              View Certificate
            </button>

            <!-- Download Button -->
            <button
              v-if="cert.pdfUrl"
              @click="downloadCertificate(cert.pdfUrl, cert.title)"
              :class="`px-4 py-2.5 rounded-lg border ${
                cert.color.badge.replace('from-', 'border-').split(' ')[0]
              }/40 ${
                cert.color.text
              } hover:bg-white/5 transition-all duration-300 text-sm font-semibold`"
              title="Download PDF"
            >
              <i class="fas fa-download"></i>
            </button>

            <!-- Share Button -->
            <button
              :class="`px-4 py-2.5 rounded-lg border ${
                cert.color.badge.replace('from-', 'border-').split(' ')[0]
              }/40 ${
                cert.color.text
              } hover:bg-white/5 transition-all duration-300 text-sm`"
              title="Share"
            >
              <i class="fas fa-share-alt"></i>
            </button>
          </div>

          <!-- Verification Badge -->
          <div class="mt-4 flex items-center justify-center gap-2 text-xs">
            <i class="fas fa-check-circle text-green-400"></i>
            <span class="text-gray-400">Verified Certificate</span>
          </div>
        </div>
      </div>
    </div>

    <!-- View All Certificates Button -->
    <div class="mt-12 text-center" data-aos="fade-up">
      <button
        class="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-3"
      >
        <i class="fas fa-award text-xl"></i>
        <span>View All Certificates</span>
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>

    <!-- Statistics Bar -->
    <div
      class="mt-12 grid grid-cols-3 gap-6 relative rounded-2xl overflow-hidden p-[1px]"
      data-aos="fade-up"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-amber-900 via-orange-900 to-amber-900 opacity-40 blur-xl"
      ></div>
      <div
        class="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/20 rounded-2xl col-span-3 p-8"
      >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div class="text-3xl font-bold text-amber-400 mb-1">
              {{ certificates.length }}+
            </div>
            <div class="text-gray-300 text-sm">Certificates Earned</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-orange-400 mb-1">100%</div>
            <div class="text-gray-300 text-sm">Completion Rate</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-yellow-400 mb-1">50+</div>
            <div class="text-gray-300 text-sm">Hours of Training</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
</style>