import "./SplitLandingPage.css";
import { useState } from "react";

interface IPanel {
  name: string;
  mouseOver: boolean;
}

interface IPanelContent {
  title: string;
}

const SplitLandingPage = () => {
  const [leftPanel, setLeftPanel] = useState<IPanel>({
    name: "left",
    mouseOver: false,
  });

  const [rightPanel, setRightPanel] = useState<IPanel>({
    name: "right",
    mouseOver: false,
  });

  return (
    <div
      className={`container ${
        leftPanel.mouseOver ? `hover-${leftPanel.name}` : ""
      } ${rightPanel.mouseOver ? `hover-${rightPanel.name}` : ""}`}
    >
      <div
        className={`split ${leftPanel.name}`}
        onMouseEnter={() => setLeftPanel({ ...leftPanel, mouseOver: true })}
        onMouseLeave={() => setLeftPanel({ ...leftPanel, mouseOver: false })}
      >
        <PanelContent title={"Playstation 5"} />
      </div>
      <div
        className={`split ${rightPanel.name}`}
        onMouseEnter={() => setRightPanel({ ...rightPanel, mouseOver: true })}
        onMouseLeave={() => setRightPanel({ ...rightPanel, mouseOver: false })}
      >
        <PanelContent title={"Xbox Series X"} />
      </div>
    </div>
  );
};

const PanelContent = ({ title }: IPanelContent) => {
  return (
    <>
      <h1>{title}</h1>
      <a href="#" className="btn">
        Buy Now
      </a>
    </>
  );
};

export default SplitLandingPage;
