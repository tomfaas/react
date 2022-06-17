import { useEffect, useState } from "react";
import "./Cocktail.scss";

const Cocktail = ({ id }) => {
  const [cocktailData, setCocktailData] = useState();

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.drinks.length > 0) {
            setCocktailData(data.drinks[0]);
          }
        });
    };

    fetchData();
  }, []);

  if (!cocktailData) return null;

  return (
    <div className="cocktail">
      <div className="img-container">
        <img src={cocktailData.strDrinkThumb} alt="cocktail image" />
      </div>
      <div className="cocktail-info">
        <h3>{cocktailData.strDrink}</h3>
        <h3>{cocktailData.strCategory}</h3>
        <a
          href={`https://wa.me/?text=${cocktailData.strDrink}, ${cocktailData.strInstructions}`}
          target="_blank"
          className="whats"
        >
          Share with WhatsApp →
        </a>

        <a
          class="twitter"
          href={`https://twitter.com/intent/tweet?text=${cocktailData.strDrink}, ${cocktailData.strInstructions}`}
        >
          Tweet this cocktail →
        </a>
        <p>{cocktailData.strInstructions}</p>
      </div>
    </div>
  );
};

export default Cocktail;
