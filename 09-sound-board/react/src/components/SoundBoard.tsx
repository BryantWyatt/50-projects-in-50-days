import React, { useEffect, useState } from "react";
import SoundsService from "../api/SoundsService";
import AudioButton from "./AudioButton";
import "./SoundBoard.css";


const SoundBoard = () => {
  const [soundNames, setSoundNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await SoundsService.getSoundNames();

      // Remove .mp3 from the name so it does not display on the button
      const names = result.data.map(name => name.replace(".mp3", ""));
      setSoundNames(names);
    };

    fetchData();
  }, []);

  const handleOnClick = (soundName: string) => {
    const playSound = () => {
      const song = document.getElementById(soundName) as HTMLVideoElement;
      song.play();
    }
    const stopSound = () => {
      soundNames.forEach((soundName) => {
        const song = document.getElementById(soundName) as HTMLVideoElement;
        song.pause();
        song.currentTime = 0;
      })
    }
    stopSound();
    playSound();
  }

  return (
    <div id="buttons">
      {soundNames.map((fileName) => {
        const name = fileName.replace(".mp3", "")
        return (
          <React.Fragment key={name}>
            <AudioButton name={name} source={`http://localhost:3000/sounds/${fileName}.mp3`} onClick={() => handleOnClick(name)} />
          </React.Fragment>
        )
      })}
    </div>
  );
};

export default SoundBoard;
