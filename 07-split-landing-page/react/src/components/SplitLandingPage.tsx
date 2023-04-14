import SplitPanel from "./SplitPanel";
import "./SplitLandingPage.css";
import { useState } from "react";

const SplitLandingPage = () => {
  const [leftPanelIsMouseOver, setLeftPanelIsMouseOver] = useState(false);
  const [rightPanelIsMouseOver, setRightPanelIsMouseOver] = useState(false);
  const left = "left";
  const right = "right";

  const handleMouseOver = (side: string) => {
    if (side == left) setLeftPanelIsMouseOver(true);
    if (side == right) setRightPanelIsMouseOver(true);
  };

  const handleMouseLeave = (side: string) => {
    if (side == left) setLeftPanelIsMouseOver(false);
    if (side == right) setRightPanelIsMouseOver(false);
  }

  return (
    <div
      className={`container ${leftPanelIsMouseOver ? `hover-${left}` : ""} ${
        rightPanelIsMouseOver ? `hover-${right}` : ""
      }`}
    >
      <SplitPanel
        title="Playstation 5"
        side={left}
        handleMouseOver={() => handleMouseOver(left)}
        handleMouseLeave={() => handleMouseLeave(left)}
      />
      <SplitPanel
        title="XBox Series X"
        side={right}
        handleMouseOver={() => handleMouseOver(right)}
        handleMouseLeave={() => handleMouseLeave(right)}
      />
    </div>
  );
};


export default SplitLandingPage;
