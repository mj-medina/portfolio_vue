<script setup lang="ts">
import useDarkMode from '@/composables/useDarkMode';

const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>

<template>
  <nav
    :class="{ dark: isDarkMode }"
    class="fixed z-40 w-full border-gray-200 bg-white dark:bg-gray-900"
  >
    <div
      class="border-black-300 mx-auto flex flex-wrap items-center justify-between border-b dark:border-gray-500 p-4"
    >
      <span
        class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
        >Portfolio</span
      >

      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse"
        >
          <li v-for="item in ['Home', 'Skills', 'History']">
            <a
              href="#"
              class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
            >
              {{ item }}
            </a>
          </li>
          <li @click="toggleDarkMode">
            <span
              class="block cursor-pointer rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
            >
              {{ isDarkMode ? '🌑' : '☀️' }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
