<script setup lang="ts">
import type { ContactData } from '@/data/portfolioData';

defineProps<{ data: ContactData }>();
</script>

<template>
  <h2 class="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Get In Touch</h2>
  <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
    I'm currently open to new opportunities and collaborations. Feel free to reach out!
  </p>
  <!-- Contact Links -->
  <div class="flex justify-center items-center space-x-6">
    <a :href="`mailto:${data.email}`" class="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors" aria-label="Email Me">
      <i class="fas fa-envelope text-3xl"></i>
    </a>
    <a :href="data.githubUrl" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors" aria-label="GitHub Profile">
      <i class="fab fa-github text-3xl"></i>
    </a>
    <a :href="data.linkedinUrl" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-600 transition-colors" aria-label="LinkedIn Profile">
      <i class="fab fa-linkedin text-3xl"></i>
    </a>
    <!-- Add other links like Twitter, etc. if needed -->
  </div>
</template>
