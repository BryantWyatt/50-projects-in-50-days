import { IProgressProps } from "../interface/IProgressProps";
import "../styles/Progress.css";

const Progress = (props: IProgressProps) => {
  const { circles, progressPercent, prevButton, nextButton } = props;
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
