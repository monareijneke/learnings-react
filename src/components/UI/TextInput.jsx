import "./TextInput.css";

// eslint-disable-next-line react/prop-types
export const TextInput = ({ changeFn }) => {
  return (
    <form>
      <input className="text-input" type="text" onChange={changeFn}></input>
    </form>
  );
};
