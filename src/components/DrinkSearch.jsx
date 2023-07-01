import { TextInput } from "./UI/TextInput";
import { useState } from "react";

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState("komt er nog wat van?");

  return (
    <>
      <TextInput />
      <p>{searchField}</p>
    </>
  );
};
