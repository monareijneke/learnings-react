import { TextInput } from "./UI/TextInput";
import { useState } from "react";

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState("test drink");

  return (
    <>
      <label>Search for your drink:</label>
      <TextInput />
      <p>{searchField}</p>
    </>
  );
};
