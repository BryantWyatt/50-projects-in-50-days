import { useEffect, useState } from "react";
import Panel from "./Panel";
import IPanel from "../interfaces/IPanel";
import "./Lesson.css";
import PanelsService from "../api/PanelsService";

const Lesson = () => {
  const [panels, setPanels] = useState<IPanel[] | void>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await PanelsService.getPanels();
      setPanels(result.data);
    };

    fetchData();
  }, []);

  const updateActiveTags = (idx: number) => {
    if (panels) {
      setPanels(
        panels.map((panel, j) =>
          j !== idx ? { ...panel, active: false } : { ...panel, active: true }
        )
      );
    }
  };

  return (
    <div>
      <div className={"container"}>
        {panels?.map((panel: IPanel, idx: number) => {
          return (
            <Panel
              key={`${panel.panelText}-${idx}`}
              panel={panel}
              idx={idx}
              onClick={() => updateActiveTags(idx)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Lesson;
