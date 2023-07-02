import { DrinkItem } from "./DrinkItem";

export const DrinkList = drink => {
  console.log(drink);
  return (
    <>
      {drink.drink.map(drink => {
        return <DrinkItem key={drink.id} drink={drink} />;
      })}
    </>
  );
};
