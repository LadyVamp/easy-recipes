<template>
  <div class="q-pa-md q-gutter-md">
    <div class="row">
      <div class="col-md-4 col-xl-3" v-for="item in recipes">
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
import { RecipesResponse } from "../../api/types";

export default defineComponent({
  name: "RecipesList",
  data() {
    return {
      recipes: [],
    };
  },
  created() {
    this.loadRecipes();
  },
  methods: {
    loadRecipes() {
      getAllRecipes().then((res: RecipesResponse) => {
        this.recipes = res.recipes
          .reverse()
          .filter((item) => item.title !== "template_title");
        console.log(this.recipes);
      });
    },
  },
});
</script>

<style scoped>
.my-card {
  margin: 5px;
}
</style>
