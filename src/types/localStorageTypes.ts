export type Select = { value: string; label: string, link: string };

export type LocalStorageValues = {
  darkMode: boolean;
  isShowLinksShop1: boolean;
  isShowLinksShop2: boolean;
  selectedShop1: Select;
};

export type LocalStorageKeys = keyof LocalStorageValues;
