import { ReactElement } from "react";
import { ICircle } from "../types/ICircles";
import { IButtonProps } from "../components/Button";
import "../styles/Progress.css";

export interface IProgressProps {
  circles: ReactElement<ICircle[]>;
  progressPercent: number;
  prevButton: ReactElement<IButtonProps>;
  nextButton: ReactElement<IButtonProps>;
}

const Progress = ({
  circles,
  progressPercent,
  prevButton,
  nextButton,
}: IProgressProps) => {
  return (
    <div className="container">
      <div className="progress-container">
        <div
          id="progress"
          style={{ width: `${progressPercent}%` }}
          className="progress"
        ></div>
        {circles}
      </div>
      {prevButton}
      {nextButton}
    </div>
  );
};

export default Progress;
