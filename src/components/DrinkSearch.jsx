import { DrinkList } from "./DrinkList";
import { TextInput } from "./UI/TextInput";
import { availableDrinks } from "../utils/data";
import { useState } from "react";

export const DrinkSearch = clickFn => {
  const [searchField, setSearchField] = useState("");
  const handleChange = event => setSearchField(event.target.value);
  const matchedDrinks = availableDrinks.filter(drink => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <label>Search for drinks:</label>
      <TextInput changeFn={handleChange} />
      <DrinkList clickFn={clickFn} drinks={matchedDrinks} />
    </>
  );
};
