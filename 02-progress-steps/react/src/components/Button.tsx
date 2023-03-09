import "../styles/Buttons.css";

export interface IButtonProps {
  text: string;
  disabled: boolean;
  onClick(): void;
}

const Button = ({ text, disabled, onClick }: IButtonProps) => {
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
