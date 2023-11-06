<template>
  <div>
    <div class="row">
      <div class="col-md-4 col-xl-3 col-xs-12">
        <q-input
          v-model="searchValue"
          label="Поиск по названию"
          @update:model-value="onSearchInput"
        />
      </div>
    </div>
    <div class="row q-mt-md q-mr-sm">
      <div class="col-md-4 col-xl-3 col-xs-12" v-for="item in filteredList">
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAllRecipes } from "../../api/recipes";
import { RecipesResponse, Recipe } from "../../api/interfaces";

export default defineComponent({
  name: "RecipesList",
  data() {
    return {
      recipes: [] as Recipe[],
      filteredList: [] as Recipe[],
      searchValue: "",
    };
  },
  created() {
    this.loadRecipes();
  },
  updated() {
    if (this.recipes.length === 0 && this.searchValue === "") {
      this.loadRecipes();
    }
  },
  methods: {
    loadRecipes() {
      getAllRecipes().then((res: RecipesResponse) => {
        this.recipes = this.filteredList = res.recipes
          .reverse()
          .filter((item) => item.title !== "template_title");
        console.log("recipes", this.recipes);
      });
    },
    onSearchInput() {
      this.filteredList = this.recipes.filter((item) =>
        item.title.toLowerCase().includes(this.searchValue.toLowerCase())
      );
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
</style>
