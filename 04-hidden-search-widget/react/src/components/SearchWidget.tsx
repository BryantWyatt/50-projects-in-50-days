import { useState } from "react";
import "../styles/SearchWidget.css";

const SearchWidget = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    console.log("hit");
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <div className={`search${isActive ? " active" : ""}`}>
      <input type="text" className="input" placeholder="Search..." autoFocus />
      <button className="btn" onClick={() => handleClick()}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchWidget;
