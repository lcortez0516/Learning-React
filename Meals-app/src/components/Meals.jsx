import React from "react";
import axios from "axios";
import "../style.css";
import { useState, useEffect } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setMeals(res.data.meals))
      .catch((err) => console.log(err));
  }, []);

  const mealsList = meals.map(({ idMeal, strMeal, strMealThumb }) => {
    return (
      <div className="meal-container" key={idMeal}>
        <img className="thumbnail" src={strMealThumb} alt="thumbnail" />
        <div>
          <h3>{strMeal}</h3>
        </div>
      </div>
    );
  });

  return <div className="container">{mealsList}</div>;
};

export default Meals;
