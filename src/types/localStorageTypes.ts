export type UserSettings = { name: string };

export type LocalStorageValues = {
  darkMode: boolean;
  userSettings: UserSettings;
  lastLogin: Date;
};

export type LocalStorageKeys = keyof LocalStorageValues;
