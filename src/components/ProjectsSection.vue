<script setup lang="ts">
import type { Project } from '@/data/portfolioData';

defineProps<{ projects: Project[] }>();
</script>

<template>
  <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Projects</h2>
  <!-- Grid for Project Cards -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col"
    >
      <a :href="project.link" target="_blank" rel="noopener noreferrer">
        <img class="rounded-t-lg w-full h-48 object-contain" :src="project.imageUrl" :alt="project.title + ' screenshot'" />
      </a>
      <div class="p-5 flex flex-col flex-grow">
        <a :href="project.link" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 transition-colors">
            {{ project.title }}
          </h5>
          <span
            v-if="project.isHobby"
            class="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-200"
          >
            Hobby
          </span>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">{{ project.description }}</p>
        <!-- Tags -->
        <div class="mb-4 flex flex-wrap gap-2">
           <span v-for="tag in project.tags" :key="tag" class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
             {{ tag }}
           </span>
        </div>
        <a :href="project.link" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-auto">
            View Project
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
      </div>
    </div>
  </div>
</template>