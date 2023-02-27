import IPanelProps from "../interfaces/IPanelProps";
import "./Panel.css";

const Panel = (props: IPanelProps) => {
  const {
    panel: { panelText, imageURL, active },
    idx,
    onClick,
  } = props;
  return (
    <div
      style={{ backgroundImage: `url(${imageURL}` }}
      className={`panel${active ? " active" : ""}`}
      onClick={() => onClick(idx)}
    >
      <h3>{panelText}</h3>
    </div>
  );
};

export default Panel;
