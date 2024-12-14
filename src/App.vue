<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Stepper from './components/Stepper.vue';
import Grid from "./components/Grid.vue";
</script>

<template>
  <div class="h-auto bg-white dark:bg-gray-900">
    <Navbar />

    <div class="flex flex-col gap-16 space-y-8 px-16 py-48">

      <!--info + resume btn here -->

      <div class="flex flex-col gap-5">
        <h1 class="text-2xl font-bold text-black dark:text-white">My Skills</h1>
        <Grid
          title="Frontend"
          :skills="[
            { name: 'Javascript', icon: '' },
            { name: 'Typescript', icon: '' },
            { name: 'Nuxt', icon: '' },
            { name: 'Vue', icon: '' },
            { name: 'Tailwind', icon: '' },
            { name: 'Inertia', icon: '' },
            { name: 'Jquery', icon: '' },
            { name: 'Bootstrap', icon: '' },
          ]"
        />

        <Grid
          title="Backend"
          :skills="[
            { name: 'Laravel', icon: '' },
            { name: 'PHP', icon: '' },
            { name: 'Express', icon: '' },
            { name: 'NodeJS', icon: '' },
          ]"
        />

        <Grid title="Databases" :skills="[{ name: 'MySQL', icon: '' }]" />

        <Grid
          title="Tools"
          :skills="[
            { name: 'Git', icon: '' },
            { name: 'Docker', icon: '' },
            { name: 'Jira', icon: '' },
            { name: 'Confluence', icon: '' },
          ]"
        />
      </div>

      <Stepper
        title="History"
        :work-experience="[
          {
            company: 'Goteam Philippines',
            position: 'Mid-Fullstack Developer',
            details: [
              'Worked on full-stack features',
              'Implemented RESTful APIs',
              'Optimized database queries',
            ],
            duration: '2023 - present',
            current: true,
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
          },
          {
            company: 'STI College',
            position: 'Bachelor of Science in Information Technology',
            details: [],
            duration: '2014 - 2018',
            current: false,
          },
        ]"
      />
    </div>
  </div>
</template>
