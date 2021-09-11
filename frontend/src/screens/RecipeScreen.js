import './RecipeScreen.css'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { getRecipeDetails } from '../redux/actions/recipeActions';

const RecipeScreen = ({match}) => {

  const dispatch = useDispatch();

  const recipeDetails = useSelector((state) => state.getRecipeDetails);
  const { loading, error, recipe } = recipeDetails;

  useEffect(() => {
    if (recipe && match.params.id !== recipe._id) {
      dispatch(getRecipeDetails(match.params.id));
    }
  }, [dispatch, match, recipe]);


    return (
        <div className="recipescreen">
            {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
            <div className="recipescreen__left">
                <div className="left__image">
                    <img src={recipe.imageUrl} alt={recipe.name}/>
                </div>
                <div className="left__info">
                    <p className="left__name">{recipe.name}</p>
                    <p>{recipe.ingredients}</p>
                    <p>{recipe.description}</p>
                </div>
            </div>
            <div className="recipescreen__right">
                <div className="right__info">
                    <p>
                        Время приготовления: <span>{recipe.time} минут</span>
                    </p>
                </div>
            </div>
            </>
      )}
    </div>
    )
}

export default RecipeScreen
