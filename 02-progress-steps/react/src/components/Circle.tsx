import { ICircleProps } from "../interface/ICirclesProps";

const Circle = (props: ICircleProps) => {
  const {
    circle: { text, active },
    idx,
  } = props;
  return (
    <div id={`${text}-${idx}`} className={`circle ${active ? " active" : ""}`}>
      {text}
    </div>
  );
};

export default Circle;
