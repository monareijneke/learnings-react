import "./DrinkChoice.css";

export const DrinkChoice = ({ drink }) => {
  return (
    <>
      <p>{drink.name}</p>
      <img src={drink.imgUrl} alt={drink.name} />
      <p>Your drink will be ready in a few minutes!</p>
    </>
  );
};
