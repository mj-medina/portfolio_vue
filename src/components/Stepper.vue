<script setup lang="ts">
interface TimelineItem {
  company: string;
  position: string;
  details: string[];
  duration: string;
  current: boolean;
  type: 'work' | 'education';
}

const props = withDefaults(
  defineProps<{
    items: TimelineItem[];
  }>(),
  {
    items: () => [] as TimelineItem[],
  },
);

const getIconClass = (item: TimelineItem) => {
  if (item.current) return 'fa-solid fa-briefcase';
  return item.type === 'education'
    ? 'fa-solid fa-graduation-cap'
    : 'fa-solid fa-building-user';
};
</script>

<template>
  <div>
    <ol class="relative border-s border-gray-200 dark:border-gray-700">
      <li v-for="(item, index) in props.items" :key="index" class="mb-10 ms-6">
        <span
          class="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full"
          :class="[
            item.current
              ? 'bg-blue-200 dark:bg-blue-900'
              : 'bg-gray-200 dark:bg-gray-700',
          ]"
        >
          <!-- Pulsing effect for current item -->
          <span
            v-if="item.current"
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"
          ></span>
          <!-- Font Awesome Icon: Increased size -->
          <i
            :class="[
              getIconClass(item),
              'z-10 h-4 w-4',
              item.current
                ? 'text-blue-800 dark:text-blue-300'
                : 'text-gray-600 dark:text-gray-400',
            ]"
          ></i>
        </span>
        <div class="ml-2">
          <h3
            class="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white"
          >
            {{ item.position }} at {{ item.company }}
            <span
              v-if="item.current"
              class="ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
              >Current</span
            >
          </h3>
          <time
            class="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >{{ item.duration }}</time
          >
          <ul
            v-if="item.details.length > 0"
            class="mb-4 list-disc space-y-1 pl-5 text-base font-normal text-gray-500 dark:text-gray-400"
          >
            <li
              v-for="(detail, detailIndex) in item.details"
              :key="detailIndex"
            >
              {{ detail }}
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </div>
</template>
