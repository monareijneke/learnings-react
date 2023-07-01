import "./App.css";
import { useState } from "react";
import { DrinkButtons } from "./components/DrinkButtons";
import { tea, coffee } from "./utils/data";
import { DrinkSearch } from "./components/DrinkSearch";
import { DrinkChoice } from "./components/DrinkChoice";

export const App = () => {
  const greeting = "Welcome!";
  const question = "Please select a drink!";
  const [userDrink, setUserDrink] = useState(tea);

  return (
    <div className="app">
      {userDrink ? (
        <DrinkChoice drink={userDrink.name} src={userDrink.imgUrl} />
      ) : (
        <>
          <h2>{greeting}</h2>
          <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
          <h3>{question}</h3>
          <DrinkSearch />
        </>
      )}
    </div>
  );
};
