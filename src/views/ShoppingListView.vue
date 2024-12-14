<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col col-6">
        <q-input v-model="productSearchInput" filled type="search" hint="Поиск в магазине" @keyup.enter="searchProduct">
          <template #append>
            <q-btn color="secondary" icon-right="search" :disable="productSearchInput === ''" @click="searchProduct" />
          </template>
        </q-input>
        <q-select v-model="selectedShop1" :options="shops1" label="Магазин" class="q-select" />
      </div>
      <div class="col col-6">
        <ul v-for="(value, idx) in regularShoppingList" :key="idx" class="q-pl-md">
          <a :href="linkToProductShop1(value)" target="_blank">{{ value }}</a>
        </ul>
        <q-btn :icon="'mdi-plus'" color="primary" class="q-ml-md" @click="modalAddProduct = true" />
        <ul v-for="(value, idx) in shoppingListLS" :key="idx" class="q-pl-md">
          <a :href="linkToProductShop1(value)" target="_blank">{{ value }}</a>
          <q-btn flat color="orange-5" :icon="'mdi-minus'" class="border-gray" @click="removeFromLS(value)" />
        </ul>
      </div>
    </div>
  </div>

  <q-dialog v-model="modalAddProduct" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Добавление продукта</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input v-model="productLS" dense autofocus @keyup.enter="modalAddProduct = false" />
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn v-close-popup flat label="Отмена" />
        <q-btn v-close-popup color="primary" label="Добавить" @click="addToLS" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { openURL } from 'quasar';
import { useSelectedShops } from '@/composables/useSelectedShops';
const { selectedShop1 } = useSelectedShops();

const productSearchInput = ref('');
const modalAddProduct = ref(false);
const productLS = ref('');
const shoppingListLS = ref(['Тестовый продукт']);

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

const regularShoppingList = ref([
  'Яблоки',
  'Груши',
  'Йогурт греческий',
  'Йогурт термостатный',
  'Вода 5 л',
  'Яйцо куриное СО',
  'Хлеб зерновой',
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

function linkToProductShop1FromInput() {
  if (selectedShop1.value.value === 'multisearch') {
    return 'https://kuper.ru/multisearch?q=' + `${productSearchInput.value.trim()}`;
  } else {
    return (
      'https://kuper.ru/' +
      `${selectedShop1.value.value}` +
      '/search?keywords=' +
      `${productSearchInput.value.trim()}` +
      `&sort=unit_price_asc`
    );
  }
}

function searchProduct() {
  openURL(linkToProductShop1FromInput());
}

function addToLS() {
  shoppingListLS.value.push(productLS.value);
  console.log(shoppingListLS.value);
  // TODO: Добавить продукт в LocalStorage
  console.log('localStorage shoppingList', localStorage.getItem('shoppingList'));
}
function removeFromLS(value: string) {
  shoppingListLS.value = shoppingListLS.value.filter((item) => item !== value);
  console.log(shoppingListLS.value);
  // TODO: Удалить продукт из LocalStorage
  console.log('localStorage shoppingList', localStorage.getItem('shoppingList'));
}

/**
 * TODO:
 * Добавить/удалить продукт из LocalStorage
 */
</script>

<style lang="scss" scoped>
.w-200 {
  width: 200px;
}
</style>
