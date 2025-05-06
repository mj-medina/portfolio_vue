<script setup lang="ts">
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import Navbar from './components/Navbar.vue';
import DarkModeToggle from './components/DarkModeToggle.vue';
import HeroSection from './components/HeroSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import HistorySection from './components/HistorySection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';

// Import data from the central file
import {
  heroData,
  skillCategories,
  historyItems,
  projects,
  contactData
} from '@/data/portfolioData';

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
});
</script>

<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 pb-24 md:pb-0 relative isolate"
  >
    <!-- Background pattern pseudo-element -->
    <div
      class="absolute inset-0 -z-10 bg-[url('/patterns/background-pattern.svg')] bg-repeat opacity-[0.02] dark:opacity-[0.02] dark:invert"
      aria-hidden="true"
    ></div>

    <Navbar />
    <main class="container mx-auto px-4 py-12 sm:px-6 md:px-12 md:py-20 lg:py-24">
      <!-- Hero Section -->
      <section class="text-center mb-16 md:mb-24">
        <HeroSection :data="heroData" />
      </section>

      <div class="flex flex-col gap-16 lg:gap-24">

        <!-- Skills Section -->
        <section id="skills" class="scroll-mb-20 md:scroll-mt-28 md:scroll-mb-0">
          <SkillsSection :categories="skillCategories" />
        </section>

        <!-- History Section -->
        <section id="history" class="scroll-mb-20 md:scroll-mt-28 md:scroll-mb-0">
           <HistorySection :items="historyItems" />
        </section>

        <!-- Projects Section -->
        <section id="projects" class="scroll-mb-20 md:scroll-mt-28 md:scroll-mb-0">
           <ProjectsSection :projects="projects" />
        </section>

        <!-- Contact Section -->
        <section id="contact" class="scroll-mb-20 text-center md:scroll-mt-28 md:scroll-mb-0">
           <ContactSection :data="contactData" />
        </section>

      </div>
    </main>
    <DarkModeToggle />
    <!-- Footer -->
    <footer class="text-center py-8 border-t border-gray-200 dark:border-gray-700">
      <p class="text-gray-600 dark:text-gray-400">&copy; {{ new Date().getFullYear() }} {{ heroData.name }}. All rights reserved.</p>
    </footer>
  </div>
</template>
