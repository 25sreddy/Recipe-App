import "./App.css";
import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [query]);
  async function getRecipes() {
    const result = await fetch(apiCall);
    const data = await result.json();
    setRecipes(data.hits);
  }
  const apiURL = "https://api.edamam.com/search?q=";
  const apiKey = "&app_key=e23acfb306e63c881e02c135db491b2a";
  const apiId = "&app_id=065631b8";
  const apiCall = `${apiURL}${search}${apiId}${apiKey}`;

  function changeHandler(e) {
    setSearch(e.target.value);
  }
  async function submitHandler(e) {
    e.preventDefault();
    await setQuery(search);
    setSearch("");
    window.scrollTo(0, 0);
  }

  return (
    <div className="App" id="top">
      <form action="#top" onSubmit={submitHandler}>
        <div className="search">
          <input
            type="text"
            placeholder="Search A Food!"
            value={search}
            onChange={changeHandler}
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
      <div className="recipe">
        {recipes.map((recipe) => (
          <Recipe
            key={Math.random()}
            title={recipe.recipe.label}
            calories={Math.round(recipe.recipe.calories / 100) * 100}
            meal={recipe.recipe.mealType[0]}
            ingrid={recipe.recipe.ingredients}
            image={recipe.recipe.image}
          ></Recipe>
        ))}
      </div>
    </div>
  );
}

export default App;
