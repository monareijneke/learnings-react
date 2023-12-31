import "./App.css";
import { useState } from "react";
import { DrinkSearch } from "./components/DrinkSearch";
import { DrinkChoice } from "./components/DrinkChoice";

export const App = () => {
  const greeting = "Welcome!";

  const [userDrink, setUserDrink] = useState("");

  return (
    <div className="app">
      {userDrink ? (
        <DrinkChoice drink={userDrink} />
      ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
    </div>
  );
};
