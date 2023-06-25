import PropTypes from "prop-types";
import "./DrinkChoice.css";

export const DrinkChoice = ({ drink }) => {
  return (
    <>
      <p>{drink.name}</p>
      <img src={drink.imgUrl} alt={drink.alt} />
      <p>Your drink will be ready in a few minutes!</p>
    </>
  );
};

DrinkChoice.propTypes = {
  drink: PropTypes.string.isRequired,
};
