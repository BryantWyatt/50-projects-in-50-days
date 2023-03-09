import { ICircle } from "../types/ICircles";
import Circle from "./Circle";
import "../styles/Circles.css";

export interface ICirclesProps {
  circles: ICircle[];
}

const Circles = ({ circles }: ICirclesProps) => {
  return (
    <>
      {circles.map((circle: ICircle, idx: number) => {
        return (
          <Circle key={`${circle.text}-${idx}`} circle={circle} idx={idx} />
        );
      })}
    </>
  );
};

export default Circles;
