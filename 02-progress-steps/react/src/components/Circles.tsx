import { ICircle } from "../interface/ICircles";
import { ICirclesProps } from "../interface/ICirclesProps";
import Circle from "./Circle";
import "../styles/Circles.css";

const Circles = (props: ICirclesProps) => {
  const { circles } = props;
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
