import './HomeScreen.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

// Components
import Recipe from "../components/Recipe";

// Actions
import {getRecipes as listRecipes } from '../redux/actions/recipeActions';

const HomeScreen = () => {

    const dispatch = useDispatch();

    const getRecipes = useSelector(state => state.getRecipes);
    const { recipes, loading, error } = getRecipes;
  
    useEffect(() => {
      dispatch(listRecipes());
  
    }, [dispatch]);

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Кулинарные рецепты</h2>
            <div className="homescreen__recipes">
            {loading ? (
          <h2>Загрузка...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          recipes.map((recipe) => (
            <Recipe
              key={recipe._id}
              name={recipe.name} 
              ingredients={recipe.ingredients}
              description={recipe.description}
              time={recipe.time}
              imageUrl={recipe.imageUrl}
              recipeId={recipe._id}
            />
          ))
        )}
            </div>
        </div>
    );
};

export default HomeScreen;
