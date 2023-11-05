import axios from "axios";

import type { RecipesResponse } from "./types";

const recipes =
  "https://gist.githubusercontent.com/LadyVamp/628c9e7aa0d9d26971bf9d512cef6bbe/raw/9131d407b67a243103cb2388d6ad21f20c982488/recipes-2023-10-09.json";

export const getAllRecipes = async () => {
  const response = await axios.get<RecipesResponse>(recipes);
  return response.data;
};
