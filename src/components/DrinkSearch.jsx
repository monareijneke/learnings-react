import { DrinkList } from "./DrinkList";
import { TextInput } from "./UI/TextInput";
import { availableDrinks } from "../utils/data";
import { useState } from "react";

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState("test drink");
  return (
    <>
      <TextInput />
      <DrinkList drink={availableDrinks} />
    </>
  );
};
