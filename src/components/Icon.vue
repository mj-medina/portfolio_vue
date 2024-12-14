<script setup lang="ts">
import { DefineComponent } from 'vue';

interface Props {
  name: DefineComponent;
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <component :is="props.name" v-bind="{ class: props.class }" />
</template>
