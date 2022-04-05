import { useEffect, useState } from "react";

import "./Filters.scss";

import Filter from "../Filter/Filter";

const Filters = ({ selectedFilters, setSelectedFilters }) => {
  // Geef een lege array zodat hij op het begin alsnog kan loopen
  const [filtersData, setFiltersData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
        .then((response) => response.json())
        .then((data) => {
          setFiltersData(
            data.drinks.sort(function (a, b) {
              if (a.strIngredient1 < b.strIngredient1) {
                return -1;
              }
              if (a.strIngredient1 > b.strIngredient1) {
                return 1;
              }
              return 0;
            })
          );
        });
    };

    fetchData();
  }, []);

  if (filtersData.length === 0) {
    return (
      <div className="filters">
        <p>Loading filters....</p>
      </div>
    );
  }

  return (
    <div className="filters">
      {filtersData.map((filter) => {
        return (
          <Filter
            key={filter.strIngredient1}
            filterName={filter.strIngredient1}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        );
      })}
    </div>
  );
};

export default Filters;
