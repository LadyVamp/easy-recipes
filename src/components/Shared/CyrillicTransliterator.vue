<template>
  <div class="row">
    <div class="col col-md-3 col-xs-12 q-mr-md">
      <q-input v-model="textInput" label="Название" />
    </div>
    <div class="col col-md-3 col-xs-12">
      <q-input v-model="translitted" label="Nazvanie" disable />
    </div>
    <div class="col col-md-1 col-xs-12 q-ma-sm">
      <q-btn round color="secondary" icon="mdi-content-copy" @click="copyToClipBoard" />
    </div>
  </div>
</template>

<script setup>
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import { ref, computed } from 'vue';

const textInput = ref('');

const translitted = computed(() => {
  return CyrillicToTranslit().transform(textInput.value, '-');
});

function copyToClipBoard() {
  navigator.clipboard.writeText(translitted.value);
}
</script>
