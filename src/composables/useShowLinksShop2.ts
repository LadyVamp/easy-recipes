import { ref, watch } from 'vue';
import { LocalStorageHandler } from '@/utils/LocalStorageHandler';

export function useShowLinksShop2() {
  const isShowLinksShop2 = ref(LocalStorageHandler.getItem('isShowLinksShop2') ?? false);

  watch(isShowLinksShop2, (newValue) => {
    LocalStorageHandler.setItem('isShowLinksShop2', newValue);
  });

  return { isShowLinksShop2 };
}
