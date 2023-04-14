import "./SplitPanel.css";

export interface ISplitPaneProp {
  title: string;
  side: string;
  handleMouseOver(side: string): void;
  handleMouseLeave(side: string): void;
}

const SplitPanel = ({
  title,
  side,
  handleMouseOver,
  handleMouseLeave,
}: ISplitPaneProp) => {
  const isValidPanelSide = (side: string) => side == "left" || side == "right";

  if (isValidPanelSide(side)) {
    return (
      <div
        className={`split ${side}`}
        onMouseEnter={() =>  handleMouseOver(side)}
        onMouseLeave={() => handleMouseLeave(side)}
      >
        <h1>{title}</h1>
        <a href="#" className="btn">
          Buy Now
        </a>
      </div>
    );
  } else {
    return null;
  }
};

export default SplitPanel;