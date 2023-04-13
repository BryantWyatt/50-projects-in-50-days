import { useEffect, useState } from "react";
import BoxesService from "../api/BoxesService";
import { IBox } from "../interfaces/IBox";
import "./ScrollAnimation.css";
import Boxes from "./Boxes";

const BoxesContainer = () => {
  const [boxesData, setBoxesData] = useState<IBox[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await BoxesService.getData();
      setBoxesData(result.data);
    };

    fetchData();
  });

  return (
    <div>
      <Boxes boxesData={boxesData} />
    </div>
  );
};

export default BoxesContainer;
