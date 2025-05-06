<script setup lang="ts">
import type { SkillCategory } from '@/data/portfolioData';

defineProps<{ categories: SkillCategory[] }>();

const isSvgPath = (iconString: string): boolean => {
  return iconString.includes('.svg');
};
</script>

<template>
  <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">My Skills</h2>
  <div class="space-y-8">
    <div v-for="category in categories" :key="category.title">
      <h3 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{{ category.title }}</h3>
      <div class="flex flex-wrap gap-3">
        <span
          v-for="skill in category.skills"
          :key="skill.name"
          class="inline-flex items-center rounded-md bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-800 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-800/40 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors cursor-default"
        >
          <!-- SVG Icon -->
          <img
            v-if="isSvgPath(skill.icon)"
            :src="skill.icon"
            :alt="skill.name + ' logo'"
            class="-ml-0.5 mr-1.5 h-5 w-5 object-contain dark:invert-[.85] dark:filter"
          />
          <!-- Font Awesome Icon -->
          <i
            v-else
            :class="[skill.icon, '-ml-0.5 mr-1.5 h-5 w-5 text-lg']"
            aria-hidden="true"
          ></i>
          {{ skill.name }}
        </span>
      </div>
    </div>
  </div>
</template>
