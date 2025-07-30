<template>
  <div v-if="!isLoading">
    <q-btn outline color="secondary" :icon="'mdi-arrow-left'" :to="'/'" class="border-gray" />
    <h2 class="q-my-xs">
      {{ currentRecipe.title }}
      <q-btn
        flat
        round
        color="secondary"
        icon="mdi-content-copy"
        title="Скопировать"
        @click="copyToClipBoard(currentRecipe.title)"
      />
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
            <WakelockButton />
          </div>
        </div>
        <p v-if="currentRecipe.note" class="text-note-color q-pl-xs">
          {{ currentRecipe.note }}
        </p>
      </div>
      <div class="col col-md-4 col-xs-12 q-my-xs">
        <div class="row">
          <div class="col col-md-6 col-xs-6 q-mt-sm">
            <q-toggle v-model="isShowLinksShop1" label="Ссылки на магазины" />
            <q-toggle v-model="isShowCopyIngredientButton" label="Кнопка копирования названия ингредиента" />
          </div>
          <div class="col col-md-6 col-xs-6">
            <DropdownListShops v-model="selectedShop1" />
          </div>
        </div>
      </div>
    </div>
    <section>
      <h3 class="q-my-sm">Ингредиенты</h3>
      <div v-if="!isShowLinksShop1">
        <ul v-for="(value, name, idx) in currentRecipe.ingredients" :key="idx" class="q-pl-md">
          <li>{{ name }} – {{ value }}</li>
        </ul>
      </div>
      <div v-if="isShowLinksShop1">
        <ul v-for="(value, name, idx) in currentRecipe.ingredients" :key="idx" class="q-pl-md">
          <span v-if="name.includes('||')">
            <a :href="linkToProductShop1(name.split('||')[0])" target="_blank">{{ name.split('||')[0] }}</a>
            ||
            <a :href="linkToProductShop1(name.split('||')[1])" target="_blank">{{ name.split('||')[1] }}</a>
            –
            {{ value }}
          </span>
          <span v-if="!name.includes('||')">
            <a :href="linkToProductShop1(name)" target="_blank">{{ name }}</a>
            <q-btn
              v-if="isShowCopyIngredientButton"
              size="xs"
              flat
              round
              color="secondary"
              icon="mdi-content-copy"
              title="Скопировать"
              @click="copyToClipBoard(name)"
            />
            –
            {{ value }}
          </span>
        </ul>
      </div>
    </section>
    <section v-if="currentRecipe.extra">
      <h3 class="q-my-xs">Дополнительно</h3>
      <div v-if="!isShowLinksShop1">
        <ul v-for="(value, name, idx) in currentRecipe.extra" :key="idx" class="q-pl-md">
          <li>{{ name }} – {{ value }}</li>
        </ul>
      </div>
      <div v-if="isShowLinksShop1">
        <ul v-for="(value, name, idx) in currentRecipe.extra" :key="idx" class="q-pl-md">
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
    </section>
    <section>
      <h3>Приготовление</h3>
      <ul v-for="(value, name, idx) in currentRecipe.steps" :key="idx" class="q-pl-md">
        <li>{{ name }}. {{ value }}</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getAllRecipes } from '@/api/recipes';
import { RecipesResponse, Recipe } from '@/api/interfaces';
import IconNature from '@/components/Icons/IconNature.vue';
import IconFeature from '@/components/Icons/IconFeature.vue';
import IconSeason from '@/components/Icons/IconSeason.vue';
import DropdownListShops from '@/components/DropdownListShops.vue';
import WakelockButton from '@/components/Shared/WakelockButton.vue';
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
const isShowCopyIngredientButton = ref(false);

const { isShowLinksShop1 } = useSelectedShops();
const { selectedShop1 } = useSelectedShops();

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
    return 'https://kuper.ru/multisearch?q=' + ingredient.trim();
  } else {
    return selectedShop1.value.link?.replace('ingredient', ingredient.trim());
  }
}

function copyToClipBoard(textToCopy: string) {
  navigator.clipboard.writeText(textToCopy);
}
</script>

<style scoped>
.q-select {
  margin: 0 10px;
}
.border-gray:before {
  border: 1px solid lightgray;
}
</style>
