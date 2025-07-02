<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import type { HeroData } from '@/data/portfolioData';

const props = defineProps<{ data: HeroData }>();

const typedText = ref('');
const typingIndex = ref(0);
let typingInterval: number | undefined;
let resetTimeout: number | undefined;

function startTyping() {
  typedText.value = '';
  typingIndex.value = 0;
  typingInterval = window.setInterval(() => {
    if (typingIndex.value < props.data.description.length) {
      typedText.value += props.data.description[typingIndex.value];
      typingIndex.value++;
    } else if (typingInterval) {
      clearInterval(typingInterval);
      typingInterval = undefined;
      resetTimeout = window.setTimeout(() => {
        startTyping();
      }, 5000);
    }
  }, 30);
}

onMounted(() => {
  startTyping();
});

onBeforeUnmount(() => {
  if (typingInterval) clearInterval(typingInterval);
  if (resetTimeout) clearTimeout(resetTimeout);
});
</script>

<template>
  <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold my-4">{{ data.name }}</h1>
  <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">{{ data.title }}</p>
  <p class="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-8 font-mono">
    {{ typedText }}<span class="inline-block w-2 animate-pulse align-baseline">|</span>
  </p>
  <a :href="data.resumeUrl" target="_blank" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
    Resume <i class="fas fa-external-link-square ml-2"></i>
  </a>
</template>
