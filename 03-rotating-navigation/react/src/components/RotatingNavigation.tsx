import { useState } from "react";
import * as data from "../formData/rotating-navigation.json";
import "../styles/RotatingNavigation.css";
import Article from "./Article";
import Button from "./Button";
import Navigation from "./Navigation";

const RotatingNavigation = () => {
  const { menuItems, title, author, sections } = data;

  const [showNav, setShowNav] = useState(false);

  const handleOnClick = () => {
    showNav ? setShowNav(false) : setShowNav(true);
  };

  return (
    <div>
      <div className={`container ${showNav ? "show-nav" : ""}`}>
        <div className="circle-container">
          <div className="circle">
            <Button
              id={"close"}
              classes={"fas fa-times"}
              onClick={() => handleOnClick()}
            />
            <Button
              id={"open"}
              classes={"fas fa-bars"}
              onClick={() => handleOnClick()}
            />
          </div>
        </div>
        <Article title={title} author={author} sections={sections} />
      </div>
      <Navigation menuItems={menuItems} />
    </div>
  );
};

export default RotatingNavigation;
