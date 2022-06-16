// Is leuk om een recept van het drankje erbij te doen ipv alleen een deel knop.
// Denk aan hoelang het duurt, hoeveel alcohol zit erin, hoeveel gaat het kosten etc..
// Zou chill zijn om de cocktails ook te kunnen delen op twitter oid

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
        <a
          href={`https://wa.me/?text=${cocktailData.strDrink}, ${cocktailData.strInstructions}`}
          target="_blank"
          className="whats"
        >
          Share with WhatsApp →
        </a>
        <p>{cocktailData.strInstructions}</p>
      </div>
    </div>
  );
};

export default Cocktail;
