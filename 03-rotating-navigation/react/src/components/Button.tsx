interface IButtonProps {
  id: string;
  classes: string;
  onClick(): void;
}

const Button = ({ id, classes, onClick }: IButtonProps) => {
  return (
    <button id={id} className={classes} onClick={() => onClick()}></button>
  );
};

export default Button;
