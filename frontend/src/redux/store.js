import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import {
  getRecipeDetailsReducer, 
  getRecipesReducer,
 } from "./reducers/recipeReducers";

const reducer = combineReducers({
  getRecipes: getRecipesReducer,
  getRecipeDetails: getRecipeDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;