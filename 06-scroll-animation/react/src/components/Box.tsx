import { useEffect } from "react";
import "./Box.css";

interface IBoxProps {
  currentRef?: HTMLDivElement;
  text: string;
}

const Box = ({ currentRef, text }: IBoxProps) => {
  /*
  TODO: Hoist the use effect up to the Scroll Animation level.
  Box should not care about its animation
  */
  useEffect(() => {
    const checkBoxes = () => {
      if (currentRef) {
        const triggerBottom = (window.innerHeight / 5) * 4;

        const boxTop = currentRef.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          currentRef.classList.add("show");
        } else {
          currentRef.classList.remove("show");
        }
      }
    };

    checkBoxes();
  });
  return (
    <div
      ref={(el) => {
        if (el) {
          currentRef = el;
        }
      }}
      className="box"
    >
      <h2>{text}</h2>
    </div>
  );
};

export default Box;
