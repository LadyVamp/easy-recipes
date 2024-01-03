<template>
  <div class="row">
    <div class="col">
      <q-btn-group outline v-for="(item, idx) in natureButtons" :key="idx">
        <q-btn outline color="blue" :icon="item.icon" :title="item.title" @click="filterByNature(item)" />
      </q-btn-group>
    </div>
    <div class="col">
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

  <div v-if="filteredList.length > 0" class="row q-mt-md q-mr-sm">
    <div class="col-md-4 col-xl-3 col-xs-12" v-for="item in filteredList" :key="item.id">
      <q-card class="my-card">
        <q-img
          :src="
            item.imageLink
              ? item.imageLink
              : 'https://sun9-30.userapi.com/impg/Z6fkeDwvqVVJMW8lviOyW1XyryvE90wVDnSDqw/XJRUwyS8L2s.jpg?size=380x300&quality=96&sign=93e6cf0b8c57ca7ad2c2608c01b4377a'
          "
          height="200px"
        />
        <q-card-section>
          <div class="text-h6">{{ item.title }}</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getAllRecipes } from '@/api/recipes';
import { RecipesResponse, Recipe, NatureObj } from '@/api/interfaces';

export default defineComponent({
  name: 'RecipesList',
  data() {
    return {
      recipes: [] as Recipe[],
      filteredList: [] as Recipe[],
      searchValue: '',
      // https://fonts.google.com/icons?icon.set=Material+Icons&icon.query=food
      // TODO: найти нормальный набор иконок
      natureButtons: [
        { name: 'vegetable', title: 'Овощи и фрукты', icon: 'apple' },
        { name: 'bird', title: 'Птица', icon: 'rocket' },
        { name: 'meat', title: 'Мясо', icon: 'kebab_dining' },
        { name: 'fish', title: 'Рыба и морепродукты', icon: 'set_meal' },
        { name: 'dairy', title: 'Молочные продукты', icon: 'egg' },
        { name: 'dessert', title: 'Десерт', icon: 'icecream' },
      ] as NatureObj[],
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
      getAllRecipes().then((res: RecipesResponse) => {
        this.recipes = this.filteredList = res.recipes.reverse().filter((item) => item.title !== 'template_title');
        console.log('recipes', this.recipes);
      });
    },
    onSearchInput() {
      this.filteredList = this.recipes.filter((item) =>
        item.title.toLowerCase().includes(this.searchValue.toLowerCase()),
      );
    },
    filterByNature(obj: NatureObj) {
      this.filteredList = this.recipes.filter((item) => obj.name === item.staple);
    },
  },
});
</script>

<style scoped>
.my-card {
  margin: 5px;
  min-width: 300px;
}
.text-h6 {
  line-height: 1.1rem;
  word-break: normal;
}

.min-w-405 {
  width: 405px;
  min-width: 405px;
}
</style>
