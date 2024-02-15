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
            <q-toggle v-model="isShowLinksSM" label="Ссылки на Сбермаркет" :disable="isShowLinksAnotherShop" />
            <q-select v-model="selectedShopSM" :options="shopsSM" label="Магазин" />
            <q-select v-model="selectedSort" :options="sortOptions" label="Сортировка" />
          </div>
          <div class="col-6">
            <q-toggle v-model="isShowLinksAnotherShop" label="Ссылки на магазин" :disable="isShowLinksSM" />
            <q-select v-model="selectedShop" :options="shops" label="Магазин" />
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
        <div v-if="!isShowLinksSM && !isShowLinksAnotherShop">
          <ul v-for="(value, name, idx) in currentRecipe.ingredients" :key="idx">
            <li>{{ name }} – {{ value }}</li>
          </ul>
        </div>
        <!-- TODO: ссылки для || -->
        <div v-if="isShowLinksSM">
          <ul v-for="(value, name, idx) in currentRecipe.ingredients" :key="idx">
            <a :href="linkToProductInSM(name)" target="_blank">{{ name }}</a>
            –
            {{
              value
            }}
          </ul>
        </div>
        <div v-if="isShowLinksAnotherShop">
          <ul v-for="(value, name, idx) in currentRecipe.ingredients" :key="idx">
            <a :href="linkToProductAnotherShop(name)" target="_blank">{{ name }}</a>
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
      isShowLinksSM: false,
      shopsSM: [
        { value: 'auchan', label: 'Ашан' },
        { value: 'lenta', label: 'Лента' },
        { value: 'globusgiper', label: 'Глобус' },
        { value: 'okey', label: 'Окей' },
      ],
      selectedShopSM: { value: 'auchan', label: 'Ашан' },
      sortOptions: [
        { value: 'popularity', label: 'По популярности' },
        { value: 'price_asc', label: 'Сначала дешевые' },
        { value: 'price_desc', label: 'Сначала дорогие' },
        { value: 'unit_price_asc', label: 'Выгоднее по весу' },
      ],
      selectedSort: { value: 'unit_price_asc', label: 'Выгоднее по весу' },
      isShowLinksAnotherShop: false,
      selectedShop: { value: 'vprok', label: 'Впрок' },
      shops: [
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
      ],
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
    linkToProductInSM(ingredient: string) {
      const url =
        'https://sbermarket.ru/' +
        `${this.selectedShopSM.value}` +
        '/search?keywords=' +
        `${ingredient.trim()}` +
        `&sort=` +
        `${this.selectedSort.value}`;
      return url;
    },
    linkToProductAnotherShop(ingredient: string) {
      let url = this.shops.find((item) => item.value === this.selectedShop.value)!.link;
      url = url.replace('{ingredient}', ingredient);
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
