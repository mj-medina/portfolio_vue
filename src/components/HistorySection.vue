<script setup lang="ts">
import Stepper from './Stepper.vue';

const historyItems = [
  {
    company: 'Goteam Philippines',
    position: 'Full-stack Web Developer',
    details: [
      'Worked on full-stack features',
      'Implemented RESTful APIs',
      'Optimized database queries',
    ],
    duration: '2023 - present',
    current: true,
    type: 'work' as const,
  },
  {
    company: 'Cafe24 Philippines',
    position: 'Senior Web Developer',
    details: [
      'Developed e-commerce features',
      'Maintained legacy systems',
      'Integrated third-party services',
      'Collaborated with designers for UI improvements',
    ],
    duration: '2018 - 2023',
    current: false,
    type: 'work' as const,
  },
  {
    company: 'Sutherland Global Services',
    position: 'IT Support Intern',
    details: [
      'Provided technical support',
      'Documented support processes',
      'Assisted in hardware troubleshooting',
    ],
    duration: '2017',
    current: false,
    type: 'work' as const,
  },
  {
    company: 'STI College',
    position: 'Bachelor of Science in Information Technology',
    details: [],
    duration: '2014 - 2018',
    current: false,
    type: 'education' as const,
  },
];
</script>

<template>
  <h2 class="mb-8 text-center text-3xl font-bold md:mb-12 md:text-4xl">
    History
  </h2>
  <Stepper :items="historyItems" />
</template>
