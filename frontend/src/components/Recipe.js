import "./Recipe.css";
import { Link } from "react-router-dom";
 
const Recipe = ({imageUrl, name, ingredients, description, time, recipeId}) => {
  return (
    <div className="recipe">
      <img 
      src={imageUrl}
       alt={name} />

      <div className="recipe__info">
        <p className="info__name">{name}</p>
        <p className="info__ingredients">{ingredients}</p>

        <p className="info__description">{description}</p>

        <p className="info__time">{time}</p>

        <Link to={`/recipe/${recipeId}`} className="info__button">
          Показать
        </Link>
      </div>
    </div>
  );
};

export default Recipe;