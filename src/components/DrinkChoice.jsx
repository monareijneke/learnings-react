import PropTypes from "prop-types";
import "./DrinkChoice.css";

export const DrinkChoice = ({ drink, src }) => {
  console.log(drink);
  return (
    <>
      <h2>Your choice = {drink.name}</h2>
      <img src={src} alt={drink} />
      <p>Your drink will be ready in a few minutes!</p>
    </>
  );
};

DrinkChoice.propTypes = {
  drink: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
