<template>
  <q-btn
    flat
    round
    :color="isDarkMode ? 'gray' : 'yellow'"
    :icon="isDarkMode ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny'"
    @click="toggleDarkMode"
  />
</template>

<script setup lang="ts">
// https://dev.to/alexanderop/how-to-persist-user-data-with-localstorage-in-vue-12h4
// В таком варианте при темной теме в q-select не видны значения для выбора. Попробовать https://quasar.dev/style/dark-mode/
import { computed, onMounted } from 'vue';
import { useDarkMode } from '@/composables/useDarkMode';

const { isDarkMode } = useDarkMode();

const styleProperties = computed(() => ({
  '--background-color': isDarkMode.value ? '#333' : '#FFF',
  '--text-color': isDarkMode.value ? '#FFF' : '#333',
  '--text-note-color': isDarkMode.value ? '#abe338' : '#2f9c0a',
}));

function applyStyles() {
  for (const [key, value] of Object.entries(styleProperties.value)) {
    document.documentElement.style.setProperty(key, value);
  }
}

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('darkMode', JSON.stringify(isDarkMode.value));
  applyStyles();
}

// On component mount, apply the stored or default styles
onMounted(applyStyles);
</script>

<style>
body {
  background-color: var(--background-color);
  color: var(--text-color);
}
.text-note-color {
  color: var(--text-note-color);
}
</style>
