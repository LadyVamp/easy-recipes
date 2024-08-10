import axios from 'axios';

import type { RecipesResponse } from './interfaces';

const recipes = '/easy-recipes/recipes.json';

export const getAllRecipes = async () => {
  const response = await axios.get<RecipesResponse>(recipes);
  return response.data;
};
