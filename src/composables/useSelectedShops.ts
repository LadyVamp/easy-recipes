import { ref, watch } from 'vue';
import { LocalStorageHandler } from '@/utils/LocalStorageHandler';

export function useSelectedShops() {
  const isShowLinksShop1 = ref(LocalStorageHandler.getItem('isShowLinksShop1') ?? false);
  const selectedShop1 = ref(
    LocalStorageHandler.getItem('selectedShop1') ?? {
      value: 'auchan',
      label: 'Купер Ашан',
      link: 'https://kuper.ru/auchan/search?keywords=ingredient&sort=unit_price_asc',
    },
  );

  watch(isShowLinksShop1, (newValue) => {
    LocalStorageHandler.setItem('isShowLinksShop1', newValue);
  });
  watch(selectedShop1, (newValue) => {
    LocalStorageHandler.setItem('selectedShop1', newValue);
  });

  return { isShowLinksShop1, selectedShop1 };
}
