import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";

export const App = () => {
  const greeting = "Welcome to our cafe!";

  return (
    <div className="App">
      <h2>{greeting}</h2>
      <DrinkButtons />
    </div>
  );
};
