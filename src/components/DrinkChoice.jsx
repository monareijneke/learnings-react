import PropTypes from "prop-types";
import "./DrinkChoice.css";
import { Button } from "./UI/Button";

export const DrinkChoice = (drink, clickFn) => {
  console.log(drink);
  return (
    <>
      <h2>Your choice = {drink.drink.name}</h2>
      <img src={drink.drink.imgUrl} alt={drink.drink.alt} />
      <p>Your drink will be ready in a few minutes!</p>
      <Button text={"change your choice"} clickFn={() => clickFn()} />
    </>
  );
};

DrinkChoice.propTypes = {
  drink: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
