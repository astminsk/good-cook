import * as actionTypes from "../constants/recipeConstants";
import axios from "axios";

export const getRecipes = () => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_RECIPES_REQUEST });
  
      const { data } = await axios.get("/api/recipes");
  
      dispatch({
        type: actionTypes.GET_RECIPES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_RECIPES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const getRecipeDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_RECIPE_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/recipes/${id}`);
  
      dispatch({
        type: actionTypes.GET_RECIPE_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_RECIPE_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const removeRecipeDetails = () => (dispatch) => {
    dispatch({ type: actionTypes.GET_RECIPE_DETAILS_RESET });
  };