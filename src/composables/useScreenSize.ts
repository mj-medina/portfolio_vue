import { ref, onMounted, onUnmounted } from 'vue';

export default function useScreenSize() {
  const isLargeScreen = ref(window.matchMedia('(min-width: 768px)').matches);

  const updateScreenSize = () => {
    isLargeScreen.value = window.matchMedia('(min-width: 768px)').matches;
  };

  onMounted(() => {
    window.addEventListener('resize', updateScreenSize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize);
  });

  return {
    isLargeScreen,
  };
}
