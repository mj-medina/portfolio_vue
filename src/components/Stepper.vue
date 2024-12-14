<script setup lang="ts">
interface WorkExperience {
  company: string;
  position: string;
  details: string[];
  duration: string;
  current: boolean;
}

const props = withDefaults(
  defineProps<{
    workExperience: WorkExperience[];
  }>(),
  {
    workExperience: () => [] as WorkExperience[],
  },
);
</script>

<template>
  <div class="flex flex-col gap-4">
    <ol
      class="relative border-s border-gray-200 dark:border-gray-700 dark:text-gray-100"
    >
      <li
        v-for="(item, index) in props.workExperience"
        :key="index"
        class="mb-10 ms-8"
      >
        <span
          class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full"
          :class="[
            item.current
              ? 'bg-blue-300 dark:bg-blue-900'
              : 'bg-gray-300 dark:bg-gray-600',
          ]"
        >
          <span v-if="item.current" class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <!-- Add custom icon here if needed -->
        </span>
        <div class="flex flex-col gap-2">
          <span class="text-md font-bold">{{ item.company }}</span>
          <p class="px-4 text-sm">{{ item.position }}</p>
          <ul class="list-disc px-8 text-xs">
            <li
              v-for="(detail, detailIndex) in item.details"
              :key="detailIndex"
            >
              {{ detail }}
            </li>
          </ul>
          <p class="px-4 px-8 text-xs">{{ item.duration }}</p>
        </div>
      </li>
    </ol>
  </div>
</template>
