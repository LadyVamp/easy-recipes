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
        <q-toggle v-model="isShowLinksSM" label="Ссылки на Сбермаркет" :disable="isShowLinksAnotherShop" />
        <q-select
          v-model="selectedShopSM"
          :options="shopsSM"
          label="Магазин"
          class="q-select"
          :disable="isShowLinksAnotherShop"
        />
        <q-select v-model="selectedSort" :options="sortOptions" label="Сортировка" :disable="isShowLinksAnotherShop" />
      </div>
      <div v-if="!$q.platform.is.mobile" class="col col col-md-3">
        <q-toggle v-model="isShowLinksAnotherShop" label="Ссылки на магазин" :disable="isShowLinksSM" />
        <q-select v-model="selectedShop" :options="shops" label="Магазин" :disable="isShowLinksSM" />
      </div>
    </div>
    <section>
      <h3 class="q-my-xs">Ингредиенты</h3>
      <div v-if="!isShowLinksSM && !isShowLinksAnotherShop">
        <ul v-for="(value, name, idx) in currentRecipe.ingredients" :key="idx">
          <li>{{ name }} – {{ value }}</li>
        </ul>
      </div>
      <div v-if="isShowLinksSM">
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
      <div v-if="isShowLinksAnotherShop">
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
      <div v-if="!isShowLinksSM && !isShowLinksAnotherShop">
        <ul v-for="(value, name, idx) in currentRecipe.extra" :key="idx">
          <li>{{ name }} – {{ value }}</li>
        </ul>
      </div>
      <div v-if="isShowLinksSM">
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
      <div v-if="isShowLinksAnotherShop">
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

<script lang="ts">
import { defineComponent } from 'vue';
import { Notify } from 'quasar';
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
      const url = this.shops.find((item) => item.value === this.selectedShop.value)!.link;
      return url.replace('{ingredient}', ingredient);
    },
    wakeLock() {
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
.q-select {
  margin: 0 10px;
}
</style>
