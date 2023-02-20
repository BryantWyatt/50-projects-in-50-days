import IPanel from "./IPanel";

interface IPanelProps {
  panel: IPanel;
  idx: number;
  onClick(idx: number): void;
}

export default IPanelProps;
