<template>
  <div class="row">
    <div class="col-6 col-md-6 col-xs-12 column justify-start items-start content-start">
      <div class="q-pa-xs">
        <q-btn-group v-for="(item, idx) in natureButtons" :key="idx" outline class="d-block">
          <q-btn
            outline
            :color="item.color"
            :icon="item.icon"
            :title="item.title"
            class="border-gray"
            @click="filterByNature(item)"
          />
        </q-btn-group>
      </div>
      <div class="q-pa-xs">
        <q-btn-group v-for="(item, idx) in featureButtons" :key="idx" outline>
          <q-btn
            outline
            color="orange-5"
            :icon="item.icon"
            :title="item.title"
            class="border-gray"
            @click="filterByFeature(item)"
          />
        </q-btn-group>
      </div>
      <div class="q-pa-xs">
        <q-btn-group v-for="(item, idx) in seasonButtons" :key="idx" outline>
          <q-btn
            outline
            :color="item.color"
            :icon="item.icon"
            :title="item.title"
            class="border-gray"
            @click="filterBySeason(item)"
          />
        </q-btn-group>
      </div>
    </div>
    <div class="col-6 col-md-6 col-xs-12">
      <div class="row">
        <div class="col-6">
          <q-select v-model="selectedSearchKey" :options="searchKeys" label="Поиск" />
        </div>
        <div class="col-6">
          <q-input v-model="searchValue" filled type="search" hint="Поиск" @update:model-value="onSearchInput">
            <template #append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </div>
    </div>
  </div>
  <div class="row justify-between q-pa-xs">
    <div>
      <q-select
        v-model="selectedServings"
        :options="servings"
        label="Порций"
        class="select-servings"
        @update:model-value="onServingsSelect"
      />
    </div>
    <div class="col-1 q-mt-lg w-50">{{ filteredList.length }}</div>
  </div>
  <div>
    <q-toggle
      v-model="isShowKidsMenu"
      checked-icon="mdi-teddy-bear"
      color="orange-10"
      label="Детское меню"
      @click="filterByIsKidsMenu"
    />
  </div>
  <div v-if="filteredList.length < 4" class="invisible">
    Текст, чтобы блоки не скукожились. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quae molestias
    perspiciatis beatae? Culpa nisi dolorum sed id impedit illo enim fugit molestias obcaecati esse.
  </div>
  <div v-if="filteredList.length > 0" class="row q-mt-md q-mr-sm">
    <div v-for="item in filteredList" :key="item.id" class="col-md-4 col-xl-3 col-xs-12">
      <q-card class="my-card">
        <q-card-section>
          <router-link
            :to="{
              name: 'RecipeDetails',
              params: { id: item.id },
            }"
          >
            <q-img :src="'/easy-recipes/recipe-images/' + item.id + '.jpg'" height="200px" />
            <div class="text-h6 q-pa-xs">
              {{ item.title }}
            </div>
            <IconNature :nature="item.nature" />
            <IconFeature :feature="item.feature" />
            <IconSeason :season="item.season" />
            <q-icon v-if="item.isKidsMenu" name="mdi-teddy-bear" color="orange-10" size="24px" title="Детское меню" />
          </router-link>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import uniq from 'lodash-es/uniq';
import { defineComponent } from 'vue';
import { getAllRecipes } from '@/api/recipes';
import { RecipesResponse, Recipe, NatureObj, FeatureObj, SeasonObj, Serving } from '@/api/interfaces';
import IconNature from '@/components/Icons/IconNature.vue';
import IconFeature from '@/components/Icons/IconFeature.vue';
import IconSeason from '@/components/Icons/IconSeason.vue';

export default defineComponent({
  name: 'RecipesList',
  components: {
    IconNature,
    IconFeature,
    IconSeason,
  },
  data() {
    return {
      isShowKidsMenu: false,
      recipes: [] as Recipe[],
      filteredList: [] as Recipe[],
      searchValue: '',
      searchKeys: [
        { value: 'title', label: 'По названию' },
        { value: 'ingredients', label: 'По ингредиентам' },
      ],
      selectedSearchKey: { value: 'title', label: 'По названию' },
      servings: [
        { value: 'all', label: 'Все' },
        { value: 2, label: 2 },
        { value: 4, label: 4 },
        { value: 6, label: 6 },
      ],
      selectedServings: { value: 'all', label: 'Все' },
      // https://pictogrammers.com/library/mdi/
      // https://quasar.dev/style/color-palette/
      natureButtons: [
        { name: 'all', title: 'Все', icon: 'mdi-layers-outline', color: 'yellow-6' },
        { name: 'vegetable', title: 'Овощи и фрукты', icon: 'mdi-food-apple', color: 'green-6' },
        { name: 'bird', title: 'Птица', icon: 'mdi-food-drumstick', color: 'pink-2' },
        { name: 'meat', title: 'Мясо', icon: 'mdi-food-steak', color: 'red-4' },
        { name: 'fish', title: 'Рыба и морепродукты', icon: 'mdi-fish', color: 'blue-5' },
        { name: 'dairy', title: 'Молочные продукты', icon: 'mdi-cheese', color: 'yellow-7' },
        { name: 'dessert', title: 'Десерт', icon: 'mdi-candy', color: 'lime-6' },
      ] as NatureObj[],
      featureButtons: [
        { name: 'all', title: 'Все', icon: 'mdi-layers-outline' },
        { name: 'fast', title: 'Быстрый', icon: 'mdi-clock-fast' },
        { name: 'oven', title: 'Духовка', icon: 'mdi-stove' },
        { name: 'pot', title: 'Кастрюля', icon: 'mdi-pot-steam-outline' },
        { name: 'stewingdish', title: 'Утятница', icon: 'mdi-dome-light' },
        { name: 'grill', title: 'Гриль', icon: 'mdi-grill' },
        { name: 'toaster', title: 'Мультипекарь', icon: 'mdi-toaster' },
        { name: 'afghan_cauldron', title: 'Афганский казан', icon: 'mdi-kettlebell' },
        { name: 'multicooker', title: 'Мультиварка', icon: 'mdi-food-takeout-box-outline' },
      ] as FeatureObj[],
      seasonButtons: [
        { name: 'all', title: 'Все сезоны', icon: 'mdi-sun-snowflake', color: 'light-green-5' },
        { name: 'summer', title: 'Лето', icon: 'mdi-white-balance-sunny', color: 'yellow-6' },
      ] as SeasonObj[],
    };
  },
  created() {
    this.loadRecipes();
  },
  updated() {
    if (this.recipes.length === 0 && this.searchValue === '') {
      this.loadRecipes();
    }
  },
  methods: {
    loadRecipes() {
      getAllRecipes()
        .then((res: RecipesResponse) => {
          this.recipes = this.filteredList = res.recipes.reverse().filter((item) => item.title !== 'template_title');
        })
        .catch((err) => console.error(err));
    },
    onSearchInput() {
      const searchInput = this.searchValue.toLowerCase();
      if (searchInput !== '' && this.selectedSearchKey.value === 'title') {
        this.filteredList = this.searchByTitle(searchInput);
      }
      if (searchInput !== '' && this.selectedSearchKey.value === 'ingredients') {
        this.filteredList = this.searchByIngredients(searchInput);
      }
    },
    searchByTitle(searchInput: string) {
      return this.recipes.filter((recipe) => recipe.title.toLowerCase().includes(searchInput));
    },
    searchByIngredients(searchInput: string) {
      let recipes = [] as Recipe[];
      this.recipes.forEach((recipe) => {
        if (recipe.ingredients) {
          Object.keys(recipe.ingredients).forEach((item) => {
            if (item.toLowerCase().includes(searchInput)) {
              recipes.push(recipe);
            }
          });
        }
      });
      return uniq(recipes);
    },
    filterByNature(obj: NatureObj) {
      obj.name === 'all'
        ? (this.filteredList = this.recipes)
        : (this.filteredList = this.recipes.filter((item) => obj.name === item.nature));
    },
    filterByFeature(obj: FeatureObj) {
      obj.name === 'all'
        ? (this.filteredList = this.recipes)
        : (this.filteredList = this.recipes.filter((item) => obj.name === item.feature));
    },
    filterBySeason(obj: SeasonObj) {
      obj.name === 'all'
        ? (this.filteredList = this.recipes)
        : (this.filteredList = this.recipes.filter((item) => obj.name === item.season));
    },
    onServingsSelect(value: Serving) {
      value.value === 'all'
        ? (this.filteredList = this.recipes)
        : (this.filteredList = this.recipes.filter((item) => item.servings === value.value));
    },
    filterByIsKidsMenu() {
      this.isShowKidsMenu === true
        ? (this.filteredList = this.recipes.filter((item) => item.isKidsMenu === true))
        : (this.filteredList = this.recipes);
    },
  },
});
</script>

<style scoped>
.my-card {
  margin: 5px;
  height: 300px;
  min-width: 300px;
}
.text-h6 {
  line-height: 1.1rem;
  word-break: normal;
}
.border-gray:before {
  border: 1px solid lightgray;
}
.select-servings {
  width: 100px;
}
.w-50 {
  width: 50px;
}
</style>
