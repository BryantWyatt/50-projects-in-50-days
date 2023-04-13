import { useEffect, useRef } from "react";
import { IBox } from "../interfaces/IBox";
import Box from "./Box";

interface IBoxesProps {
  boxesData: IBox[];
}

const Boxes = ({ boxesData }: IBoxesProps) => {
  const boxesRef = useRef<HTMLDivElement[]>([]);

  return (
    <div>
      {boxesData.map((box, i) => (
        <Box
          key={`${box.text}-${i}`}
          currentRef={boxesRef.current[i]}
          text={box.text}
        />
      ))}
    </div>
  );
};

export default Boxes;
