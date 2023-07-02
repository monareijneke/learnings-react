import "./TextInput.css";

export const TextInput = () => {
  return (
    <form>
      <label htmlFor="drinksearch">Search for drink:</label>
      <br />
      <input className="text-input" id="drinksearch" type="text"></input>
    </form>
  );
};
