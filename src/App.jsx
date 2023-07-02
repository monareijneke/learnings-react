import "./App.css";
import { useState } from "react";
import { availableDrinks } from "./utils/data";
import { DrinkSearch } from "./components/DrinkSearch";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkItem } from "./components/DrinkItem";

export const App = () => {
  const greeting = "Welcome!";

  const [userDrink, setUserDrink] = useState();

  return (
    <div className="app">
      <h1>{greeting}</h1>
      {userDrink ? (
        <DrinkChoice drink={userDrink.name} src={userDrink.imgUrl} />
      ) : (
        <>
          <DrinkSearch />
          <DrinkItem drink={availableDrinks} />
        </>
      )}
    </div>
  );
};
