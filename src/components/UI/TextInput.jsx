import "./TextInput.css";

export const TextInput = () => {
  <form>
    <label htmlFor="drinksearch">Pick your drink:</label>
    <input className="text-input" id="drinksearch" type="text"></input>;
  </form>;

  return (
    <p>
      {" "}
      Dit is input van TextInput. Via DrinkSearch naar App, wanneer er geen
      keuze is gemaakt
    </p>
  );
};
