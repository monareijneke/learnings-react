import "./DrinkItem.css";

export const DrinkItem = (drink, clickFn) => {
  return (
    <button className="img-box" onClick={() => clickFn(drink)}>
      <img
        src={drink.drink.imgUrl}
        alt={drink.drink.alt}
        key={drink.drink.id}
      />
      <p>{drink.drink.name}</p>
    </button>
  );
};
