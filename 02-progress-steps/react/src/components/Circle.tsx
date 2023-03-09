import { ICircle } from "../types/ICircles";

export interface ICircleProps {
  circle: ICircle;
  idx: number;
}

const Circle = ({ circle: { text, active }, idx }: ICircleProps) => {
  return (
    <div id={`${text}-${idx}`} className={`circle ${active ? " active" : ""}`}>
      {text}
    </div>
  );
};

export default Circle;
