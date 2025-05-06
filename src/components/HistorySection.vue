<script setup lang="ts">
import Stepper from './Stepper.vue';
import type { TimelineItem } from '@/data/portfolioData';

defineProps<{ items: TimelineItem[] }>();
</script>

<template>
  <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">History</h2>
  <div class="px-4 sm:px-6">
    <Stepper :items="items" />
  </div>
</template>
