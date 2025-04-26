<script setup lang="ts">
import { ref } from 'vue';

const skillCategories = ref([
  {
    title: 'Frontend',
    skills: [
      { name: 'Javascript', icon: 'fab fa-js-square' },
      { name: 'Typescript', icon: '/src/assets/logos/typescript.svg' },
      { name: 'Nuxt', icon: '/src/assets/logos/nuxt.svg' },
      { name: 'Vue', icon: 'fab fa-vuejs' },
      { name: 'Tailwind', icon: 'fas fa-wind' },
      { name: 'Inertia', icon: 'fas fa-link' },
      { name: 'Jquery', icon: '/src/assets/logos/jquery.svg' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Laravel', icon: 'fab fa-laravel' },
      { name: 'PHP', icon: 'fab fa-php' },
      { name: 'Express', icon: '/src/assets/logos/express.svg' },
      { name: 'NodeJS', icon: 'fab fa-node-js' },
    ],
  },
  {
    title: 'Databases',
    skills: [{ name: 'MySQL', icon: 'fas fa-database' }],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'Docker', icon: 'fab fa-docker' },
      { name: 'Jira', icon: 'fab fa-jira' },
      { name: 'Confluence', icon: 'fab fa-confluence' },
    ],
  },
]);
const isSvgPath = (iconString: string): boolean => {
  return iconString.includes('.svg');
};
</script>

<template>
  <h2 class="mb-8 text-center text-3xl font-bold md:mb-12 md:text-4xl">
    My Skills
  </h2>
  <div class="space-y-8">
    <div v-for="category in skillCategories" :key="category.title">
      <h3 class="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
        {{ category.title }}
      </h3>
      <div class="flex flex-wrap gap-3">
        <span
          v-for="skill in category.skills"
          :key="skill.name"
          class="inline-flex cursor-default items-center rounded-md bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-800 ring-1 ring-inset ring-blue-700/10 transition-colors hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-800/40 dark:hover:bg-blue-900/50"
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
