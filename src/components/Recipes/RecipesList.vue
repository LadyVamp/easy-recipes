<template>
  <div class="row">
    <div class="col-6 col-md-6 col-xs-12 column justify-start items-start content-start">
      <div class="q-pa-xs">
        <q-btn-group outline v-for="(item, idx) in natureButtons" :key="idx" class="d-block">
          <q-btn
            outline
            :color="item.color"
            :icon="item.icon"
            :title="item.title"
            @click="filterByNature(item)"
            class="border-gray"
          />
        </q-btn-group>
      </div>
      <div class="q-pa-xs">
        <q-btn-group outline v-for="(item, idx) in featureButtons" :key="idx">
          <q-btn
            outline
            color="orange-5"
            :icon="item.icon"
            :title="item.title"
            @click="filterByFeature(item)"
            class="border-gray"
          />
        </q-btn-group>
      </div>
      <div class="q-pa-xs">
        <q-btn-group outline v-for="(item, idx) in seasonButtons" :key="idx">
          <q-btn
            outline
            :color="item.color"
            :icon="item.icon"
            :title="item.title"
            @click="filterBySeason(item)"
            class="border-gray"
          />
        </q-btn-group>
      </div>
    </div>
    <div class="col-6 col-md-6 col-xs-12">
      <q-input
        class="min-w-405"
        v-model="searchValue"
        filled
        type="search"
        hint="Поиск по названию"
        @update:model-value="onSearchInput"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
  </div>

  <div v-if="filteredList.length < 4" class="invisible">
    Текст, чтобы блоки не скукожились. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quae molestias
    perspiciatis beatae? Culpa nisi dolorum sed id impedit illo enim fugit molestias obcaecati esse.
  </div>
  <div v-if="filteredList.length > 0" class="row q-mt-md q-mr-sm">
    <div class="col-md-4 col-xl-3 col-xs-12" v-for="item in filteredList" :key="item.id">
      <q-card class="my-card">
        <q-card-section>
          <router-link
            :to="{
              name: 'RecipeDetails',
              params: { id: item.id },
            }"
          >
            <q-img :src="'/recipe-images/' + item.id + '.jpg'" height="200px" />
            <div class="text-h6 q-pa-xs">{{ item.title }}</div>
            <IconNature :nature="item.nature" />
            <IconFeature :feature="item.feature" />
            <IconSeason :season="item.season" />
          </router-link>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getAllRecipes } from '@/api/recipes';
import { RecipesResponse, Recipe, NatureObj, FeatureObj, SeasonObj } from '@/api/interfaces';
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
      recipes: [] as Recipe[],
      filteredList: [] as Recipe[],
      searchValue: '',
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
      ] as FeatureObj[],
      seasonButtons: [
        { name: 'all', title: 'Все сезоны', icon: 'mdi-sun-snowflake', color: 'light-green-5' },
        { name: 'winter', title: 'Зима', icon: 'mdi-snowflake', color: 'light-blue-12' },
        { name: 'spring', title: 'Весна', icon: 'mdi-flower-tulip', color: 'green-13' },
        { name: 'summer', title: 'Лето', icon: 'mdi-white-balance-sunny', color: 'yellow-6' },
        { name: 'autumn', title: 'Осень', icon: 'mdi-leaf-maple', color: 'amber-10' },
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
      this.filteredList = this.recipes.filter((item) =>
        item.title.toLowerCase().includes(this.searchValue.toLowerCase()),
      );
    },
    filterByNature(obj: NatureObj) {
      if (obj.name === 'all') {
        this.filteredList = this.recipes;
      } else {
        this.filteredList = this.recipes.filter((item) => obj.name === item.nature);
      }
    },
    filterByFeature(obj: FeatureObj) {
      if (obj.name === 'all') {
        this.filteredList = this.recipes;
      } else {
        this.filteredList = this.recipes.filter((item) => obj.name === item.feature);
      }
    },
    filterBySeason(obj: SeasonObj) {
      if (obj.name === 'all') {
        this.filteredList = this.recipes;
      } else {
        this.filteredList = this.recipes.filter((item) => obj.name === item.season);
      }
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
</style>
