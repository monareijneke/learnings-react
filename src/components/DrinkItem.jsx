import "./DrinkItem.css";

export const DrinkItem = drink => {
  console.log(drink);
  return (
    <div className="drink-item">
      <div className="img-box">
        <img src={drink.drink.imgUrl} alt={drink.drink.alt} />
        <p>{drink.drink.name}</p>
      </div>
    </div>
  );
};
