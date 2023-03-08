import { useEffect, useState } from "react";
import * as data from "../formData/progress.json";
import Button from "./Button";
import Circles from "./Circles";
import Progress from "./Progress";

const ProgressContainer = () => {
  const formData = data;

  const [circles, setCircles] = useState(formData.fields.circles);
  const [prevButton, setPrevButton] = useState(formData.fields.buttons.prev);
  const [nextButton, setNextButton] = useState(formData.fields.buttons.next);
  const [step, setStep] = useState(1);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    updateButtonTags();
    updateCircleTags();
    updateProgressBar();
  }, [step]);

  const handleOnNextButtonClick = () => {
    setStep(step + 1);
    if (step > circles.length) {
      setStep(circles.length);
    }
  };

  const handleOnPrevButtonClick = () => {
    setStep(step - 1);
    if (step < 1) {
      setStep(1);
    }
  };

  const updateButtonTags = () => {
    if (step == 1) {
      setPrevButton({
        ...prevButton,
        disabled: true,
      });
    } else if (step == circles.length) {
      setNextButton({
        ...nextButton,
        disabled: true,
      });
    } else {
      setPrevButton({
        ...prevButton,
        disabled: false,
      });
      setNextButton({
        ...nextButton,
        disabled: false,
      });
    }
  };

  const updateCircleTags = () => {
    setCircles((prevState) => {
      return prevState.map((circle, idx) => {
        idx < step ? (circle.active = true) : (circle.active = false);
        return circle;
      });
    });
  };

  const updateProgressBar = () => {
    setProgressPercent((prevState) => {
      const activeTagCount = circles.filter(
        (circle) => circle.active == true
      ).length;
      const width = ((activeTagCount - 1) / (circles.length - 1)) * 100;
      prevState = width;
      return prevState;
    });
  };

  return (
    <div>
      <Progress
        circles={<Circles circles={circles} />}
        progressPercent={progressPercent}
        prevButton={
          <Button
            text={prevButton.text}
            disabled={prevButton.disabled}
            onClick={() => handleOnPrevButtonClick()}
          />
        }
        nextButton={
          <Button
            text={nextButton.text}
            disabled={nextButton.disabled}
            onClick={() => handleOnNextButtonClick()}
          />
        }
      />
    </div>
  );
};

export default ProgressContainer;
