<script setup lang="ts">
import type { HeroData } from '@/data/portfolioData';

defineProps<{ data: HeroData }>();
</script>

<template>
  <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold my-4">{{ data.name }}</h1>
  <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">{{ data.title }}</p>
  <p class="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-8">
    {{ data.description }}
  </p>
  <a :href="data.resumeUrl" :download="data.resumeFilename" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
    Download Resume <i class="fas fa-download ml-2"></i>
  </a>
</template>
