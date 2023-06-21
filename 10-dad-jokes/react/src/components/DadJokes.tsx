import { useEffect, useState } from "react";
import DadJokesService from "../api/DadJokesService";
import "./DadJokes.css";

const Lesson = () => {
  const [joke, setJoke] = useState<string>("");

  const getDadJoke = async () => {
    const result = await DadJokesService.getMessage();
    setJoke(result.data.joke);
  }

  useEffect(() => {
    getDadJoke();
  }, []);

  return (
    <div className="container">
      <h3>Don't Laugh Challenge</h3>
      <div id="joke" className="joke">
        {joke}
      </div>
      <button
        id="jokeBtn"
        className="btn"
        onClick={() => {
          getDadJoke();
        }}>
          Get Another Joke
      </button>
    </div>
  );
};

export default Lesson;
