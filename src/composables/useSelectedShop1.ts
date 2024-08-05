import { ref, watch } from 'vue';
import { LocalStorageHandler } from '@/utils/LocalStorageHandler';

export function useSelectedShop1() {
  const selectedShop1 = ref(LocalStorageHandler.getItem('selectedShop1') ?? { value: 'auchan', label: 'Ашан' });

  watch(selectedShop1, (newValue) => {
    LocalStorageHandler.setItem('selectedShop1', newValue);
  });

  return { selectedShop1 };
}
