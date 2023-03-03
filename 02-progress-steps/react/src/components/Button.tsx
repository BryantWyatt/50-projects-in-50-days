import { IButtonProps } from "../interface/IButtonProps";
import "./Button.css";

const Button = (props: IButtonProps) => {
  const { text, disabled, onClick } = props;
  return (
    <button
      id={text}
      className={`btn ${disabled ? " disabled" : ""}`}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};

export default Button;
