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
        TODO: ссылки<br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quod neque fuga nostrum, enim vero itaque
        sed cupiditate necessitatibus et eius vitae accusamus tenetur, dolor ratione amet corporis? Distinctio,
        voluptatum.
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
        <ul v-for="(value, name, idx) in currentRecipe.ingredients" :key="idx">
          <li>{{ name }} – {{ value }}</li>
        </ul>
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
