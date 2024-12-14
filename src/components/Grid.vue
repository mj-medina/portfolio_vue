<script setup lang="ts">
import useScreenSize from '@/composables/useScreenSize';

interface Skill {
  name: string;
  icon: string;
}

const { isLargeScreen } = useScreenSize();
const props = withDefaults(
  defineProps<{
    title: string;
    skills: Skill[];
  }>(),
  {
    title: 'Skills',
    skills: () => [] as Skill[],
  },
);
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-4xl font-bold text-black dark:text-white">
      {{ props.title }}
    </h1>
    <div
      :class="[
        'grid max-w-2xl gap-8',
        { 'grid-cols-4': isLargeScreen, 'grid-cols-2': !isLargeScreen },
      ]"
    >
      <div
        v-for="(skill, index) in props.skills"
        :key="index"
        class="flex max-h-[128px] max-w-[128px] flex-col items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
      >
        <span class="text-black dark:text-white">{{ skill.icon }}</span>
        <span class="text-black dark:text-white">{{ skill.name }}</span>
      </div>
    </div>
  </div>
</template>
