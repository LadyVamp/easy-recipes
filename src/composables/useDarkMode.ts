import { ref, watch } from 'vue';
import { LocalStorageHandler } from '@/utils/LocalStorageHandler';

export function useDarkMode() {
  const isDarkMode = ref(LocalStorageHandler.getItem('darkMode') ?? false);

  watch(isDarkMode, (newValue) => {
    LocalStorageHandler.setItem('darkMode', newValue);
  });

  return { isDarkMode };
}
