<template>
  <q-select v-model="selectedShop1" :options="shops1AndShops2" label="Магазин" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSelectedShops } from '@/composables/useSelectedShops';
const { selectedShop1 } = useSelectedShops();

const shops1AndShops2 = ref([
  {
    value: 'edadeal',
    label: 'Едадил',
    link: 'https://edadeal.ru/moskva/offers/search?keywords=ingredient',
  },
  {
    value: 'perekrestok',
    label: 'Перекресток',
    link: 'https://www.perekrestok.ru/cat/search?search=ingredient',
  },
  {
    value: 'lavka',
    label: 'Яндекс Лавка',
    link: 'https://lavka.yandex.ru/search?text=ingredient',
  },
  {
    value: 'metro',
    label: 'Metro',
    link: 'https://online.metro-cc.ru/search?q=ingredient',
  },
  {
    value: 'vkusvill',
    label: 'Вкусвилл',
    link: 'https://vkusvill.ru/search/?type=products&q=ingredient',
  },
  {
    value: 'ozonfresh',
    label: 'Ozon Fresh',
    link: 'https://www.ozon.ru/category/supermarket-25000/?miniapp=supermarket&text=ingredient',
  },
  { value: 'vprok', label: 'Впрок', link: 'https://www.vprok.ru/catalog/search?text=ingredient' },
  { value: 'lenta', label: 'Лента', link: 'https://moscow.lenta.com/search/ingredient' },
  { value: 'multisearch', label: 'Купер Все магазины', link: 'https://kuper.ru/multisearch?q=ingredient' },
  {
    value: 'auchan',
    label: 'Купер Ашан',
    link: 'https://kuper.ru/auchan/search?keywords=ingredient&sort=unit_price_asc',
  },
  {
    value: 'lentagp',
    label: 'Купер Лента',
    link: 'https://kuper.ru/lentagp/search?keywords=ingredient&sort=unit_price_asc',
  },
  {
    value: 'globusgiper',
    label: 'Купер Глобус',
    link: 'https://kuper.ru/globusgiper/search?keywords=ingredient&sort=unit_price_asc',
  },
  { value: 'okey', label: 'Купер Окей', link: 'https://kuper.ru/okey/search?keywords=ingredient&sort=unit_price_asc' },
  {
    value: 'perekrestok',
    label: 'Купер Перекресток',
    link: 'https://kuper.ru/perekrestok/search?keywords=ingredient&sort=unit_price_asc',
  },
  {
    value: 'perekrestokvprok',
    label: 'Купер Перекресток Впрок',
    link: 'https://kuper.ru/perekrestokvprok/search?keywords=ingredient&sort=unit_price_asc',
  },
  {
    value: 'metro',
    label: 'Купер Metro',
    link: 'https://kuper.ru/metro/search?keywords=ingredient&sort=unit_price_asc',
  },
  {
    value: 'vkusvill_darkstore',
    label: 'Купер Вкусвилл',
    link: 'https://kuper.ru/vkusvill_darkstore/search?keywords=ingredient&sort=unit_price_asc',
  },
]);
</script>
