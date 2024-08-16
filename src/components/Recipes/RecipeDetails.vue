<template>
  <div v-if="!isLoading">
    <h2 class="q-my-xs">
      {{ currentRecipe.title }}
    </h2>
    <div v-if="currentRecipe.id !== ''" class="row">
      <div class="col col-md-3 col-xs-12">
        <img :src="'/easy-recipes/recipe-images/' + currentRecipe.id + '.jpg'" />
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
          <div v-if="$q.platform.is.mobile" class="col col-xs-2 q-mt-xs">
            <q-btn outline round color="warning" icon="mdi-sleep-off" @click="wakeLock" />
          </div>
        </div>
        <p v-if="currentRecipe.note" class="text-note-color q-pl-xs">
          {{ currentRecipe.note }}
        </p>
      </div>
      <div v-if="!$q.platform.is.mobile" class="col col-md-3">
        <q-toggle v-model="isShowLinksShop1" label="Ссылки на Купер" :disable="isShowLinksShop2" />
        <q-select
          v-model="selectedShop1"
          :options="shops1"
          label="Магазин"
          class="q-select"
          :disable="isShowLinksShop2"
        />
      </div>
      <div v-if="!$q.platform.is.mobile" class="col col col-md-3">
        <q-toggle v-model="isShowLinksShop2" label="Ссылки на магазин" :disable="isShowLinksShop1" />
        <q-select v-model="selectedShop2" :options="shops2" label="Магазин" :disable="isShowLinksShop1" />
      </div>
    </div>
    <section>
      <h3 class="q-my-xs">Ингредиенты</h3>
      <div v-if="!isShowLinksShop1 && !isShowLinksShop2">
        <ul v-for="(value, name, idx) in currentRecipe.ingredients" :key="idx">
          <li>{{ name }} – {{ value }}</li>
        </ul>
      </div>
      <div v-if="isShowLinksShop1">
        <ul v-for="(value, name, idx) in currentRecipe.ingredients" :key="idx">
          <span v-if="name.includes('||')">
            <a :href="linkToProductShop1(name.split('||')[0])" target="_blank">{{ name.split('||')[0] }}</a>
            ||
            <a :href="linkToProductShop1(name.split('||')[1])" target="_blank">{{ name.split('||')[1] }}</a>
            –
            {{ value }}
          </span>
          <span v-if="!name.includes('||')">
            <a :href="linkToProductShop1(name)" target="_blank">{{ name }}</a>
            –
            {{ value }}
          </span>
        </ul>
      </div>
      <div v-if="isShowLinksShop2">
        <ul v-for="(value, name, idx) in currentRecipe.ingredients" :key="idx">
          <span v-if="name.includes('||')">
            <a :href="linkToProductShop2(name.split('||')[0])" target="_blank">{{ name.split('||')[0] }}</a>
            ||
            <a :href="linkToProductShop2(name.split('||')[1])" target="_blank">{{ name.split('||')[1] }}</a>
            –
            {{ value }}
          </span>
          <span v-if="!name.includes('||')">
            <a :href="linkToProductShop2(name)" target="_blank">{{ name }}</a>
            –
            {{ value }}
          </span>
        </ul>
      </div>
    </section>
    <section v-if="currentRecipe.extra">
      <h3 class="q-my-xs">Дополнительно</h3>
      <div v-if="!isShowLinksShop1 && !isShowLinksShop2">
        <ul v-for="(value, name, idx) in currentRecipe.extra" :key="idx">
          <li>{{ name }} – {{ value }}</li>
        </ul>
      </div>
      <div v-if="isShowLinksShop1">
        <ul v-for="(value, name, idx) in currentRecipe.extra" :key="idx">
          <span v-if="name.includes('||')">
            <a :href="linkToProductShop1(name.split('||')[0])" target="_blank">{{ name.split('||')[0] }}</a>
            ||
            <a :href="linkToProductShop1(name.split('||')[1])" target="_blank">{{ name.split('||')[1] }}</a>
            –
            {{ value }}
          </span>
          <span v-if="!name.includes('||')">
            <a :href="linkToProductShop1(name)" target="_blank">{{ name }}</a>
            –
            {{ value }}
          </span>
        </ul>
      </div>
      <div v-if="isShowLinksShop2">
        <ul v-for="(value, name, idx) in currentRecipe.extra" :key="idx">
          <span v-if="name.includes('||')">
            <a :href="linkToProductShop2(name.split('||')[0])" target="_blank">{{ name.split('||')[0] }}</a>
            ||
            <a :href="linkToProductShop2(name.split('||')[1])" target="_blank">{{ name.split('||')[1] }}</a>
            –
            {{ value }}
          </span>
          <span v-if="!name.includes('||')">
            <a :href="linkToProductShop2(name)" target="_blank">{{ name }}</a>
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
import { getAllRecipes } from '@/api/recipes';
import { RecipesResponse, Recipe } from '@/api/interfaces';
import IconNature from '@/components/Icons/IconNature.vue';
import IconFeature from '@/components/Icons/IconFeature.vue';
import IconSeason from '@/components/Icons/IconSeason.vue';
import { useSelectedShops } from '@/composables/useSelectedShops';

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

const { isShowLinksShop1 } = useSelectedShops();
const { isShowLinksShop2 } = useSelectedShops();
const { selectedShop1 } = useSelectedShops();
const { selectedShop2 } = useSelectedShops();

const shops1 = ref([
  { value: 'multisearch', label: 'Все магазины' },
  { value: 'auchan', label: 'Ашан' },
  { value: 'lenta', label: 'Лента' },
  { value: 'globusgiper', label: 'Глобус' },
  { value: 'okey', label: 'Окей' },
  { value: 'perekrestok', label: 'Перекресток' },
  { value: 'perekrestokvprok', label: 'Перекресток Впрок' },
  { value: 'metro', label: 'Metro' },
  { value: 'vkusvill_darkstore', label: 'Вкусвилл' },
]);
const shops2 = ref([
  { value: 'vprok', label: 'Впрок', link: 'https://www.vprok.ru/catalog/search?text={ingredient}' },
  { value: 'lenta', label: 'Лента', link: 'https://moscow.online.lenta.com/search/{ingredient}' },
  {
    value: 'vkusvill',
    label: 'Вкусвилл',
    link: 'https://vkusvill.ru/search/?type=products&q={ingredient}',
  },
  {
    value: 'dixy',
    label: 'Дикси',
    link: 'https://dostavka.dixy.ru/catalog/?q={ingredient}',
  },
]);

onMounted(() => {
  loadRecipes();
});

function loadRecipes() {
  isLoading.value = true;
  getAllRecipes()
    .then((res: RecipesResponse) => {
      currentRecipe = res.recipes.filter((item) => item.id === route.params.id)[0];
      document.title = `${currentRecipe.title}`;
    })
    .catch((err) => console.error(err))
    .finally(() => (isLoading.value = false));
}

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
function linkToProductShop2(ingredient: string) {
  const url = shops2.value.find((item) => item.value === selectedShop2.value.value)!.link;
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
  font-size: 1.7em;
  font-weight: 500;
  line-height: 1.2rem;
  color: #00b4ff;
}
h3 {
  font-size: 1.4em;
  font-weight: 500;
  line-height: 1rem;
  color: #00b4ff;
}
.q-select {
  margin: 0 10px;
}
</style>
