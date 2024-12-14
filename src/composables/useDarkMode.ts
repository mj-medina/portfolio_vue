import { ref, onMounted } from 'vue';

export default function useDarkMode() {
  const isDarkMode = ref(false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark', isDarkMode.value);
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
  };

  const initializeDarkMode = () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    if (savedTheme === 'dark') {
      isDarkMode.value = true;
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      isDarkMode.value = false;
      document.documentElement.classList.remove('dark');
    } else {
      isDarkMode.value = prefersDarkMode;
      document.documentElement.classList.toggle('dark', prefersDarkMode);
    }
  };

  onMounted(() => {
    initializeDarkMode();
  });

  return {
    isDarkMode,
    toggleDarkMode,
  };
}
