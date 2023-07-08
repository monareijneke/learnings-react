import { DrinkItem } from "./DrinkItem";

export const DrinkList = (drinks, clickFn) => {
  console.log(drinks);
  return (
    <>
      {drinks.drinks.map(drink => (
        <DrinkItem drink={drink} clickFn={clickFn} key={drink.id} />
      ))}
    </>
  );
};
