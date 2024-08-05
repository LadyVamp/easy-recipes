import { ref, watch } from 'vue';
import { LocalStorageHandler } from '@/utils/LocalStorageHandler';

export function useSelectedShops() {
  const isShowLinksShop1 = ref(LocalStorageHandler.getItem('isShowLinksShop1') ?? false);
  const selectedShop1 = ref(LocalStorageHandler.getItem('selectedShop1') ?? { value: 'auchan', label: 'Ашан' });
  const isShowLinksShop2 = ref(LocalStorageHandler.getItem('isShowLinksShop2') ?? false);
  const selectedShop2 = ref(
    LocalStorageHandler.getItem('selectedShop2') ?? {
      value: 'vprok',
      label: 'Впрок',
      link: 'https://www.vprok.ru/catalog/search?text={ingredient}',
    },
  );

  watch(isShowLinksShop1, (newValue) => {
    LocalStorageHandler.setItem('isShowLinksShop1', newValue);
  });
  watch(selectedShop1, (newValue) => {
    LocalStorageHandler.setItem('selectedShop1', newValue);
  });
  watch(isShowLinksShop2, (newValue) => {
    LocalStorageHandler.setItem('isShowLinksShop2', newValue);
  });
  watch(selectedShop2, (newValue) => {
    LocalStorageHandler.setItem('selectedShop2', newValue);
  });

  return { isShowLinksShop1, selectedShop1, isShowLinksShop2, selectedShop2 };
}
