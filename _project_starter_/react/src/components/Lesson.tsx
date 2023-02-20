import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import HelloWorldService from "../api/HelloWorldService";

const Lesson = () => {
  const [testData, setTestData] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await HelloWorldService.getMessage();
      setTestData(result.data.message);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>From Lesson component</h1>
      <h2>Lesson content goes here</h2>
      <h1>Response from Express backend</h1>
      <h2>{testData}</h2>
    </div>
  );
};

export default Lesson;
