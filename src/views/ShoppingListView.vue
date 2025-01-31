<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col col-6">
        <q-input v-model="productSearchInput" filled type="search" hint="Поиск в магазине" @keyup.enter="searchProduct">
          <template #append>
            <q-btn color="secondary" icon-right="search" :disable="productSearchInput === ''" @click="searchProduct" />
          </template>
        </q-input>
        <q-select v-model="selectedShop1" :options="shops1AndShops2" label="Магазин" class="q-select" />
      </div>
      <div class="col col-6">
        <ul v-for="(value, idx) in regularShoppingList" :key="idx" class="q-pl-md">
          <a :href="linkToProductShop1(value)" target="_blank">{{ value }} </a>
          <q-btn
            flat
            round
            color="secondary"
            icon="mdi-content-copy"
            size="sm"
            title="Скопировать"
            @click="copyToClipBoard(value)"
          />
        </ul>
        <q-btn :icon="'mdi-plus'" color="primary" class="q-ml-md" @click="modalAddProduct = true" />
        <ul v-for="(value, idx) in shoppingListLS" :key="idx" class="q-pl-md">
          <a :href="linkToProductShop1(value)" target="_blank">{{ value }}</a>
          <q-btn
            flat
            round
            color="secondary"
            icon="mdi-content-copy"
            size="sm"
            title="Скопировать"
            @click="copyToClipBoard(value)"
          />
          <q-btn
            flat
            round
            color="orange-5"
            :icon="'mdi-minus'"
            size="sm"
            class="border-gray"
            @click="removeFromLS(value)"
          />
        </ul>
      </div>
    </div>
  </div>

  <q-dialog v-model="modalAddProduct" persistent @before-show="productLS = ''">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Добавление продукта</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input
          v-model="productLS"
          dense
          autofocus
          @keyup.enter="
            addToLS();
            modalAddProduct = false;
          "
        />
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
const shoppingListLS = ref<string[]>(JSON.parse(localStorage.getItem('shoppingList') || '[]') || []);

const shops1AndShops2 = ref([
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
  { value: 'lenta', label: 'Лента', link: 'https://moscow.online.lenta.com/search/ingredient' },
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

const regularShoppingList = ref([
  'Яблоки',
  'Груши',
  'Йогурт греческий',
  'Йогурт термостатный',
  'Яйцо куриное СО',
  'Хлеб зерновой',
]);

function linkToProductShop1(ingredient: string) {
  if (selectedShop1.value.value === 'multisearch') {
    return 'https://kuper.ru/multisearch?q=' + ingredient.trim();
  } else {
    return selectedShop1.value.link?.replace('ingredient', ingredient.trim());
  }
}

function linkToProductShop1FromInput() {
  if (selectedShop1.value.value === 'multisearch') {
    return 'https://kuper.ru/multisearch?q=' + productSearchInput.value.trim();
  } else {
    return selectedShop1.value.link.replace('ingredient', productSearchInput.value.trim());
  }
}

function searchProduct() {
  openURL(linkToProductShop1FromInput());
}

function addToLS() {
  productLS.value = productLS.value.trim();
  if (productLS.value.length > 0) {
    shoppingListLS.value.push(productLS.value);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingListLS.value));
  }
}

function removeFromLS(value: string) {
  shoppingListLS.value = shoppingListLS.value.filter((item) => item !== value);
  localStorage.setItem('shoppingList', JSON.stringify(shoppingListLS.value));
}

function copyToClipBoard(textToCopy: string) {
  navigator.clipboard.writeText(textToCopy);
}
</script>

<style lang="scss" scoped>
.w-200 {
  width: 200px;
}
</style>
