import { DrinkList } from "./DrinkList";
import { TextInput } from "./UI/TextInput";
import { availableDrinks } from "../utils/data";
import { useState } from "react";

export const DrinkSearch = clickFn => {
  const [searchField, setSearchField] = useState("test drink");
  return (
    <>
      <label>Search for drinks:</label>
      <TextInput />
      <DrinkList clickFn={clickFn} drinks={availableDrinks} />
    </>
  );
};
