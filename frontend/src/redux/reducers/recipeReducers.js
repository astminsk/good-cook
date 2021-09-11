import * as actionTypes from "../constants/recipeConstants";

export const getRecipesReducer = (state = { recipes: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_RECIPES_REQUEST:
      return {
        loading: true,
        recipes: [],
      };
    case actionTypes.GET_RECIPES_SUCCESS:
      return {
        recipes: action.payload,
        loading: false,
      };
    case actionTypes.GET_RECIPES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getRecipeDetailsReducer = (state = { recipe: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_RECIPE_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_RECIPE_DETAILS_SUCCESS:
      return {
        loading: false,
        recipe: action.payload,
      };
    case actionTypes.GET_RECIPE_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_RECIPE_DETAILS_RESET:
      return {
        recipe: {},
      };
    default:
      return state;
  }
};