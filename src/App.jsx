import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { DrinkChoice } from "./components/DrinkChoice";
import { tea, coffee } from "./utils/data";

export const App = () => {
  const greeting = "Welcome to our cafe!";
  const userDrink = "tea";

  return (
    <div className="app">
      <h2>{greeting}</h2>
      <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
      <DrinkChoice drink={userDrink} src={tea.imgUrl} />
    </div>
  );
};
