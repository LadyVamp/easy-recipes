<template>
  <div class="row q-mt-sm">
    <div class="q-mt-xl">
      <ul v-for="(value, idx) in shoppingList" :key="idx" class="q-pl-md">
        <a :href="linkToProductShop1(value)" target="_blank">{{ value }}</a>
      </ul>
    </div>
    <div class="w-200">
      <q-select v-model="selectedShop1" :options="shops1" label="Магазин" class="q-select" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSelectedShops } from '@/composables/useSelectedShops';
const { selectedShop1 } = useSelectedShops();

const shops1 = ref([
  { value: 'multisearch', label: 'Все магазины' },
  { value: 'auchan', label: 'Ашан' },
  { value: 'lentagp', label: 'Лента' },
  { value: 'globusgiper', label: 'Глобус' },
  { value: 'okey', label: 'Окей' },
  { value: 'perekrestok', label: 'Перекресток' },
  { value: 'perekrestokvprok', label: 'Перекресток Впрок' },
  { value: 'metro', label: 'Metro' },
  { value: 'vkusvill_darkstore', label: 'Вкусвилл' },
]);

const shoppingList = ref([
  'Яблоки',
  'Груши',
  'Йогурт греческий',
  'Йогурт термостатный',
  'Катык',
  'Варенец',
  'Вода 5 л',
  'Яйцо куриное СО',
  'Хлеб зерновой',
  'Филе минтай',
  'Филе треска',
  'Филе камбала',
]);

function linkToProductShop1(ingredient: string) {
  if (selectedShop1.value.value === 'multisearch') {
    return 'https://kuper.ru/multisearch?q=' + `${ingredient.trim()}`;
  } else {
    return (
      'https://kuper.ru/' +
      `${selectedShop1.value.value}` +
      '/search?keywords=' +
      `${ingredient.trim()}` +
      `&sort=unit_price_asc`
    );
  }
}

/**
 * TODO:
 * Подстановка значения из инпута
 * Добавить/удалить продукт из LocalStorage
 */
</script>

<style lang="scss" scoped>
.w-200 {
  width: 200px;
}
</style>
