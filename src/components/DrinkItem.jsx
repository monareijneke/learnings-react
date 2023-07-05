import "./DrinkItem.css";

export const DrinkItem = (drinks, clickFn) => {
  return (
    <button className="img-box" onClick={() => clickFn()}>
      <img src={drinks.drink.imgUrl} alt={drinks.drink.alt} />
      <p>{drinks.drink.name}</p>
    </button>
  );
};
