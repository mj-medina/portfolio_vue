<script setup lang="ts">
import useDarkMode from '@/composables/useDarkMode';

const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>

<template>
  <button
    @click="toggleDarkMode"
    type="button"
    class="fixed bottom-20 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-700 shadow-lg transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus:ring-gray-500 md:bottom-5"
    aria-label="Toggle dark mode"
  >
    <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'" class="block h-5 w-5 text-lg leading-none"></i>
  </button>
</template>
