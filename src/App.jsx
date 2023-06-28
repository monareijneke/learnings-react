import { useState } from "react";
import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { DrinkChoice } from "./components/DrinkChoice";
import { tea, coffee } from "./utils/data";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
  const greeting = "Welcome!";
  const question = "Please select a drink!";
  const [userDrink, setUserDrink] = useState("");

  return (
    <div className="app">
      {userDrink ? (
        <>
          <DrinkChoice drink={userDrink} src={coffee.imgUrl} />
        </>
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
