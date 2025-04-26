<script setup lang="ts">
// Hardcoded links for now, could be props
const email = 'your.email@example.com';
const githubUrl = 'https://github.com/yourusername';
const linkedinUrl = 'https://linkedin.com/in/yourusername';
</script>

<template>
  <h2 class="mb-8 text-3xl font-bold md:mb-12 md:text-4xl">Get In Touch</h2>
  <p class="mb-6 text-lg text-gray-600 dark:text-gray-400">
    I'm currently open to new opportunities and collaborations. Feel free to
    reach out!
  </p>
  <!-- Contact Links -->
  <div class="flex items-center justify-center space-x-6">
    <a
      :href="`mailto:${email}`"
      class="text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
      aria-label="Email Me"
    >
      <i class="fas fa-envelope text-3xl"></i>
    </a>
    <a
      :href="githubUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      aria-label="GitHub Profile"
    >
      <i class="fab fa-github text-3xl"></i>
    </a>
    <a
      :href="linkedinUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-500 transition-colors hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-600"
      aria-label="LinkedIn Profile"
    >
      <i class="fab fa-linkedin text-3xl"></i>
    </a>
  </div>
</template>
