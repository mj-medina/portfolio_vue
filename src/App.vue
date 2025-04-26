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

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div
    class="relative isolate min-h-screen bg-white pb-24 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white md:pb-0"
  >
    <div
      class="absolute inset-0 -z-10 bg-[url('/patterns/background-pattern.svg')] bg-repeat opacity-[0.02] dark:opacity-[0.02] dark:invert"
      aria-hidden="true"
    ></div>

    <Navbar />
    <main
      class="container mx-auto px-4 py-12 sm:px-6 md:px-12 md:py-20 lg:py-24"
    >
      <!-- Hero Section -->
      <section class="mb-16 text-center md:mb-24">
        <HeroSection />
      </section>

      <div class="flex flex-col gap-16 lg:gap-24">
        <!-- Skills Section -->
        <section
          id="skills"
          class="scroll-mb-20 md:scroll-mb-0 md:scroll-mt-28"
        >
          <SkillsSection />
        </section>

        <!-- History Section -->
        <section
          id="history"
          class="scroll-mb-20 md:scroll-mb-0 md:scroll-mt-28"
        >
          <HistorySection />
        </section>

        <!-- Projects Section -->
        <section
          id="projects"
          class="scroll-mb-20 md:scroll-mb-0 md:scroll-mt-28"
        >
          <ProjectsSection />
        </section>

        <!-- Contact Section -->
        <section
          id="contact"
          class="scroll-mb-20 text-center md:scroll-mb-0 md:scroll-mt-28"
        >
          <ContactSection />
        </section>
      </div>
    </main>
    <DarkModeToggle />
    <!-- Footer -->
    <footer
      class="border-t border-gray-200 py-8 text-center dark:border-gray-700"
    >
      <p class="text-gray-600 dark:text-gray-400">
        &copy; {{ new Date().getFullYear() }}
      </p>
    </footer>
  </div>
</template>
