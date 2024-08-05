import { ref, watch } from 'vue';
import { LocalStorageHandler } from '@/utils/LocalStorageHandler';

export function useSelectedShop2() {
  const selectedShop2 = ref(
    LocalStorageHandler.getItem('selectedShop2') ?? {
      value: 'vprok',
      label: 'Впрок',
      link: 'https://www.vprok.ru/catalog/search?text={ingredient}',
    },
  );

  watch(selectedShop2, (newValue) => {
    LocalStorageHandler.setItem('selectedShop2', newValue);
  });

  return { selectedShop2 };
}
