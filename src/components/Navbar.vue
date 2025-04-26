<script setup lang="ts">
import { useScrollSpy } from '@/composables/useScrollSpy';

const navItems = [
  { name: 'Skills', href: '#skills', icon: 'fa-solid fa-laptop-code' },
  { name: 'History', href: '#history', icon: 'fa-solid fa-clock-rotate-left' },
  { name: 'Projects', href: '#projects', icon: 'fa-solid fa-folder-open' },
];

const sectionIds = navItems.map((item) => item.href.substring(1));
const activeSectionId = useScrollSpy(sectionIds);
</script>

<template>
  <!-- Mobile: Fixed Bottom Nav | Desktop: Fixed Top Nav -->
  <nav
    class="fixed bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/90 md:bottom-auto md:top-0 md:border-b md:border-t-0"
  >
    <div
      class="container mx-auto flex flex-wrap items-center justify-between p-2 md:p-4"
    >
      <!-- Brand Name (Visible only on Desktop) -->
      <a
        href="#"
        class="hidden items-center space-x-3 md:flex rtl:space-x-reverse"
      >
        <span
          class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
          >Portfolio</span
        >
      </a>

      <!-- Mobile Menu Button (Hidden): Removed click and aria-expanded -->
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="hidden h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        aria-controls="navbar-default"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <!-- Navbar Links Container -->
      <div class="w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex w-full flex-row items-center justify-around font-medium md:w-auto md:flex-row md:items-center md:justify-start md:bg-transparent md:p-0"
        >
          <!-- Nav Links LI: Added margin on desktop -->
          <li v-for="item in navItems" :key="item.name" class="md:ml-6 lg:ml-8">
            <a
              :href="item.href"
              :aria-label="item.name"
              :class="[
                'flex flex-col items-center justify-center p-2 transition-colors',
                'hover:bg-gray-100 dark:hover:bg-gray-800',
                activeSectionId === item.href.substring(1)
                  ? 'text-blue-600 dark:text-blue-500'
                  : 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500',
                'md:px-3 md:py-2 md:text-gray-900 md:hover:bg-transparent',
                activeSectionId === item.href.substring(1)
                  ? 'md:text-blue-700 md:dark:text-blue-500'
                  : 'md:hover:text-blue-700 md:dark:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500',
              ]"
            >
              <!-- Mobile: Icon -->
              <i :class="[item.icon, 'h-5 w-5 text-xl md:hidden']"></i>
              <!-- Desktop: Text -->
              <span
                :class="[
                  'hidden text-sm md:inline',
                  {
                    'font-semibold': activeSectionId === item.href.substring(1),
                  },
                ]"
                >{{ item.name }}</span
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
