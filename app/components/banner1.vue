<template>
  <section class="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-8 lg:py-0 relative overflow-hidden ">
    
    <!-- Animated Background Elements -->
    <Motion
      v-for="(bg, index) in backgroundElements"
      :key="`bg-${index}`"
      :initial="{ opacity: 0, scale: 0.5 }"
      :animate="{ 
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.2, 1],
        x: bg.animate.x,
        y: bg.animate.y
      }"
      :transition="{ 
        duration: bg.duration, 
        repeat: Infinity, 
        repeatType: 'reverse',
        delay: bg.delay
      }"

      class="absolute pointer-events-none blur-3xl rounded-full"
    />

    <!-- Profile Image Section -->
    <div class="relative order-1 lg:order-1 z-10">
      <Motion
        :initial="{ scale: 0, rotate: -180 }"
        :animate="{ scale: 1, rotate: 0 }"
        :transition="{ 
          type: 'spring', 
          stiffness: 100, 
          damping: 15,
          delay: 0.2
        }"
        class="relative flex items-center justify-center w-80 h-80 lg:w-96 lg:h-96"
      >
        <!-- Rotating Glow Ring -->
        <Motion
          :animate="{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }"
          :transition="{ 
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4, repeat: Infinity, repeatType: 'reverse' }
          }"
          class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 via-cyan-500 to-purple-500 opacity-60"
        />
        
        <!-- Glass Container -->
        <Motion
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ delay: 0.5, duration: 1 }"
          class="relative w-72 h-72 lg:w-80 lg:h-80 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-full flex items-center justify-center shadow-2xl"
        >
          <!-- Profile Image -->
          <Motion
            :whileHover="{ scale: 1.05, rotate: 5 }"
            :transition="{ type: 'spring', stiffness: 300 }"
            class="w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden relative cursor-pointer"
          >
            <div class="w-full h-full bg-gradient-to-br from-purple-400 via-pink-500 to-indigo-600 flex items-center justify-center text-6xl text-white">
              <!-- Replace with actual image -->
              <i class="fas fa-user"></i>
            </div>
          </Motion>
        </Motion>

        <!-- Orbiting Tech Icons -->
        <Motion
          v-for="(tech, index) in techStack"
          :key="`tech-${index}`"
          :initial="{ opacity: 0, scale: 0 }"
          :animate="{ 
            opacity: 1, 
            scale: 1,
            rotate: 360
          }"
          :transition="{ 
            opacity: { delay: 1 + index * 0.1 },
            scale: { delay: 1 + index * 0.1, type: 'spring' },
            rotate: { 
              duration: 15 + index * 2, 
              repeat: Infinity, 
              ease: 'linear' 
            }
          }"
          :style="{ 
            '--orbit-radius': tech.radius + 'px',
            '--start-angle': tech.startAngle + 'deg'
          }"
          class="absolute tech-icon"
          @mouseenter="handleTechHover(index, true)"
          @mouseleave="handleTechHover(index, false)"
        >
          <Motion
            :whileHover="{ 
              scale: 1.5, 
              rotate: 20,
              filter: 'brightness(1.5)'
            }"
            :transition="{ type: 'spring', stiffness: 400 }"
            :style="{ color: tech.color }"
            class="text-2xl cursor-pointer"
          >
            <i :class="tech.icon"></i>
          </Motion>
        </Motion>

        <!-- Floating Particles -->
        <Motion
          v-for="particle in particles"
          :key="`particle-${particle.id}`"
          :initial="{ 
            opacity: 0, 
            scale: 0,
            x: 0,
            y: 0
          }"
          :animate="{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: particle.x,
            y: particle.y
          }"
          :transition="{ 
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut'
          }"
          :class="particle.class"
          class="absolute rounded-full"
        />
      </Motion>
    </div>

    <!-- Text Content Section -->
    <div class="flex-1 text-center lg:text-left order-2 lg:order-2 max-w-2xl z-10">
      
      <!-- Greeting Animation -->
      <Motion
        :initial="{ opacity: 0, x: -50 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ delay: 0.3, duration: 0.8 }"
        class="mb-6"
      >
        <Motion
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ delay: 0.5 }"
          class="text-purple-300 text-xl mb-2"
        >
          Hey there, I'm
        </Motion>
        
        <Motion
          :initial="{ opacity: 0, scale: 0.5 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ 
            delay: 0.7, 
            type: 'spring',
            stiffness: 200,
            damping: 20
          }"
          class="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent"
        >
          {{ name }}
        </Motion>
      </Motion>

      <!-- Role -->
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 0.9, duration: 0.8 }"
        class="text-white text-2xl lg:text-3xl font-semibold mb-8"
      >
        {{ role }}
      </Motion>

      <!-- Main Headline with Typewriter Effect -->
      <Motion
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ delay: 1.1 }"
        class="text-white text-4xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
      >
        <Motion
          v-for="(word, index) in headlineWords"
          :key="`word-${index}`"
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ 
            delay: 1.2 + index * 0.1,
            duration: 0.6,
            type: 'spring'
          }"
          :class="word.class"
          class="inline-block mr-4"
        >
          {{ word.text }}
        </Motion>
      </Motion>

      <!-- Description -->
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 1.8, duration: 0.8 }"
        class="text-gray-300 text-lg lg:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
      >
        {{ description }}
      </Motion>

      <!-- Social Links -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 2, duration: 0.8 }"
        class="flex justify-center lg:justify-start gap-6 mb-12"
      >
        <Motion
          v-for="(social, index) in socialLinks"
          :key="social.name"
          :initial="{ opacity: 0, scale: 0 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ 
            delay: 2.2 + index * 0.1,
            type: 'spring',
            stiffness: 300
          }"
          :whileHover="{ 
            scale: 1.2,
            rotateY: 180,
            boxShadow: `0 10px 30px ${social.color}40`
          }"
          :whileTap="{ scale: 0.95 }"
          :style="{ '--social-color': social.color }"
          class="social-link w-16 h-16 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center cursor-pointer"
          @click="openLink(social.url)"
        >
          <i :class="social.icon" class="text-xl"></i>
        </Motion>
      </Motion>

      <!-- CTA Button -->
      <Motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ delay: 2.5, type: 'spring', stiffness: 200 }"
      >
        <Motion
          :whileHover="{ 
            scale: 1.05,
            boxShadow: '0 20px 40px rgba(147, 51, 234, 0.4)'
          }"
          :whileTap="{ scale: 0.98 }"
          :animate="{ 
            backgroundPosition: ['0%', '100%', '0%']
          }"
          :transition="{
            backgroundPosition: { 
              duration: 3, 
              repeat: Infinity, 
              ease: 'linear' 
            }
          }"
          class="group relative px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 rounded-full font-semibold text-white shadow-lg cursor-pointer overflow-hidden"
          style="background-size: 200% 100%"
          @click="scrollToContact"
        >
          <span class="relative z-10">{{ ctaText }}</span>
          
          <!-- Button shine effect -->
          <Motion
            :initial="{ x: '-100%' }"
            :whileHover="{ x: '100%' }"
            :transition="{ duration: 0.6, ease: 'easeInOut' }"
            class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </Motion>
      </Motion>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Motion } from 'motion-v'
import { ref, onMounted } from 'vue'

// Component Props
interface TechItem {
  name: string
  icon: string
  color: string
  radius: number
  startAngle: number
}

interface SocialLink {
  name: string
  icon: string
  url: string
  color: string
}

const props = defineProps<{
  name?: string
  role?: string
  description?: string
  ctaText?: string
  socialLinks?: SocialLink[]
  techStack?: TechItem[]
}>()

// Default values
const name = props.name || 'Yinyong'
const role = props.role || 'Web Developer & UI/UX Designer'
const description = props.description || "I'm a passionate creator who transforms ideas into stunning visual experiences. Through innovative design and cutting-edge technology, I bring digital visions to life that captivate and engage audiences."
const ctaText = props.ctaText || "Let's Create Together"

// Tech Stack with orbital positions
const techStack = props.techStack || [
  { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E', radius: 160, startAngle: 0 },
  { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4FC08D', radius: 180, startAngle: 45 },
  { name: 'React', icon: 'fab fa-react', color: '#61DAFB', radius: 160, startAngle: 90 },
  { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933', radius: 200, startAngle: 135 },
  { name: 'Python', icon: 'fab fa-python', color: '#3776AB', radius: 160, startAngle: 180 },
  { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6', radius: 180, startAngle: 225 },
  { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26', radius: 160, startAngle: 270 },
  { name: 'GitHub', icon: 'fab fa-github', color: '#181717', radius: 200, startAngle: 315 }
]

// Social Links
const socialLinks = props.socialLinks || [
  { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://facebook.com', color: '#1877F2' },
  { name: 'Telegram', icon: 'fab fa-telegram-plane', url: 'https://telegram.org', color: '#0088CC' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com', color: '#0A66C2' },
  { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com', color: '#181717' }
]

// Headline words for staggered animation
const headlineWords = [
  { text: 'Crafting', class: '' },
  { text: 'Digital', class: '' },
  { text: 'Experiences', class: 'bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent' },
  { text: 'That', class: 'text-3xl lg:text-5xl xl:text-6xl text-gray-300' },
  { text: 'Inspire', class: 'text-3xl lg:text-5xl xl:text-6xl text-gray-300' }
]

// Background elements
const backgroundElements = [
  {
    class: 'top-10 left-10 w-72 h-72 bg-purple-500/10',
    duration: 8,
    delay: 0,
    animate: { x: [0, 50, 0], y: [0, -30, 0] }
  },
  {
    class: 'bottom-10 right-10 w-96 h-96 bg-blue-500/10',
    duration: 12,
    delay: 2,
    animate: { x: [0, -40, 0], y: [0, 40, 0] }
  },
  {
    class: 'top-1/2 left-1/4 w-48 h-48 bg-indigo-500/10',
    duration: 10,
    delay: 4,
    animate: { x: [0, 30, 0], y: [0, -20, 0] }
  }
]

// Floating particles
const particles = [
  { id: 1, x: [0, 100, -50, 0], y: [0, -80, -120, 0], duration: 6, delay: 0, class: 'w-3 h-3 bg-purple-400' },
  { id: 2, x: [0, -80, 60, 0], y: [0, -60, -100, 0], duration: 8, delay: 1, class: 'w-2 h-2 bg-pink-400' },
  { id: 3, x: [0, 120, -80, 0], y: [0, -40, -80, 0], duration: 7, delay: 2, class: 'w-4 h-4 bg-indigo-400' },
  { id: 4, x: [0, -60, 100, 0], y: [0, -100, -60, 0], duration: 9, delay: 3, class: 'w-2 h-2 bg-cyan-400' }
]



const openLink = (url: string) => {
  window.open(url, '_blank')
}

const scrollToContact = () => {
  // Add scroll to contact section logic
  console.log('Scroll to contact')
}


</script>

<style scoped>
.tech-icon {
  transform-origin: var(--orbit-radius) center;
  animation: orbit linear infinite;
  left: 50%;
  top: 50%;
  margin-left: calc(var(--orbit-radius) * -1);
  margin-top: -12px;
  transform: rotate(var(--start-angle)) translateX(var(--orbit-radius)) rotate(calc(var(--start-angle) * -1));
}

@keyframes orbit {
  from { transform: rotate(var(--start-angle)) translateX(var(--orbit-radius)) rotate(calc(var(--start-angle) * -1)); }
  to { transform: rotate(calc(var(--start-angle) + 360deg)) translateX(var(--orbit-radius)) rotate(calc((var(--start-angle) + 360deg) * -1)); }
}

.social-link {
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  color: var(--social-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-link:hover {
  background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1));
  border-color: var(--social-color);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255,255,255,0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #9333ea, #3b82f6);
  border-radius: 3px;
}
</style>