import { ICircle } from "./ICircles";

export interface ICirclesProps {
  circles: ICircle[];
}

export interface ICircleProps {
  circle: ICircle;
  idx: number;
}
