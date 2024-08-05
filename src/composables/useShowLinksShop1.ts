import { ref, watch } from 'vue';
import { LocalStorageHandler } from '@/utils/LocalStorageHandler';

export function useShowLinksShop1() {
  const isShowLinksShop1 = ref(LocalStorageHandler.getItem('isShowLinksShop1') ?? false);

  watch(isShowLinksShop1, (newValue) => {
    LocalStorageHandler.setItem('isShowLinksShop1', newValue);
  });

  return { isShowLinksShop1 };
}
