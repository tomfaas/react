// Ipv een enorme lap aan ingredienten kan je dit ook opdelen in categorieën of iets van "waar heb je zin in"
// met daarbij opties voor "fris" "winters"
// Zo krijg je wat meer overzicht

import { useState, useEffect } from "react";
import "./App.scss";

import Filters from "./components/Filters/Filters";
import Cocktail from "./components/Cocktail/Cocktail";

const App = () => {
  const [selectedFilters, setSelectedFilters] = useState("7-Up");
  const [cocktailIds, setCocktailIds] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selectedFilters}`
      )
        .then((response) => response.json())
        .then((data) => {
          setCocktailIds(data.drinks);
        });
    };

    fetchData();
  }, [selectedFilters]);

  return (
    <div className="App">
      <div className="left-sidebar">
        <h1>Which ingredient do you like?</h1>
        <Filters
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
      <div className="right-sidebar">
        <div className="cocktails-container">
          {cocktailIds.map((cocktail) => (
            <Cocktail key={cocktail.idDrink} id={cocktail.idDrink} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
