import { ref, onMounted, onUnmounted, Ref } from 'vue';
export function useScrollSpy(
  sectionIds: string[],
  options?: IntersectionObserverInit,
): Ref<string | null> {
  const activeSectionId = ref<string | null>(null);
  const observer = ref<IntersectionObserver | null>(null);

  const defaultOptions: IntersectionObserverInit = {
    rootMargin: '-20% 0px -50% 0px',
    threshold: 0,
    ...options,
  };

  onMounted(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSectionId.value = entry.target.id;
        }
      });
    };

    observer.value = new IntersectionObserver(observerCallback, defaultOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.value?.observe(element);
      } else {
        console.warn(`[useScrollSpy] Element with ID '${id}' not found.`);
      }
    });
  });

  onUnmounted(() => {
    observer.value?.disconnect();
  });

  return activeSectionId;
}
