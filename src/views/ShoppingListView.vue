<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col col-6">
        <q-input v-model="productSearchInput" filled type="search" hint="Поиск в магазине" @keyup.enter="searchProduct">
          <template #append>
            <q-btn color="secondary" icon-right="search" :disable="productSearchInput === ''" @click="searchProduct" />
          </template>
        </q-input>
        <DropdownListShops v-model="selectedShop1" />
      </div>
      <div class="col col-6">
        <ul v-for="(value, idx) in regularShoppingList" :key="idx" class="q-pl-md q-ma-none">
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
        <q-btn :icon="'mdi-plus'" color="primary" class="q-ml-md q-my-md" @click="modalAddProduct = true" />
        <q-btn :icon="'mdi-delete'" color="negative" class="q-ml-md q-my-md" @click="modalDeleteList = true" />
        <ul v-for="(value, idx) in shoppingListLS" :key="idx" class="q-pl-md q-ma-none">
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
  <q-dialog v-model="modalDeleteList" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Удалить список?</div>
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn v-close-popup flat label="Отмена" />
        <q-btn v-close-popup color="negative" label="Удалить" @click="deleteShoppingList" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { openURL } from 'quasar';
import { useSelectedShops } from '@/composables/useSelectedShops';
const { selectedShop1 } = useSelectedShops();
import DropdownListShops from '@/components/DropdownListShops.vue';

const productSearchInput = ref('');
const modalAddProduct = ref(false);
const modalDeleteList = ref(false);
const productLS = ref('');
const shoppingListLS = ref<string[]>(JSON.parse(localStorage.getItem('shoppingList') || '[]') || []);

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

function deleteShoppingList() {
  localStorage.setItem('shoppingList', '[]');
  shoppingListLS.value = [];
}
</script>

<style lang="scss" scoped>
.w-200 {
  width: 200px;
}
</style>
