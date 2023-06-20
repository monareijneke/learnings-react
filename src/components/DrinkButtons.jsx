import "./DrinkButtons.css";

export const DrinkButtons = () => {
  return (
    <>
      <header>Would you like tea or coffee?</header>
      <container className="button-group">
        <button className="button">Tea</button>
        <button className="button">Coffee</button>
      </container>
    </>
  );
};
