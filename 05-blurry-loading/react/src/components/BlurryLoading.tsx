import { useEffect, useState } from "react";
import "./BlurryLoading.css";

const BlurryLoading = () => {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (load < 100) setLoad((load) => load + 1);
    }, 30);

    return () => {
      clearInterval(intervalId);
    };
  }, [load]);

  // https://stackoverflow.com/a/23202637
  const scale = (
    num: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number
  ) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  return (
    <div>
      <div
        className="section bg"
        style={{ filter: `blur(${scale(load, 0, 100, 30, 0)}px)` }}
      ></div>
      <div
        className="loading-text"
        style={{ opacity: scale(load, 0, 100, 1, 0) }}
      >
        {load}%
      </div>
    </div>
  );
};

export default BlurryLoading;
