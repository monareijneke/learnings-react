import "./Button.css";

// eslint-disable-next-line react/prop-types
export const Button = (text, clickFn) => (
  <button className="button" clickFn={clickFn}>
    {text}
  </button>
);
