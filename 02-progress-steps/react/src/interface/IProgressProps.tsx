import { ReactElement } from "react";
import { IButtonProps } from "./IButtonProps";
import { ICircle } from "./ICircles";

export interface IProgressProps {
  circles: ReactElement<ICircle[]>;
  progressPercent: number;
  prevButton: ReactElement<IButtonProps>;
  nextButton: ReactElement<IButtonProps>;
}
