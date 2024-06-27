<template>
  <div v-if="!isLoading">
    <h2 class="q-my-xs">{{ currentRecipe.title }}</h2>
    <div class="row">
      <div class="col col-md-3 col-xs-12">
        <img :src="'/recipe-images/' + currentRecipe.id + '.jpg'" />
      </div>
      <div class="col col-md-3 col-xs-12">
        <div class="row">
          <div class="col col-xs-10">
            <IconNature :nature="currentRecipe.nature" />
            <IconFeature :feature="currentRecipe.feature" />
            <IconSeason :season="currentRecipe.season" />
            <div v-if="currentRecipe.time">
              <q-icon name="mdi-timer-outline" color="primary" size="32px" title="Время приготовления" />
              {{ currentRecipe.time }} минут
            </div>
            <p>
              <q-icon name="mdi-account-multiple" color="primary" size="32px" title="Количество порций" />
              {{ currentRecipe.servings }}
            </p>
          </div>
          <div class="col col-xs-2 q-mt-xs" v-if="$q.platform.is.mobile">
            <q-btn outline round color="warning" icon="mdi-sleep-off" @click="wakeLock" />
          </div>
        </div>
        <p class="text-green-10 q-pl-xs" v-if="currentRecipe.note">{{ currentRecipe.note }}</p>
      </div>
      <div v-if="!$q.platform.is.mobile" class="col col-md-3">
        <code> state1 {{ state1 }} </code>
        <q-toggle v-model="state1.isShowLinksSM" label="Ссылки на Сбермаркет" :disable="state2.isShowLinksShop" />
        <q-select
          v-model="state1.selectedSM"
          :options="shops1"
          label="Магазин"
          class="q-select"
          :disable="state2.isShowLinksShop"
        />
      </div>
      <div v-if="!$q.platform.is.mobile" class="col col col-md-3">
        <q-toggle v-model="state2.isShowLinksShop" label="Ссылки на магазин" :disable="state1.isShowLinksSM" />
        <q-select v-model="state2.selectedShop" :options="shops2" label="Магазин" :disable="state1.isShowLinksSM" />
      </div>
    </div>
    <section>
      <h3 class="q-my-xs">Ингредиенты</h3>
      <div v-if="!state1.isShowLinksSM && !state2.isShowLinksShop">
        <ul v-for="(value, name, idx) in currentRecipe.ingredients" :key="idx">
          <li>{{ name }} – {{ value }}</li>
        </ul>
      </div>
      <div v-if="state1.isShowLinksSM">
        <ul v-for="(value, name, idx) in currentRecipe.ingredients" :key="idx">
          <span v-if="name.includes('||')">
            <a :href="linkToProductInSM(name.split('||')[0])" target="_blank">{{ name.split('||')[0] }}</a>
            ||
            <a :href="linkToProductInSM(name.split('||')[1])" target="_blank">{{ name.split('||')[1] }}</a>
            –
            {{ value }}
          </span>
          <span v-if="!name.includes('||')">
            <a :href="linkToProductInSM(name)" target="_blank">{{ name }}</a>
            –
            {{ value }}
          </span>
        </ul>
      </div>
      <div v-if="state2.isShowLinksShop">
        <ul v-for="(value, name, idx) in currentRecipe.ingredients" :key="idx">
          <span v-if="name.includes('||')">
            <a :href="linkToProductAnotherShop(name.split('||')[0])" target="_blank">{{ name.split('||')[0] }}</a>
            ||
            <a :href="linkToProductAnotherShop(name.split('||')[1])" target="_blank">{{ name.split('||')[1] }}</a>
            –
            {{ value }}
          </span>
          <span v-if="!name.includes('||')">
            <a :href="linkToProductAnotherShop(name)" target="_blank">{{ name }}</a>
            –
            {{ value }}
          </span>
        </ul>
      </div>
    </section>
    <section v-if="currentRecipe.extra">
      <h3 class="q-my-xs">Дополнительно</h3>
      <div v-if="!state1.isShowLinksSM && !state2.isShowLinksShop">
        <ul v-for="(value, name, idx) in currentRecipe.extra" :key="idx">
          <li>{{ name }} – {{ value }}</li>
        </ul>
      </div>
      <div v-if="state1.isShowLinksSM">
        <ul v-for="(value, name, idx) in currentRecipe.extra" :key="idx">
          <span v-if="name.includes('||')">
            <a :href="linkToProductInSM(name.split('||')[0])" target="_blank">{{ name.split('||')[0] }}</a>
            ||
            <a :href="linkToProductInSM(name.split('||')[1])" target="_blank">{{ name.split('||')[1] }}</a>
            –
            {{ value }}
          </span>
          <span v-if="!name.includes('||')">
            <a :href="linkToProductInSM(name)" target="_blank">{{ name }}</a>
            –
            {{ value }}
          </span>
        </ul>
      </div>
      <div v-if="state2.isShowLinksShop">
        <ul v-for="(value, name, idx) in currentRecipe.extra" :key="idx">
          <span v-if="name.includes('||')">
            <a :href="linkToProductAnotherShop(name.split('||')[0])" target="_blank">{{ name.split('||')[0] }}</a>
            ||
            <a :href="linkToProductAnotherShop(name.split('||')[1])" target="_blank">{{ name.split('||')[1] }}</a>
            –
            {{ value }}
          </span>
          <span v-if="!name.includes('||')">
            <a :href="linkToProductAnotherShop(name)" target="_blank">{{ name }}</a>
            –
            {{ value }}
          </span>
        </ul>
      </div>
    </section>
    <section>
      <h3>Приготовление</h3>
      <ul v-for="(value, name, idx) in currentRecipe.steps" :key="idx">
        <li>{{ name }}. {{ value }}</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Notify } from 'quasar';
import { useStorage } from '@vueuse/core';
import { getAllRecipes } from '@/api/recipes';
import { RecipesResponse, Recipe } from '@/api/interfaces';
import IconNature from '@/components/Icons/IconNature.vue';
import IconFeature from '@/components/Icons/IconFeature.vue';
import IconSeason from '@/components/Icons/IconSeason.vue';

const route = useRoute();
let currentRecipe: Recipe = {
  id: '',
  title: '',
  servings: 2,
  ingredients: {
    Фета: '',
  },
  steps: {
    '1': '',
  },
  nature: 'vegetable',
  feature: 'fast',
  season: 'summer',
};
const isLoading = ref(false);

let state1 = ref({ isShowLinksSM: false, selectedSM: { value: 'auchan', label: 'Ашан' } });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// let state1 = ref({}) as any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const state2 = ref({}) as any;
const shops1 = ref([
  { value: 'auchan', label: 'Ашан' },
  { value: 'lenta', label: 'Лента' },
  { value: 'globusgiper', label: 'Глобус' },
  { value: 'okey', label: 'Окей' },
]);
const shops2 = ref([
  { value: 'vprok', label: 'Впрок', link: 'https://www.vprok.ru/catalog/search?text={ingredient}' },
  { value: 'metro', label: 'Метро', link: 'https://online.metro-cc.ru/search?q={ingredient}' },
  { value: 'lenta', label: 'Лента', link: 'https://moscow.online.lenta.com/search/{ingredient}' },
  {
    value: 'perekrestok',
    label: 'Перекресток',
    link: 'https://www.perekrestok.ru/cat/search?search={ingredient}',
  },
  {
    value: 'vprokMarket',
    label: 'Впрок Я.Маркет',
    link: 'https://shop.market.yandex.ru/retail/vprok_ru?placeSlug=vprokru_omknq&query={ingredient}&standaloneType=shop',
  },
]);

onMounted(() => {
  loadRecipes();
  loadShopsFromLocalStorage();
});

function loadRecipes() {
  isLoading.value = true;
  getAllRecipes()
    .then((res: RecipesResponse) => {
      currentRecipe = res.recipes.filter((item) => item.id === route.params.id)[0];
    })
    .catch((err) => console.error(err))
    .finally(() => (isLoading.value = false));
}
function loadShopsFromLocalStorage() {
  const theDefaultSM = {
    isShowLinksSM: false,
    selectedSM: { value: 'auchan', label: 'Ашан' },
  };
  // TODO: починить переключатели и запись в local storage
  state1.value = useStorage('vue-use-local-storage-sm', theDefaultSM);
  const theDefaultShop = {
    isShowLinksShop: false,
    selectedShop: { value: 'vprok', label: 'Впрок' },
  };
  state2.value = useStorage('vue-use-local-storage-another-shop', theDefaultShop);
}
function linkToProductInSM(ingredient: string) {
  const url =
    'https://sbermarket.ru/' +
    `${state1.value.selectedSM.value}` +
    '/search?keywords=' +
    `${ingredient.trim()}` +
    `&sort=unit_price_asc`;
  return url;
}
function linkToProductAnotherShop(ingredient: string) {
  const url = shops2.value.find((item) => item.value === state2.value.selectedShop.value)!.link;
  return url.replace('{ingredient}', ingredient);
}
function wakeLock() {
  const requestWakeLock = async () => {
    try {
      const wakeLock = await navigator.wakeLock.request('screen');
      console.log(wakeLock);
      Notify.create({
        message: 'WakeLock активирован',
        type: 'warning',
      });
    } catch (err) {
      console.log(err);
    }
  };
  requestWakeLock();
}
</script>

<style scoped>
h2 {
  font-size: 1.6em;
  font-weight: 500;
  line-height: 1.2rem;
}
h3 {
  font-size: 1.4em;
  font-weight: 500;
  line-height: 1rem;
}
.q-select {
  margin: 0 10px;
}
</style>
