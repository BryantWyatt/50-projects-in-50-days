import { useEffect, useState } from "react";
import "./EventKeycodes.css";

const Lesson = () => {
  const [keyPressCount, setKeyPressCount] = useState<number>(0);
  const [key, setKey] = useState<string>("");
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleKeyPress = (event: any) => {
    setKeyPressCount(keyPressCount + 1);
    setKey(event.key);
    setCode(event.code);
  }

  return (
    <div>
      {
        keyPressCount > 0 ?
          <div>
            <div className="key">
              {key === '' ? 'Space' : key}
              <small>
                event.key
              </small>
            </div>
            <div className="key">
              {code}
              <small>
                event.code
              </small>
            </div>
          </div>
          :
          <div className="key">
            Press any key to get keyCode
          </div>
      }
    </div>
  );
};

export default Lesson;
