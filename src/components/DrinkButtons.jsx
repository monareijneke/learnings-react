import "./DrinkButtons.css";
import PropTypes from "prop-types";
import { Button } from "./UI/Button";

DrinkButtons.propTypes = {
  drinkOne: PropTypes.string.isRequired,
  drinkTwo: PropTypes.string.isRequired,
};

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
  return (
    <div>
      <h2>
        Would you like {drinkOne} or {drinkTwo}?
      </h2>
      <div className="button-group">
        <Button text={drinkOne} />
        <Button text={drinkTwo} />
      </div>
    </div>
  );
};
