<template>
  <div v-if="!isLoading">
    <div class="row">
      <div class="col-6 col-md-6 col-xs-12 justify-start">
        <h2>{{ currentRecipe.title }}</h2>
        <div>
          <q-img :src="'/recipe-images/' + currentRecipe.id + '.jpg'" width="400px" />
        </div>
      </div>
      <div class="col-6 col-md-6 col-xs-12 justify-start">
        <div class="row">
          <div class="col-6">
            <q-toggle v-model="isShowLinksSber" label="Ссылки на Сбермаркет" />
            <q-select v-model="selectedShop" :options="shops" label="Магазин" />
            <q-select v-model="selectedSort" :options="sortOptions" label="Сортировка" />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-12 col-xs-12 justify-start">
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
        <p class="text-green-10" v-if="currentRecipe.note">{{ currentRecipe.note }}</p>
        <h3>Ингредиенты</h3>
        <div v-if="!isShowLinksSber">
          <ul v-for="(value, name, idx) in currentRecipe.ingredients" :key="idx">
            <li>{{ name }} – {{ value }}</li>
          </ul>
        </div>
        <!-- TODO: ссылки для || -->
        <div v-if="isShowLinksSber">
          <ul v-for="(value, name, idx) in currentRecipe.ingredients" :key="idx">
            <a :href="linkToProductInSber(name)" target="_blank">{{ name }}</a>
            –
            {{
              value
            }}
          </ul>
        </div>
        <h3>Приготовление</h3>
        <ul v-for="(value, name, idx) in currentRecipe.steps" :key="idx">
          <li>{{ name }}. {{ value }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getAllRecipes } from '@/api/recipes';
import { RecipesResponse, Recipe } from '@/api/interfaces';
import IconNature from '@/components/Icons/IconNature.vue';
import IconFeature from '@/components/Icons/IconFeature.vue';
import IconSeason from '@/components/Icons/IconSeason.vue';

export default defineComponent({
  name: 'RecipeDetails',
  components: {
    IconNature,
    IconFeature,
    IconSeason,
  },
  data() {
    return {
      currentRecipe: {} as Recipe,
      isLoading: false,
      isShowLinksSber: false,
      shops: [
        { value: 'auchan', label: 'Ашан' },
        { value: 'lenta', label: 'Лента' },
        { value: 'globus', label: 'Глобус' },
        { value: 'okey', label: 'Окей' },
      ],
      selectedShop: { value: 'auchan', label: 'Ашан' },
      sortOptions: [
        { value: 'popularity', label: 'По популярности' },
        { value: 'price_asc', label: 'Сначала дешевые' },
        { value: 'price_desc', label: 'Сначала дорогие' },
        { value: 'unit_price_asc', label: 'Выгоднее по весу' },
      ],
      selectedSort: { value: 'unit_price_asc', label: 'Выгоднее по весу' },
    };
  },
  created() {
    this.loadRecipes();
  },
  methods: {
    loadRecipes() {
      this.isLoading = true;
      getAllRecipes()
        .then((res: RecipesResponse) => {
          this.currentRecipe = res.recipes.filter((item) => item.id === this.$route.params.id)[0];
        })
        .catch((err) => console.error(err))
        .finally(() => (this.isLoading = false));
    },
    linkToProductInSber(ingredient: string) {
      const url =
        'https://sbermarket.ru/' +
        `${this.selectedShop.value}` +
        '/search?keywords=' +
        `${ingredient.trim()}` +
        `&sort=` +
        `${this.selectedSort.value}`;
      return url;
    },
  },
});
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
</style>
