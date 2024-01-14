import axios from 'axios';

import type { RecipesResponse } from './interfaces';

const recipes = '/recipes.json';

export const getAllRecipes = async () => {
  const response = await axios.get<RecipesResponse>(recipes);
  return response.data;
};
